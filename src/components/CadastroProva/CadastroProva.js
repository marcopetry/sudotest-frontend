/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import './CadastroProva.css';
import api from '../../services/api';
import TelaEspera from '../TelaEspera/TelaEspera';
import Feedback from '../Feedback/Feedback';
import { useHistory } from 'react-router-dom';
import { validarCadastroProva } from '../../validators/ValidatorCadastroProva';

//uso essa variável pra renderizar imagem no componente feedback
let imgFeedback;
export default function CadastroProva(props) {
    let history = useHistory();
    /* console.log(props.prova.id) */
    const [id, setId] = useState(''),
        [token, setToken] = useState(''),
        [horaInicio, setHoraInicio] = useState(''),
        [nomeProva, setNomeProva] = useState(''),
        [horaTermino, setHoraTerminio] = useState(''),
        [dataRealizacao, setData] = useState(''),
        [qtdQuestoesMatematica, setQtdQuestoesMatematica] = useState(''),
        [qtdQuestoesPortugues, setQtdQuestoesPortugues] = useState(''),
        [qtdQuestoesInformatica, setQtdQuestoesInformatica] = useState(''),
        [qtdQuestoesConhecimentosGerais, setQtdQuestoesConhecimentosGerais] = useState(''),
        [porcentagemAprovacao, setPorcentagemAprovacao] = useState(''),
        [vagasDisponiveis, setVagasDisponiveis] = useState(''),
        [espera, setEspera] = useState(false),
        [feedback, setFeedback] = useState('');

    const limparCampos = () => {
        setHoraInicio('');
        setHoraTerminio('');
        setData('');
        setQtdQuestoesMatematica('');
        setQtdQuestoesPortugues('');
        setQtdQuestoesInformatica('');
        setQtdQuestoesConhecimentosGerais('');
        setPorcentagemAprovacao('');
        setVagasDisponiveis('');
        setNomeProva('');
    }

    //seta os campos quando vem para edição
    useEffect(() => {
        if (props.prova !== undefined) {
            setId(props.prova.id);
            setToken(props.prova.token);
            setHoraInicio(props.prova.horaInicio);
            setHoraTerminio(props.prova.horaTermino);
            setData(props.prova.dataRealizacao);
            setQtdQuestoesMatematica(props.prova.qtdQuestoesMatematica);
            setQtdQuestoesPortugues(props.prova.qtdQuestoesPortugues);
            setQtdQuestoesInformatica(props.prova.qtdQuestoesInformatica);
            setQtdQuestoesConhecimentosGerais(props.prova.qtdQuestoesConhecimentosGerais);
            setPorcentagemAprovacao(props.prova.porcentagemAprovacao);
            setVagasDisponiveis(props.prova.vagasDisponiveis);
            setNomeProva(props.prova.nomeProva);
        }

    }, [props.prova])

    async function cadastrarProva(e) {
        e.preventDefault();
        setEspera(true);
        
        let dadosValidos = validarCadastroProva(nomeProva, dataRealizacao, horaInicio, horaTermino,
            qtdQuestoesMatematica, qtdQuestoesPortugues, qtdQuestoesInformatica,
            qtdQuestoesConhecimentosGerais, porcentagemAprovacao, vagasDisponiveis);

        if (!dadosValidos) {
            setEspera(false);
            return;
        }

        var token = await gerarToken();
        const response = await api.post('/cadastroProva', {
            horaInicio,
            nomeProva,
            horaTermino,
            qtdQuestoesMatematica,
            qtdQuestoesPortugues,
            qtdQuestoesInformatica,
            qtdQuestoesConhecimentosGerais,
            porcentagemAprovacao,
            dataRealizacao,
            vagasDisponiveis,
            token,
            status: "Aberta",
        })

        setEspera(false);
        if (response) {
            imgFeedback = 'certo';
            setFeedback('Prova cadastrada com sucesso!');
        } else {
            imgFeedback = 'errado';
            setFeedback('Problema ao cadastrar prova!');
        }
    }

    async function atualizarProva(e) {
        e.preventDefault();

        const response = await api.post('/atualizaProva', {
            id,
            horaInicio,
            nomeProva,
            horaTermino,
            qtdQuestoesMatematica,
            qtdQuestoesPortugues,
            qtdQuestoesInformatica,
            qtdQuestoesConhecimentosGerais,
            porcentagemAprovacao,
            dataRealizacao,
            vagasDisponiveis,
            token,
            status: 'Aberta'
        })

        setEspera(false);
        if (response) {
            imgFeedback = 'certo';
            setFeedback('Prova alterada com sucesso!');
        } else {
            imgFeedback = 'errado';
            setFeedback('Problema ao alterar prova!');
        }
    }

    const cadastrarAtualizar = (e) => {
        //setEspera(true);
        if (id === '') {
            cadastrarProva(e);
        } else {
            atualizarProva(e);
        }
    }

    async function gerarToken() {
        var min = Math.ceil(0);
        var max = Math.floor(10);
        for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * (max - min) + min);
            if (i == 0) {
                var token = random;
            } else {
                token = "" + token + random;
            }
        };
        const response = await api.post('/token', {
            token: token
        })
        if (response.data == null) {
            return token;
        } else {
            gerarToken();
        }
    }

    const cancelarCadatroAlteracao = () => {
        if (id === '') {
            limparCampos();
        } else {
            history.push('/provas-abertas');
        }
    }

    const resetMensagemErro = (e) => {
        console.log(e.target.name);
        e.target.classList.remove('border-erro');
        document.querySelector('span[name=' + e.target.name + ']').innerHTML = '';
    }

    if (feedback !== '') {
        setTimeout(() => {
            if (feedback === 'Prova alterada com sucesso!')
                history.push('/provas-abertas');
            if (feedback.indexOf('sucesso') !== -1)
                limparCampos();
            setFeedback('');
        }, 2000)
        return <Feedback msgPrimaria={feedback} img={imgFeedback} />
    }

    if (espera) return <TelaEspera />

    return (
        <div className="container-prova">
            <form className="form" onSubmit={cadastrarAtualizar}>
                <div className="container-form">
                    <div className="container-input">
                        <p>Nome da prova:</p>
                        <div id="nome-prova" className="container-input-feedback"> {/*asduhasudhasud*/}
                            <input type="text"
                                name="nome-prova" //idjasidja
                                placeholder="Digite aqui o nome do prova:"
                                value={nomeProva}
                                onChange={e => {
                                    setNomeProva(e.target.value);
                                    resetMensagemErro(e)
                                }} /> {/** */}
                            <div>

                                <span name="nome-prova" className="span-feedback"></span> {/**/}
                            </div>
                        </div>
                    </div>

                    <div className="container-input">
                        <p>Data de realização:</p>
                        <div id="dataRealizacao" className="container-input-feedback">
                            <input type="date"
                                name="dataRealizacao"
                                placeholder="dia/mês/ano"
                                value={dataRealizacao}
                                onChange={e => {
                                    setData(e.target.value);
                                    resetMensagemErro(e)
                                }} />
                            <div>
                                <span name="dataRealizacao" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>

                    <div className="container-input">
                        <p>Hora de início:</p>
                        <div id="horaInicio" className="container-input-feedback">
                            <input type="time"
                                name="horaInicio"
                                value={horaInicio}
                                onChange={e => {
                                    setHoraInicio(e.target.value);
                                    resetMensagemErro(e);
                                }} />
                            <div>

                                <span name="horaInicio" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>

                    <div className="container-input">
                        <p>Hora de término:</p>
                        <div id="horaTermino" className="container-input-feedback">
                            <input type="time"
                                name="horaTermino"
                                value={horaTermino}
                                onChange={e => {
                                    setHoraTerminio(e.target.value);
                                    resetMensagemErro(e);
                                }} />
                            <div>
                                <span name="horaTermino" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>

                    <div className="container-input">
                        <p>Quantidade de questões de matemática:</p>
                        <div id="qtdQuestoesMatematica" className="container-input-feedback">
                            <input type="number"
                                name="qtdQuestoesMatematica"
                                placeholder="Questões de matemática:"
                                value={qtdQuestoesMatematica}
                                onChange={e => {
                                    setQtdQuestoesMatematica(e.target.value)
                                    resetMensagemErro(e);
                                }} />
                            <div>
                                <span name="qtdQuestoesMatematica" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>

                    <div className="container-input">
                        <p>Quantidade de questões de português:</p>
                        <div id="qtdQuestoesPortugues" className="container-input-feedback">
                            <input type="number"
                                name="qtdQuestoesPortugues"
                                placeholder="Questões de português:"
                                value={qtdQuestoesPortugues}
                                onChange={e => {
                                    setQtdQuestoesPortugues(e.target.value);
                                    resetMensagemErro(e);
                                }} />
                            <div>
                                <span name="qtdQuestoesPortugues" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>

                    <div className="container-input">
                        <p>Quantidade de questões de informática:</p>
                        <div id="qtdQuestoesInformatica" className="container-input-feedback">
                            <input type="number"
                                name="qtdQuestoesInformatica"
                                placeholder="Questões de informática:"
                                value={qtdQuestoesInformatica}
                                onChange={e => {
                                    setQtdQuestoesInformatica(e.target.value);
                                    resetMensagemErro(e);
                                }} />
                            <div>
                                <span name="qtdQuestoesInformatica" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>

                    <div className="container-input">
                        <p>Quantidade de questões de conhecimentos gerais:</p>
                        <div id="qtdQuestoesConhecimentosGerais" className="container-input-feedback">
                            <input type="number"
                                name="qtdQuestoesConhecimentosGerais"
                                placeholder="Questões de conhecimentos gerais:"
                                value={qtdQuestoesConhecimentosGerais}
                                onChange={e => {
                                    setQtdQuestoesConhecimentosGerais(e.target.value);
                                    resetMensagemErro(e);
                                }} />
                            <div>
                                <span name="qtdQuestoesConhecimentosGerais" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>

                    <div className="container-input">
                        <p>Porcentagem para aprovação:</p>
                        <div id="porcentagemAprovacao" className="container-input-feedback">
                            <input type="number"
                                name="porcentagemAprovacao"
                                placeholder="Digite a nota mínima para aprovação:"
                                value={porcentagemAprovacao}
                                onChange={e => {
                                    setPorcentagemAprovacao(e.target.value);
                                    resetMensagemErro(e);
                                }} />
                            <div>
                                <span name="porcentagemAprovacao" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>
                    <div className="container-input">
                        <p>Número de vagas:</p>
                        <div id="vagasDisponiveis" className="container-input-feedback">
                            <input type="number"
                                name="vagasDisponiveis"
                                placeholder="Digite a quantidade de vagas disponíveis:"
                                value={vagasDisponiveis}
                                onChange={e => {
                                    setVagasDisponiveis(e.target.value);
                                    resetMensagemErro(e);
                                }} />
                            <div>
                                <span name="vagasDisponiveis" className="span-feedback"></span>
                            </div>
                        </div>
                    </div>
                    <div className="container-input cont-buttons">
                        <button type="button" onClick={cancelarCadatroAlteracao}>Cancelar</button>
                        <button id="botaoCadastrar" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}