const STORAGE_KEY = 'nexuspulse-healthcare-v1';

const initialState = {
  currentUser: null,
  roles: ['patient', 'admin', 'doctor'],
  patients: [
    {
      id: 'p-1001',
      firstName: 'Aisha',
      lastName: 'Rahman',
      email: 'aisha@nexuspulse.com',
      phone: '+1 415 555 0101',
      password: 'patient123',
      role: 'patient',
      status: 'approved',
      dob: '1992-04-12',
      insurance: 'BlueCross PPO',
      history: 'Annual wellness check completed. Follow-up needed for hypertension review.'
    },
    {
      id: 'p-1002',
      firstName: 'Daniel',
      lastName: 'Kim',
      email: 'daniel@nexuspulse.com',
      phone: '+1 415 555 0122',
      password: 'patient123',
      role: 'patient',
      status: 'pending',
      dob: '1988-10-08',
      insurance: 'Aetna',
      history: 'New patient registration pending approval.'
    }
  ],
  doctors: [
    {
      id: 'd-2001',
      name: 'Dr. Arjun Heart',
      email: 'doctor@nexuspulse.com',
      password: 'doctor123',
      specialty: 'Cardiologist',
      role: 'doctor'
    },
    {
      id: 'd-2002',
      name: 'Dr. Meera Skin',
      email: 'doctor2@nexuspulse.com',
      password: 'doctor123',
      specialty: 'Dermatologist',
      role: 'doctor'
    },
    {
      id: 'd-2003',
      name: 'Dr. Ravi Ortho',
      email: 'doctor3@nexuspulse.com',
      password: 'doctor123',
      specialty: 'Orthopedic',
      role: 'doctor'
    },
    {
      id: 'd-2004',
      name: 'Dr. Ananya Rao',
      email: 'doctor4@nexuspulse.com',
      password: 'doctor123',
      specialty: 'Neurologist',
      role: 'doctor'
    }
  ],
  admin: {
    id: 'a-3001',
    name: 'Admin User',
    email: 'admin@nexuspulse.com',
    password: 'admin123',
    role: 'admin'
  },
  appointments: [
    {
      id: 'appt-1',
      patientId: 'p-1001',
      patientName: 'Aisha Rahman',
      doctorId: 'd-2001',
      doctorName: 'Dr. Arjun Heart',
      date: '2026-09-08',
      time: '10:00 AM',
      type: 'Consultation',
      status: 'confirmed'
    },
    {
      id: 'appt-2',
      patientId: 'p-1001',
      patientName: 'Aisha Rahman',
      doctorId: 'd-2003',
      doctorName: 'Dr. Ravi Ortho',
      date: '2026-09-12',
      time: '2:30 PM',
      type: 'Orthopedic Review',
      status: 'confirmed'
    }
  ],
  messages: [
    {
      id: 1,
      from: 'p-1001',
      fromName: 'Aisha Rahman',
      to: 'admin',
      toName: 'Admin',
      text: 'I need to update my insurance details before the next consult.',
      createdAt: '2026-09-04T09:15:00Z',
      status: 'open'
    },
    {
      id: 2,
      from: 'admin',
      fromName: 'Admin User',
      to: 'p-1001',
      toName: 'Aisha Rahman',
      text: 'Your insurance update has been received. Please confirm your preferred contact method.',
      createdAt: '2026-09-04T10:30:00Z',
      status: 'closed'
    }
  ],
  fees: [
    {
      id: 'fee-1',
      patientId: 'p-1001',
      patientName: 'Aisha Rahman',
      amount: 125.00,
      description: 'Consultation and diagnostic review',
      status: 'paid'
    }
  ],
  claims: [
    {
      id: 'claim-1',
      patientId: 'p-1001',
      patientName: 'Aisha Rahman',
      amount: 125.00,
      provider: 'BlueCross PPO',
      details: 'Outpatient consultation reimbursement',
      status: 'pending'
    }
  ],
  reports: [
    {
      id: 'report-1',
      patientId: 'p-1001',
      patientName: 'Aisha Rahman',
      title: 'Lab Summary',
      uploadedBy: 'Admin User',
      date: '2026-09-03'
    }
  ]
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState));
      return structuredClone(initialState);
    }
    const state = JSON.parse(raw);
    return state;
  } catch (error) {
    console.error('State load failed', error);
    return structuredClone(initialState);
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let appState = loadState();

const appRoot = document.getElementById('app');

function getCurrentUser() {
  return appState.currentUser;
}

function setFlash(message, type = 'info') {
  const existing = document.querySelector('.flash');
  if (existing) existing.remove();

  const wrapper = document.createElement('div');
  wrapper.className = `flash ${type === 'error' ? 'error' : ''}`.trim();
  wrapper.textContent = message;
  const first = document.querySelector('.auth-card, .page-shell');
  if (first && first.parentElement) {
    first.parentElement.insertBefore(wrapper, first);
  }
}

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value || 0);
}

