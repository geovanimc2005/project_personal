from flask import Flask, jsonify, request
from flask_cors import CORS
import datetime

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) 

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Olá!",
        "timestamp": datetime.datetime.now().isoformat()
    })

@app.route("/dados", methods=["POST"])
def receber_dados():
    if request.is_json:
        dados_recebidos = request.json
        return jsonify({
            "mensagem": "Dados recebidos!",
            "seus_dados": dados_recebidos
        }), 200
    else:
        return jsonify({"mensagem": "Erro!"}), 400

if __name__ == "__main__":
    app.run(port=8000, debug=True)
