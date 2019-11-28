export function monitorarQuestoesProva(
    listaRespostas,
    indiceQuestao,
    alternativaMarcada,
    idAluno,
    idProva,
    idQuestao,
    alternativaCerta) {
    
    let resposta;
    if(alternativaMarcada === alternativaCerta){
        resposta = "correta";
    }else {
        resposta = "errada";
    }
    
    if (indiceQuestao < listaRespostas.lenght) {
        listaRespostas.push({
            idAluno,
            idProva,
            idQuestao,
            resposta,
            alternativaMarcada
        });
    } else {
        listaRespostas[indiceQuestao] = {
            idAluno,
            idProva,
            idQuestao,
            resposta,
            alternativaMarcada
        };
    }
    return listaRespostas;
}

export function conferirSeTodasRespostasEstaoMarcadas(listaRespostas) {
    console.log(listaRespostas);
    for (let i = 0; i < listaRespostas.length; i++) {
        if (listaRespostas[i].alternativaMarcada === "") {
            let numeroQuestao = i + 1;
            alert('Questão ' + numeroQuestao + ' não foi marcada.');
            return false;
        }
    }
    return true;
}

/*  idAluno,
    idProva,
    idQuestao,
    //resposta,
    alternativaMarcada,*/