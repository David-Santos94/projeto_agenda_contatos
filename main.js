const nomes = [];
const numeros = [];
let linhas = '';

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numeroTel');

    if(nomes.includes(inputNome.value) || numeros.includes(inputNumero.value)) {
        if(nomes.includes(inputNome.value)) {
            alert(`Este nome: ${inputNome.value} já foi inserido`);
        }
        else {
            alert(`Este número: ${inputNumero.value} já foi inserido`);
        }
    }
     else {
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}