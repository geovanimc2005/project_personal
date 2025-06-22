const tabButtonsContainer = document.getElementById('tabButtons');
const tabContents = document.querySelectorAll('.tab-content');
const button1 = document.getElementById("data-btn");
const error = document.getElementById("error");
const conteudo = document.getElementById("principal");
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
    }
}
button1.addEventListener('click', () =>{
    data();
});