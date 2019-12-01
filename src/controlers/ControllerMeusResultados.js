import React, { useState } from 'react';
import api from '../services/api';
import { formatarDadosMeusResultados } from '../helpers/TratamentoDadosParaTabela';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import ControllerListarInformacoes from '../components/ListarInformacoes/ControllerListarInformacoes';
import TelaEspera from '../components/TelaEspera/TelaEspera';

const cabecalhoTabela = ["Nome prova", "Data", "Quantidade de vagas", "Aprovados", "Média geral", "Minha nota", "Colocação"];
export default function ControllerMeusResultados(){
    const [dados, setDados] = useState(''), 
            [loading, setLoading] = useState(true);

    async function buscarResultados(idAluno) {
        const response = await api.get('/buscaAlunosProvas', {
            params: {
                idAluno
            }
        })
        setDados(formatarDadosMeusResultados(response.data));
        setLoading(false);
    }

    /* async function gerarRelatorio(idProva) {
        //setLoading(true);
        const response = await api.get('/geraRelatorio', {
            params: {
                idProva
            }
        });
        console.log(response.data);
        setProvas(provas.concat(response.data));
        //setDadosFormatados(formatarListaRankingAlunos(response.data));
        //setLoading(false);
    } */

    if(dados === '')
        buscarResultados(localStorage.getItem('idUsuario'));

    //console.log(dados);
    //console.log(provas);
    if(loading) return <TelaEspera />

    return (
        <ControllerListarInformacoes 
            cabecalhoTabela={cabecalhoTabela}
            dadosTabela={dados}
            funcaoClick={() => {}}
            />
    );
}