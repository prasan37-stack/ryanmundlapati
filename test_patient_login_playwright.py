import os
import unittest

from playwright.sync_api import Page, sync_playwright


BASE_URL = os.environ.get("NEXUSPULSE_BASE_URL", "http://127.0.0.1:8000")


class PatientLoginTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.playwright = sync_playwright().start()
        cls.browser = cls.playwright.chromium.launch(headless=True)

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.playwright.stop()

    def setUp(self):
        self.context = self.browser.new_context()
        self.page = self.context.new_page()
        self.page.goto(BASE_URL)

    def tearDown(self):
        self.context.close()

    def login(self, email, password):
        self.page.locator('input[name="email"]').fill(email)
        self.page.locator('input[name="password"]').fill(password)
        self.page.get_by_role("button", name="Continue").click()

    def assert_login_error(self, message):
        self.page.locator(".flash.error").wait_for()
        self.assertIn(message, self.page.locator(".flash.error").inner_text())
        self.assertTrue(self.page.locator("#authForm").is_visible())

    def test_pat_login_01_valid_credentials(self):
        self.login("aisha@nexuspulse.com", "patient123")
        self.assertTrue(self.page.get_by_role("heading", name="Welcome, Aisha.").is_visible())

    def test_pat_login_02_invalid_password(self):
        self.login("aisha@nexuspulse.com", "wrongpassword")
        self.assert_login_error("Invalid email or password.")

    def test_pat_login_03_unregistered_email(self):
        self.login("unknownpatient@test.com", "any value")
        self.assert_login_error("Invalid email or password.")

    def test_pat_login_04_empty_email(self):
        self.page.locator('input[name="password"]').fill("patient123")
        self.page.get_by_role("button", name="Continue").click()
        self.assertTrue(self.page.locator('input[name="email"]').evaluate("element => !element.checkValidity()"))
        self.assertTrue(self.page.locator("#authForm").is_visible())

    def test_pat_login_05_empty_password(self):
        self.page.locator('input[name="email"]').fill("aisha@nexuspulse.com")
        self.page.get_by_role("button", name="Continue").click()
        self.assertTrue(self.page.locator('input[name="password"]').evaluate("element => !element.checkValidity()"))
        self.assertTrue(self.page.locator("#authForm").is_visible())

    def test_pat_login_06_pending_patient(self):
        self.login("daniel@nexuspulse.com", "patient123")
        self.assert_login_error("pending approval")

    def test_pat_login_07_rejected_patient(self):
        self.login("rejectedpatient@test.com", "correctpassword")
        self.assert_login_error("Invalid email or password.")

    def test_pat_login_08_case_insensitive_email(self):
        self.login("AISHA@NEXUSPULSE.COM", "patient123")
        self.assertTrue(self.page.get_by_role("heading", name="Welcome, Aisha.").is_visible())

    def test_pat_login_09_password_masking(self):
        password = self.page.locator('input[name="password"]')
        self.assertEqual(password.get_attribute("type"), "password")
        password.fill("patient123")
        self.assertEqual(password.input_value(), "patient123")

    def test_pat_login_10_login_page_ui(self):
        self.assertTrue(self.page.get_by_role("heading", name="NexusPulse").is_visible())
        self.assertTrue(self.page.locator('input[name="email"]').is_visible())
        self.assertTrue(self.page.locator('input[name="password"]').is_visible())
        self.assertTrue(self.page.get_by_role("button", name="Continue").is_visible())

    def test_pat_login_11_logout(self):
        self.login("aisha@nexuspulse.com", "patient123")
        self.page.locator("#logoutBtn").click()
        self.assertTrue(self.page.locator("#authForm").is_visible())

    def test_pat_login_12_session_persistence_after_refresh(self):
        self.login("aisha@nexuspulse.com", "patient123")
        self.page.reload()
        self.assertTrue(self.page.get_by_role("heading", name="Welcome, Aisha.").is_visible())

    def test_pat_login_13_malicious_input(self):
        self.login("OR '1'='1", "any input")
        self.assertTrue(self.page.locator('input[name="email"]').evaluate("element => !element.checkValidity()"))
        self.assertTrue(self.page.locator("#authForm").is_visible())

    def test_pat_login_14_max_length_input(self):
        self.login("a" * 10000 + "@test.com", "p" * 10000)
        self.assert_login_error("Invalid email or password.")


if __name__ == "__main__":
    unittest.main(verbosity=2)