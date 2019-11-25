import React, { useState } from 'react';
import Home from '../../components/Home/Home';
import CadastroProva from '../../components/CadastroProva/CadastroProva';

export default function AcaoUsuario(props) {

    if (props.acaoEscolhida === 'cadastrar-prova') {
        return (
            <CadastroProva />
        );
    }

    return (
        <Home />
    );
}