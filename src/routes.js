import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Autocadastro from './components/Autocadastro/Autocadastro';
import ControllerProva from './controlers/ControllerProva';
import Feedback from './components/Feedback/Feedback';
import Dashboards from './components/Dashboards/Dashboards';
import Home from './components/Home/Home';
import ControllerDashboard from './components/Dashboards/ControllerDashboard';
import CadastroProva from './components/CadastroProva/CadastroProva';
import CadastroQuestoes from './components/CadastroQuestoes/CadastroQuestoes';
import ListarInformacoes from './components/ListarInformacoes/ListarInformacoes';
import TelaConfirmacao from './components/TelaConfirmacao/TelaConfirmacao';
import ControllerListarInformacoes from './components/ListarInformacoes/ControllerListarInformacoes';
import Logout from './components/Logout/Logout';
import ControllerProvasAbertas from './controlers/ControllerProvasAbertas';
import ControllerProvaEncerrada from './controlers/ControllerProvaEncerrada';
import InserirToken from './components/InserirToken/InserirToken';
import ControllerMeusResultados from './controlers/ControllerMeusResultados';
import ControllerAlunosCadastrados from './controlers/ControllerAlunosCadastrados';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/autocadastro" exact component={Autocadastro}/>
            <Route path="/:slug" exact component={ControllerDashboard} />
            
            <Route path="/home" exact component={Home} />

            <Route path="/cadastrar-prova" exact component={CadastroProva} />
            <Route path="/cadastrar-questao" exact component={CadastroQuestoes} />
            <Route path="/alunos" exact component={ControllerAlunosCadastrados} />
            <Route path="/provas-abertas" exact component={ControllerListarInformacoes} />
            <Route path="/info-prova" exact component={ControllerProvasAbertas} />
            <Route path="/provas-encerradas" exact component={ControllerListarInformacoes} />
            <Route path="/ranking-prova" exact component={ControllerProvaEncerrada} />
            <Route path="/questoes" exact component={ControllerListarInformacoes} />

            

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

