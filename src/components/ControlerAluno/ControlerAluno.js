import React from 'react';
import './ControlerAluno.css';
import InserirToken from '../InserirToken/InserirToken';
import Resultado from '../Resultado/Resultado';
import Prova from '../Prova/Prova';
import Home from '../Home/Home';

export default function ControlerAluno(props){

    if(props.atividade === 'inserir-token'){
        return (
            <InserirToken />
        );
    }

    if(props.atividade === 'meus-resultados'){
        return(
            <Resultado />
        );
    }

    if(props.atividade === 'prova'){
        return (
            <Prova />
        );
    }

    return (
        <div >
            <Home />

        </div>
    );
}