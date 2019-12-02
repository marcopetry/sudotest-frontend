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
    let erro = 'Esse campo é obrigatório!'
    if(nomeProva === ''){
        id = '#nome-prova ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(dataRealizacao === ''){
        id = '#dataRealizacao ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(horaInicio === ''){
        id = '#horaInicio ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(horaTermino === ''){
        id = '#horaTermino ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(qtdQuestoesMatematica === ''){
        id = '#qtdQuestoesMatematica ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(qtdQuestoesPortugues === ''){
        id = '#qtdQuestoesPortugues ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(qtdQuestoesInformatica === ''){
        id = '#qtdQuestoesInformatica ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(qtdQuestoesConhecimentosGerais === ''){
        id = '#qtdQuestoesConhecimentosGerais ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(porcentagemAprovacao === ''){
        id = '#porcentagemAprovacao ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }

    if(vagasDisponiveis === ''){
        id = '#vagasDisponiveis ';
        document.querySelector(id + 'input').classList.add('border-erro');
        document.querySelector(id + 'span').innerHTML = erro;
        return false;
    }
    return true;
}