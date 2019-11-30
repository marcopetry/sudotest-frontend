import React from 'react';
import api from '../services/api';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';

const cabecalhoDadosRanking = ["Colocação", "Nome", ]
export default function ControllerProvaEncerrada({ history }){
    const prova = history.location.state;
    
    async function gerarRelatorio(idProva) {
        const response = await api.get('/geraRelatorio', {
            params: {
                idProva
            }
        });
        console.log(response.data);
    }

    gerarRelatorio(prova.id)
    return (
        <ListarInformacoes 
        cabecalhoTabela={""}
        dadosTabela={""}/>
    );
}