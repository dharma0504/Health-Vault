<p align="center">
  <img src="https://github.com/dharma0504/Health-Vault/blob/main/hv.png" alt="HealthVault Banner" width="100%"/>
</p>

# 🩺 HealthVault – Digital Health Record Manager

**HealthVault** is a comprehensive digital health record management system designed to bridge the gap between patients, doctors, and diagnostics. It simplifies the process of uploading, accessing, and sharing medical records securely and efficiently.

---

## 🚀 Project Overview

HealthVault provides an integrated platform for three main user roles:

- **Patients** can upload, access, and manage their medical reports.
- **Doctors** can view patient records using a secure OTP-based access and can add their own prescriptions.
- **Diagnostics** can upload reports but cannot view patient data, ensuring confidentiality.

---

## 💡 Innovation & Distinction

- 🔐 **Role-Based Data Access**: Unique permission sets for Patients, Doctors, and Diagnostics ensure data privacy.
- 📲 **OTP-Based Secure Sharing**: Doctors access records through one-time secure links.
- 📊 **Smart Record Management**: Patients can search, filter, and organize their medical history.
- 🌐 **Lightweight & Dev-Friendly**: Uses JSON Server for simulating database operations — no setup overhead for DBMS.

---

## 🧩 Tech Stack

### Frontend
- React.js
- Tailwind CSS / Bootstrap (if used)
- Axios

### Backend
- Node.js
- Express.js
- JSON Server (fake API for development)

---

## 🏗️ Folder Structure

<pre> HealthVault/ 
  ├── Frontend/   # React frontend │ 
      ├── public/ │ 
             └── src/ │ 
             ├── components/ │ 
             ├── pages/ │ 
             └── App.js │ 
  ├── backend/ # Express backend │ 
  ├── controllers/ │ 
  ├── routes/ │ 
  ├── db.json # Fake JSON database │ 
  └── index.js # Entry point │ 
        └── .vscode/ # Editor settings (optional) </pre>



# Step 1: Clone the repository
git clone https://github.com/dharma0504/Health-Vault.git
cd HealthVault

# Step 2: Start the backend
cd backend
npm install
npm start &     # Runs the backend in background

# Step 3: Start the frontend
cd ../Frontend
npm install
npm start       # Opens frontend at http://localhost:3000

# Optional: If using json-server separately
json-server --watch db.json --port 5000


## 👨‍💻 Created By

**Dharmatej Mallampati**

Connect with me:  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/dharmatej-mallampati-47944724a/)

