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
        [loading, setLoading] = useState(true), 
        [dadosHistory, setDadoshistory] = useState(history.location.state);

    useEffect(() => {
        //vai mostrar o ranking da prova
        console.log(history.location.state)
        if (!typeof (history.location.state) === 'number') {
            console.log('dados funcao ', dados);
            gerarRelatorio(history.location.state);
        }
    }, [history.location.state]);
    

    console.log('dados ', dados);

    async function buscarResultados(idAluno) {
        const response = await api.get('/buscaAlunosProvas', {
            params: {
                idAluno
            }
        })
        setDados(formatarDadosMeusResultados(response.data));
        setLoading(false);
    }

    async function gerarRelatorio(idProva) {
        const response = await api.get('/geraRelatorio', {
            params: {
                idProva
            }
        });
        console.log(response.data);
        setDados(formatarListaRankingAlunos(response.data));
        setLoading(false);
    }

    if (dados === '')
        buscarResultados(localStorage.getItem('idUsuario'));

    if(history.location.pathname.indexOf('/ranking-prova/') !== -1){
        gerarRelatorio(dadosHistory);
    }

    //console.log(dados);
    //console.log(provas);
    if (loading) return <TelaEspera />

    return (
        <ControllerListarInformacoes
            cabecalhoTabela={cabecalhoTabela}
            dadosTabela={dados}
            funcaoClick={() => { }}
        />
    );
}