export function monitorarQuestoesProva(
    listaRespostas,
    indiceQuestao,
    alternativaMarcada,
    idAluno,
    idProva,
    idQuestao,
    alternativaCerta) {
    
    let resposta;
    if (alternativaMarcada === alternativaCerta) {
        resposta = "correta";
    } else {
        resposta = "errada";
    }

    listaRespostas[indiceQuestao] = {
        idAluno,
        idProva,
        idQuestao,
        resposta,
        alternativaMarcada
    };
    return listaRespostas;
}

export function conferirSeTodasRespostasEstaoMarcadas(listaRespostas) {
    for (let i = 0; i < listaRespostas.length; i++) {
        if (listaRespostas[i].alternativaMarcada === "") {
            let numeroQuestao = i + 1;
            alert('Questão ' + numeroQuestao + ' não foi marcada.');
            return false;
        }
    }
    return true;
}

export function preencherListaComRespostasVazias(
    idAluno,
    idProva,
    idQuestao, 
    listaRespostas) {

    listaRespostas.push({
        idAluno,
        idProva,
        idQuestao,
        resposta: "errada",
        alternativaMarcada: ""
    });
    return listaRespostas;
}