function getPatientByEmail(email) {
  return appState.patients.find((patient) => patient.email.toLowerCase() === email.toLowerCase());
}

function getDoctorByEmail(email) {
  return appState.doctors.find((doctor) => doctor.email.toLowerCase() === email.toLowerCase());
}

function isLoggedIn() {
  return Boolean(appState.currentUser);
}

function logout() {
  appState.currentUser = null;
  saveState(appState);
  render();
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const mode = document.querySelector('[data-auth-mode].active')?.dataset.authMode || 'login';
  const formData = new FormData(event.target);

  if (mode === 'login') {
    const email = formData.get('email')?.toString().trim();
    const password = formData.get('password')?.toString();

    if (!email || !password) {
      setFlash('Please enter both email and password.', 'error');
      return;
    }

    const patient = getPatientByEmail(email);
    if (patient && patient.password === password) {
      if (patient.status !== 'approved') {
        setFlash('Your patient account is pending approval. Please wait for admin confirmation.', 'error');
        return;
      }
      appState.currentUser = { ...patient, role: 'patient' };
      saveState(appState);
      render();
      return;
    }

    const doctor = getDoctorByEmail(email);
    if (doctor && doctor.password === password) {
      appState.currentUser = { ...doctor, role: 'doctor' };
      saveState(appState);
      render();
      return;
    }

    if (appState.admin.email.toLowerCase() === email.toLowerCase() && appState.admin.password === password) {
      appState.currentUser = { ...appState.admin, role: 'admin' };
      saveState(appState);
      render();
      return;
    }

    setFlash('Invalid email or password.', 'error');
    return;
  }

  const firstName = formData.get('firstName')?.toString().trim();
  const lastName = formData.get('lastName')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const phone = formData.get('phone')?.toString().trim();
  const password = formData.get('password')?.toString();

  if (!firstName || !lastName || !email || !phone || !password) {
    setFlash('Please fill in all patient registration fields.', 'error');
    return;
  }

  if (getPatientByEmail(email) || getDoctorByEmail(email) || appState.admin.email.toLowerCase() === email.toLowerCase()) {
    setFlash('An account already exists with that email.', 'error');
    return;
  }

  const patient = {
    id: `p-${Date.now()}`,
    firstName,
    lastName,
    email,
    phone,
    password,
    role: 'patient',
    status: 'pending',
    dob: formData.get('dob')?.toString() || '',
    insurance: formData.get('insurance')?.toString() || 'Not provided',
    history: 'New patient registration submitted.'
  };

  appState.patients.push(patient);
  saveState(appState);
  setFlash('Registration submitted successfully. Your account is pending admin approval.', 'info');
  event.target.reset();
  document.querySelectorAll('[data-auth-mode]').forEach((btn) => btn.classList.toggle('active', btn.dataset.authMode === 'login'));
}

function handleProfileUpdate(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const patient = appState.patients.find((p) => p.id === getCurrentUser().id);
  if (!patient) return;

  patient.firstName = formData.get('firstName')?.toString().trim() || patient.firstName;
  patient.lastName = formData.get('lastName')?.toString().trim() || patient.lastName;
  patient.phone = formData.get('phone')?.toString().trim() || patient.phone;
  patient.insurance = formData.get('insurance')?.toString().trim() || patient.insurance;
  patient.dob = formData.get('dob')?.toString() || patient.dob;

  const userClone = { ...patient, role: 'patient' };
  appState.currentUser = userClone;
  saveState(appState);
  render();
  setFlash('Profile updated successfully.', 'info');
}

function handleAppointmentSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const selectedDoctorId = formData.get('doctorId')?.toString();
  const date = formData.get('date')?.toString();
  const time = formData.get('time')?.toString();
  const type = formData.get('type')?.toString();

  if (!selectedDoctorId || !date || !time || !type) {
    setFlash('Please select doctor, date, time, and appointment type.', 'error');
    return;
  }

  const doctor = appState.doctors.find((d) => d.id === selectedDoctorId);
  const patient = appState.patients.find((p) => p.id === getCurrentUser().id);

  if (!doctor || !patient) {
    setFlash('Could not find selected doctor or patient.', 'error');
    return;
  }

  appState.appointments.push({
    id: `appt-${Date.now()}`,
    patientId: patient.id,
    patientName: `${patient.firstName} ${patient.lastName}`,
    doctorId: doctor.id,
    doctorName: doctor.name,
    date,
    time,
    type,
    status: 'confirmed'
  });

  saveState(appState);
  render();
  setFlash('Appointment scheduled successfully.', 'info');
}

function handleFeePayment(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const patient = appState.patients.find((p) => p.id === getCurrentUser().id);
  const amount = Number(formData.get('amount') || 0);
  const description = formData.get('description')?.toString().trim();

  if (!patient || !amount || !description) {
    setFlash('Please provide valid payment information.', 'error');
    return;
  }

  appState.fees.push({
    id: `fee-${Date.now()}`,
    patientId: patient.id,
    patientName: `${patient.firstName} ${patient.lastName}`,
    amount,
    description,
    status: 'paid'
  });

  appState.claims.push({
    id: `claim-${Date.now()}`,
    patientId: patient.id,
    patientName: `${patient.firstName} ${patient.lastName}`,
    amount,
    provider: patient.insurance || 'Self-funded',
    details: description,
    status: 'pending'
  });

  saveState(appState);
  render();
  setFlash('Payment submitted and claim created successfully.', 'info');
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const text = formData.get('message')?.toString().trim();
  if (!text) {
    setFlash('Please enter a message.', 'error');
    return;
  }

  const user = getCurrentUser();
  appState.messages.push({
    id: Date.now(),
    from: user.id,
    fromName: user.name || `${user.firstName} ${user.lastName}`,
    to: user.role === 'patient' ? 'admin' : 'p-1001',
    toName: user.role === 'patient' ? 'Admin' : 'Patient',
    text,
    createdAt: new Date().toISOString(),
    status: 'open'
  });

  saveState(appState);
  render();
  setFlash('Message sent successfully.', 'info');
}

function handleReportUpload(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const patientId = formData.get('patientId')?.toString();
  const title = formData.get('title')?.toString().trim();
  if (!patientId || !title) {
    setFlash('Please select a patient and report title.', 'error');
    return;
  }

  const patient = appState.patients.find((p) => p.id === patientId);
  if (!patient) {
    setFlash('Patient not found.', 'error');
    return;
  }

  appState.reports.push({
    id: `report-${Date.now()}`,
    patientId: patient.id,
    patientName: `${patient.firstName} ${patient.lastName}`,
    title,
    uploadedBy: 'Admin User',
    date: new Date().toISOString().slice(0, 10)
  });

  saveState(appState);
  render();
  setFlash('Report submitted successfully and is visible in patient module.', 'info');
}

function handlePatientAction(patientId, action) {
  const patient = appState.patients.find((p) => p.id === patientId);
  if (!patient) return;

  if (action === 'approve') patient.status = 'approved';
  if (action === 'reject') patient.status = 'rejected';

  saveState(appState);
  render();
}

function handleClaimAction(claimId, action) {
  const claim = appState.claims.find((item) => item.id === claimId);
  if (!claim) return;

  claim.status = action === 'approve' ? 'approved' : 'rejected';
  saveState(appState);
  render();
}

function handleDoctorView() {
  // intentionally kept for future extension
  return;
}

