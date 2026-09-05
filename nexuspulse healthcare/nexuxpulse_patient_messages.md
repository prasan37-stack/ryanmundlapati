# NexusPulse Patient Messages Test Cases (Live Portal Flow)

## 1. Overview
This document contains the Messages tab test cases for the live NexusPulse patient portal using the provided patient login flow.

## 2. Live Test Context
- Login URL: http://82.197.92.72:8080/patient/login
- Username: patient1
- Password: Mmp@2025!Patient#93
- Messages route: /patient/messages

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

## 4. Messages Test Cases

### TS_Pat_073
- Test Case ID: TS_Pat_073
- Title: Login to patient portal and open Messages tab
- Objective: Verify the patient can log in and navigate to the Messages page successfully
- Preconditions:
  - Browser is open and internet access is available
  - Patient login page is accessible
- Test Data:
  - Username: patient1
  - Password: Mmp@2025!Patient#93
- Steps:
  1. Open the login page at http://82.197.92.72:8080/patient/login
  2. Enter the valid username and password
  3. Click Login
  4. Click the Messages menu item from the sidebar
- Expected Result:
  - Patient logs in successfully
  - The Messages page loads without errors
  - The Messages tab is displayed as the active navigation item
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Live portal flow

### TS_Pat_074
- Test Case ID: TS_Pat_074
- Title: Verify Messages menu item visibility
- Objective: Confirm the Messages menu item is visible in the patient sidebar
- Preconditions:
  - Patient is logged in
  - Sidebar navigation is visible
- Test Data:
  - Menu item label: Messages
- Steps:
  1. Log in to the patient portal
  2. Observe the sidebar menu
- Expected Result:
  - The Messages item is visible in the left navigation panel
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Navigation validation

### TS_Pat_075
- Test Case ID: TS_Pat_075
- Title: Verify Messages active-state styling
- Objective: Ensure the selected Messages menu item is highlighted
- Preconditions:
  - Patient is logged in
  - Messages page is opened
- Test Data:
  - Active nav state: highlighted
- Steps:
  1. Click the Messages menu item
  2. Inspect the sidebar styling
- Expected Result:
  - The Messages tab remains highlighted as active
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Confirms the current selection state

### TS_Pat_076
- Test Case ID: TS_Pat_076
- Title: View message list on Messages page
- Objective: Check whether the patient can see the messages list
- Preconditions:
  - Patient is logged in
  - Messages page is open
- Test Data:
  - Existing patient messages
- Steps:
  1. Go to the Messages page
  2. Review the list or table of messages
- Expected Result:
  - Message list is displayed with sender, subject, date, and/or status information
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Functional display validation

### TS_Pat_077
- Test Case ID: TS_Pat_077
- Title: Open a specific message
- Objective: Verify that a message detail view opens correctly
- Preconditions:
  - Patient is logged in
  - At least one message exists in the list
- Test Data:
  - Selected message record
- Steps:
  1. Click a message entry from the list
  2. Observe the message detail area
- Expected Result:
  - The selected message opens in a readable detail view
  - Message content is visible without page errors
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Read functionality validation

### TS_Pat_078
- Test Case ID: TS_Pat_078
- Title: Reply to an existing message
- Objective: Check that patients can send a response
- Preconditions:
  - Patient is logged in
  - A message thread is open
- Test Data:
  - Reply text: Thank you for the update.
- Steps:
  1. Open a message
  2. Type a reply in the message box
  3. Click Send or Reply
- Expected Result:
  - Reply is submitted successfully
  - The message thread is updated with the new response
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Core communication behavior

### TS_Pat_079
- Test Case ID: TS_Pat_079
- Title: Attempt to send a blank reply
- Objective: Validate required-field behavior for message composition
- Preconditions:
  - Patient is logged in
  - A message is open
- Test Data:
  - Reply text: empty
- Steps:
  1. Open a message
  2. Leave the reply field blank
  3. Click Send
- Expected Result:
  - The system blocks submission
  - A validation message is displayed
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Input validation

### TS_Pat_080
- Test Case ID: TS_Pat_080
- Title: View empty Messages page
- Objective: Validate no-data behavior when no messages are available
- Preconditions:
  - Patient is logged in
  - No messages exist for the patient
- Test Data:
  - Empty inbox
- Steps:
  1. Open the Messages page
- Expected Result:
  - Empty-state message or blank list is displayed
  - The page remains stable and does not crash
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - No-data handling

### TS_Pat_081
- Test Case ID: TS_Pat_081
- Title: Access Messages without login
- Objective: Ensure unauthorized users cannot access the Messages section
- Preconditions:
  - User is not logged in
- Test Data:
  - URL: /patient/messages
- Steps:
  1. Log out or open a fresh session
  2. Enter the Messages URL directly in the browser
- Expected Result:
  - The user is redirected to the login page
  - Messages content is inaccessible without a valid session
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Security validation

### TS_Pat_082
- Test Case ID: TS_Pat_082
- Title: Navigate away from Messages to another module
- Objective: Verify the patient can leave the Messages page and access another section
- Preconditions:
  - Patient is logged in
  - Messages page is open
- Test Data:
  - Target module: Reports or Dashboard
- Steps:
  1. Open the Messages page
  2. Click another sidebar option
  3. Observe the page state
- Expected Result:
  - User navigates successfully to the selected module
  - Session remains active
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Navigation continuity

---

## 5. Summary
This document provides the patient Messages tab test cases based on the live portal flow for the provided login credentials and route, following the consistent QA structure used across the patient module.
