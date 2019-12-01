import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { formatarDadosMeusResultados } from '../helpers/TratamentoDadosParaTabela';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import ControllerListarInformacoes from '../components/ListarInformacoes/ControllerListarInformacoes';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import { formatarListaRankingAlunos } from '../helpers/TratamentoDadosParaTabela';

const cabecalhoTabela = ["Nome prova", "Data", "Quantidade de vagas", "Aprovados", "Média geral", "Minha nota"];
export default function ControllerMeusResultados({ history }) {
    const [dados, setDados] = useState(''),
        [loading, setLoading] = useState(true); 
        

    console.log('dados ', dados);

    async function buscarResultados(idAluno) {
        const response = await api.get('/buscaAlunosProvas', {
            params: {
                idAluno
            }
        })
        setDados(formatarDadosMeusResultados(response.data));
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

    //console.log(dados);
    //console.log(provas);
    console.log(dados.length);
    if (dados.length === 0) {
        console.log('porque ')
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