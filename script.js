//programado por geovani moura coratti: 22/06/2025

const tabButtonsContainer = document.getElementById('tabButtons');
const tabContents = document.querySelectorAll('.tab-content');
const button1 = document.getElementById("data-btn");
const error = document.getElementById("error");
const conteudo = document.getElementById("principal");
const button = document.getElementById("botao");
const button2 = document.getElementById("area");
var geo = document.getElementById("area");
tabButtonsContainer.addEventListener('click', (event) => {
    const clickedButton = event.target;
    const targetContentId = clickedButton.dataset.tab;

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    clickedButton.classList.add('active');
    document.getElementById(targetContentId).classList.add('active');
});

document.querySelector('.tab-button.active').click();
function decodeHtml(html){
    const text = document.createElement('textarea');
    text.innerHTML = html;
    return text.value;
}
async function data(){
    const das = document.createElement("li");
    try{
        const dados = await fetch("https://opentdb.com/api.php?amount=1&category=9&type=multiple");
        const da = await dados.json();
        const resultados = da.results[0];
        conteudo.textContent = decodeHtml(resultados.question);
        tabButtonsContainer.appendChild(asa);

    }catch(erro){
        console.log(erro);
        error.textContent = erro;
        error.blur();
    }
}
async function apenas_soluções(){
    const resposta = document.getElementById("only");
    var asa = 0;
    var variaveis = [];
    for(i = 0; i < 10; i++){
        asa += i * 2;
        variaveis.push(asa);
    }
    resposta.textContent = variaveis;
}
async function salvar(){
    //sempre precisamos de uma cursed word para todo mundo, pessoal;
    var conteud = conteudo.value;
    const palavras = ["foda", "caralho"];
    const a = document.createElement('li');
    const blob = new Blob([conteud], {type: "text/plain" })
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = "asa2asa";
    document.body.appendChild(a);
    for(i = 0; i < palavras.length; i++){
        if(palavras[i] == geo.value){
            alert("apague este palavrão");
        }
    }
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        console.log(`Arquivo "asasas" gerado e download iniciado.`);
    }, 100);
}
async function servidores(){
    fetch("http://localhost:8000").then(codigos => {
        console.log("funcionando");
    });
}
const square = t => Math.sign(Math.sin(t));
button1.addEventListener('click', () =>{
    data();

});
button.addEventListener("click", () =>{
    salvar();
});
servidores();
