let numcontador = document.querySelector('.contador');
let botaoAumentar = document.querySelector('.botaoAumentar');
let botaoDiminuir = document.querySelector('botaoDiminuir');
introContador = 0
function aumentarContador(){
    newContador = introContador + 1
    introContador = newContador
    numcontador.innerHTML = introContador
}
function diminuirContador(){
    newContador = introContador - 1
    introContador = newContador
    numcontador.innerHTML = introContador
}
botaoAumentar.addEventListener('click', aumentarContador)
botaoDiminuir.addEventListener('click', diminuirContador)