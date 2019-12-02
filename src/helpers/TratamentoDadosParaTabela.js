
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

export function formatarDadosAlunosParaExibicao(listaAluno){
    let listaDadosFormatados = [];
    listaAluno.map(aluno => {
        listaDadosFormatados.push({
            id: aluno.id,
            primeiraInfo: aluno.nome,
            segundaInfo: aluno.email,
            terceiraInfo: aluno.cpf,
            quartaInfo: aluno.telefone,
            quintaInfo: aluno.idade,
            sextaInfo: "",
        }); 
    });
    return listaDadosFormatados;
}

export function formatarDadosMeusResultados(resultados){
    let listaDadosFormatados = [];
    resultados.map(resultadoProva => {
        //console.log(resultadoProva);
        listaDadosFormatados.push({
            id: resultadoProva.Prova.id,
            primeiraInfo: resultadoProva.Prova.nomeProva,
            segundaInfo: formatarData(resultadoProva.Prova.dataRealizacao),
            terceiraInfo: resultadoProva.Prova.vagasDisponiveis,
            quartaInfo: resultadoProva.Prova.qtdAprovados,
            quintaInfo: resultadoProva.Prova.mediaGeral,
            sextaInfo: resultadoProva.porcentagemMedia,
            setimaInfo: ""
        });
    });
    return listaDadosFormatados;
}

export function formatarDadosQuestoes(listaQuestoes){
    let dadosQuestoesTratados = [];

    listaQuestoes.map( questao => {
        let respostaCerta;
        if(questao.alternativacorreta === 'alternativa1'){
            respostaCerta = questao.alternativa1;
        } else if(questao.alternativacorreta === 'alternativa2'){
            respostaCerta = questao.alternativa2;
        } else if(questao.alternativacorreta === 'alternativa3'){
            respostaCerta = questao.alternativa3;
        }else if(questao.alternativacorreta === 'alternativa4'){
            respostaCerta = questao.alternativa4;
        } else {
            respostaCerta = questao.alternativa5;
        }
        dadosQuestoesTratados.push({
            id: questao.id,
            primeiraInfo: questao.categoria,
            segundaInfo: questao.enunciado,
            terceiraInfo: respostaCerta,
            quartaInfo: "",
            quintaInfo: "",
            sextaInfo: "",
            setimaInfo: ""
        });
    });
    return dadosQuestoesTratados;
}