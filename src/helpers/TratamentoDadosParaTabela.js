
export function formatarDadosProvasAbertas(listaProvas) {
    let listaDados = [];
    listaProvas.map(prova => {
        listaDados.push({
            id: prova.id,
            primeiraInfo: prova.nomeProva,
            segundaInfo: formatarData(prova.dataRealizacao),
            terceiraInfo: prova.horaInicio,
            quartaInfo: prova.horaTermino,
            quintaInfo: prova.vagasDisponiveis,
            sextaInfo: prova.token,
        }); 
    }); 
    return listaDados;
}

export function formatarDadosProvasEncerradas(listaProvas) {
    let listaDados = [];
    listaProvas.map(prova => {
        listaDados.push({
            id: prova.id,
            primeiraInfo: prova.nomeProva,
            segundaInfo: formatarData(prova.dataRealizacao),
            terceiraInfo: prova.qtdAprovados,
            quartaInfo: prova.vagasDisponiveis,
            quintaInfo: prova.mediaGeral,
            sextaInfo: prova.status,
        }); 
    }); 
    return listaDados;
}

export function formatarData(dataBanco){
    const data = dataBanco.split('-');
    return data[2] + '/' + data[1] + '/' + data[0];
}