import React from 'react';

export function validarCadastroProva(
    nomeProva,
    dataRealizacao,
    horaInicio,
    horaTermino,
    qtdQuestoesMatematica,
    qtdQuestoesPortugues,
    qtdQuestoesInformatica,
    qtdQuestoesConhecimentosGerais,
    porcentagemAprovacao,
    vagasDisponiveis,
) {
    let id;
    if(nomeProva === ''){
        id = '#nome-prova ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    if(dataRealizacao === ''){
        id = '#dataRealizacao ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    if(horaInicio === ''){
        id = '#horaInicio ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    if(horaTermino === ''){
        id = '#horaTermino ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    if(qtdQuestoesMatematica === ''){
        id = '#qtdQuestoesMatematica ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    if(qtdQuestoesPortugues === ''){
        id = '#qtdQuestoesPortugues ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    if(qtdQuestoesInformatica === ''){
        id = '#qtdQuestoesInformatica ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    if(qtdQuestoesConhecimentosGerais === ''){
        id = '#qtdQuestoesConhecimentosGerais ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    console.log(porcentagemAprovacao)

    if(porcentagemAprovacao === ''){
        id = '#porcentagemAprovacao ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }

    if(vagasDisponiveis === ''){
        id = '#vagasDisponiveis ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = 'Esse campo é obrigatório!';
    }
    console.log(horaInicio);
}