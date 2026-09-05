# NexusPulse Patient's Login Functionality

## 1. Overview
This document contains the login functionality test cases for the patient module of the NexusPulse healthcare application.

## 2. Test Case Structure
- Test Case ID
- Test Case Title
- Objective
- Preconditions
- Test Data
- Steps
- Expected Result
- Actual Result
- Status
- Remarks

---

## 3. Patient Login Test Cases

### PAT-LOGIN-01
- Test Case ID: PAT-LOGIN-01
- Title: Successful login with valid credentials
- Objective: Verify that an approved patient can log in successfully
- Preconditions:
  - Patient account exists
  - Patient status is approved
  - User is on the login page
- Test Data:
  - Email: aisha@nexuspulse.com
  - Password: patient123
- Steps:
  1. Open the patient login page
  2. Enter the valid email address
  3. Enter the correct password
  4. Click the Login button
- Expected Result:
  - The patient is redirected to the patient dashboard
  - Login is successful
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-02
- Test Case ID: PAT-LOGIN-02
- Title: Login with invalid password
- Objective: Verify the application rejects an incorrect password
- Preconditions:
  - Valid patient account exists
- Test Data:
  - Email: aisha@nexuspulse.com
  - Password: wrongpassword
- Steps:
  1. Open the patient login page
  2. Enter valid email
  3. Enter wrong password
  4. Click Login
- Expected Result:
  - Error message is displayed
  - User remains on the login page
  - No access is granted
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-03
- Test Case ID: PAT-LOGIN-03
- Title: Login with unregistered email
- Objective: Verify the system rejects an unknown email
- Preconditions:
  - Email is not registered in the system
- Test Data:
  - Email: unknownpatient@test.com
  - Password: any value
- Steps:
  1. Open the patient login page
  2. Enter unregistered email
  3. Enter any password
  4. Click Login
- Expected Result:
  - Login fails
  - Error message is displayed
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-04
- Test Case ID: PAT-LOGIN-04
- Title: Login with empty email field
- Objective: Verify validation for required email field
- Preconditions:
  - Login page is visible
- Test Data:
  - Email: blank
  - Password: patient123
- Steps:
  1. Leave email field empty
  2. Enter password
  3. Click Login
- Expected Result:
  - Validation message appears
  - Login is blocked
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-05
- Test Case ID: PAT-LOGIN-05
- Title: Login with empty password field
- Objective: Verify validation for required password field
- Preconditions:
  - Login page is visible
- Test Data:
  - Email: aisha@nexuspulse.com
  - Password: blank
- Steps:
  1. Enter valid email
  2. Leave password blank
  3. Click Login
- Expected Result:
  - Validation message appears
  - Login is blocked
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-06
- Test Case ID: PAT-LOGIN-06
- Title: Login with pending approval patient account
- Objective: Verify pending patients cannot access the system
- Preconditions:
  - Patient exists with status = pending
- Test Data:
  - Email: daniel@nexuspulse.com
  - Password: patient123
- Steps:
  1. Enter the pending patient email
  2. Enter the correct password
  3. Click Login
- Expected Result:
  - User is not logged in
  - Message indicates account is pending approval
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-07
- Test Case ID: PAT-LOGIN-07
- Title: Login with rejected patient account
- Objective: Verify rejected patients cannot log in
- Preconditions:
  - Patient exists with status = rejected
- Test Data:
  - Email: rejectedpatient@test.com
  - Password: correctpassword
- Steps:
  1. Enter rejected patient email
  2. Enter password
  3. Click Login
- Expected Result:
  - Login fails
  - Account stays inactive
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-08
- Test Case ID: PAT-LOGIN-08
- Title: Case-insensitive email validation
- Objective: Verify login works regardless of email case
- Preconditions:
  - Valid patient account exists
- Test Data:
  - Email: AISHA@NEXUSPULSE.COM
  - Password: patient123
- Steps:
  1. Enter email with different casing
  2. Enter correct password
  3. Click Login
- Expected Result:
  - Login succeeds if email matching is case-insensitive
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-09
- Test Case ID: PAT-LOGIN-09
- Title: Password field masking
- Objective: Verify password characters are masked
- Preconditions:
  - Login page is open
- Test Data:
  - Password: patient123
- Steps:
  1. Type password in the password field
  2. Observe the input field
- Expected Result:
  - Password appears as masked characters
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-10
- Test Case ID: PAT-LOGIN-10
- Title: Login page UI validation
- Objective: Verify the login page contains all required fields
- Preconditions:
  - Login page is visible
- Test Data:
  - N/A
- Steps:
  1. Review the login form UI
  2. Check email field availability
  3. Check password field availability
  4. Check Login button availability
- Expected Result:
  - Required elements are visible and usable
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-11
- Test Case ID: PAT-LOGIN-11
- Title: Successful logout
- Objective: Verify the patient can log out after login
- Preconditions:
  - Valid patient is logged in
- Test Data:
  - N/A
- Steps:
  1. Log in with valid patient account
  2. Click the Logout button
- Expected Result:
  - User is signed out
  - Login page is shown again
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-12
- Test Case ID: PAT-LOGIN-12
- Title: Session persistence after login
- Objective: Verify session behavior after refresh or reopening
- Preconditions:
  - Patient is logged in
- Test Data:
  - N/A
- Steps:
  1. Log in successfully
  2. Refresh the browser or reopen the app
- Expected Result:
  - Session is maintained or user is redirected according to design
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-13
- Test Case ID: PAT-LOGIN-13
- Title: Malicious input attempt in login form
- Objective: Verify input validation prevents unauthorized behavior
- Preconditions:
  - Login page is open
- Test Data:
  - Email: OR '1'='1'
  - Password: any input
- Steps:
  1. Enter malicious text in email field
  2. Enter any password value
  3. Click Login
- Expected Result:
  - App rejects invalid input safely
  - No crash or unauthorized access occurs
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### PAT-LOGIN-14
- Test Case ID: PAT-LOGIN-14
- Title: Max-length input handling
- Objective: Verify the system handles long inputs safely
- Preconditions:
  - Login page is open
- Test Data:
  - Very long email value
  - Very long password value
- Steps:
  1. Enter long email and password values
  2. Click Login
- Expected Result:
  - System rejects invalid input gracefully or handles it without crash
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

---

## 4. Summary
This file includes the complete patient login test case coverage for the NexusPulse healthcare module using the standard QA test case structure.
