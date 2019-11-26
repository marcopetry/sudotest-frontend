import React, { useState, useEffect } from 'react';
import InserirToken from '../components/InserirToken/InserirToken';
import Resultado from '../components/Resultado/Resultado';
import Home from '../components/Home/Home';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';

//as acoes da dashboard estão no final deste arquivo
export default function ControllerAluno(props) {
    const [sessao, setSessao] = useState(props.acaoEscolhida);

    useEffect(() => {
        setSessao(props.acaoEscolhida)
    }, [props.acaoEscolhida]);
    
    const encerrarSessao = () => {
        localStorage.clear();
        props.history.push('/');
    }
    
    const cancelar = () => {
        setSessao('home');
        console.log(sessao);
    } 
    const mensagemSaida = "Você tem certeza que quer sair do sistema?";

    if (sessao === 'inserir-token') return <InserirToken history={props.history} />

    if (sessao === 'meus-resultados') return <Resultado />

    if (sessao === 'editar-perfil') return <Home />

    if (sessao === 'sair')
        return <TelaConfirmacao funcaoConfirmacao={encerrarSessao}
                                funcaoCancelar={cancelar}
                                mensagem={mensagemSaida} />
    return <Home />

}

export const acoesAluno =
    [
        {
            acao: 'home',
            texto: 'Home'
        },
        {
            acao: 'inserir-token',
            texto: 'Fazer Prova'
        },
        {
            acao: 'meus-resultados',
            texto: 'Meus Resultados'
        },
        {
            acao: 'editar-perfil',
            texto: 'Editar Perfil'
        },
        {
            acao: 'sair',
            texto: 'Sair'
        },
    ];

export const acoesProva = [
    {
        acao: 'prova',
        texto: 'Prova'
    },
    {
        acao: 'portugues',
        texto: 'Português'
    },
    {
        acao: 'matematica',
        texto: 'Matemática'
    },
    {
        acao: 'informatica',
        texto: 'Informática'
    },
    {
        acao: 'conhecimentos',
        texto: 'Conhecimentos Gerais'
    },
    {
        acao: 'sair',
        texto: 'Encerrar Prova'
    }
];