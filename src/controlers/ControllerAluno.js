import React, { useState, useEffect } from 'react';
import InserirToken from '../components/InserirToken/InserirToken';
import Home from '../components/Home/Home';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import Feedback from '../components/Feedback/Feedback';
import api from '../services/api';

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

    async function buscarResultados(idAluno) {
        const response = await api.get('/buscaAlunosProvas', {
            params: {
                idAluno
            }
        })
        console.log(buscarResultados);
    }

    if (sessao === 'inserir-token') return <InserirToken history={props.history} />

    if (sessao === 'meus-resultados') return <Feedback />

    if (sessao === 'editar-perfil') return <Home />

    if (sessao === 'sair')
        return <TelaConfirmacao funcaoConfirmacao={encerrarSessao}
                                funcaoCancelar={cancelar}
                                mensagem={"Você tem certeza que quer sair do sistema?"} />
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
