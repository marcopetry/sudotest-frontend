import React from 'react';
import logo from '../../assets/logo.png';
import './ControlerAluno.css';
import InserirToken from '../InserirToken/InserirToken';
import Resultado from '../Resultado/Resultado';
import Prova from '../Prova/Prova';

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
        <div className="dashboard-container">
            <img src={logo} alt="Sudotec Logo" />
            <div className="text-container">
                <h1 id="sudo">Sudo </h1>
                <h1 id="test">Test</h1>
            </div>
            <div className="container-text-painel">
                <h1 id="painel">Painel do administrador</h1>
            </div>
        </div>
    );
}