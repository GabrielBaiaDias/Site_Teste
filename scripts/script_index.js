const cores = {
    seq1: ["#FCD7AD", "#A57548", "#F5BA7A", "#ffffff"],
    seq2: ["white", "blueviolet", "chartreuse", "black"]
}

const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const h2 = document.querySelectorAll('h2');

var btnA = document.getElementById("btn_avanca");
var btnV = document.getElementById("btn_volta");

let num = 0;

btnA.onclick = () => {num++;EscolheSeq()};
btnV.onclick = () => {num--;EscolheSeq()};


function MudaCores(arrayCores) {
    main.style.backgroundColor = arrayCores[0];
    h1.style.color = arrayCores[1];
    h2.forEach(h2 => {h2.style.color = arrayCores[2];});
    p.forEach(p => {p.style.color = arrayCores[3];});
}

function EscolheSeq() {
    if (num % 2 == 0) {
        MudaCores(cores.seq1);
    } else {
        MudaCores(cores.seq2)
    }
}