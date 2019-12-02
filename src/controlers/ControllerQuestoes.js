import React, { useState } from 'react';
import api from '../services/api';
import { formatarDadosQuestoes } from '../helpers/TratamentoDadosParaTabela';
import ControllerListarInformacoes from './ControllerListarInformacoes';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import Feedback from '../components/Feedback/Feedback';

const cabecalhoTabela = ["Categoria", "Enunciado", "Resposta certa"];
export default function ControllerQuestoes(){
    const [questoes, setQuestoes] = useState(''), 
        [loading, setLoading] = useState(true);

    async function buscarQuestoesCadastradas() {
        const response = await api.get('/buscaQuestoesCadastradas');
        console.log(response.data);
        setQuestoes(formatarDadosQuestoes(response.data));
        setLoading(false);
    }

    if(questoes === '' && loading){
        buscarQuestoesCadastradas();
        return <TelaEspera />
    }

    if(questoes.length === 0){
        return (
            <Feedback msgPrimaria={"Não existem questões cadastrada"} />
        );
    }

    console.log(questoes);
    return (
        <ControllerListarInformacoes
            cabecalhoTabela={cabecalhoTabela}
            dadosTabela={questoes}
            funcaoClick={() => {}} />
    );
}