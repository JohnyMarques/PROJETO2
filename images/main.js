const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado"> Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado"> Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizarTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputaNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida no sistema`)
    }
    else{
        atividades.push(inputNomeAtividade.value);
notas.push(parseFloat(inputaNotaAtividade.value));


let linha = '<tr>';
linha += `<td>${inputNomeAtividade.value}</td>`;
linha += `<td>${inputaNotaAtividade.value}</td>`;
linha += `<td>${inputaNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
linha += '<tr>';

linhas += linha;

    }




    inputNomeAtividade.value = '';
    inputaNotaAtividade.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
   const mediaFinal =  calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){
    let somaDasNotas = 0;
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

        return somaDasNotas / notas.length;

    
}