import React, { useState, useEffect } from 'react';
import Prova from '../components/Prova/Prova';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import api from '../services/api';

export default function ControllerProva(props) {
    const [emExecucao, setExecucao] = useState(true),
        [acao, setAcao] = useState(props.acaoEscolhida), 
        [questoesProva, setQuestoes] = useState(),
        [prova, setProva] = useState(JSON.parse(localStorage.getItem('prova')));

    useEffect(() => {
        setAcao(props.acaoEscolhida);
    }, [props.acaoEscolhida]);

    async function buscarQuestoes(e) {
        //e.preventDefault(e);

        const response = await api.get('/buscaProvasQuestoes', {
            params: {
                idProva: prova.id
            }
        })
        console.log(response);
    }
    buscarQuestoes();
    const encerrarSessao = () => {
        localStorage.setItem('Usuario', 'user');
        props.history.push('/home');
    }

    const cancelar = () => {
        setAcao('prova');
    }
    const mensagemSaida = "Você tem certeza que deseja encerrar a prova?";


    if (acao === 'sair')
        return <TelaConfirmacao funcaoConfirmacao={encerrarSessao}
            funcaoCancelar={cancelar}
            mensagem={mensagemSaida} />

    if(acao === 'espera') return <TelaEspera />

    return <Prova />;
}