export function monitorarQuestoesProva(listaRespostas, indiceQuestao, idQuestao, alternativaMarcada){
    if(indiceQuestao < listaRespostas.lenght){
        listaRespostas.push({
            idQuestao,
            alternativaMarcada
        });
    }else {
        listaRespostas[indiceQuestao] = {
            idQuestao,
            alternativaMarcada
        };
    }
    return listaRespostas;
}