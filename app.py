from flask import Flask, render_template
from flask.helpers import send_file
app = Flask(__name__)
@app.route('/')
def main():
    return render_template("index.html")

@app.route("/compiled/<file>")
def sendjs( file):
    return send_file(f"compiledjs/{file}")

if '__main__' == __name__:
    app.run(debug=True)