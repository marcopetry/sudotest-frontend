import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import { formatarListaRankingAlunos } from '../helpers/TratamentoDadosParaTabela';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import Feedback from '../components/Feedback/Feedback';

const cabecalhoRanking = ["Posição", "Nome", "Email", "Telefone", "Idade", "Nota"];

export default function ControllerProvaEncerrada({ history }){
    const prova = history.location.state;
    const [loading, setLoading] = useState(true),
        [dadosFormatados, setDadosFormatados] = useState('');
    
    useEffect(() => {
        if(dadosFormatados === '' && prova !== undefined){
            gerarRelatorio(prova.id);
        }
    })
    
    async function gerarRelatorio(idProva) {
        //setLoading(true);
        const response = await api.get('/geraRelatorio', {
            params: {
                idProva
            }
        });
        setDadosFormatados(formatarListaRankingAlunos(response.data));
        setLoading(false);
    }
    
    if (loading) {
        return <TelaEspera />
    }else {
        if(dadosFormatados.length === 0) {
            setTimeout(() => history.push('/provas-encerradas'), 3000);
            return (
                <Feedback msgPrimaria={"Você não tem alunos registrados nessa prova"}/>
            );
        }
    }
    
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