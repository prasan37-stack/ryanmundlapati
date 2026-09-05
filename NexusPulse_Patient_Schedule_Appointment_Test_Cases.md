# NexusPulse Patient Schedule Appointment Test Cases

## 1. Overview
This document contains the test cases for scheduling appointments in the patient module of the NexusPulse healthcare application.

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

## 3. Appointment Scheduling Test Cases

### TS_Pat_029
- Test Case ID: TS_Pat_029
- Title: Schedule appointment with valid doctor and slot
- Objective: Verify the patient can successfully book an appointment
- Preconditions:
  - Patient is logged in successfully
  - Patient dashboard is visible
- Test Data:
  - Doctor: Dr. Arjun Heart
  - Appointment Type: Consultation
  - Date: 2026-09-08
  - Time: 10:00 AM
- Steps:
  1. Login with valid patient credentials
  2. Navigate to the appointment booking section
  3. Select a doctor
  4. Choose appointment type
  5. Select a valid date
  6. Select a valid time
  7. Click Schedule appointment
- Expected Result:
  - Appointment is scheduled successfully
  - Appointment appears in the patient's appointment list
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_030
- Test Case ID: TS_Pat_030
- Title: Schedule appointment without selecting doctor
- Objective: Verify required doctor selection validation
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: not selected
  - Appointment Type: Consultation
  - Date: 2026-09-08
  - Time: 10:00 AM
- Steps:
  1. Open booking form
  2. Leave doctor unselected
  3. Select appointment type
  4. Choose date and time
  5. Click Schedule appointment
- Expected Result:
  - Error message is displayed
  - Appointment is not scheduled
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_031
- Test Case ID: TS_Pat_031
- Title: Schedule appointment without date
- Objective: Verify required date validation
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: Dr. Meera Skin
  - Appointment Type: Consultation
  - Date: blank
  - Time: 10:00 AM
- Steps:
  1. Open booking form
  2. Select doctor
  3. Select appointment type
  4. Leave date empty
  5. Select time
  6. Click Schedule appointment
- Expected Result:
  - Error message is displayed
  - Appointment is not created
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_032
- Test Case ID: TS_Pat_032
- Title: Schedule appointment without time
- Objective: Verify required time validation
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: Dr. Meera Skin
  - Appointment Type: Consultation
  - Date: 2026-09-08
  - Time: blank
- Steps:
  1. Open booking form
  2. Select doctor
  3. Select appointment type
  4. Select date
  5. Leave time empty
  6. Click Schedule appointment
- Expected Result:
  - Error message is displayed
  - Appointment is not created
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_033
- Test Case ID: TS_Pat_033
- Title: Schedule appointment with past date
- Objective: Verify past dates are rejected
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: Dr. Meera Skin
  - Appointment Type: Consultation
  - Date: a past date
  - Time: 10:00 AM
- Steps:
  1. Select doctor
  2. Select appointment type
  3. Choose a past date
  4. Choose time
  5. Click Schedule appointment
- Expected Result:
  - Appointment is rejected
  - Validation message is shown
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_034
- Test Case ID: TS_Pat_034
- Title: Schedule appointment with valid future date
- Objective: Verify future appointments are accepted
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: Dr. Arjun Heart
  - Appointment Type: Orthopedic Review
  - Date: 2026-09-12
  - Time: 02:30 PM
- Steps:
  1. Select doctor
  2. Select appointment type
  3. Choose future date
  4. Choose valid time
  5. Click Schedule appointment
- Expected Result:
  - Appointment is scheduled successfully
  - Appointment is shown in list
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_035
- Test Case ID: TS_Pat_035
- Title: Cancel scheduled appointment
- Objective: Verify the patient can cancel an existing appointment
- Preconditions:
  - Patient has at least one scheduled appointment
- Test Data:
  - Existing appointment record
- Steps:
  1. View My Appointments section
  2. Click Cancel on an appointment
