import React, { useState, useEffect } from 'react';
import Prova from '../components/Prova/Prova';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import api from '../services/api';
import { preencherListaComRespostasVazias } from '../helpers/MonitorQuestoesProva';
import Feedback from '../components/Feedback/Feedback';
import { useHistory } from 'react-router-dom';
import ControllerDashboard from '../controlers/ControllerDashboard';
import logoProva from '../assets/fazer-prova-icon.svg';
import sair from '../assets/sair-icon.svg';

let listaRespostasVazias = [];

export function acoesProva() {
    let acoes = [];
    for (let i = 0; i < listaRespostasVazias.length; i++)
        acoes.push({
            acao: 'questao-' + (i + 1),
            texto: 'Questão ' + (i + 1),
            icone: logoProva
        })
    acoes.push({
        acao: 'encerrar-prova',
        texto: 'Encerrar prova',
        icone: sair
    });
    return acoes;
}

export default function ControllerProva(props) {
    let history = useHistory();

    const [emExecucao, setExecucao] = useState(''),
        [acao, setAcao] = useState(history.location.pathname),
        [questoes, setQuestoes] = useState(''),
        [prova, setProva] = useState(JSON.parse(localStorage.getItem('prova'))),
        [listaRespostas, setListaRespostas] = useState(listaRespostasVazias);

    useEffect(() => {
        setAcao(history.location.pathname);
    }, [acao]);

    async function buscarQuestoes() {
        const response = await api.get('/buscaProvasQuestoes', {
            params: {
                idProva: prova.id
            }
        })
        if (response) {
            const idAluno = localStorage.getItem('idUsuario');
            listaRespostasVazias = [];
            setQuestoes(response.data);
            response.data.map(questao => {
                preencherListaComRespostasVazias(idAluno, prova.id, questao.id, listaRespostasVazias)
            });
            setListaRespostas(listaRespostasVazias);
        } else {
            //validar quando questões não são retornadas
            console.log(response, ' deu problema');
        }
    }

    //vou usar para não amarrar a dashboard a questão
    const trocarAcaoExecucaoProva = (e) => setAcao(e);
    const mudarAtividade = (e) => {
        setAcao(e);
    }

    //pra mandar o id da prova como props para gerenciar o front de respostas    

    const encerrarSessao = () => {
        localStorage.setItem('Usuario', 'user');
        props.history.push('/home');
    }

    const cancelar = () => {
        history.pop();
    }

    if(questoes === '')
        buscarQuestoes();

    if (acao === 'encerrar-prova')
        return <TelaConfirmacao funcaoConfirmacao={encerrarSessao}
            funcaoCancelar={cancelar}
            mensagem={"Você tem certeza que deseja encerrar a prova?"} />

    if (emExecucao === 'feedback') return <Feedback />

    if (questoes.length > 0)
        return (
            <>
                <ControllerDashboard 
                    mudarAtividade={mudarAtividade}/>

                <Prova questao={questoes}
                    horaTermino={prova.horaTermino}
                    horaInicio={prova.horaInicio}
                    history={props.history}
                    listaRespostas={listaRespostasVazias}
                    idProva={prova.id}
                    acao={acao}
                    trocarAcao={trocarAcaoExecucaoProva}
                    mudarAtividade={mudarAtividade} />
            </>
        );

    return <TelaEspera />

}