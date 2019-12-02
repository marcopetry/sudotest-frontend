import React from 'react';
import { BrowserRouter, Route, useHistory, Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import Autocadastro from './components/Autocadastro/Autocadastro';
import ControllerProva from './controlers/ControllerProva';
import Home from './components/Home/Home';
import ControllerDashboard from './controlers/ControllerDashboard';
import CadastroProva from './components/CadastroProva/CadastroProva';
import CadastroQuestoes from './components/CadastroQuestoes/CadastroQuestoes';
import ControllerListarInformacoes from './controlers/ControllerListarInformacoes';
import Logout from './components/Logout/Logout';
import ControllerProvasAbertas from './controlers/ControllerProvasAbertas';
import ControllerProvaEncerrada from './controlers/ControllerProvaEncerrada';
import InserirToken from './components/InserirToken/InserirToken';
import ControllerMeusResultados from './controlers/ControllerMeusResultados';
import ControllerAlunosCadastrados from './controlers/ControllerAlunosCadastrados';
import ControllerQuestoes from './controlers/ControllerQuestoes';


export default function Routes() {
    //localStorage.clear();
    
    return (
        <BrowserRouter>
            <Route path="/autocadastro" exact component={Autocadastro}/>
            <Route path="/:slug" exact component={ControllerDashboard} />
            <Route path="/" exact component={Login} />
            
            <Route path="/home" exact component={Home} />

            <Route path="/cadastrar-prova" exact component={CadastroProva} />
            <Route path="/cadastrar-questao" exact component={CadastroQuestoes} />
            <Route path="/alunos" exact component={ControllerAlunosCadastrados} />
            <Route path="/provas-abertas" exact component={ControllerListarInformacoes} />
            <Route path="/info-prova" exact component={ControllerProvasAbertas} />
            <Route path="/provas-encerradas" exact component={ControllerListarInformacoes} />
            <Route path="/ranking-prova" exact component={ControllerProvaEncerrada} />
            <Route path="/questoes" exact component={ControllerQuestoes} />

            <Route path="/inserir-token" exact component={InserirToken} />
            <Route path="/prova/:slug" exact component={ControllerProva} />
            <Route path="/editar-perfil" exact component={Home} />
            <Route path="/meus-resultados" exact component={ControllerMeusResultados} />
            <Route path="/ranking-prova/:slug" exact component={ControllerDashboard} />
            <Route path="/ranking-prova/:slug" exact component={ControllerMeusResultados} />

            <Route path="/sair" exact component={Logout} />
        </BrowserRouter>
    );
}