- Expected Result:
  - Appointment is removed from the list
  - Cancellation message is shown
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_036
- Test Case ID: TS_Pat_036
- Title: Schedule appointment without login
- Objective: Ensure appointment booking is restricted to logged-in patients
- Preconditions:
  - User is not logged in
- Test Data:
  - N/A
- Steps:
  1. Open the application
  2. Attempt to access the booking page or appointment form
- Expected Result:
  - User is redirected to login page
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_037
- Test Case ID: TS_Pat_037
- Title: Book multiple appointments for same patient
- Objective: Ensure multiple appointments can be scheduled if valid
- Preconditions:
  - Patient is logged in
- Test Data:
  - Two different valid dates and times
- Steps:
  1. Schedule one appointment
  2. Schedule another appointment with different date/time
- Expected Result:
  - Both appointments are created successfully
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_038
- Test Case ID: TS_Pat_038
- Title: View scheduled appointments list
- Objective: Verify patient can review booked appointments
- Preconditions:
  - Patient has scheduled appointments
- Test Data:
  - Existing appointment list
- Steps:
  1. Login to patient dashboard
  2. View My Appointments section
- Expected Result:
  - Appointment list is visible with details such as doctor, date, time, and status
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

---

## 4. Additional Schedule Appointment Test Cases

### TS_Pat_039
- Test Case ID: TS_Pat_039
- Title: Schedule appointment when the doctor is unavailable
- Objective: Verify the system blocks scheduling when the selected doctor has no availability
- Preconditions:
  - Patient is logged in
  - Doctor is marked unavailable for the selected slot
- Test Data:
  - Doctor: Dr. Meera Skin
  - Date: 2026-09-10
  - Time: 09:00 AM
  - Appointment Type: Follow-up
- Steps:
  1. Log in as a patient
  2. Open appointment booking form
  3. Select Dr. Meera Skin
  4. Choose 2026-09-10
  5. Select 09:00 AM
  6. Click Schedule appointment
- Expected Result:
  - The system blocks the appointment
  - An unavailable slot message is displayed
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_040
- Test Case ID: TS_Pat_040
- Title: Schedule appointment for a holiday or non-working day
- Objective: Ensure appointments are not scheduled on invalid business days
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: Dr. Ravi Ortho
  - Date: a public holiday or non-working day
  - Time: 11:00 AM
  - Appointment Type: General Consultation
- Steps:
  1. Log in as a patient
  2. Open appointment form
  3. Select doctor
  4. Choose public holiday date
  5. Select time
  6. Click Schedule appointment
- Expected Result:
  - System rejects the booking
  - User sees a holiday or clinic closed message
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_041
- Test Case ID: TS_Pat_041
- Title: Schedule appointment with duplicate time slot for same doctor
- Objective: Verify duplicate slot prevention for the same doctor
- Preconditions:
  - Patient is logged in
  - Same doctor already has a scheduled appointment at the selected time
- Test Data:
  - Doctor: Dr. Arjun Heart
  - Date: 2026-09-08
  - Time: 10:00 AM
- Steps:
  1. Open booking form
  2. Select Dr. Meera Skin
  3. Choose the same date and time
  4. Click Schedule appointment
- Expected Result:
  - A duplicate booking error is shown
  - No second appointment is created
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_042
- Test Case ID: TS_Pat_042
- Title: Schedule appointment with special appointment type
- Objective: Verify special appointment category is supported
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: Dr. Ananya Rao
  - Appointment Type: Follow-up / Telemedicine / Lab Review
  - Date: 2026-09-15
  - Time: 01:00 PM
- Steps:
  1. Log in as a patient
  2. Open booking form
  3. Select doctor
  4. Choose special appointment type
  5. Select valid date and time
  6. Click Schedule appointment
- Expected Result:
  - Booking is accepted and saved with selected type
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_043
- Test Case ID: TS_Pat_043
- Title: Schedule appointment with invalid time format
- Objective: Validate system handling of malformed time entry
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: Dr. Ravi Ortho
  - Date: 2026-09-15
  - Time: 25:99 PM or invalid string
