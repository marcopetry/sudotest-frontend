import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Autocadastro from './pages/Autocadastro';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/autocadastro" exact component={Autocadastro}/>
        </BrowserRouter>
    );
}