from distutils.log import debug
from flask import Flask

app = Flask(__name__)


@app.route('/data')
def python():
    return {"Data":["Hello World!"]}

if __name__ == "__main__":
    app.run(debug=True)
