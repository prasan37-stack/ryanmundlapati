# NexusPulse Patient Edit Profile Test Cases

## 1. Overview
This document contains the test cases for the Edit Profile functionality in the patient module of the NexusPulse healthcare application.

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

## 3. Edit Profile Test Cases

### TS_Pat_051
- Test Case ID: TS_Pat_051
- Title: Update profile with valid data
- Objective: Verify that a logged-in patient can successfully update profile information
- Preconditions:
  - Patient is logged in
  - Patient is on the Edit Profile page
- Test Data:
  - Username: patient1
  - First Name: Jyotsana
  - Last Name: Verma
  - Email: verma.jyotsna066@gmail.com
  - Phone: 5513129364
  - Gender: Male
  - Date of Birth: 1995-04-15
- Steps:
  1. Open the Edit Profile page
  2. Update the first name, last name, email, phone, gender, and date of birth with valid values
  3. Click Save
- Expected Result:
  - Profile is updated successfully
  - Success confirmation is displayed
  - Updated values are persisted and visible on the profile page
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_052
- Test Case ID: TS_Pat_052
- Title: Username field is read-only and cannot be modified
- Objective: Ensure username is not editable
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - Username: patient1
- Steps:
  1. Open Edit Profile page
  2. Attempt to edit the Username field
  3. Click Save
- Expected Result:
  - Username remains unchanged
  - Username field is read-only
  - No validation error is raised for the username field
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_053
- Test Case ID: TS_Pat_053
- Title: Update first name with empty value
- Objective: Validate mandatory first name field
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - First Name: blank
  - Last Name: Verma
  - Email: verma.jyotsna066@gmail.com
  - Phone: 5513129364
  - Gender: Male
  - DOB: 1995-04-15
- Steps:
  1. Clear the First Name field
  2. Click Save
- Expected Result:
  - Save is blocked
  - Error message is shown for First Name
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_054
- Test Case ID: TS_Pat_054
- Title: Update last name with empty value
- Objective: Validate mandatory last name field
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - First Name: Jyotsana
  - Last Name: blank
  - Email: verma.jyotsna066@gmail.com
  - Phone: 5513129364
  - Gender: Male
  - DOB: 1995-04-15
- Steps:
  1. Clear the Last Name field
  2. Click Save
- Expected Result:
  - Save is blocked
  - Error message is shown for Last Name
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_055
- Test Case ID: TS_Pat_055
- Title: Update email with invalid format
- Objective: Ensure email validation is enforced
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - Email: invalid-email-format
- Steps:
  1. Enter invalid email value
  2. Click Save
- Expected Result:
  - Save is blocked
  - Validation message states the email format is invalid
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_056
- Test Case ID: TS_Pat_056
- Title: Update phone number with invalid format
- Objective: Validate phone number rules
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - Phone: ABCDE1234
- Steps:
  1. Enter non-numeric phone number
  2. Click Save
- Expected Result:
  - Save is blocked
  - Phone validation error is shown
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_057
- Test Case ID: TS_Pat_057
- Title: Update gender with blank selection
- Objective: Verify gender is a required field
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - Gender: Select
- Steps:
  1. Set Gender to blank/default option
  2. Click Save
- Expected Result:
  - Save is blocked
  - Gender validation error is displayed
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_058
- Test Case ID: TS_Pat_058
- Title: Update date of birth with invalid value
- Objective: Ensure DOB validation works for invalid date values
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - Date of Birth: 275760-02-08
- Steps:
  1. Enter invalid date value in the DOB field
  2. Click Save
- Expected Result:
  - Save is blocked
  - User receives a DOB validation error
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_059
- Test Case ID: TS_Pat_059
- Title: Navigate back to patient home from edit profile
- Objective: Verify Back button returns to the home page
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - N/A
- Steps:
  1. Open Edit Profile page
  2. Click Back
- Expected Result:
  - User is redirected to the patient home page
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_060
- Test Case ID: TS_Pat_060
- Title: Save profile without modifying any field
- Objective: Verify no-change save behavior
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - Existing values from the profile
- Steps:
  1. Open Edit Profile page
  2. Leave all fields unchanged
  3. Click Save
- Expected Result:
  - System either shows a success message or indicates no actual changes were made
  - Profile remains unchanged
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_061
- Test Case ID: TS_Pat_061
- Title: Update profile with special characters in first name and last name
- Objective: Ensure name fields handle valid text input safely
- Preconditions:
  - Patient is logged in
  - Edit Profile page is open
- Test Data:
  - First Name: Jyotsana@
  - Last Name: Verma-01
- Steps:
  1. Enter special characters in name fields
  2. Click Save
- Expected Result:
  - Validity is checked according to business rules
  - Invalid special characters are rejected if not allowed
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_062
- Test Case ID: TS_Pat_062
- Title: Update profile after logout
- Objective: Confirm unauthenticated users cannot access profile edit functionality
- Preconditions:
  - Patient was previously logged in and then logged out
- Test Data:
  - N/A
- Steps:
  1. Log out from the patient session
  2. Attempt to open the Edit Profile page directly
- Expected Result:
  - User is redirected to login page
  - Access to profile editing is denied
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

---

## 4. Summary
This document includes the Edit Profile test cases for the NexusPulse patient module, following the standard QA structure and continuing after the schedule appointment flow.
