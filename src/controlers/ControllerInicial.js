import React, { useState, useEffect } from 'react';
import Dashboards from '../components/Dashboards/Dashboards';
import ControlerAdm from './ControllerADM';
import { acoesADM } from './ControllerADM';
import ControllerAluno from './ControllerAluno';
import { acoesAluno, acoesProva } from './ControllerAluno';
import ControllerProva from './ControllerProva';
import Login from '../components/Login/Login';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';

export default function ControlerInicial({ history }) {
    //verificar se é usuário ou adm e passar informações pra dash
    const [acao, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState(localStorage.getItem('Usuario'));

    let acoes;
    if (tipoUsuario === 'adm') {
        acoes = acoesADM;
    } else if (tipoUsuario === 'user') {
        acoes = acoesAluno;
    } else if (tipoUsuario === 'user-prova') {
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
