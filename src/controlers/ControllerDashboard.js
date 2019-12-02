import React, { useState, useEffect } from 'react';
import Dashboards from '../components/Dashboards/Dashboards';
import { acoesProva } from './ControllerProva';
import { useHistory } from 'react-router-dom';
import home from '../assets/home-icon.svg';
import fazerProva from '../assets/fazer-prova-icon.svg';
import meusResultados from '../assets/meus-resultados-icon.svg';
import editarPerfil from '../assets/editar-perfil-icon.svg';
import sair from '../assets/sair-icon.svg';
import alunos from '../assets/alunos-icon.svg';
import cadastrarProva from '../assets/cadastrar-prova-icon.svg';
import cadastrarQuestao from '../assets/cadastrar-questao-icon.svg';
import questoes from '../assets/questoes-icon.svg';
import provasEncerradas from '../assets/provas-encerradas-icon.svg';
import provasAbertas from '../assets/provas-abertas-icon.svg';

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
        trocarAcao = (e) => setAcao(e);
        acoes = acoesProva();
    } else if(history.location.pathname !== '/autocadastro') {
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
            texto: 'Home',
            icone: home
        },
        {
            acao: '/inserir-token',
            texto: 'Fazer Prova',
            icone: fazerProva
        },
        {
            acao: '/meus-resultados',
            texto: 'Meus Resultados',
            icone: meusResultados
        },
        {
            acao: '/sair',
            texto: 'Sair',
            icone: sair
        },
    ];


    export const acoesADM =
    [
        {
            acao: '/home',
            texto: 'Home',
            icone: home 
        },
        {
            acao: '/alunos',
            texto: 'Alunos Cadastrados',
            icone: alunos
        },
        {
            acao: '/cadastrar-prova',
            texto: 'Cadastrar Prova',
            icone: cadastrarProva
        },
        {
            acao: '/cadastrar-questao',
            texto: 'Cadastrar Questão', 
            icone: cadastrarQuestao
        },
        {
            acao: '/provas-abertas',
            texto: 'Provas Abertas', 
            icone: provasAbertas
        },
        {
            acao: '/provas-encerradas',
            texto: 'Provas Encerradas', 
            icone: provasEncerradas
        },
        {
            acao: '/questoes',
            texto: 'Questôes Cadastradas',
            icone: questoes
        },
        {
            acao: '/sair',
            texto: 'Sair', 
            icone: sair
        },
    ];