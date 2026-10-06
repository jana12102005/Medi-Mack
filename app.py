from flask import Flask, render_template_string, send_from_directory, jsonify, request, redirect, url_for
import os

app = Flask(__name__, static_folder='.', static_url_path='')

# Secret key for sessions
app.secret_key = os.environ.get('SECRET_KEY', 'medimack_secret_key_2026')

@app.route('/')
def index():
    """Serve the main single page application"""
    return send_from_directory('.', 'index.html')

@app.route('/styles.css')
def serve_css():
    return send_from_directory('.', 'styles.css')

@app.route('/app.js')
def serve_app_js():
    return send_from_directory('.', 'app.js')

@app.route('/data.js')
def serve_data_js():
    return send_from_directory('.', 'data.js')

@app.route('/favicon.ico')
@app.route('/favicon.png')
def serve_favicon():
    return send_from_directory('assets', 'medi-mack-logo.png', mimetype='image/png')

@app.route('/assets/<path:filename>')
def serve_assets(filename):
    return send_from_directory('assets', filename)

# NAVIGATION ROUTE REDIRECTS FOR HOSTING & DIRECT URL ACCESS
@app.route('/approach')
def route_approach():
    return redirect('/#approach')

@app.route('/programs')
def route_programs():
    return redirect('/#programs')

@app.route('/journey')
def route_journey():
    return redirect('/#journey')

@app.route('/careers')
def route_careers():
    return redirect('/#careers')

@app.route('/about')
def route_about():
    return redirect('/#about')

@app.route('/contact')
def route_contact():
    return redirect('/#contact')

@app.route('/program/<int:program_id>')
def route_program_detail(program_id):
    return redirect(f'/#program-{program_id}')

# BACKEND API ENDPOINTS
@app.route('/api/contact', methods=['POST'])
def api_contact():
    """Handle contact form submissions"""
    data = request.get_json(silent=True) or request.form
    name = data.get('n') or data.get('name', '')
    organisation = data.get('o') or data.get('organisation', '')
    enquiry_type = data.get('t') or data.get('enquiry_type', '')
    message = data.get('m') or data.get('message', '')

    if not name or not message:
        return jsonify({
            'status': 'error',
            'message': 'Name and message are required.'
        }), 400

    # Log enquiry locally
    print(f"[ENQUIRY RECEIVED] Name: {name}, Org: {organisation}, Type: {enquiry_type}")

    return jsonify({
        'status': 'success',
        'message': f'Thank you {name}! Your enquiry has been received. We will contact you at medimac2@gmail.com shortly.'
    }), 200

@app.route('/api/health')
def health_check():
    return jsonify({'status': 'online', 'service': 'MediMack Learning Solution Flask Backend'}), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    print(f"Starting MediMack Flask Server on http://localhost:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)
