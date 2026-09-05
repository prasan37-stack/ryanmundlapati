# NexusPulse Patient Reports Test Cases

## 1. Overview
This document contains the Reports test cases for the patient module based on the live UI captured in the provided screenshots. It continues the numbering sequence from the Edit Profile flow.

## 2. Test Case Structure
- Test Case ID
- Title
- Objective
- Preconditions
- Test Data
- Steps
- Expected Result
- Actual Result
- Status
- Remarks

---

## 3. Reports Test Cases

### TS_Pat_063
- Test Case ID: TS_Pat_063
- Title: Open Reports tab from patient sidebar
- Objective: Verify the patient can navigate to the Reports section from the left navigation
- Preconditions:
  - Patient is logged in successfully
  - Sidebar navigation is visible
- Test Data:
  - Menu item: Reports
  - Active route: /patient/reports
- Steps:
  1. Log in to the patient portal
  2. Click the Reports menu item in the sidebar
- Expected Result:
  - The Reports page loads successfully
  - The Reports option appears active with a highlighted green-blue gradient background
  - The page heading "Reports" is visible at the top
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Based on the live screen, the Reports menu item is highlighted as active.

### TS_Pat_064
- Test Case ID: TS_Pat_064
- Title: Verify logged-in user label on Reports page
- Objective: Confirm that the currently logged-in patient identity is displayed correctly
- Preconditions:
  - Patient is logged in
  - Reports page is open
- Test Data:
  - User name: Jyotsana Verma
- Steps:
  1. Open the Reports page
  2. Observe the text above the report table
- Expected Result:
  - The page displays: "Logged in as Jyotsana Verma"
  - The user name matches the active logged-in patient
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - This is visible in the provided report screenshot.

### TS_Pat_065
- Test Case ID: TS_Pat_065
- Title: Validate Reports table column headers
- Objective: Check that the Reports page shows the correct table columns
- Preconditions:
  - Patient is logged in
  - Reports page is open
- Test Data:
  - Column names: Appointment Date, Uploaded At, Doctor, Report
- Steps:
  1. Open the Reports page
  2. Observe the table headers
- Expected Result:
  - The page displays four columns: Appointment Date, Uploaded At, Doctor, and Report
  - All headers are visible and properly aligned
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - The screenshot confirms the exact column labels.

### TS_Pat_066
- Test Case ID: TS_Pat_066
- Title: Verify sample report records displayed for the patient
- Objective: Confirm that the table includes actual patient report entries and doctor names
- Preconditions:
  - Patient is logged in
  - Reports page contains at least one report record
- Test Data:
  - Example records:
    - Appointment Date: 2025-12-16T12:14, Uploaded At: 2026-01-09 01:02, Doctor: Dr. Arjun Heart, Report: mmp-login-bg1-1200.jpg
    - Appointment Date: 2025-12-27T20:31, Uploaded At: 2026-01-12 14:28, Doctor: Dr. Arjun Heart, Report: Screenshot 2025-12-25 071731.png
    - Appointment Date: 2026-02-01T00:00, Uploaded At: 2026-02-06 21:51, Doctor: Dr. Meera Skin, Report: Report.jpg
    - Appointment Date: 2026-03-20T00:00, Uploaded At: 2026-03-12 23:02, Doctor: Dr. Ananya Rao, Report: ECG report.docx
- Steps:
  1. Access the Reports page
  2. Review the report rows in the table
- Expected Result:
  - Report rows are displayed with appointment date, uploaded date, doctor, and report file name
  - Doctor names match the assigned specialists in the table
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - The live report table contains doctor names and report entries similar to the screenshot data.

### TS_Pat_067
- Test Case ID: TS_Pat_067
- Title: Open a report file link from the report table
- Objective: Verify the patient can access the attached report by clicking the file name
- Preconditions:
  - Patient is logged in
  - Reports page is open
  - At least one report file link is visible
- Test Data:
  - Example link: /patient/reports/view/4
  - File name: mmp-login-bg1-1200.jpg
- Steps:
  1. Open the Reports page
  2. Click any report file name in the Report column
- Expected Result:
  - The report opens in a new tab or downloads successfully
  - The selected file is accessible to the logged-in patient
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - The screenshot shows each report name is a clickable anchor.

### TS_Pat_068
- Test Case ID: TS_Pat_068
- Title: Validate multiple report rows and data continuity
- Objective: Ensure the Reports page can display multiple records without layout corruption
- Preconditions:
  - Patient is logged in
  - Multiple rows exist in the report table
- Test Data:
  - Several records with different doctor names and uploaded dates are present in the list
- Steps:
  1. Open the Reports page
  2. Scroll through the list of report rows
- Expected Result:
  - All rows remain visible in sequence
  - Each entry keeps proper alignment across the Appointment Date, Uploaded At, Doctor, and Report columns
  - No truncated or broken rows appear
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - The live UI shows a long report table with multiple rows.

### TS_Pat_069
- Test Case ID: TS_Pat_069
- Title: Access Reports page without login
- Objective: Confirm that unauthorized users cannot access the Reports section
- Preconditions:
  - Patient is not logged in
- Test Data:
  - URL: /patient/reports
- Steps:
  1. Open the Reports URL directly in the browser
  2. Observe the redirect or access behavior
- Expected Result:
  - The system redirects the user to the login page
  - Reports content is not accessible without authentication
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - This is a security requirement for patient-only access.

### TS_Pat_070
- Test Case ID: TS_Pat_070
- Title: Verify active state of the Reports menu item
- Objective: Check that the Reports navigation item remains highlighted while the page is active
- Preconditions:
  - Patient is logged in
  - Reports page is currently open
- Test Data:
  - Menu item: Reports
  - CSS state: active
- Steps:
  1. Open the Reports page
  2. Inspect the Reports navigation item in the sidebar
- Expected Result:
  - Reports option remains highlighted as active
  - Its color and border styling match the active menu pattern shown in the UI
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - The screenshot confirms the Reports menu has the active style.

### TS_Pat_071
- Test Case ID: TS_Pat_071
- Title: Validate the patient name and report heading formatting
- Objective: Confirm that the page header and top text are visually aligned and readable
- Preconditions:
  - Patient is logged in
  - Reports page is open
- Test Data:
  - Page title: Reports
  - Header text: Logged in as Jyotsana Verma
- Steps:
  1. Open the Reports page
  2. Inspect the page heading and user label
- Expected Result:
  - The Reports heading is prominent and readable
  - The logged-in patient text appears directly beneath it
  - Layout is aligned and not overlapping with the table
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - The screenshot shows a clear card layout with proper spacing.

### TS_Pat_072
- Test Case ID: TS_Pat_072
- Title: Navigate to another patient module from Reports
- Objective: Ensure patient can move away from the Reports page without session issues
- Preconditions:
  - Patient is logged in
  - Reports page is open
- Test Data:
  - Example target menu: Dashboard or Appointments
- Steps:
  1. Open the Reports page
  2. Click another menu item from the sidebar
- Expected Result:
  - The user navigates to the selected patient module successfully
  - Session is retained and Reports page is no longer active
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - This validates that the Reports tab behaves like a standard patient module section.

---

## 4. Summary
This document includes the Reports test cases based directly on the live patient Reports screen and the screenshot evidence provided, continuing the numbering sequence after the Edit Profile module.