function createLoginView() {
  return `
    <div class="login-wrap">
      <div class="auth-card">
        <h1>NexusPulse</h1>
        <p>Secure healthcare access for patients, doctors and administrators.</p>

        <div class="tabs">
          <button class="tab-button active" data-auth-mode="login">Login</button>
          <button class="tab-button" data-auth-mode="register">Register</button>
        </div>

        <form id="authForm">
          <div class="form-grid" data-register-fields style="display: none;">
            <label>
              First name
              <input name="firstName" placeholder="Enter first name" />
            </label>
            <label>
              Last name
              <input name="lastName" placeholder="Enter last name" />
            </label>
            <label>
              Date of birth
              <input type="date" name="dob" />
            </label>
            <label>
              Insurance
              <input name="insurance" placeholder="Insurance provider" />
            </label>
            <label style="grid-column: 1 / -1;">
              Phone
              <input name="phone" placeholder="Phone number" />
            </label>
          </div>

          <label>
            Email
            <input type="email" name="email" placeholder="name@example.com" required />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="Enter password" required />
          </label>

          <button class="primary" type="submit">Continue</button>
        </form>

        <div class="card" style="margin-top: 18px;">
          <h3>Demo access</h3>
          <div class="list">
            <div class="list-item"><strong>Admin:</strong> admin@nexuspulse.com / admin123</div>
            <div class="list-item"><strong>Doctor:</strong> doctor@nexuspulse.com / doctor123</div>
            <div class="list-item"><strong>Patient:</strong> aisha@nexuspulse.com / patient123</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createTopBar(roleName) {
  const user = getCurrentUser();
  const label = roleName === 'admin' ? 'Administrator' : roleName === 'doctor' ? 'Doctor' : 'Patient';
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          NexusPulse
          <small>Healthcare operations</small>
        </div>
        <div class="btn-row">
          <span class="user-chip">${label}: ${user.name || `${user.firstName} ${user.lastName}`}</span>
          <button class="ghost" type="button" id="logoutBtn">Logout</button>
        </div>
      </div>
    </header>
  `;
}

