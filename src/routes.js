import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Autocadastro from './components/Autocadastro/Autocadastro';
import Prova from './components/Prova/Prova';
import ControlerInicial from './controlers/ControllerInicial';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/autocadastro" exact component={Autocadastro}/>
            <Route path="/home" exact component={ControlerInicial} />
            <Route path="/prova" exact component={Prova} />
        </BrowserRouter>
    );
}