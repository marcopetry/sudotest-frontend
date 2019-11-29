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

export default function ControlerInicial({ history }) {
    //verificar se é usuário ou adm e passar informações pra dash
    const [acao, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState(localStorage.getItem('Usuario')),
        [execucao, setExecucao] = useState('');

    let acoes;

    if (tipoUsuario === 'adm') {
        acoes = acoesADM;
    } else if (tipoUsuario === 'user') {
        acoes = acoesAluno;
    } else if (tipoUsuario === 'user-prova') {
        async function buscarQuestoesProva() {
            listaRespostasVazias = [];
            listaRespostasVazias = await buscarQuestoes();
            setAcao('resposta');
        }
        if (listaRespostasVazias.length === 0) {
            buscarQuestoesProva();
        }
        acoes = [];
        let i = 0;
        listaRespostasVazias.map(elemento => {
            i++;
            acoes.push({
                acao: 'questao-selecionada-' + (i - 0),
                texto: 'Questão ' + i,
                indiceQuestao: i
            })
        });
        acoes.push({
            acao: 'sair',
            texto: 'Encerrar prova'
        })

    } else {
        history.push('/');
        return <Login />
    }

    const trocarAcao = (e) => setAcao(e);
    console.log('acao na inicial', acao);

    return (
        <>
            <Dashboards mudarAtividade={trocarAcao} acoesUsuario={acoes} history={history} listaRespostas={listaRespostasVazias} />
            {tipoUsuario === 'adm' && <ControlerAdm acaoEscolhida={acao} history={history} />}
            {tipoUsuario === 'user' && <ControllerAluno acaoEscolhida={acao} history={history} />}
            {tipoUsuario === 'user-prova' && <ControllerProva acaoEscolhida={acao} history={history} />}
        </>
    );
}