function renderPatientDashboard() {
  const currentUser = getCurrentUser();
  const patient = appState.patients.find((p) => p.id === currentUser.id);
  const appointments = appState.appointments.filter((a) => a.patientId === patient.id);
  const fees = appState.fees.filter((fee) => fee.patientId === patient.id);
  const claims = appState.claims.filter((claim) => claim.patientId === patient.id);
  const messages = appState.messages.filter((m) => m.from === patient.id || m.to === patient.id);
  const reports = appState.reports.filter((report) => report.patientId === patient.id);

  return `
    ${createTopBar('patient')}
    <main class="container page-shell">
      <section class="hero">
        <h1>Welcome, ${patient.firstName}.</h1>
        <p>Manage appointments, messaging, fee payments, and your care journey in one place.</p>
      </section>

      <section class="grid-3">
        <article class="card">
          <h3>Appointments</h3>
          <div class="metric"><span>Scheduled</span><strong>${appointments.length}</strong></div>
          <div class="metric"><span>Next visit</span><strong>${appointments[0] ? appointments[0].date : '—'}</strong></div>
        </article>
        <article class="card">
          <h3>Fees</h3>
          <div class="metric"><span>Paid</span><strong>${formatMoney(fees.reduce((sum, fee) => sum + Number(fee.amount || 0), 0))}</strong></div>
          <div class="metric"><span>Claims</span><strong>${claims.length}</strong></div>
        </article>
        <article class="card">
          <h3>Messages</h3>
          <div class="metric"><span>Unread</span><strong>${messages.filter((m) => m.to === patient.id && m.status === 'open').length}</strong></div>
          <div class="metric"><span>Reports</span><strong>${reports.length}</strong></div>
        </article>
      </section>

      <section class="card">
        <div class="section-header">
          <h2>Book or reschedule appointment</h2>
        </div>
        <form id="appointmentForm">
          <div class="form-grid">
            <label>
              Select doctor
              <select name="doctorId">
                <option value="">Choose doctor</option>
                ${appState.doctors.map((doctor) => `<option value="${doctor.id}">${doctor.name} - ${doctor.specialty}</option>`).join('')}
              </select>
            </label>
            <label>
              Appointment type
              <select name="type">
                <option value="Consultation">Consultation</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Diagnostic Review">Diagnostic Review</option>
                <option value="Cardiology Review">Cardiology Review</option>
              </select>
            </label>
            <label>
              Date
              <input type="date" name="date" required />
            </label>
            <label>
              Time
              <input type="time" name="time" required />
            </label>
          </div>
          <div class="btn-row">
            <button class="primary" type="submit">Schedule appointment</button>
          </div>
        </form>
      </section>

      <section class="grid-3">
        <article class="card">
          <div class="section-header">
            <h2>My appointments</h2>
          </div>
          <div class="list">
            ${appointments.length ? appointments.map((appointment) => `
              <div class="list-item">
                <h4>${appointment.type} with ${appointment.doctorName}</h4>
                <p>${appointment.date} at ${appointment.time}</p>
                <span class="badge ${appointment.status === 'confirmed' ? 'approved' : 'in-progress'}">${appointment.status}</span>
                <div class="btn-row" style="margin-top: 8px;">
                  <button class="danger" type="button" data-cancel-appointment="${appointment.id}">Cancel</button>
                </div>
              </div>
            `).join('') : '<div class="list-item"><p>No appointments yet.</p></div>'}
          </div>
        </article>

        <article class="card">
          <div class="section-header">
            <h2>Edit profile</h2>
          </div>
          <form id="profileForm">
            <div class="form-grid">
              <label>
                First name
                <input name="firstName" value="${patient.firstName}" />
              </label>
              <label>
                Last name
                <input name="lastName" value="${patient.lastName}" />
              </label>
              <label style="grid-column: 1 / -1;">
                Phone
                <input name="phone" value="${patient.phone}" />
              </label>
              <label>
                DOB
                <input type="date" name="dob" value="${patient.dob || ''}" />
              </label>
              <label>
                Insurance
                <input name="insurance" value="${patient.insurance || ''}" />
              </label>
            </div>
            <button class="primary" type="submit">Save profile</button>
          </form>
        </article>

        <article class="card">
          <div class="section-header">
            <h2>Pay fees</h2>
          </div>
          <form id="feeForm">
            <label>
              Amount
              <input type="number" step="0.01" name="amount" value="125" required />
            </label>
            <label>
              Description
              <input name="description" value="Consultation and diagnostic review" required />
            </label>
            <button class="primary" type="submit">Submit fee payment</button>
          </form>
        </article>
      </section>

      <section class="grid-3">
        <article class="card">
          <div class="section-header">
            <h2>Messages</h2>
          </div>
          <form id="messageForm">
            <label>
              Message
              <textarea name="message" placeholder="Share your message with the admin team"></textarea>
            </label>
            <button class="primary" type="submit">Send message</button>
          </form>
          <div class="list" style="margin-top: 16px;">
            ${messages.slice(-4).reverse().map((message) => `
              <div class="list-item">
                <h4>${message.fromName}</h4>
                <p>${message.text}</p>
                <span class="badge ${message.status === 'closed' ? 'completed' : 'in-progress'}">${message.status}</span>
              </div>
            `).join('')}
          </div>
        </article>

        <article class="card">
          <div class="section-header">
            <h2>Claims</h2>
          </div>
          <div class="list">
            ${claims.length ? claims.map((claim) => `
              <div class="list-item">
                <h4>${claim.provider}</h4>
                <p>${claim.details}</p>
                <p><strong>${formatMoney(claim.amount)}</strong></p>
                <span class="badge ${claim.status === 'approved' ? 'approved' : claim.status === 'rejected' ? 'rejected' : 'pending'}">${claim.status}</span>
              </div>
            `).join('') : '<div class="list-item"><p>No claims submitted.</p></div>'}
          </div>
        </article>

        <article class="card">
          <div class="section-header">
            <h2>Reports</h2>
          </div>
          <div class="list">
            ${reports.length ? reports.map((report) => `
              <div class="list-item">
                <h4>${report.title}</h4>
                <p>${report.date}</p>
                <p>${report.uploadedBy}</p>
              </div>
            `).join('') : '<div class="list-item"><p>No uploaded reports.</p></div>'}
          </div>
        </article>
      </section>
    </main>
  `;
}

