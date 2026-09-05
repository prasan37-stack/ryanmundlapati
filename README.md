# NexusPulse Healthcare Project

This prototype implements the business requirements documented in the NexusPulse BRD, including:

- Patient registration and login
- Appointment booking and cancellation
- Patient profile management
- Fee payment and claim submission
- Messaging between patients and admin
- Admin approval and rejection of patients
- Admin claim approval, report uploads, and patient oversight
- Doctor dashboard for appointment and patient history review

## Run locally

From the project folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Demo credentials

- Admin: admin@nexuspulse.com / admin123
- Doctor: doctor@nexuspulse.com / doctor123
- Patient: aisha@nexuspulse.com / patient123

## Notes

This is a front-end prototype using browser local storage to simulate a healthcare portal workflow without a backend service.