- Steps:
  1. Open booking form
  2. Select doctor and date
  3. Enter invalid time value
  4. Click Schedule appointment
- Expected Result:
  - Input validation error appears
  - Appointment is not booked
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_044
- Test Case ID: TS_Pat_044
- Title: Schedule appointment with maximum allowed booking limit reached
- Objective: Verify system enforces booking capacity rules
- Preconditions:
  - Patient is logged in
  - Doctor reaches booking capacity for the day
- Test Data:
  - Doctor: Dr. Ravi Ortho
  - Date: 2026-09-15
  - Time: 04:30 PM
- Steps:
  1. Open appointment form
  2. Select doctor
  3. Choose date with full schedule
  4. Try to select available slot or full day
  5. Click Schedule appointment
- Expected Result:
  - Booking is rejected due to capacity limits
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_045
- Test Case ID: TS_Pat_045
- Title: Schedule appointment using a past time on current date
- Objective: Ensure same-day past times are not allowed
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: Dr. Meera Skin
  - Date: current date
  - Time: a time earlier than current time
- Steps:
  1. Select doctor
  2. Choose today as date
  3. Pick a past time
  4. Click Schedule appointment
- Expected Result:
  - System rejects the booking with time validation message
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_046
- Test Case ID: TS_Pat_046
- Title: Schedule appointment after logout
- Objective: Verify the patient cannot access booking functionality after session expiry
- Preconditions:
  - Patient was previously logged in and later logs out
- Test Data:
  - N/A
- Steps:
  1. Log in as patient
  2. Log out
  3. Try to access appointment scheduling page
- Expected Result:
  - User is redirected to login page
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_047
- Test Case ID: TS_Pat_047
- Title: Cancel appointment after successful scheduling
- Objective: Ensure appointment can be removed after creation
- Preconditions:
  - Patient is logged in
  - Appointment exists in the list
- Test Data:
  - Existing scheduled appointment record
- Steps:
  1. Navigate to My Appointments
  2. Select an existing appointment
  3. Click Cancel
- Expected Result:
  - Appointment is removed successfully
  - Confirmation or status update is displayed
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_048
- Test Case ID: TS_Pat_048
- Title: Schedule appointment from patient dashboard
- Objective: Verify patient can create appointments from the main dashboard
- Preconditions:
  - Patient is logged in and on the dashboard
- Test Data:
  - Doctor: Dr. Ravi Ortho
  - Appointment Type: Consultation
  - Date: 2026-09-18
  - Time: 03:00 PM
- Steps:
  1. Log in as patient
  2. Navigate to patient dashboard
  3. Click Book Appointment
  4. Fill the booking form with valid data
  5. Submit
- Expected Result:
  - Appointment is created successfully from the dashboard
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_049
- Test Case ID: TS_Pat_049
- Title: Schedule appointment using whitespace-only input in required fields
- Objective: Validate trimming and required-field behavior
- Preconditions:
  - Patient is logged in
- Test Data:
  - Doctor: spaces/text only
  - Date: blank spaces
  - Time: blank spaces
- Steps:
  1. Open booking form
  2. Enter whitespace values in required fields
  3. Click Schedule appointment
- Expected Result:
  - Validation error appears and booking is rejected
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

### TS_Pat_050
- Test Case ID: TS_Pat_050
- Title: Schedule appointment with valid data after an invalid attempt
- Objective: Verify the user can recover after validation failure
- Preconditions:
  - Patient is logged in
- Test Data:
  - First attempt: invalid data
  - Second attempt: valid data
- Steps:
  1. Try booking with invalid doctor/date/time values
  2. Correct the form with valid values
  3. Submit again
- Expected Result:
  - Validation message clears
  - Appointment is successfully created on retry
- Actual Result:
  - To be filled during execution
- Status:
  - Pass / Fail
- Remarks:
  - N/A

---

## 5. Edit Profile Test Cases

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

## 6. Summary
This continuation includes the Edit Profile test cases for the NexusPulse patient module after the schedule appointment flow, following the standard QA structure.
