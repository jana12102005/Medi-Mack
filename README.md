# MediMack Learning Solution — Pharmacy Education & Career Platform

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Website-www.medimack.me-teal.svg)](https://www.medimack.me)

**MediMack Learning Solution** is a modern, industry-focused pharmacy education platform. It bridges academic pharmacy knowledge with real-world pharmaceutical, clinical research, quality management, and AI drug discovery careers through **20-day intensive, hands-on programs**.

---

## 🌟 Key Features

- 🎓 **10 Specialized Industry Tracks**: From *Pharmacovigilance* and *Clinical Research* to *AI-Powered Drug Discovery* and *Quality Control*.
- 📅 **20-Day Structured Curriculum**: Day-by-day sub-topics, tools/AI workflows, and practical activities.
- 🏢 **Target Companies Mapping**: Explicit career pathways for CRO/Clinical (*IQVIA, Parexel*), Pharma (*Sun Pharma, Cipla, Dr. Reddy's*), and Healthcare/IT (*Accenture, Cognizant, TCS*).
- ⚡ **Lightweight Single Page Application (SPA)**: Zero heavy framework dependencies, high-performance UI rendering.
- 🐍 **Flask (Python) Backend**: API routes for form submissions, static file serving, and navigation URL redirects for cloud hosting.
- 🎨 **Modern Minimalist UI**: Built with a clean grid design system, custom typography (*Source Serif 4* & *Plus Jakarta Sans*), and responsive mobile drawer navigation.

---

## 📚 20-Day Course Catalog

| # | Course Title | Domain Category | Key Tools & Technologies | Target Roles |
|---|---|---|---|---|
| **01** | **Pharmacovigilance & Drug Safety** | Safety & Clinical | Argus Safety, MedDRA, WHO-Drug, EudraVigilance, FAERS | PV Associate, Safety Scientist |
| **02** | **Clinical Research & Clinical Trials** | Safety & Clinical | ICH-GCP, CTRI Portal, Protocol & ICF Templates | Clinical Research Associate, CRA |
| **03** | **Clinical Data Management** | Safety & Clinical | Medidata / OpenClinica EDC, CDISC SDTM, SQL | Data Manager, CDM Coordinator |
| **04** | **Drug Discovery & Development** | Discovery & AI | UniProt, PubChem, SwissADME, ProTox | Research Associate, Preclinical Associate |
| **05** | **Molecular Docking & Virtual Screening** | Discovery & AI | PyRx, AutoDock Vina, PyMOL, Open Babel, Python | CADD Specialist, Docking Trainee |
| **06** | **Bioavailability & Bioequivalence** | Quality & Analytics | PK Curve Modeling, WinNonlin/Excel PK calculations | BA/BE Associate, PK Trainee |
| **07** | **Pharmaceutical Quality Assurance** | Quality & Analytics | QMS, BMR/BPR, CAPA, Deviation & VMP Templates | QA Executive, Compliance Officer |
| **08** | **Pharmaceutical Quality Control & Analytics** | Quality & Analytics | HPLC (Empower), UV-Vis, GC, Dissolution, ICH Q2 | QC Analyst, Lab Executive |
| **09** | **AI-Powered Drug Discovery** | Discovery & AI | Python, RDKit, scikit-learn, PyTorch, AlphaFold DB | AI Drug Discovery Analyst |

---

## 📁 Repository Structure

```
Medi-Mack/
├── app.py                  # Flask backend application (Routes & REST API)
├── app.js                  # Frontend SPA router, interactive controls & API fetch
├── data.js                 # Complete 20-day course syllabus & outcomes store
├── index.html              # Main HTML5 application layout
├── styles.css              # Custom CSS design system & typography
├── requirements.txt        # Python dependencies (Flask, Gunicorn)
├── Procfile                # WSGI entry point for production hosting
├── HOSTING_GUIDE.md        # Deployment instructions for Render, PythonAnywhere, etc.
├── favicon.ico             # Root favicon icon
├── favicon.png             # PNG favicon icon
└── assets/
    └── medi-mack-logo.png  # Official logo asset
```

---

## 🛠️ Local Installation & Running

### Prerequisites
- Python 3.10+
- Git

### Setup Steps
```bash
# 1. Clone the repository
git clone https://github.com/jana12102005/Medi-Mack.git
cd Medi-Mack

# 2. Install dependencies
pip install -r requirements.txt

# 3. Start the Flask server
python app.py
```

Open your browser and visit: `http://localhost:5000`

---

## ☁️ Cloud Deployment

The repository includes a `Procfile` and `requirements.txt` ready for one-click deployment on platforms such as **Render**, **PythonAnywhere**, **Railway**, or **Heroku**:

- **Render**: Connect repo → Environment `Python 3` → Build `pip install -r requirements.txt` → Start `gunicorn app:app`
- **PythonAnywhere**: Upload repo → Point Web App WSGI to `app.py` → Reload.

*For detailed step-by-step hosting instructions, see [HOSTING_GUIDE.md](HOSTING_GUIDE.md).*

---

## 📍 Contact & Institution Details

* 🏢 **Company**: MediMack Learning Solution
* 📍 **Locations**: Coimbatore · Chennai, India
* ✉️ **Email**: [medimac2@gmail.com](mailto:medimac2@gmail.com)
* 🌐 **Website**: [www.medimack.me](https://www.medimack.me)
* 💼 **LinkedIn**: [MediMack Learning Solution](https://www.linkedin.com)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
© 2026 MediMack Learning Solution. All rights reserved.
