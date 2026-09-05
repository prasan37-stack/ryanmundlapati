# NexusPulse Patient Homepage Test Cases

## 1. Overview
This document contains the homepage test cases for the NexusPulse patient module. The tests are based on the patient portal flow and follow the standard QA structure used across the patient module.

## 2. Test Context
- Login URL: http://82.197.92.72:8080/patient/login
- Username: patient1
- Password: Mmp@2025!Patient#93
- Homepage/landing page after login

## 3. Test Case Structure
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

## 4. Homepage Test Cases

### TS_Pat_083
- Test Case ID: TS_Pat_083
- Title: Login to patient portal and load homepage
- Objective: Verify the patient can successfully log in and land on the homepage
- Preconditions:
  - Browser is open
  - Patient login page is accessible
- Test Data:
  - Username: patient1
  - Password: Mmp@2025!Patient#93
- Steps:
  1. Open http://82.197.92.72:8080/patient/login
  2. Enter the valid username and password
  3. Click Login
- Expected Result:
  - User logs in successfully
  - The homepage loads without error
  - The patient is redirected to the main patient dashboard/homepage
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Core homepage access validation

### TS_Pat_084
- Test Case ID: TS_Pat_084
- Title: Verify homepage dashboard layout
- Objective: Ensure the homepage displays the main sections in the correct layout
- Preconditions:
  - Patient is logged in
- Test Data:
  - Homepage layout data
- Steps:
  1. Log in to the patient portal
  2. Observe the homepage screen
- Expected Result:
  - Main navigation and homepage content are visible
  - Layout is clean, aligned, and user-friendly
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Layout and UI validation

### TS_Pat_085
- Test Case ID: TS_Pat_085
- Title: Verify homepage navigation menu availability
- Objective: Confirm that all major homepage navigation options are visible and accessible
- Preconditions:
  - Patient is logged in
- Test Data:
  - Sidebar/menu items such as Home, Reports, Messages, Fees, Profile, Appointment, etc.
- Steps:
  1. Open the homepage
  2. View the left navigation or top menu
- Expected Result:
  - Expected menu items are visible
  - Navigation links are not broken or hidden
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Navigation readiness check

### TS_Pat_086
- Test Case ID: TS_Pat_086
- Title: Verify homepage welcome section
- Objective: Validate that the homepage displays a welcoming or identity section for the logged-in patient
- Preconditions:
  - Patient is logged in
- Test Data:
  - Logged-in patient name or display label
- Steps:
  1. Navigate to the homepage
  2. Observe the welcome area or top banner
- Expected Result:
  - Patient-specific greeting or account identity is displayed correctly
  - No placeholder or incorrect text appears
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Personalization validation

### TS_Pat_087
- Test Case ID: TS_Pat_087
- Title: Verify quick links or module shortcuts on homepage
- Objective: Confirm homepage shortcuts redirect users to the expected patient modules
- Preconditions:
  - Patient is logged in
- Test Data:
  - Links for Reports, Messages, Fees, Appointments, Profile, etc.
- Steps:
  1. Open the homepage
  2. Click each visible quick link or shortcut
- Expected Result:
  - Each shortcut navigates to the relevant page
  - Correct page loads without errors
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Navigation shortcut validation

### TS_Pat_088
- Test Case ID: TS_Pat_088
- Title: Verify homepage responsiveness on smaller screen
- Objective: Ensure the homepage remains usable on tablet/mobile-sized screens
- Preconditions:
  - Patient is logged in
  - Browser is resized or mobile emulation is used
- Test Data:
  - Screen width: 768px / 375px
- Steps:
  1. Open the homepage in desktop mode
  2. Resize the browser to tablet/mobile width
  3. Observe layout and navigation
- Expected Result:
  - Homepage content adapts properly without overlap or broken elements
  - Navigation remains accessible
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Responsive UI validation

### TS_Pat_089
- Test Case ID: TS_Pat_089
- Title: Verify homepage load time and stability
- Objective: Ensure the homepage loads quickly and remains stable without errors
- Preconditions:
  - Patient is logged in
  - Browser network is normal
- Test Data:
  - Homepage page load
- Steps:
  1. Open the homepage
  2. Observe page load behavior
  3. Refresh the page once
- Expected Result:
  - Page loads within acceptable time
  - No broken content, blank sections, or console errors appear
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Performance and stability validation

### TS_Pat_090
- Test Case ID: TS_Pat_090
- Title: Verify homepage access after session timeout
- Objective: Check whether the homepage is protected when the patient session expires
- Preconditions:
  - Session can be expired manually or by waiting out timeout
- Test Data:
  - Logged-out state or expired session
- Steps:
  1. Log in and leave the session idle until timeout
  2. Refresh or open the homepage again
- Expected Result:
  - User is redirected to login page or unauthorized flow is handled properly
  - Protected homepage content is not accessible without valid session
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Session handling and security validation

### TS_Pat_091
- Test Case ID: TS_Pat_091
- Title: Verify homepage content after logout
- Objective: Ensure the user is properly logged out and the homepage no longer remains accessible
- Preconditions:
  - Patient is logged in
- Test Data:
  - Logout action
- Steps:
  1. Log in to the homepage
  2. Click Logout
  3. Attempt to access the homepage again
- Expected Result:
  - User is logged out successfully
  - Homepage cannot be accessed without login
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Logout and security validation

### TS_Pat_092
- Test Case ID: TS_Pat_092
- Title: Verify homepage does not display incorrect patient data
- Objective: Ensure homepage shows the correct user-specific information and no cross-user data
- Preconditions:
  - Patient account is logged in
  - Patient profile data is available
- Test Data:
  - Patient1 account details
- Steps:
  1. Log in with patient1 account
  2. View the homepage
- Expected Result:
  - Only patient1-related information is shown
  - No wrong patient, wrong appointment, or unrelated content is displayed
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Data integrity and personalization check

---

## 5. Summary
This homepage test suite validates login access, layout, navigation, personalization, responsiveness, security, and session behavior for the patient module homepage. These cases continue the patient-module sequence from the Messages test set and follow the required QA format.
