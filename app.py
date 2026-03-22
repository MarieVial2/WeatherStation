import os
from sense_hat import SenseHat
from flask import Flask, render_template, jsonify

app = Flask(__name__)
sense = SenseHat()
sense.clear()

def getCpuTemp():
    with open("/sys/class/thermal/thermal_zone0/temp", "r") as f:
        cpu_temp = int(f.read()) /1000.0
    return cpu_temp
    

# Route pour la page d'accueil (le design)
@app.route("/")
def index():
    return render_template("index.html")

# Route pour les données (l'API que le JavaScript va appeler)
@app.route("/api/data")
def get_data():
    temp_humidity = sense.get_temperature_from_humidity()
    temp_pressure = sense.get_temperature_from_pressure()
    temp_sense = (temp_humidity + temp_pressure) / 2
    
    temp_cpu = getCpuTemp()
    temp_calibre = temp_sense - ((temp_cpu - temp_sense) / 1.5)
    
    temp = round(temp_calibre, 1)
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
