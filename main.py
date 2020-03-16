from flask import Flask, render_template, request
from re import split
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/capitalize', methods=['POST'])
def capitalize():
    text = str(request.form['text'])
    converted_text = text.upper()
    return render_template('index.html', text=text, converted_text=converted_text)

@app.route('/lower', methods=['POST'])
def lower():
    text = str(request.form['text'])
    converted_text = text.lower()
    return render_template('index.html', text=text, converted_text=converted_text)

@app.route('/removepunc', methods=['POST'])
def removepunc():
    punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
    text = str(request.form['text'])
    converted_text = ""
    for char in text:
        if char not in punctuations:
            converted_text = converted_text + char
    return render_template('index.html', text=text, converted_text=converted_text)

@app.route('/camelcase', methods=['POST'])
def camelcase():
    text = str(request.form['text'])
    converted_text = ''.join(a.capitalize() for a in split('([^a-zA-Z0-9])', text)
       if a.isalnum())
    return render_template('index.html', text=text, converted_text=converted_text)


app.run(port=4996)