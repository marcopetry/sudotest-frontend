import React, { useState, useEffect } from 'react';
import Dashboards from '../components/Dashboards/Dashboards';
import ControlerAdm from './ControllerADM';
import { acoesADM } from './ControllerADM';
import ControllerAluno from './ControllerAluno';
import { acoesAluno, acoesProva } from './ControllerAluno';

export default function ControlerInicial() {
    //verificar se é usuário ou adm e passar informações pra dash
    const [acao, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState('user');
    
    let acoes;
    if(tipoUsuario === 'adm'){
        acoes = acoesADM;
    }else if(tipoUsuario === 'user'){
        acoes = acoesAluno;
    }else if(tipoUsuario === 'prova'){
        acoes = acoesProva;
    }

    const trocarAcao = (e) => setAcao(e);

    //vou fazer uma leitura da rota para prova
    console.log(window.location.pathname);

    return (
        
        <>
            <Dashboards mudarAtividade={trocarAcao} acoesUsuario={acoes} />
            {tipoUsuario === 'adm' && <ControlerAdm acaoEscolhida={acao} />}
            {tipoUsuario === 'user' && <ControllerAluno acaoEscolhida={acao} />}
        </>
    );
}
