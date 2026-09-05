import os
import unittest

from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("NEXUSPULSE_PATIENT_URL", "http://82.197.92.72:8080/patient/login")
USERNAME = os.environ["NEXUSPULSE_PATIENT_USERNAME"]
PASSWORD = os.environ["NEXUSPULSE_PATIENT_PASSWORD"]


class PatientHomepageTests(unittest.TestCase):
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
        self.console_errors = []
        self.page.on("console", lambda msg: self.console_errors.append(msg.text) if msg.type == "error" else None)
        self.login()

    def tearDown(self):
        self.context.close()

    def login(self):
        self.page.goto(BASE_URL, wait_until="domcontentloaded")
        self.page.locator('input[name="username"]').fill(USERNAME)
        self.page.locator('input[name="password"]').fill(PASSWORD)
        self.page.locator('button[type="submit"]').click()
        self.page.wait_for_url("**/patient/home**", timeout=15000)

    def test_ts_pat_083_login_loads_homepage(self):
        self.assertIn("/patient/home", self.page.url)
        self.assertTrue(self.page.get_by_text("Welcome Username: patient1", exact=True).is_visible())

    def test_ts_pat_084_dashboard_layout(self):
        self.assertTrue(self.page.get_by_text("Appointments", exact=True).is_visible())
        self.assertTrue(self.page.get_by_role("table").is_visible())

    def test_ts_pat_085_navigation_menu(self):
        for item in ("Home", "Profile", "Schedule Appointment", "Fees", "Reports", "Messages", "Logout"):
            self.assertTrue(self.page.get_by_role("link", name=item, exact=True).is_visible(), item)

    def test_ts_pat_086_welcome_section(self):
        self.assertTrue(self.page.get_by_text("Welcome Username: patient1", exact=True).is_visible())

    def test_ts_pat_087_module_shortcuts(self):
        expected_paths = {
            "Profile": "/patient/profile",
            "Schedule Appointment": "/patient/appointments",
            "Fees": "/patient/fees",
            "Reports": "/patient/reports",
            "Messages": "/patient/messages",
        }
        for name, path in expected_paths.items():
            href = self.page.get_by_role("link", name=name, exact=True).get_attribute("href")
            self.assertIn(path, href, name)

    def test_ts_pat_088_responsive_layout(self):
        self.page.set_viewport_size({"width": 768, "height": 900})
        self.assertTrue(self.page.get_by_role("link", name="Schedule Appointment", exact=True).is_visible())
        tablet_width = self.page.evaluate("document.documentElement.scrollWidth")
        self.page.set_viewport_size({"width": 375, "height": 812})
        self.assertTrue(self.page.get_by_role("link", name="Logout", exact=True).is_visible())
        mobile_width = self.page.evaluate("document.documentElement.scrollWidth")
        overflow = []
        if tablet_width > 768:
            overflow.append(f"tablet scroll width {tablet_width}px exceeds 768px")
        if mobile_width > 375:
            overflow.append(f"mobile scroll width {mobile_width}px exceeds 375px")
        self.assertEqual([], overflow)

    def test_ts_pat_089_load_and_refresh_stability(self):
        self.page.reload(wait_until="domcontentloaded")
        self.assertTrue(self.page.get_by_text("Appointments", exact=True).is_visible())
        self.assertEqual(self.console_errors, [])

    def test_ts_pat_090_expired_session_protects_homepage(self):
        self.context.clear_cookies()
        self.page.goto(BASE_URL.rsplit("/login", 1)[0] + "/home", wait_until="domcontentloaded")
        self.assertIn("/patient/login", self.page.url)

    def test_ts_pat_091_logout_protects_homepage(self):
        self.page.get_by_role("link", name="Logout", exact=True).click()
        self.page.wait_for_url("**/patient/login**", timeout=15000)
        self.page.goto(BASE_URL.rsplit("/login", 1)[0] + "/home", wait_until="domcontentloaded")
        self.assertIn("/patient/login", self.page.url)

    def test_ts_pat_092_patient_specific_content(self):
        content = self.page.locator("body").inner_text()
        self.assertIn("Welcome Username: patient1", content)
        self.assertNotIn("Welcome Username: patient2", content)


if __name__ == "__main__":
    unittest.main(verbosity=2)
