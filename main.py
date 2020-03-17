from flask import Flask, render_template, request, jsonify
from re import split
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# @app.route('/')
# def home():
#     return render_template('index.html')

@app.route('/capitalize', methods=['POST'])
def capitalize():
    textJson = request.get_json()
    text = str(textJson['text'])
    converted_text = text.upper()
    print(converted_text)
    return jsonify({"converted_text": converted_text})

@app.route('/lower', methods=['POST'])
def lower():
    textJson = request.get_json()
    text = str(textJson['text'])
    converted_text = text.lower()
    return jsonify({"converted_text": converted_text})

@app.route('/removepunc', methods=['POST'])
def removepunc():
    punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
    textJson = request.get_json()
    text = str(textJson['text'])
    converted_text = ""
    for char in text:
        if char not in punctuations:
            converted_text = converted_text + char
    return jsonify({"converted_text": converted_text})

@app.route('/camelcase', methods=['POST'])
def camelcase():
    textJson = request.get_json()
    text = str(textJson['text'])
    converted_text = ''.join(a.capitalize() for a in split('([^a-zA-Z0-9])', text)
       if a.isalnum())
    return jsonify({"converted_text": converted_text})


app.run(port=4996)