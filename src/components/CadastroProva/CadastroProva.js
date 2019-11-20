/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import './CadastroProva.css';
import api from '../../services/api'

export default function CadastroProva() {
    const [tempoExecucao, setTempoExecucao] = useState(''),
        [dataRealizacao, setData] = useState(''),
        [qtdMatematica, setQtdMatematica] = useState(''),
        [qtdPortugues, setQtdPortugues] = useState(''),
        [qtdInformatica, setQtdInformatica] = useState(''),
        [qtdConhecimentosGerais, setQtdConhecimentosGerais] = useState(''),
        [porcentagemAprovacao, setPorcentagemAprovacao] = useState(''),
        [qtdVagas, setQtdVagas] = useState('');

    const limparCampos = (e) => {
        e.preventDefault();
        setTempoExecucao('');
        setData('');
        setQtdMatematica('');
        setQtdPortugues('');
        setQtdInformatica('');
        setQtdConhecimentosGerais('');
        setPorcentagemAprovacao('');
        setQtdVagas('');
    }

    async function cadastrarProva(e) {
        e.preventDefault();
        var token = await gerarToken();
        
        const response = await api.post('/cadastroProva', {
            tempoExecucao,
            qtdMatematica,
            qtdPortugues,
            qtdInformatica,
            qtdConhecimentosGerais,
            porcentagemAprovacao,
            dataRealizacao,
            qtdVagas,
            token,
            status: "Aberta",
        })
        console.log(response)
    }

    async function gerarToken() {
        var min = Math.ceil(0);
        var max = Math.floor(10);
        for(var i = 0; i < 4; i++){
            var random = Math.floor(Math.random() * (max - min) + min);
            if(i == 0) {
                var token = random;
            }else {
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

    return (
        <div className="container-prova">
            <form className="form" onSubmit={cadastrarProva}>
                <div className="container-form">
                    <h1 className="text-h1">Cadastro de prova:</h1>
                    <div className="container-input">
                        <p>Tempo de execução em minutos:</p>
                        <input type="number"
                            placeholder="Digite os minutos aqui:"
                            value={tempoExecucao}
                            onChange={e => setTempoExecucao(e.target.value)} />
                    </div>
                    <div className="container-input">
                        <p>Data de realização:</p>
                        <input type="date"
                            placeholder="dia/mês/ano"
                            value={dataRealizacao}
                            onChange={e => setData(e.target.value)} />
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de matemática:</p>
                        <input type="number"
                            placeholder="Questões de matemática:"
                            value={qtdMatematica}
                            onChange={e => setQtdMatematica(e.target.value)} />
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de português:</p>
                        <input type="number"
                            placeholder="Questões de português:"
                            value={qtdPortugues}
                            onChange={e => setQtdPortugues(e.target.value)} />
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de informática:</p>
                        <input type="number"
                            placeholder="Questões de informática:"
                            value={qtdInformatica}
                            onChange={e => setQtdInformatica(e.target.value)} />
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de conhecimentos gerais:</p>
                        <input type="number"
                            placeholder="Questões de conhecimentos gerais:"
                            value={qtdConhecimentosGerais}
                            onChange={e => setQtdConhecimentosGerais(e.target.value)} />
                    </div>
                    <div className="container-input">
                        <p>Porcentagem para aprovação:</p>
                        <input type="number"
                            placeholder="Digite a nota mínima para aprovação:"
                            value={porcentagemAprovacao}
                            onChange={e => setPorcentagemAprovacao(e.target.value)} />
                    </div>
                    <div className="container-input">
                        <p>Número de Vagas:</p>
                        <input type="number"
                            placeholder="Digite a quantidade máxima de Vagas:"
                            value={qtdVagas}
                            onChange={e => setQtdVagas(e.target.value)} />
                    </div>
                    <div className="container-input cont-buttons">
                        <button onClick={limparCampos}>Limpar campos</button>
                        <button id="botaoCadastrar">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}