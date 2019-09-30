import React, { useState } from 'react';
import './CadastroQuestoes.css';

export default function CadastroQuestoes() {
const [pergunta, setPergunta] = useState(''),
        [res1, setRes1] = useState(''),
        [res2, setRes2] = useState(''),
        [res3, setRes3] = useState(''),
        [res4, setRes4] = useState(''),
        [res5, setRes5] = useState('');

    
    return (
        <div className="main-container">
            <div className="cadastro-questoes-container">
                <form >
                    <h1>Cadastrar questão:</h1>

                    <div className="item-cadastro-questao">
                        <p>Pergunta:</p>
                        <textarea                        
                            className="form-control"
                            id="inputPergunta"
                            placeholder="Digite a pergunta:"
                            value={pergunta}
                            onChange={e => setPergunta(e.target.value)}
                        />
                    </div>
                    
                    <div className="item-cadastro-questao">
                        <p>Resposta 1:</p>                        
                        <input                        
                            className="form-control"
                            id="inputResposta1"
                            placeholder="Digite a primeira alternativa:"
                            value={res1}
                            onChange={e => setRes1(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <p>Resposta 2:</p>
                        <input                        
                            className="form-control"
                            id="inputResposta2"
                            placeholder="Digite a segunda alternativa:"
                            value={res2}
                            onChange={e => setRes2(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <p>Resposta 3:</p>
                        <input                        
                            className="form-control"
                            id="inputResposta3"
                            placeholder="Digite a terceira alternativa:"
                            value={res3}
                            onChange={e => setRes3(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <p>Resposta 4:</p>
                        <input                        
                            className="form-control"
                            id="inputResposta4"
                            placeholder="Digite a quarta alternativa:"
                            value={res4}
                            onChange={e => setRes4(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <p>Resposta 5:</p>
                        <input                        
                            className="form-control"
                            id="inputResposta5"
                            placeholder="Digite a quinta alternativa :"
                            value={res5}
                            onChange={e => setRes5(e.target.value)}
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div >
            
        </div>
    );
}