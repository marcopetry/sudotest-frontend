
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

const cabecalhoTabela = ["Nome prova", "Data", "Quantidade de vagas", "Aprovados", "Média geral", "Minha nota", "Colocação"];
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