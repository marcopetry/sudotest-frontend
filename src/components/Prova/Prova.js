import React, { useState, useEffect } from 'react';
import './Prova.css';
import Scrollbar from 'react-scrollbars-custom';
import api from '../../services/api';
import { horarioRestanteProva } from '../../helpers/Relogio';
import { monitorarQuestoesProva, conferirSeTodasRespostasEstaoMarcadas, alterarQuestaoPelaDashboard, calcularMediaProva } from '../../helpers/MonitorQuestoesProva';
import TelaConfirmacao from '../TelaConfirmacao/TelaConfirmacao';
import Relogio from '../Relogio/Relogio';
import Feedback from '../Feedback/Feedback';

let listaRespostas = [];
async function cadastrarResposta(idAluno, idProva, idQuestao, resposta, alternativaMarcada) {
    const response = await api.post('/cadastraAlunosProvasQuestoes', {
        idAluno,
        idProva,
        idQuestao,
        resposta,
        alternativaMarcada,
    })
    //console.log(response)
};


export default function Prova(props) {
    listaRespostas = props.listaRespostas;
    const [numeroQuestao, setNumero] = useState(0),
        [pergunta, setPergunta] = useState(props.questao[numeroQuestao].enunciado),
        [res1, setRes1] = useState(props.questao[numeroQuestao].alternativa1),
        [res2, setRes2] = useState(props.questao[numeroQuestao].alternativa2),
        [res3, setRes3] = useState(props.questao[numeroQuestao].alternativa3),
        [res4, setRes4] = useState(props.questao[numeroQuestao].alternativa4),
        [res5, setRes5] = useState(props.questao[numeroQuestao].alternativa5),
        [alternativaCerta, setAlternativaCerta] = useState(props.questao[numeroQuestao].alternativacorreta),
        [alternativaMarcada, setAlternativaMarcada] = useState(''),
        [execucao, setExecucao] = useState(false),
        [porcentagemMedia, setMedia] = useState(''), 
        [notaAluno, setNota] = useState('');

    const idAluno = localStorage.getItem('idUsuario');
    const idProva = props.idProva;
    const idQuestao = props.questao[numeroQuestao].id;
    let numero;

    if (props.acao.indexOf('selecionada') !== -1 && numero !== numeroQuestao) {
        numero = alterarQuestaoPelaDashboard(props.acao);
    }

    useEffect(() => {
        setPergunta(props.questao[numeroQuestao].enunciado);
        setRes1(props.questao[numeroQuestao].alternativa1);
        setRes2(props.questao[numeroQuestao].alternativa2);
        setRes3(props.questao[numeroQuestao].alternativa3);
        setRes4(props.questao[numeroQuestao].alternativa4);
        setRes5(props.questao[numeroQuestao].alternativa5);
        setAlternativaCerta(props.questao[numeroQuestao].alternativacorreta);
        if (listaRespostas.length > 0 && numeroQuestao < listaRespostas.length) {
            setAlternativaMarcada(listaRespostas[numeroQuestao].alternativaMarcada);
        } else {
            setAlternativaMarcada('');
        }
        if (numero !== numeroQuestao && numero !== undefined) {
            setNumero(numero);
            props.trocarAcao('resposta');
            props.mudarAtividade('resposta');
        }
    }, [numeroQuestao, numero]);

    async function buscarResposta(e) {
        e.preventDefault();
        const response = await api.get('/buscaAlunosProvasQuestoes', {
            params: {
                idAluno,
                idProva,
                idQuestao,
            }
        })
        console.log(response);
    }

    //altera classe da div marcada como resposta
    const elementoMarcado = document.getElementsByClassName('opcao-marcada');
    if (alternativaMarcada === '') {
        if (elementoMarcado[0] !== undefined)
            elementoMarcado[0].classList.remove('opcao-marcada');
    } else {
        if (elementoMarcado[0] !== undefined)
            elementoMarcado[0].classList.remove('opcao-marcada');
        if(document.getElementById(alternativaMarcada) !== null)
            document.getElementById(alternativaMarcada).classList.add('opcao-marcada');
    }

    const marcarAlternativaUsuario = (e) => {
        setAlternativaMarcada(e);
        listaRespostas = monitorarQuestoesProva(
            props.listaRespostas,
            numeroQuestao,
            e,
            idAluno,
            props.idProva,
            idQuestao,
            alternativaCerta);
    }

    async function calcularMedia() {
        const porcentagemMedia = notaAluno;
        const response = await api.get('/calculaMedia', {
            params: {
                idAluno,
                idProva,
                porcentagemMedia
            }
        })
        console.log(response);
    }

    const decrementaQuestao = () => {
        if (numeroQuestao > 0) {
            numero--;
            setNumero(numeroQuestao - 1);
        }
        else {
            alert('Essa é a primeira questão, não tem como voltar!')
        }
    }


    const encrementaQuestao = () => {
        if (numeroQuestao < props.questao.length - 1) {
            //seta o número para acompanhar o state caso não seja clicado no dashboard
            numero++;
            setNumero(numeroQuestao + 1)
        }
        else {
            if (conferirSeTodasRespostasEstaoMarcadas(listaRespostas)) {
                setExecucao(true);
                //tela de confirmação, banco pra guardar, apresenta a nota
            }
        }
    }

    const cadastrarProvaConcluida = () => {
        localStorage.setItem('Usuario', 'user');
        listaRespostas.map(resposta =>
            cadastrarResposta(
                resposta.idAluno,
                resposta.idProva,
                resposta.idQuestao,
                resposta.resposta,
                resposta.alternativaMarcada)
        )
        //chamar função cadastrar prova com a média
        setNota(calcularMediaProva(listaRespostas));
    }

    if(notaAluno !== ''){
        const mensagemPrimaria = "Parabéns " + localStorage.getItem('nomeUsuario') + ", você concluiu a prova!";
        const mensagemSecundaria = "Você acertou " + notaAluno + "% das questões!";
        setTimeout(() => props.history.push('/home'), 3000);
        return <Feedback msgPrimaria={mensagemPrimaria} msgSecundaria={mensagemSecundaria} />
    }

    if (execucao)
        return <TelaConfirmacao funcaoCancelar={() => setExecucao(false)}
            funcaoConfirmacao={cadastrarProvaConcluida}
            mensagem={"Tem certeza que deseja encerrar a prova?"} />

    return (
        <Scrollbar>
            <div className="container-questoes">
                <div className="form-questoes">
                    <div id="cabecalho-prova" className="container-info info-prova">
                        <h3 className="alinhar-esquerda">Questão número {numeroQuestao + 1}:</h3>
                        <Relogio horaTermino={props.horaTermino} terminouTempoProva={cadastrarProvaConcluida} />
                    </div>
                    <div className="container-info">
                        <label className="alinhar-esquerda">{pergunta}</label>
                    </div>
                    <div id="alternativa1" className="container-info info-hover" onClick={(e) => marcarAlternativaUsuario('alternativa1')}>
                        <input type="radio"
                            onChange={(e) => marcarAlternativaUsuario('alternativa1')}
                            className="check-alternativa"
                            checked={alternativaMarcada === 'alternativa1'} />
                        <label className="texto-alternativa">{res1}</label>
                    </div>
                    <div id="alternativa2" className="container-info info-hover" onClick={(e) => marcarAlternativaUsuario('alternativa2')}>
                        <input type="radio"
                            onChange={(e) => marcarAlternativaUsuario('alternativa2')}
                            className="check-alternativa"
                            checked={alternativaMarcada === 'alternativa2'} />
                        <label className="texto-alternativa">{res2}</label>
                    </div>
                    <div id="alternativa3" className="container-info info-hover" onClick={(e) => marcarAlternativaUsuario('alternativa3')}>
                        <input type="radio"
                            onChange={(e) => marcarAlternativaUsuario('alternativa3')}
                            className="check-alternativa"
                            checked={alternativaMarcada === 'alternativa3'} />
                        <label className="texto-alternativa">{res3}</label>
                    </div>
                    <div id="alternativa4" className="container-info info-hover" onClick={(e) => marcarAlternativaUsuario('alternativa4')}>
                        <input type="radio"
                            onChange={(e) => marcarAlternativaUsuario('alternativa4')}
                            className="check-alternativa"
                            checked={alternativaMarcada === 'alternativa4'} />
                        <label className="texto-alternativa">{res4}</label>
                    </div>
                    <div id="alternativa5" className="container-info info-hover" onClick={(e) => marcarAlternativaUsuario('alternativa5')}>
                        <input type="radio"
                            onChange={(e) => marcarAlternativaUsuario('alternativa5')}
                            className="check-alternativa"
                            checked={alternativaMarcada === 'alternativa5'} />
                        <label className="texto-alternativa">{res5}</label>
                    </div>
                    <div className="container-buttons">
                        <button onClick={decrementaQuestao} type="button">Voltar</button>
                        <button onClick={encrementaQuestao} id="botaoCadastrar" type="button">Avançar</button>
                    </div>
                </div>
            </div>
        </Scrollbar>
    );
}
