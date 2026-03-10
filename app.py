from sense_hat import SenseHat
from flask import Flask, render_template, jsonify

app = Flask(__name__)
sense = SenseHat()
sense.clear()

# Route pour la page d'accueil (le design)
@app.route("/")
def index():
    return render_template("index.html")

# Route pour les données (l'API que le JavaScript va appeler)
@app.route("/api/data")
def get_data():
    temp = round(sense.get_temperature(), 1)
    humidity = round(sense.get_humidity(), 1)
    pressure = round(sense.get_pressure(), 1)
    
    # On renvoie les données sous forme de JSON
    return jsonify({
        'temperature': temp,
        'humidity': humidity,
        'pressure': pressure
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
