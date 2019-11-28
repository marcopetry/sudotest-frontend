import React, { useState, useEffect } from 'react';
import Dashboards from '../components/Dashboards/Dashboards';
import ControlerAdm from './ControllerADM';
import { acoesADM } from './ControllerADM';
import ControllerAluno from './ControllerAluno';
import { acoesAluno, acoesProva } from './ControllerAluno';
import ControllerProva from './ControllerProva';
import Login from '../components/Login/Login';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import api from '../services/api';
import { preencherListaComRespostasVazias } from '../helpers/MonitorQuestoesProva';
import { buscarQuestoes } from './ControllerProva';

let listaRespostasVazias = [];

/* async function buscarQuestoesProva() {
    listaRespostasVazias = await buscarQuestoes();
} */

export default function ControlerInicial({ history }) {
    //verificar se é usuário ou adm e passar informações pra dash
    const [acao, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState(localStorage.getItem('Usuario')), 
        [questoes, setQuestoes] = useState(''), 
        [execucao, setExecucao] = useState('');

    let acoes;
    

    /* async function buscarQuestoes(e) {
        const prova = JSON.parse(localStorage.getItem('prova'));
        console.log('prova', prova);
        const response = await api.get('/buscaProvasQuestoes', {
            params: {
                idProva: prova.id
            }
        })
        if (response) {
            const idAluno = localStorage.getItem('idUsuario');
            response.data.map( questao => {
                preencherListaComRespostasVazias(idAluno, prova.id, questao.id, listaRespostasVazias)
            });
            console.log('lista no inicio', listaRespostasVazias);
        }else{
            //validar quando questões não são retornadas
            setExecucao('feedback');
            console.log(response, ' deu problema');
        }
    } */

    
    if (tipoUsuario === 'adm') {
        acoes = acoesADM;
    } else if (tipoUsuario === 'user') {
        acoes = acoesAluno;
    } else if (tipoUsuario === 'user-prova') {
        async function buscarQuestoesProva() {
            listaRespostasVazias = [];
            listaRespostasVazias = await buscarQuestoes();
            setAcao('resposta');
            console.log(listaRespostasVazias);
        }
        console.log('lista', listaRespostasVazias)
        if(listaRespostasVazias.length === 0){
            buscarQuestoesProva();
        }
        
        console.log(acao);
        acoes = acoesProva;
    } else {
        history.push('/');
        return <Login />
    }

    const trocarAcao = (e) => setAcao(e);
    
    return (
        <>
            <Dashboards mudarAtividade={trocarAcao} acoesUsuario={acoes} history={history} />
            {tipoUsuario === 'adm' && <ControlerAdm acaoEscolhida={acao} history={history} />}
            {tipoUsuario === 'user' && <ControllerAluno acaoEscolhida={acao} history={history} />}
            {tipoUsuario === 'user-prova' && <ControllerProva acaoEscolhida={acao} history={history} />}
        </>
    );
}
