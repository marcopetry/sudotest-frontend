import React, { useState } from 'react';
import './CadastroProva.css';

export default function CadastroProva() {
    const   [horaInicio, setHoraInicio] = useState(''),
            [nomeProva, setNomeProva] = useState(''),
            [horaTermino, setHoraTerminio] = useState(''),
            [dataRealizacao, setData] = useState(''), 
            [qtdQuestoesMatematica, setQtdQuestoesMatematica] = useState(''),
            [qtdQuestoesPortugues, setQtdQuestoesPortugues] = useState(''),
            [qtdQuestoesInformatica, setQtdQuestoesInformatica] = useState('') ,
            [qtdQuestoesConhecimentosGerais, setQtdQuestoesConhecimentosGerais] = useState(''),
            [porcentagemAprovacao, setPorcentagemAprovacao] = useState(''),
            [vagasDisponiveis, setVagasDisponiveis] = useState('');
    
    const limparCampos = (e) => {
        e.preventDefault();
        setHoraInicio('');
        setHoraTerminio('');
        setData('');
        setQtdQuestoesMatematica('');
        setQtdQuestoesPortugues('');
        setQtdQuestoesInformatica('');
        setQtdQuestoesConhecimentosGerais('');
        setPorcentagemAprovacao('');
        setVagasDisponiveis('');
    }

    const cadastrarProva = (e) => {
        e.preventDefault();
        alert('Falta implementar cadastro!');
    }

    return (
        <div className="container-prova">
            <form className="form" onSubmit={cadastrarProva}>
                <div className="container-form">
                    <div className="container-input">
                        <p>Nome da prova:</p>
                        <input  type="text"
                                placeholder="Digite aqui o nome do prova:"
                                value={nomeProva}
                                onChange={e => setNomeProva(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Data de realização:</p>
                        <input  type="date"
                                placeholder="dia/mês/ano"
                                value={dataRealizacao}
                                onChange={e => setData(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Hora de início:</p>
                        <input  type="time" 
                                placeholder="Digite os minutos aqui:"
                                value={horaInicio}
                                onChange={e => setHoraInicio(e.target.value)}/>
                    </div>
                    <div className="container-input">
                        <p>Hora de término:</p>
                        <input  type="time" 
                                placeholder="Digite os minutos aqui:"
                                value={horaTermino}
                                onChange={e => setHoraTerminio(e.target.value)}/>
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
                        <p>Número de vagas:</p>
                        <input  type="number"
                                placeholder="Digite a quantidade de vagas disponíveis:"
                                value={vagasDisponiveis}
                                onChange={e => setVagasDisponiveis(e.target.value)}/>
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