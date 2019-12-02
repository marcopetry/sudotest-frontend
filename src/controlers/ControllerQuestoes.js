import React, { useState } from 'react';
import api from '../services/api';
import { formatarDadosQuestoes } from '../helpers/TratamentoDadosParaTabela';
import ControllerListarInformacoes from './ControllerListarInformacoes';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import Feedback from '../components/Feedback/Feedback';
import InfoQuestao from '../components/InfoQuestao/InfoQuestao';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import CadastroQuestoes from '../components/CadastroQuestoes/CadastroQuestoes';

const cabecalhoTabela = ["Categoria", "Enunciado", "Resposta certa"];
export default function ControllerQuestoes({ history }) {
    const [questoes, setQuestoes] = useState(''),
        [loading, setLoading] = useState(true),
        [acao, setAcao] = useState(''),
        [idClicado, setIdClicado] = useState(history.location.state),
        [questaoSelecionada, setQuestaoSelecionada] = useState('');

    const pegarClique = (e) => setAcao(e);
    console.log(acao);

    async function buscarInformacoesQuestao(idQuestao) {
        const response = await api.get('/buscaInformacoesQuestao', {
            params: {
                id: idQuestao
            }
        });
        setQuestaoSelecionada(response.data);
    }

    async function buscarQuestoesCadastradas() {
        const response = await api.get('/buscaQuestoesCadastradas');
        console.log(response.data);
        setQuestoes(formatarDadosQuestoes(response.data));
        setLoading(false);
    }

    async function deletarQuestaoCadastrada(idQuestao) {
        //setLoading(true);
        const response = await api.post('/deletaAtualizaProvasQuestoes', {
            idQuestao
        });
        if(response.error){
            setAcao('Erro ao deletar questão!')
        }else {
            console.log(response);
            setAcao('Questão deletada com sucesso!');
        }
    }

    if(acao === 'editar' && questaoSelecionada === ''){
        buscarInformacoesQuestao(idClicado);
        return <TelaEspera />
    } else if(acao === 'editar' && questaoSelecionada !== ''){
        return (
            <CadastroQuestoes questao={questaoSelecionada} />
        );
    }

    if(acao === 'Questão deletada com sucesso!'){
        setTimeout(() => history.push('/questoes'), 2000);
        return (
            <Feedback msgPrimaria={acao} img='certo'/>
        );
    } else if(acao === 'Erro ao deletar questão!'){
        setTimeout(() => history.push('/questoes'), 2000);
        return (
            <Feedback msgPrimaria={acao} img='errado'/>
        );
    }

    if(acao === 'confirmado-deletar'){
        console.log('entrou deletar')
        deletarQuestaoCadastrada(idClicado);
        return <TelaEspera />
    }

    if(acao === 'excluir') {
        return <TelaConfirmacao 
            mensagem="Você tem certeza que deseja exluir essa questão?"
            funcaoCancelar={() => history.push('/questoes')}
            funcaoConfirmacao={() => pegarClique('confirmado-deletar')}/>
    }

    if (idClicado !== '' && history.location.pathname === '/info-questao') {
        if (questaoSelecionada === '') {
            buscarInformacoesQuestao(idClicado);
            return <TelaEspera />
        }
        return (
            <InfoQuestao questao={questaoSelecionada} acao={pegarClique}/>
        );
    }


    if (questoes === '' && loading) {
        buscarQuestoesCadastradas();
        return <TelaEspera />
    }

    if (questoes.length === 0) {
        return (
            <Feedback msgPrimaria={"Não existem questões cadastrada"} />
        );
    }

    console.log(acao);
    return (
        <ControllerListarInformacoes
            cabecalhoTabela={cabecalhoTabela}
            dadosTabela={questoes}
            funcaoClick={pegarClique} />
    );
}