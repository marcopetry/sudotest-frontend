import React, { useState, useEffect } from 'react';
import Dashboards from './Dashboards';
import { acoesADM } from '../../controlers/ControllerADM';
import { acoesAluno } from '../../controlers/ControllerAluno';
import { preencherListaComRespostasVazias } from '../../helpers/MonitorQuestoesProva';
import { buscarQuestoes } from '../../controlers/ControllerProva';
import TelaConfirmacao from '../TelaConfirmacao/TelaConfirmacao';
import Logout from '../Logout/Logout';

let listaRespostasVazias = [];

export default function ControllerDashboard({ history }) {
    const [acao, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState(localStorage.getItem('Usuario'));

    //guarda as ações para a dashboard
    let acoes;
    useEffect(() => {
        /* if(history.location.pathname === '/home' && acao === 'sair' ){
            console.log('setou');
            setAcao('home')
        } */
        history.push(acao);
    }, [acao]);

    console.log('acao dash', acao, ' history', history.location.pathname);

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
    }else {
        history.push('/');
    }

    const trocarAcao = (e) => setAcao(e); 
    
    return (
        <Dashboards 
            mudarAtividade={trocarAcao} 
            acoesUsuario={acoes} 
            history={history} 
            listaRespostas={listaRespostasVazias} 
            />
    );
}
