import React, { useState, useEffect } from 'react';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import api from '../services/api';

//as acoes da dashboard estão no final deste arquivo
const cabecalhoProvasAbertas = ["Nome", "Data", "Hora de início", "Quantidade de vagas", "Token", "Status"];
const cabecalhoProvasFechadas = ["Nome", "Data", "Quantidade de aprovados", "Quantidade de vagas", "Média geral", "Status"];
const cabecalhoAlunosCadastrados = ["Nome", "Email", "CPF", "Telefone", "Idade"];

export default function ControllerADM(props) {
    const [sessao, setSessao] = useState(props.acaoEscolhida),
        [espera, setEspera] = useState(false),
        [dados, setDados] = useState('');

    useEffect(() => {
        setSessao(props.acaoEscolhida);
        setDados('');
    }, [props.acaoEscolhida]);

    async function buscarProvas(sessao) {
        setEspera(true);
        if (sessao === 'listar-provas-abertas') {
            let status = 'Aberta';
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

    async function gerarRelatorio(idProva) {
        const response = await api.get('/geraRelatorio', {
            params: {
                idProva
            }
        });
        console.log(response);
    }

    async function buscarQuestoesCadastradas() {
        const response = await api.get('/buscaQuestoesCadastradas');
        console.log(response);
    }

    async function deletarQuestaoCadastrada(idQuestao) {
        const response1 = await api.post('/deletaAtualizaProvasQuestoes', {
            idQuestao
        });
        console.log(response1);
    }


    async function buscarAlunosCadastrados() {
        const response = await api.get('/buscaAlunosCadastrados');
        console.log(response);
    }

    async function buscarResultados(idAluno) {
        const response = await api.get('/buscaAlunosProvas', {
            params: {
                idAluno
            }
        })
        console.log(buscarResultados);
    }

    
  
}
