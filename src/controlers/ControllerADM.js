import React, { useState, useEffect } from 'react';
import Home from '../components/Home/Home';
import CadastroProva from '../components/CadastroProva/CadastroProva';
import CadastroQuestoes from '../components/CadastroQuestoes/CadastroQuestoes';
import InfoProva from '../components/InfoProva/InfoProva';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import api from '../services/api';

const cabecalhoProvasAbertas = ["Nome", "Data", "Hora de início", "Quantidade de vagas", "Token", "Status"];
const cabecalhoProvasFechadas = ["Nome", "Data", "Quantidade de aprovados", "Quantidade de vagas", "Média geral", "Status"];
const cabecalhoAlunosCadastrados = ["Nome", "Email", "CPF", "Telefone", "Idade"];

//as acoes da dashboard estão no final deste arquivo

export default function ControllerADM(props) {
    const [sessao, setSessao] = useState(props.acaoEscolhida),
        [espera, setEspera] = useState(false),
        [dados, setDados] = useState('');

    useEffect(() => {
        setSessao(props.acaoEscolhida);
    }, [props.acaoEscolhida]);

    async function buscarProvas(sessao) {
        if (sessao === 'listar-provas-abertas') {
            let status = 'Aberta';
            setEspera(true);
            const response = await api.get('/buscaProvas', {
                params: {
                    status,
                }
            });
            setDados(response.data);
            setEspera(false);
            return;
        } else if (sessao === 'listar-provas-encerradas') {
            let status = 'Encerrada';
            setEspera(true);
            const response = await api.get('/buscaProvas', {
                params: {
                    status,
                }
            });
            setDados(response.data);
            setEspera(false);
            return;
        }
    }

    const encerrarSessao = () => {
        localStorage.clear();
        props.history.push('/');
    }

    const cancelar = () => {
        setSessao('home');
    } 

    const mensagemSaida = "Você tem certeza que quer sair do sistema?";

    if (espera) return <TelaEspera />

    if (sessao === 'listar-alunos') return <ListarInformacoes cabecalhoTabela={cabecalhoAlunosCadastrados} dadosTabela={dados} />

    if (sessao === 'cadastrar-prova') return <CadastroProva />

    if (sessao === 'cadastrar-questao') return <CadastroQuestoes />

    if (sessao === 'listar-provas-abertas') {
        if (dados === '') buscarProvas(props.acaoEscolhida);

        return <ListarInformacoes cabecalhoTabela={cabecalhoProvasAbertas} dadosTabela={dados} />
    }
    if (sessao === 'listar-provas-encerradas') return <InfoProva />

    if (sessao === 'listar-questoes') return <ListarInformacoes cabecalhoTabela={cabecalhoProvasAbertas} dadosTabela={dados} />

    if (sessao === 'sair')
        return <TelaConfirmacao funcaoConfirmacao={encerrarSessao}
            funcaoCancelar={cancelar}
            mensagem={mensagemSaida} />

    return (
        <Home />
    );
}

export const acoesADM =
    [
        {
            acao: 'home',
            texto: 'Home'
        },
        {
            acao: 'listar-alunos',
            texto: 'Alunos Cadastrados'
        },
        {
            acao: 'cadastrar-prova',
            texto: 'Cadastrar Prova'
        },
        {
            acao: 'cadastrar-questao',
            texto: 'Cadastrar Questão'
        },
        {
            acao: 'listar-provas-abertas',
            texto: 'Provas Abertas'
        },
        {
            acao: 'listar-provas-encerradas',
            texto: 'Provas Encerradas'
        },
        {
            acao: 'listar-questoes',
            texto: 'Questôes Cadastradas',
        },
        {
            acao: 'sair',
            texto: 'Sair'
        },
    ];