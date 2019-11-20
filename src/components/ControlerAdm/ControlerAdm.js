import React from 'react';
import logo from '../../assets/logo.png';
import './ControleAdm.css';
import CadastroQuestoes from '../CadastroQuestoes/CadastroQuestoes';
import CadastroProva from '../CadastroProva/CadastroProva';
import ListaProvas from '../ListaProvas/ListaProvas';
import TelaEspera from '../TelaEspera/TelaEspera';
import ListaAlunos from '../ListaAlunos/ListaAlunos';

export default function ControlerAdm(props){

    //setar se os dados tbm estiverem vazios depois de testar
    if(props.espera) {
        return (
            <TelaEspera />
        );
    }

    if(props.atividade === 'cadastrar-questao'){
        return (
            <CadastroQuestoes />
        );
    }

    if(props.atividade === 'cadastrar-prova'){
        return (
            <CadastroProva />
        );
    }

    if(props.atividade === 'listar-alunos'){
        return (
            <ListaAlunos />
        );
    }

    if(props.atividade === 'listar-provas-abertas' || props.atividade === 'listar-provas-encerradas'){
        return (
            <ListaProvas funcao={() => alert('clicou bocó')} />
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