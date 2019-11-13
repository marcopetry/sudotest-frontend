import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Autocadastro from './components/Autocadastro/Autocadastro';
import Questoes from './components/Questoes/Questoes'
import CadastroQuestoes from './components/CadastroQuestoes/CadastroQuestoes';
import CadastroProva from './components/CadastroProva/CadastroProva';
import Dashboard from './components/Dashboard/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/cadastro_questoes" exact component={CadastroQuestoes}/> 
            <Route path="/autocadastro" exact component={Autocadastro}/>
            <Route path="/dashboard" exact component={Dashboard} />
        </BrowserRouter>
    );
}