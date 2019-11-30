import React, { useState, useEffect } from 'react';
import Prova from '../components/Prova/Prova';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import api from '../services/api';
import { preencherListaComRespostasVazias } from '../helpers/MonitorQuestoesProva';
import Feedback from '../components/Feedback/Feedback';
import { useHistory } from 'react-router-dom'


//Uma lista com todas as respostas vazias do usuário para gerenciar no front-end
let listaRespostasVazias = [];
//Uma lista com todas as questões para mandar pro componente prova
let questoesProva = [];

export async function buscarQuestoes(id) {
    const prova = JSON.parse(localStorage.getItem('prova'));
    const response = await api.get('/buscaProvasQuestoes', {
        params: {
            idProva: prova.id
        }
    })
    if (response) {
        const idAluno = localStorage.getItem('idUsuario');
        listaRespostasVazias = [];
        questoesProva = [];
        questoesProva = response.data;
        response.data.map(questao => {
            preencherListaComRespostasVazias(idAluno, prova.id, questao.id, listaRespostasVazias)
        });
    } else {
        //validar quando questões não são retornadas
        console.log(response, ' deu problema');
    }
    return listaRespostasVazias;
}

export default function ControllerProva(props) {
    let history = useHistory();
    const [emExecucao, setExecucao] = useState(''),
        [acao, setAcao] = useState(props.acaoEscolhida),
        [questoes, setQuestoes] = useState(questoesProva);

    console.log(history.location.prova);
    //vou usar para não amarrar a dashboard a questão
    const trocarAcaoExecucaoProva = (e) => setAcao(e);
    const mudarAtividade = (acao) => {
        setAcao(acao);
        props.mudarAtividade(acao);
    }

    //pra mandar o id da prova como props para gerenciar o front de respostas    
    const prova = useState(JSON.parse(localStorage.getItem('prova')));
    useEffect(() => {
        setAcao(props.acaoEscolhida);
    }, [props.acaoEscolhida, questoesProva, listaRespostasVazias]);

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

    if (emExecucao === 'feedback') return <Feedback />

    if (questoesProva.length > 0)
        return (
            <Prova questao={questoesProva}
                horaTermino={prova[0].horaTermino}
                history={props.history}
                listaRespostas={listaRespostasVazias}
                idProva={prova[0].id}
                acao={acao}
                trocarAcao={trocarAcaoExecucaoProva} 
                mudarAtividade={mudarAtividade}/>
        );

    return <TelaEspera />

}