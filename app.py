from flask import Flask, render_template

# Create the Flask application
app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('hello.html')


"""
Params: Info from here: 
https://ipinfo.io/developers/ip-to-geolocation-database

Returns:
1. img src for flag of a given area code
"""


@app.route('/get-current-user-flag')
def get_current_user_flag():
    pass


if __name__ == '__main__':
    app.run(debug=True)