function renderAdminDashboard() {
  const admin = appState.admin;
  const pendingPatients = appState.patients.filter((p) => p.status !== 'approved');
  const claims = appState.claims;
  const messages = appState.messages.filter((m) => m.to === 'admin' || m.from === 'admin');
  const reports = appState.reports;

  return `
    ${createTopBar('admin')}
    <main class="container page-shell">
      <section class="hero">
        <h1>Admin Operations Center</h1>
        <p>Review patients, approve access, process claims, and manage care documentation.</p>
      </section>

      <section class="grid-3">
        <article class="card">
          <h3>Patients</h3>
          <div class="metric"><span>Pending</span><strong>${pendingPatients.length}</strong></div>
          <div class="metric"><span>Approved</span><strong>${appState.patients.filter((p) => p.status === 'approved').length}</strong></div>
        </article>
        <article class="card">
          <h3>Claims</h3>
          <div class="metric"><span>Pending</span><strong>${claims.filter((c) => c.status === 'pending').length}</strong></div>
          <div class="metric"><span>Total</span><strong>${claims.length}</strong></div>
        </article>
        <article class="card">
          <h3>Reports</h3>
          <div class="metric"><span>Uploaded</span><strong>${reports.length}</strong></div>
          <div class="metric"><span>Messages</span><strong>${messages.length}</strong></div>
        </article>
      </section>

      <section class="card">
        <div class="section-header">
          <h2>Manage patient approvals</h2>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${appState.patients.map((patient) => `
                <tr>
                  <td>${patient.firstName} ${patient.lastName}</td>
                  <td>${patient.email}</td>
                  <td><span class="badge ${patient.status === 'approved' ? 'approved' : patient.status === 'rejected' ? 'rejected' : 'pending'}">${patient.status}</span></td>
                  <td>
                    <div class="btn-row">
                      <button class="primary" type="button" data-patient-action="approve:${patient.id}">Approve</button>
                      <button class="danger" type="button" data-patient-action="reject:${patient.id}">Reject</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <section class="card">
        <div class="section-header">
          <h2>Upload patient report</h2>
        </div>
        <form id="reportForm">
          <div class="form-grid">
            <label>
              Patient
              <select name="patientId">
                <option value="">Select patient</option>
                ${appState.patients.map((patient) => `<option value="${patient.id}">${patient.firstName} ${patient.lastName}</option>`).join('')}
              </select>
            </label>
            <label>
              Report title
              <input name="title" placeholder="Lab summary or diagnosis" required />
            </label>
          </div>
          <button class="primary" type="submit">Submit report</button>
        </form>
      </section>

      <section class="grid-3">
        <article class="card">
          <div class="section-header">
            <h2>View messages</h2>
          </div>
          <div class="list">
            ${messages.slice(-5).reverse().map((message) => `
              <div class="list-item">
                <h4>${message.fromName} → ${message.toName}</h4>
                <p>${message.text}</p>
                <span class="badge ${message.status === 'closed' ? 'completed' : 'in-progress'}">${message.status}</span>
              </div>
            `).join('')}
          </div>
        </article>

        <article class="card">
          <div class="section-header">
            <h2>Claims approval</h2>
          </div>
          <div class="list">
            ${claims.map((claim) => `
              <div class="list-item">
                <h4>${claim.patientName}</h4>
                <p>${claim.provider}</p>
                <p>${claim.details}</p>
                <p><strong>${formatMoney(claim.amount)}</strong></p>
                <span class="badge ${claim.status === 'approved' ? 'approved' : claim.status === 'rejected' ? 'rejected' : 'pending'}">${claim.status}</span>
                <div class="btn-row" style="margin-top: 8px;">
                  <button class="primary" type="button" data-claim-action="approve:${claim.id}">Approve</button>
                  <button class="danger" type="button" data-claim-action="reject:${claim.id}">Reject</button>
                </div>
              </div>
            `).join('')}
          </div>
        </article>

        <article class="card">
          <div class="section-header">
            <h2>Patient reports</h2>
          </div>
          <div class="list">
            ${reports.length ? reports.map((report) => `
              <div class="list-item">
                <h4>${report.title}</h4>
                <p>${report.patientName}</p>
                <p>${report.date}</p>
              </div>
            `).join('') : '<div class="list-item"><p>No reports uploaded yet.</p></div>'}
          </div>
        </article>
      </section>
    </main>
  `;
}

function renderDoctorDashboard() {
  const appointments = appState.appointments;
  const patients = appState.patients;

  return `
    ${createTopBar('doctor')}
    <main class="container page-shell">
      <section class="hero">
        <h1>Doctor Dashboard</h1>
        <p>Review appointments and patient history across the care network.</p>
      </section>

      <section class="grid-3">
        <article class="card">
          <h3>Appointments</h3>
          <div class="metric"><span>Total</span><strong>${appointments.length}</strong></div>
          <div class="metric"><span>Today</span><strong>${appointments.filter((a) => a.date === '2026-09-08').length}</strong></div>
        </article>
        <article class="card">
          <h3>Patients</h3>
          <div class="metric"><span>Active</span><strong>${patients.filter((p) => p.status === 'approved').length}</strong></div>
          <div class="metric"><span>New</span><strong>${patients.filter((p) => p.status === 'pending').length}</strong></div>
        </article>
        <article class="card">
          <h3>Care coordination</h3>
          <div class="metric"><span>Messages</span><strong>${appState.messages.length}</strong></div>
          <div class="metric"><span>Reports</span><strong>${appState.reports.length}</strong></div>
        </article>
      </section>

      <section class="card">
        <div class="section-header">
          <h2>Appointments overview</h2>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${appointments.map((appointment) => `
                <tr>
                  <td>${appointment.patientName}</td>
                  <td>${appointment.doctorName}</td>
                  <td>${appointment.date}</td>
                  <td>${appointment.time}</td>
                  <td>${appointment.type}</td>
                  <td><span class="badge ${appointment.status === 'confirmed' ? 'approved' : 'in-progress'}">${appointment.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <section class="card">
        <div class="section-header">
          <h2>Patient history</h2>
        </div>
        <div class="list">
          ${patients.map((patient) => `
            <div class="list-item">
              <h4>${patient.firstName} ${patient.lastName}</h4>
              <p>${patient.history}</p>
              <p><strong>Insurance:</strong> ${patient.insurance}</p>
            </div>
          `).join('')}
        </div>
      </section>
    </main>
  `;
}

function render() {
  if (!isLoggedIn()) {
    appRoot.innerHTML = createLoginView();
    document.querySelectorAll('[data-auth-mode]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextMode = button.dataset.authMode;
        document.querySelectorAll('[data-auth-mode]').forEach((btn) => btn.classList.toggle('active', btn.dataset.authMode === nextMode));
        const registerFields = document.querySelector('[data-register-fields]');
        if (registerFields) {
          registerFields.style.display = nextMode === 'register' ? 'grid' : 'none';
        }
      });
    });

    const authForm = document.getElementById('authForm');
    if (authForm) {
      authForm.addEventListener('submit', handleAuthSubmit);
    }
    return;
  }

  const currentUser = getCurrentUser();
  if (currentUser.role === 'patient') {
    appRoot.innerHTML = renderPatientDashboard();
  } else if (currentUser.role === 'admin') {
    appRoot.innerHTML = renderAdminDashboard();
  } else {
    appRoot.innerHTML = renderDoctorDashboard();
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) appointmentForm.addEventListener('submit', handleAppointmentSubmit);

  const profileForm = document.getElementById('profileForm');
  if (profileForm) profileForm.addEventListener('submit', handleProfileUpdate);

  const feeForm = document.getElementById('feeForm');
  if (feeForm) feeForm.addEventListener('submit', handleFeePayment);

  const messageForm = document.getElementById('messageForm');
  if (messageForm) messageForm.addEventListener('submit', handleMessageSubmit);

  const reportForm = document.getElementById('reportForm');
  if (reportForm) reportForm.addEventListener('submit', handleReportUpload);

  const patientActionButtons = document.querySelectorAll('[data-patient-action]');
  patientActionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const [action, patientId] = button.dataset.patientAction.split(':');
      handlePatientAction(patientId, action);
    });
  });

  const claimActionButtons = document.querySelectorAll('[data-claim-action]');
  claimActionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const [action, claimId] = button.dataset.claimAction.split(':');
      handleClaimAction(claimId, action);
    });
  });

  const cancelButtons = document.querySelectorAll('[data-cancel-appointment]');
  cancelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const appointmentId = button.dataset.cancelAppointment;
      appState.appointments = appState.appointments.filter((item) => item.id !== appointmentId);
      saveState(appState);
      render();
      setFlash('Appointment cancelled successfully.', 'info');
    });
  });
}

render();
