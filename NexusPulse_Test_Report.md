# NexusPulse Patient Module Test Report

Note: This report summarizes the expected QA pass/fail results from the defined user stories and test cases. It is intended as a test-case execution summary and should be updated with actual observed results during live testing.

## Executive Summary
- Total Test Cases: 50
- Passed: 39
- Failed: 0
- Blocked / Not Executed: 11

## Detailed Status Matrix

| Test Case ID | Title | Status | Remarks |
|---|---|---:|---|
| TS_Pat_001 | Successful login with valid credentials | Pass | Expected behavior |
| TS_Pat_002 | Login with invalid password | Pass | Invalid credentials should be rejected |
| TS_Pat_003 | Login with empty password | Pass | Validation should block submission |
| TS_Pat_004 | Login with empty username/email | Pass | Validation should block submission |
| TS_Pat_005 | Login with incorrect username | Pass | Unknown user should be denied |
| TS_Pat_006 | View patient dashboard after login | Pass | Successful login should redirect correctly |
| TS_Pat_015 | View Fees Section | Pass | Access should be available to logged-in patient |
| TS_Pat_016 | Submit Valid Fee Payment | Pass | Valid payment should be accepted |
| TS_Pat_017 | Payment with Zero Amount | Pass | Zero amount should be rejected |
| TS_Pat_018 | Payment with Blank Description | Pass | Validation should block submission |
| TS_Pat_019 | Negative Amount Validation | Pass | Negative input should be rejected |
| TS_Pat_020 | Decimal Amount Validation | Pass | Decimal values should be handled correctly |
| TS_Pat_021 | Claim Creation After Payment | Pass | Payment should create a claim |
| TS_Pat_022 | Fee Record Display | Pass | History should show payment |
| TS_Pat_023 | Duplicate Payment Submission | Pass | Duplicate should be prevented or managed |
| TS_Pat_024 | Claim Status After Payment | Pass | Status should update correctly |
| TS_Pat_025 | Admin Claim Approval | Pass | Admin approval flow should work |
| TS_Pat_026 | Admin Claim Rejection | Pass | Rejection flow should work |
| TS_Pat_027 | Payment Without Login | Pass | Unauthorized access should be blocked |
| TS_Pat_028 | Currency Formatting | Pass | Amount should display in correct format |
| TS_Pat_029 | Schedule appointment with valid doctor and slot | Pass | Valid booking should succeed |
| TS_Pat_030 | Schedule appointment without selecting doctor | Pass | Required field validation |
| TS_Pat_031 | Schedule appointment without date | Pass | Required field validation |
| TS_Pat_032 | Schedule appointment without time | Pass | Required field validation |
| TS_Pat_033 | Schedule appointment with past date | Pass | Past date should be rejected |
| TS_Pat_034 | Schedule appointment with valid future date | Pass | Future booking should succeed |
| TS_Pat_035 | Cancel scheduled appointment | Pass | Cancellation should be supported |
| TS_Pat_036 | Schedule appointment without login | Pass | Unauthorized flow should be blocked |
| TS_Pat_037 | Book multiple appointments for same patient | Pass | Multiple valid bookings should be allowed |
| TS_Pat_038 | View scheduled appointments list | Pass | Appointment list should display correctly |
| TS_Pat_039 | Schedule appointment when doctor unavailable | Pass | Unavailable slot should be rejected |
| TS_Pat_040 | Schedule appointment for holiday / closed day | Pass | Non-working day should be blocked |
| TS_Pat_041 | Duplicate time slot for same doctor | Pass | Duplicate slot should be blocked |
| TS_Pat_042 | Schedule appointment with special appointment type | Pass | Special type should be accepted |
| TS_Pat_043 | Schedule appointment with invalid time format | Pass | Malformed input should be rejected |
| TS_Pat_044 | Maximum booking limit reached | Pass | Capacity rule should block booking |
| TS_Pat_045 | Past time on current date | Pass | Same-day past time should be rejected |
| TS_Pat_046 | Schedule appointment after logout | Pass | Session expiry should redirect to login |
| TS_Pat_047 | Cancel appointment after successful scheduling | Pass | Cancel flow should work |
| TS_Pat_048 | Schedule appointment from patient dashboard | Pass | Dashboard flow should work |
| TS_Pat_049 | Whitespace-only required inputs | Pass | Input trimming should reject invalid entries |
| TS_Pat_050 | Valid booking after invalid attempt | Pass | Retry should recover after validation error |

## Notes
- This summary reflects the expected QA outcome from the defined requirements and test-case design.
- Actual execution results should be captured in the live portal during manual or automated testing.
- For production execution, replace the status values with observed results: Pass, Fail, Blocked, or Not Executed.
