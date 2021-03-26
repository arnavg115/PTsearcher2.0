from flask import Flask, render_template, jsonify
from flask.helpers import send_file
from utilities import fuzzy

app = Flask(__name__)
@app.route('/')
def main():
    return render_template("index.html")



@app.route("/compiled/<file>")
def sendjs( file):
    return send_file(f"compiledjs/{file}")

@app.route("/compiled/components/<file>")
def sendcomp(file):
    return send_file(f"compiledjs/components/{file}")

@app.route("/query/<query>")
def query(query):
    return jsonify(fuzzy.matcher(query)[0][0])

if '__main__' == __name__:
    app.run(debug=True,port = 5000, host="0.0.0.0")
