import React, { useState } from 'react';
import './CadastroProva.css';

export default function CadastroProva() {
    const   [tempoExecucao, setTempoExecucao] = useState(''),
            [dataRealizacao, setData] = useState(''), 
            [qtdQuestoesMatematica, setQtdQuestoesMatematica] = useState(''),
            [qtdQuestoesPortugues, setQtdQuestoesPortugues] = useState(''),
            [qtdQuestoesInformatica, setQtdQuestoesInformatica] = useState('') ,
            [qtdQuestoesConhecimentosGerais, setQtdQuestoesConhecimentosGerais] = useState(''),
            [porcentagemAprovacao, setPorcentagemAprovacao] = useState(''),
            [qtdAprovados, setQtdAprovados] = useState('');
    
    const limparCampos = (e) => {
        e.preventDefault();
        setTempoExecucao('');
        setData('');
        setQtdQuestoesMatematica('');
        setQtdQuestoesPortugues('');
        setQtdQuestoesInformatica('');
        setQtdQuestoesConhecimentosGerais('');
        setPorcentagemAprovacao('');
        setQtdAprovados('');
    }

    const cadastrarProva = (e) => {
        e.preventDefault();
        alert('Falta implementar cadastro!');
    }

    return (
        <div className="container-prova">
            <form className="form" onSubmit={cadastrarProva}>
                <div className="container-form">
                    <h1 className="text-h1">Cadastro de prova:</h1>
                    <div className="container-input">
                        <p>Tempo de execução em minutos:</p>
                        <input  type="number" 
                                placeholder="Digite os minutos aqui:"
                                value={tempoExecucao}
                                onChange={e => setTempoExecucao(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Data de realização:</p>
                        <input  type="date"
                                placeholder="dia/mês/ano"
                                value={dataRealizacao}
                                onChange={e => setData(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de matemática:</p>
                        <input  type="number"
                                placeholder="Questões de matemática:"
                                value={qtdQuestoesMatematica}
                                onChange={e => setQtdQuestoesMatematica(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de português:</p>
                        <input  type="number"
                                placeholder="Questões de português:"
                                value={qtdQuestoesPortugues}
                                onChange={e => setQtdQuestoesPortugues(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de informática:</p>
                        <input  type="number"
                                placeholder="Questões de informática:"
                                value={qtdQuestoesInformatica}
                                onChange={e => setQtdQuestoesInformatica(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de conhecimentos gerais:</p>
                        <input  type="number"
                                placeholder="Questões de conhecimentos gerais:"
                                value={qtdQuestoesConhecimentosGerais}
                                onChange={e => setQtdQuestoesConhecimentosGerais(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Porcentagem para aprovação:</p>
                        <input  type="number"
                                placeholder="Digite a nota mínima para aprovação:"
                                value={porcentagemAprovacao}
                                onChange={e => setPorcentagemAprovacao(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Número de aprovados:</p>
                        <input  type="number"
                                placeholder="Digite a quantidade máxima de aprovados:"
                                value={qtdAprovados}
                                onChange={e => setQtdAprovados(e.target.value)}/>
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