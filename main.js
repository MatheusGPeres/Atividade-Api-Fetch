function mostraConselho(x, y) {
    let p = document.createElement('p');
    p.textContent = "Conselho nº " + y + ": " + x;
    p.setAttribute("class", "conselho");
    document.body.appendChild(p);
}

function removerUltimoConselho() {
    let conselhos = document.querySelectorAll(".conselho");
    if (conselhos.length > 0) {
        let ultimoConselho = conselhos[conselhos.length - 1];
        ultimoConselho.parentNode.removeChild(ultimoConselho);
    } else {
        console.log("Não há conselhos para remover.");
    }
}

function removerTodosConselhos() {
    let conselhos = document.querySelectorAll(".conselho");
    conselhos.forEach(conselho => conselho.parentNode.removeChild(conselho));
}

function fetchConselho() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => mostraConselho(data.slip.advice, data.slip.id))
        .catch(error => console.error('Erro:', error));
}

function atualizarConselho() {
    removerTodosConselhos();
    fetchConselho();
}

function main() {
    document.querySelector("#btnConselho")
        .addEventListener('click', evt => {
            fetchConselho();
        });

    document.querySelector("#btnApagaUm")
        .addEventListener('click', evt => {
            removerUltimoConselho();
        });

    document.querySelector("#btnApagaTodos")
        .addEventListener('click', evt => {
            removerTodosConselhos();
        });

    document.querySelector("#btnAtt")
        .addEventListener('click', evt => {
            atualizarConselho();
        })
}

window.onload = main;
