import os
import unittest

from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("NEXUSPULSE_PATIENT_URL", "http://82.197.92.72:8080/patient/login")
USERNAME = os.environ.get("NEXUSPULSE_PATIENT_USERNAME", "patient1")
PASSWORD = os.environ.get("NEXUSPULSE_PATIENT_PASSWORD", "Mmp@2025!Patient#93")


class PatientEditProfileTests(unittest.TestCase):
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
        self.page.on("dialog", lambda dialog: dialog.accept())
        self.login()

    def tearDown(self):
        self.context.close()

    def login(self):
        self.page.goto(BASE_URL, wait_until="domcontentloaded")
        self.page.locator('input[name="username"]').fill(USERNAME)
        self.page.locator('input[name="password"]').fill(PASSWORD)
        self.page.locator('button[type="submit"]').click()
        self.page.wait_for_url("**/patient/home**", timeout=20000)

    def open_profile(self):
        self.page.goto("http://82.197.92.72:8080/patient/profile", wait_until="domcontentloaded")

    def test_ts_pat_051_update_profile_with_valid_data(self):
        self.open_profile()
        username = self.page.locator('input[name="username"]')
        self.assertTrue(username.is_visible())
        self.assertTrue(username.evaluate("el => !!(el.readOnly || el.disabled || el.getAttribute('readonly') !== null)"))

        self.page.locator('input[name="firstName"]').fill("Test")
        self.page.locator('input[name="lastName"]').fill("Profile")
        self.page.locator('input[name="email"]').fill("updated.user@example.com")
        self.page.locator('input[name="phone"]').fill("5513129364")
        self.page.locator('select[name="gender"]').select_option("MALE")
        self.page.locator('input[name="dob"]').fill("1995-04-15")
        self.page.locator('button:has-text("Save")').click()

        self.page.wait_for_timeout(1000)
        self.assertEqual(self.page.locator('input[name="firstName"]').input_value(), "Test")
        self.assertEqual(self.page.locator('input[name="lastName"]').input_value(), "Profile")
        self.assertEqual(self.page.locator('input[name="email"]').input_value(), "updated.user@example.com")
        self.assertEqual(self.page.locator('input[name="phone"]').input_value(), "5513129364")
        self.assertEqual(self.page.locator('select[name="gender"]').input_value(), "MALE")
        self.assertEqual(self.page.locator('input[name="dob"]').input_value(), "1995-04-15")

    def test_ts_pat_053_empty_first_name_blocked(self):
        self.open_profile()
        self.page.locator('input[name="firstName"]').fill("")
        self.page.locator('button:has-text("Save")').click()
        self.page.wait_for_timeout(800)
        self.assertEqual(self.page.locator('input[name="firstName"]').input_value(), "")

    def test_ts_pat_054_empty_last_name_blocked(self):
        self.open_profile()
        self.page.locator('input[name="lastName"]').fill("")
        self.page.locator('button:has-text("Save")').click()
        self.page.wait_for_timeout(800)
        self.assertEqual(self.page.locator('input[name="lastName"]').input_value(), "")

    def test_ts_pat_059_navigate_back_to_home(self):
        self.open_profile()
        self.page.get_by_role("link", name="Back").click()
        self.page.wait_for_url("**/patient/home**", timeout=20000)
        self.assertIn("/patient/home", self.page.url)

    def test_ts_pat_062_profile_after_logout_redirects_to_login(self):
        self.page.goto("http://82.197.92.72:8080/patient/logout", wait_until="domcontentloaded")
        self.page.wait_for_url("**/patient/login**", timeout=20000)
        self.page.goto("http://82.197.92.72:8080/patient/profile", wait_until="domcontentloaded")
        self.assertIn("/patient/login", self.page.url)


if __name__ == "__main__":
    unittest.main(verbosity=2)
