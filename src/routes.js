import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Autocadastro from './components/Autocadastro/Autocadastro';
import ControlerInicial from './controlers/ControllerInicial';
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

export default function Routes() {
    //localStorage.clear();
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/autocadastro" exact component={Autocadastro}/>
            <Route path="/:slug" exact component={ControllerDashboard} />
            <Route path="/home" exact component={Home} />
            <Route path="/cadastrar-prova" exact component={CadastroProva} />
            <Route path="/cadastrar-questao" exact component={CadastroQuestoes} />
            <Route path="/alunos" exact component={ControllerListarInformacoes} />
            <Route path="/provas-abertas" exact component={ControllerListarInformacoes} />
            <Route path="/info-prova" exact component={ControllerProvasAbertas} />
            <Route path="/provas-encerradas" exact component={ControllerListarInformacoes} />
            <Route path="/questoes" exact component={ControllerListarInformacoes} />
            <Route path="/sair" exact component={Logout} />
        </BrowserRouter>
    );
}

