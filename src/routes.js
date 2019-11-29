import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Autocadastro from './components/Autocadastro/Autocadastro';
import ControlerInicial from './controlers/ControllerInicial';
import ControllerProva from './controlers/ControllerProva';
import Feedback from './components/Feedback/Feedback';
import Dashboards from './components/Dashboards/Dashboards';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/autocadastro" exact component={Autocadastro}/>
            <Route path="/home" exact component={ControlerInicial} />
            <Route path="/prova" exact component={ControlerInicial} />
            <Route path="/resultado" exact component={Feedback} />
        </BrowserRouter>
    );
}