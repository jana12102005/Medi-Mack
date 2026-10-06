# Hosting Guide — MediMack Learning Solution (Flask Backend)

This project is now equipped with a full **Flask (Python) backend** for seamless cloud hosting and navigation routing.

---

## 🚀 Files Included for Flask Backend

1. **`app.py`**: Main Flask application server handling routes, static file serving, and REST API endpoints.
2. **`requirements.txt`**: Python dependencies (`Flask`, `gunicorn`).
3. **`Procfile`**: Production WSGI process file for cloud platforms (Render, Heroku, Railway).

---

## 💻 Running Locally

To run the server on your computer:

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the Flask server
python app.py
```

Open your browser and visit: `http://localhost:5000`

---

## 🌐 Cloud Hosting Options

### Option 1: Render (Free & Recommended)
1. Push your project to GitHub.
2. Log into [render.com](https://render.com) and click **New → Web Service**.
3. Connect your GitHub repository.
4. Set the build & start settings:
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
5. Click **Create Web Service**. Render will host your site live!

---

### Option 2: PythonAnywhere (Free)
1. Register at [pythonanywhere.com](https://www.pythonanywhere.com).
2. Upload your project folder or clone from GitHub.
3. In the **Web** tab, create a new Flask Web App pointing to Python 3.10.
4. Set WSGI path to `app.py` (or set `app` as WSGI callable).
5. Click **Reload**. Your site will be live at `yourusername.pythonanywhere.com`!

---

### Option 3: Railway / Heroku
1. Push project to GitHub.
2. Connect repository to Railway/Heroku.
3. Railway/Heroku will automatically detect `Procfile` and `requirements.txt` and launch `gunicorn app:app`.

---

## 🛣️ Server Navigation Routes & API Endpoints

- `GET /` — Main Single Page Application (`index.html`)
- `GET /approach` → Redirects to `/#approach`
- `GET /programs` → Redirects to `/#programs`
- `GET /journey` → Redirects to `/#journey`
- `GET /careers` → Redirects to `/#careers`
- `GET /about` → Redirects to `/#about`
- `GET /contact` → Redirects to `/#contact`
- `GET /program/<id>` → Redirects to `/#program-<id>`
- `POST /api/contact` — Receives contact form submissions with JSON responses
- `GET /api/health` — Health check endpoint (`{"status": "online"}`)
