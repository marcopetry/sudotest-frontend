import React, { useState } from 'react';
import api from '../services/api';
import { formatarDadosQuestoes } from '../helpers/TratamentoDadosParaTabela';
import ControllerListarInformacoes from './ControllerListarInformacoes';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import Feedback from '../components/Feedback/Feedback';
import InfoQuestao from '../components/InfoQuestao/InfoQuestao';

const cabecalhoTabela = ["Categoria", "Enunciado", "Resposta certa"];
export default function ControllerQuestoes({ history }){
    const [questoes, setQuestoes] = useState(''), 
        [loading, setLoading] = useState(true), 
        [acao, setAcao] = useState(''), 
        [idClicado, setIdClicado] = useState(history.location.state);

    
    console.log('id clicado questao', idClicado);
    
    const pegarClique = (e) => setAcao(e);
    
    async function buscarQuestoesCadastradas() {
        const response = await api.get('/buscaQuestoesCadastradas');
        console.log(response.data);
        setQuestoes(formatarDadosQuestoes(response.data));
        setLoading(false);
    }

    if(idClicado !== '' && history.location.pathname === '/info-questao'){
        let questaoSelecionada;
        console.log(questoes);
        questoes.map(questao => {
            if(questao.id === idClicado){
                questaoSelecionada = questao;
            }
        });
        console.log('questao selecionada ', questaoSelecionada);
        return (
            <InfoQuestao questao={questaoSelecionada}/>
        );
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

    console.log(acao);
    return (
        <ControllerListarInformacoes
            cabecalhoTabela={cabecalhoTabela}
            dadosTabela={questoes}
            funcaoClick={pegarClique} />
    );
}