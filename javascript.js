const form = document.getElementById('form-atividade');
const emojiAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />';
const emojiReprovado = '<img src="./images/reprovado.png" alt="emoji triste">';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const atividade = [];
const notaAtiv = [];
var linhas = '';

alert('Média mínima é 7');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atualizaTabela();
    atualizaMedia();

});

function addLinha() {
    const nome = document.getElementById('nome-atividade');
    const nota = document.getElementById('nota-atividade');

    const error = document.getElementById('error');

    if (atividade.includes(nome.value)) {

        error.innerHTML = `A atividade "${nome.value}" já existe`

        error.style.display = 'block';

    }else {

        error.style.display = 'none';

        var linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${nota.value}</td>`;
        linha += `<td>${nota.value >= 7 ? emojiAprovado : emojiReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;

        atividade.push(nome.value);
        notaAtiv.push(parseFloat(nota.value));

    }

    nome.value = '';
    nota.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    var media = calculaMedia();

    document.getElementById('media-nota').innerHTML = media.toFixed(2);
    document.getElementById('media-resultado').innerHTML = media >= 7 ? spanAprovado : spanReprovado;

}

function calculaMedia() {

    var soma = 0;

    for (var i = 0; i < notaAtiv.length; i++) {
        soma += notaAtiv[i];
    }

    return soma / notaAtiv.length;

}