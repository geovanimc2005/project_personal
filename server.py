from flask import Flask, jsonify, request # Importe request, caso precise
from flask_cors import CORS # Importe CORS

app = Flask(__name__)


CORS(app, resources={r"/*": {"origins": "*"}}) 


print("Servidor Flask inicializando...")

@app.route("/", methods=["GET"]) # Mudei para a rota raiz para simplificar o teste inicial
def home():
    print(f"Requisição recebida da origem: {request.headers.get('Origin')}")
    return jsonify({
        "message": "Olá do Flask! CORS configurado!",
        "timestamp": app.config['START_TIME'] # Exemplo de dado dinâmico
    })

# Você pode adicionar sua rota '/run' também, se preferir
@app.route("/run", methods=["GET"])
def servicos():
    todos_os_args = request.args.to_dict() 
    print(f"Requisição GET recebida com parâmetros: {todos_os_args}")
    return jsonify({
        "status": "sucesso",
        "mensagem": "Dados recebidos via GET!",
        "seus_dados": todos_os_args
    })

if __name__ == "__main__":
    import datetime
    app.config['START_TIME'] = datetime.datetime.now().isoformat() # Apenas para exemplo
    print("Iniciando o servidor Flask na porta 8000...")
    app.run(port=8000, debug=True)
