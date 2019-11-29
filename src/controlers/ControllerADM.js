import React, { useState, useEffect } from 'react';
import Home from '../components/Home/Home';
import CadastroProva from '../components/CadastroProva/CadastroProva';
import CadastroQuestoes from '../components/CadastroQuestoes/CadastroQuestoes';
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

    async function gerarRelatorio(idAluno, idProva) {
        const response = await api.get('/geraRelatorio', {
            params: {
                idAluno,
                idProva
            }
        })
    }

    async function buscarQuestoesCadastradas() {
        const response = await api.get('/buscaQuestoesCadastradas');
        console.log(response);
    }

    async function deletarQuestaoCadastrada() {
        const response1 = await api.get('/buscaTodasProvasQuestoes', {
            params: {
                //idQuestao
            }
        });
        console.log(response1);
        if (response1 === []) {
            const response2 = await api.post('/deletaQuestaoCadastrada', {
                //id: idQuestao,
            });
            console.log(response2);
        } else {
            const response3 = await api.get('/buscaProvasDeletarQuestoes', {
                params: {
                    idProva: response1,
                    status: 'Aberta',
                }
            })
            if(response3 === []) {
                const response2 = await api.post('/deletaQuestaoCadastrada', {
                    //id: idQuestao,
                });
                console.log(response2);
            } else {
                alert('Existem provas abertas cadastradas com essa questão');
                if(true) { //Se quiser deletar
                    const response4 = await api.get('/buscaQuestaoDeletarQuestao', {
                        params: {
                            //id: idQuestao
                        }
                    })
                    console.log(response4);
                }
            }

        }
    }

    async function atualizarQuestaoCadastrada() {
        const response = await api.post('/atualizaQuestaoCadastrada', {
            //id: idQuestao,
        });
        console.log(response);
    }

    async function buscarAlunosCadastrados() {
        const response = await api.get('/buscaAlunosCadastrados');
        console.log(response);
    }

    const encerrarSessao = () => {
        localStorage.clear();
        props.history.push('/');
    }

    const cancelar = () => {
        setSessao('home');
    } 

    if (espera) return <TelaEspera />

    if (sessao === 'listar-alunos') {
        return <ListarInformacoes 
            cabecalhoTabela={cabecalhoAlunosCadastrados} 
            dadosTabela={dados} 
            acaoClick={sessao}
            />
    }

    if (sessao === 'cadastrar-prova') return <CadastroProva />

    if (sessao === 'cadastrar-questao') return <CadastroQuestoes />

    if (sessao === 'listar-provas-abertas') {
        let funcaoClick; 
        if (dados === '') 
            buscarProvas(props.acaoEscolhida);
        
        return (
            <ListarInformacoes 
                cabecalhoTabela={cabecalhoProvasAbertas} 
                dadosTabela={dados} 
                acaoClick={sessao}
                history={props.history}
            />
        );
    }

    if (sessao === 'listar-provas-encerradas'){
        if(dados === '')
            buscarProvas(props.acaoEscolhida);
        return (
            <ListarInformacoes 
                cabecalhoTabela={cabecalhoProvasFechadas} 
                dadosTabela={dados} />
        ); 
    }

    if (sessao === 'listar-questoes') {
        return (
            <ListarInformacoes 
                cabecalhoTabela={cabecalhoProvasAbertas} 
                dadosTabela={dados}
                />
        );
    }

    if (sessao === 'sair')
        return <TelaConfirmacao funcaoConfirmacao={encerrarSessao}
            funcaoCancelar={cancelar}
            mensagem={"Você tem certeza que quer sair do sistema?"} />

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