# NexusPulse Patient Messages Test Cases

## 1. Overview
This document contains the Messages test cases for the patient module, based on the live UI patterns visible in the provided screenshots. It continues the numbering sequence after the Reports flow.

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

## 3. Messages Test Cases

### TS_Pat_073
- Test Case ID: TS_Pat_073
- Title: Open Messages tab from patient sidebar
- Objective: Verify that the patient can access the Messages section from the navigation menu
- Preconditions:
  - Patient is logged in successfully
  - Sidebar navigation is visible
- Test Data:
  - Menu item: Messages
  - Route: /patient/messages
- Steps:
  1. Log in to the patient portal
  2. Click the Messages menu item in the sidebar
- Expected Result:
  - The Messages page loads successfully
  - The Messages menu item is highlighted as active
  - The page title or section heading is visible
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Based on the provided UI, the active state and page selection are visible.

### TS_Pat_074
- Test Case ID: TS_Pat_074
- Title: Verify logged-in patient information on Messages page
- Objective: Ensure the user context is displayed correctly on the Messages page
- Preconditions:
  - Patient is logged in
  - Messages page is open
- Test Data:
  - User name: Jyotsana Verma
- Steps:
  1. Open the Messages page
  2. Observe the page header or user label
- Expected Result:
  - The page displays the logged-in patient information correctly
  - The user label is visible and matches the authenticated session
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Matches the same patient context used across other modules.

### TS_Pat_075
- Test Case ID: TS_Pat_075
- Title: Validate table headers on the Messages page
- Objective: Confirm that the messages list shows the correct columns or labels
- Preconditions:
  - Patient is logged in
  - Messages page is open
- Test Data:
  - Expected column labels may include: From / Sender, Subject, Date, Status, Action
- Steps:
  1. Open the Messages page
  2. Inspect the table headings or list labels
- Expected Result:
  - All expected headers are shown in the correct order
  - The message list layout is readable and aligned
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Based on the provided screenshot structure, the page includes a list/table view.

### TS_Pat_076
- Test Case ID: TS_Pat_076
- Title: View list of message records
- Objective: Verify that the patient can view existing messages in the inbox or thread list
- Preconditions:
  - Patient is logged in
  - At least one message exists in the system
- Test Data:
  - Example sender names and subject lines based on the conversation history
- Steps:
  1. Open the Messages page
  2. Review the message list
- Expected Result:
  - Message rows or entries are displayed in a readable format
  - Each message has a sender, subject, date, and/or status information
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - The screenshot structure suggests a data-driven message table/list.

### TS_Pat_077
- Test Case ID: TS_Pat_077
- Title: Open a specific message from the list
- Objective: Verify the patient can open a message to read its details
- Preconditions:
  - Patient is logged in
  - Messages page is open
  - At least one message is visible
- Test Data:
  - Message subject and sender selected from the list
- Steps:
  1. Click a message entry or subject in the list
  2. Observe the details panel or full message view
- Expected Result:
  - The selected message opens correctly
  - The message content or conversation thread is displayed
  - The user can review the details without page errors
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - This validates read functionality for the direct Message feature.

### TS_Pat_078
- Test Case ID: TS_Pat_078
- Title: Reply to a received message
- Objective: Confirm that the patient can respond to a message from the doctor or support team
- Preconditions:
  - Patient is logged in
  - A message is open
- Test Data:
  - Reply text: "Thank you for the update."
- Steps:
  1. Open a message thread
  2. Enter a reply in the message box or reply field
  3. Click Send or Reply
- Expected Result:
  - The reply is submitted successfully
  - The message thread updates with the new response
  - Confirmation or success state is shown if applicable
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - This is a core functional requirement for patient communication.

### TS_Pat_079
- Test Case ID: TS_Pat_079
- Title: Messages page with no messages available
- Objective: Validate the empty-state behavior when the patient has no messages yet
- Preconditions:
  - Patient is logged in
  - There are no messages in the inbox for the user
- Test Data:
  - Empty message list
- Steps:
  1. Open the Messages page
  2. Review the message area
- Expected Result:
  - The system displays an empty-state message or no-record message
  - The page remains stable and user-friendly without broken table layout
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Important for handling no-data conditions.

### TS_Pat_080
- Test Case ID: TS_Pat_080
- Title: Access Messages page without login
- Objective: Ensure unauthorized users cannot access patient messages
- Preconditions:
  - Patient is not logged in
- Test Data:
  - URL: /patient/messages
- Steps:
  1. Open the Messages URL directly in the browser
  2. Attempt to access the page without authentication
- Expected Result:
  - User is redirected to the login page
  - Messages content is inaccessible without valid session
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Required for patient-only access control.

### TS_Pat_081
- Test Case ID: TS_Pat_081
- Title: Verify active state of the Messages menu item
- Objective: Ensure the selected sidebar item remains highlighted while Messages is active
- Preconditions:
  - Patient is logged in
  - Messages page is open
- Test Data:
  - Menu item: Messages
  - CSS state: active
- Steps:
  1. Open the Messages page
  2. Inspect the sidebar item
- Expected Result:
  - The Messages option remains highlighted as active
  - The highlight style matches the design used in the other patient modules
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Confirms the navigation state matches the page selection.

### TS_Pat_082
- Test Case ID: TS_Pat_082
- Title: Navigate away from Messages to another module
- Objective: Verify that the patient can move to another section after viewing messages
- Preconditions:
  - Patient is logged in
  - Messages page is open
- Test Data:
  - Target module: Reports, Dashboard, or Appointments
- Steps:
  1. Open the Messages page
  2. Click another navigation item from the sidebar
- Expected Result:
  - Navigation to the selected module succeeds
  - The user session remains active
  - Messages page no longer remains active
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - Validates standard patient-module navigation behavior.

---

## 4. Summary
This document includes the Messages test cases for the NexusPulse patient module, based on the live UI patterns visible in the screenshots and continuing after the Reports flow.
