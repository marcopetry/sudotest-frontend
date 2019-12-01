import React, { useState, useEffect } from 'react';
import Dashboards from './Dashboards';
import { acoesADM } from '../../controlers/ControllerADM';
import { acoesAluno } from '../../controlers/ControllerAluno';
import { acoesProva } from '../../controlers/ControllerProva';
import { useHistory } from 'react-router-dom'
import { tsPropertySignature } from '@babel/types';



export default function ControllerDashboard(props) {
    let history = useHistory();
    let trocarAcao;
    const [acaoDashboard, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState(localStorage.getItem('Usuario'));

    //guarda as ações para a dashboard
    let acoes;
    useEffect(() => {
        console.log('props acao dash', props.acao);        
        console.log('controller dashboard 1', acaoDashboard);
        history.push(acaoDashboard);
    }, [acaoDashboard]);

    if (tipoUsuario === 'adm') {
        acoes = acoesADM;
        trocarAcao = (e) => setAcao(e);
    } else if (tipoUsuario === 'user') {
        acoes = acoesAluno;
        trocarAcao = (e) => setAcao(e);
    } else if (tipoUsuario === 'user-prova') {
        trocarAcao = (e) => props.mudarAtividade(e);
        acoes = acoesProva();
    } else {
        history.push('/');
    }

    console.log('controller dashboard 2', acaoDashboard);
    return (
        <Dashboards
            mudarAtividade={trocarAcao}
            acoesUsuario={acoes}
            history={history}
        />
    );
}
