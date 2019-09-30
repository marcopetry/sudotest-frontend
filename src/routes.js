import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Autocadastro from './components/Autocadastro/Autocadastro';
import Header from './components/Header/Header';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/adm" exact component={Header}/>
            <Route path="/autocadastro" exact component={Autocadastro}/>
        </BrowserRouter>
    );
}