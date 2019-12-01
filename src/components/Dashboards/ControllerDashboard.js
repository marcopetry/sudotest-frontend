import React, { useState, useEffect } from 'react';
import Dashboards from './Dashboards';
import { acoesADM } from '../../controlers/ControllerADM';
import { acoesProva } from '../../controlers/ControllerProva';
import { useHistory } from 'react-router-dom'

export default function ControllerDashboard(props) {
    let history = useHistory();
    let trocarAcao;
    const [acaoDashboard, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState(localStorage.getItem('Usuario'));

    //guarda as ações para a dashboard
    let acoes;
    useEffect(() => {
        setAcao(history.location.pathname);
    }, [acaoDashboard]);

    if (tipoUsuario === 'adm') {
        acoes = acoesADM;
        trocarAcao = (e) => setAcao(e);
    } else if (tipoUsuario === 'user') {
        acoes = acoesAluno;
        trocarAcao = (e) => setAcao(e);
    } else if (tipoUsuario === 'user-prova') {
        trocarAcao = (e) => props.mudarAtividade(e);
        acoes = acoesProva();
    } else {
        history.push('/');
    }

    return (
        <Dashboards
            mudarAtividade={trocarAcao}
            acoesUsuario={acoes}
            history={history}
        />
    );
}

const acoesAluno =
    [
        {
            acao: '/home',
            texto: 'Home'
        },
        {
            acao: '/inserir-token',
            texto: 'Fazer Prova'
        },
        {
            acao: '/meus-resultados',
            texto: 'Meus Resultados'
        },
        {
            acao: '/editar-perfil',
            texto: 'Editar Perfil'
        },
        {
            acao: '/sair',
            texto: 'Sair'
        },
    ];