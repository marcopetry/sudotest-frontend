import React, { useState, useEffect } from 'react';
import Dashboards from '../components/Dashboards/Dashboards';
import ControlerAdm from './ControllerADM';
import { acoesADM } from './ControllerADM';
import ControllerAluno from './ControllerAluno';
import { acoesAluno } from './ControllerAluno';

export default function ControlerInicial() {
    //verificar se é usuário ou adm e passar informações pra dash
    const [acao, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState('adm');
    
    let acoes;
    if(tipoUsuario === 'adm'){
        acoes = acoesADM;
    }else{
        acoes = acoesAluno;
    }

    const trocarAcao = (e) => setAcao(e);

    return (
        
        <>
            <Dashboards mudarAtividade={trocarAcao} acoesUsuario={acoes} />
            {tipoUsuario === 'adm' && <ControlerAdm acaoEscolhida={acao} />}
            {tipoUsuario === 'user' && <ControllerAluno acaoEscolhida={acao} />}
        </>
    );
}
