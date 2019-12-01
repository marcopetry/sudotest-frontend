
export function formatarDadosProvasAbertas(listaProvas) {
    let listaDadosFormatados = [];
    listaProvas.map(prova => {
        listaDadosFormatados.push({
            id: prova.id,
            primeiraInfo: prova.nomeProva,
            segundaInfo: formatarData(prova.dataRealizacao),
            terceiraInfo: prova.horaInicio,
            quartaInfo: prova.horaTermino,
            quintaInfo: prova.vagasDisponiveis,
            sextaInfo: prova.token,
        }); 
    }); 
    return listaDadosFormatados;
}

export function formatarDadosProvasEncerradas(listaProvas) {
    let listaDadosFormatados = [];
    listaProvas.map(prova => {
        listaDadosFormatados.push({
            id: prova.id,
            primeiraInfo: prova.nomeProva,
            segundaInfo: formatarData(prova.dataRealizacao),
            terceiraInfo: prova.qtdAprovados,
            quartaInfo: prova.vagasDisponiveis,
            quintaInfo: prova.mediaGeral,
            sextaInfo: prova.status,
        }); 
    }); 
    return listaDadosFormatados;
}

export function formatarListaRankingAlunos(listaAlunosFizeramProva){
    let listaDadosFormatados = [];
    let posicao = 1;

    listaAlunosFizeramProva.map(aluno => {
        listaDadosFormatados.push({
            id: aluno.Aluno.id,
            primeiraInfo: posicao,
            segundaInfo: aluno.Aluno.nome,
            terceiraInfo: aluno.Aluno.email,
            quartaInfo: aluno.Aluno.telefone,
            quintaInfo: aluno.Aluno.idade,
            sextaInfo: aluno.porcentagemMedia,
        }); 
        posicao++;
    });
    return listaDadosFormatados;
}

export function formatarData(dataBanco){
    const data = dataBanco.split('-');
    return data[2] + '/' + data[1] + '/' + data[0];
}
