from flask import Flask, render_template, request, session
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/capitalize', methods=['POST'])
def capitalize():
    text = str(request.form['text'])
    text = text.upper()
    return render_template('index.html', text=text)




app.run(port=4996)