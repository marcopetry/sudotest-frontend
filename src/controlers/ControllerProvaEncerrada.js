import React, { useState } from 'react';
import api from '../services/api';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import { formatarListaRankingAlunos } from '../helpers/TratamentoDadosParaTabela';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import Feedback from '../components/Feedback/Feedback';

const cabecalhoRanking = ["Posição", "Nome", "Email", "Telefone", "Idade", "Nota"];

export default function ControllerProvaEncerrada({ history }){
    const prova = history.location.state;
    const [loading, setLoading] = useState(false), 
        [dadosFormatados, setDadosFormatados] = useState('');
    
    async function gerarRelatorio(idProva) {
        setLoading(true);
        const response = await api.get('/geraRelatorio', {
            params: {
                idProva
            }
        });
        setDadosFormatados(formatarListaRankingAlunos(response.data));
        setLoading(false);
    }

    if (loading ) return <TelaEspera />

    console.log(dadosFormatados);
    if(dadosFormatados.length === 0) {
        setTimeout(() => history.push('/provas-encerradas'), 2000);
        return (
            <Feedback msgPrimaria={"Você não tem alunos registrados nessa prova"}/>
        );
    }

    if(dadosFormatados === '')
        gerarRelatorio(prova.id);
    
    return (
        <>
        <ListarInformacoes 
            cabecalhoTabela={cabecalhoRanking}
            dadosTabela={dadosFormatados}
            funcaoClick={() => {}}
            />
        </>
    );
}