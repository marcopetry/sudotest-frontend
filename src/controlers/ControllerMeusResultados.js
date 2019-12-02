import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { formatarDadosMeusResultados } from '../helpers/TratamentoDadosParaTabela';
import ControllerListarInformacoes from './ControllerListarInformacoes';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import { formatarListaRankingAlunos } from '../helpers/TratamentoDadosParaTabela';
import Feedback from '../components/Feedback/Feedback';

const cabecalhoTabela = ["Nome prova", "Data", "Quantidade de vagas", "Aprovados", "Média geral", "Minha nota"];
export default function ControllerMeusResultados({ history }) {
    const [dados, setDados] = useState(''),
        [loading, setLoading] = useState(true); 

    async function buscarResultados(idAluno) {
        const response = await api.get('/buscaAlunosProvas', {
            params: {
                idAluno
            }
        })
        setDados(formatarDadosMeusResultados(response.data));
        setLoading(false)
    }

    async function gerarRelatorio(idProva) {
        console.log(idProva)
        const response = await api.get('/geraRelatorio', {
            params: {
                idProva
            }
        });
        console.log(response.data);
        setDados(formatarListaRankingAlunos(response.data));
        setLoading(false)
    }

    //gera todas as provas que o aluno fez
    if (dados === '' && history.location.pathname.indexOf('/ranking-prova/') === -1)
        buscarResultados(localStorage.getItem('idUsuario'));

    let idClicado = localStorage.getItem('idClicado');
    if(history.location.pathname.indexOf('/ranking-prova/') !== -1 && idClicado !== null){
        localStorage.removeItem('idClicado');
        console.log('id buscar relatório ', idClicado);
        gerarRelatorio(idClicado);
    }

    if (dados.length === 0 && !loading) {
        return <Feedback msgPrimaria={'Você não realizou nenhuma prova!'} />
    }

    if (loading) {
        return <TelaEspera />
    }

    return (
        <ControllerListarInformacoes
            cabecalhoTabela={cabecalhoTabela}
            dadosTabela={dados}
            funcaoClick={() => { }}
        />
    );
}