import React from 'react';

export function validarCadastroProva(
    nomeProva,
    horaInicio,
    horaTermino,
    qtdQuestoesMatematica,
    qtdQuestoesPortugues,
    qtdQuestoesInformatica,
    qtdQuestoesConhecimentosGerais,
    porcentagemAprovacao,
    dataRealizacao,
    vagasDisponiveis,
    token,
    status
) {
    if(nomeProva === ''){
        const adicionarMensagem = document.getElementById('nome-prova');
        console.log(adicionarMensagem);
        //adicionarMensagem.innerHTML = adicionarMensagem + '<h1>Esqueceu</h1>';
        adicionarMensagem.classList.add('border-erro');
        alert('corno');
    }
}