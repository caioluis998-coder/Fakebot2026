const lista = [
    "Oi bom dia",
    "Sou uma falsa IA Generativa",
    "Vai corinthians",
    "Amo a pietra",
    "Tenho uma 160",
    "Estou com fome",
    " Sou da area comercial"
]


var n = 1;

function funcao() {
    resposta.innerHTML = lista [n];
    n = n + 1;
    if (n> 5){n = 0
    }
}