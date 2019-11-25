import React from 'react';
import InserirToken from '../components/InserirToken/InserirToken';
import Prova from '../components/Prova/Prova';
import Resultado from '../components/Resultado/Resultado';
import Home from '../components/Home/Home';

export default function ControllerAluno(props){

    if(props.acaoEscolhida === 'inserir-token') return <InserirToken />
        
    if(props.acaoEscolhida === 'questoes') return <Prova />

    if(props.acaoEscolhida === 'meus-resultados') return <Resultado />

    if(props.acaoEscolhida === 'editar-perfil') return <Home />

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
                acao: 'questoes',
                texto: 'Questões'
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