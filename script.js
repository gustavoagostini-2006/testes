

const meuNome = "Gustavo";



let cliques = 0;

const botaoSaudacao =
    document.querySelector("#btn-curiosidade");


const saudacao =
    document.querySelector("#curiosidade");



botaoSaudacao.addEventListener("click", () => {

cliques++;


    saudacao.textContent =
        `Fica clicando bobão! Apertei você ${cliques} vez(es).`;

});




const botaoModoClaro =
    document.querySelector("#modo-claro");



botaoModoClaro.addEventListener("click", () => {


    document.body.classList.toggle("claro");

});
