import React, { useState } from 'react';
import './Questoes.css';
import Respostas from '../Resposta/Resposta'

export default function Questoes(props) {
    const [pergunta, setPergunta] = useState(''),
          [res1, setRes1] = useState(''),
          [res2, setRes2] = useState(''),
          [res3, setRes3] = useState(''),
          [res4, setRes4] = useState(''),
          [res5, setRes5] = useState('');

    
    return (
        <div className="main-container">
            <div className="form-questoes">                
                <div className="questao">
                    <h2>{props.texto}</h2>
                    <span>{pergunta}</span>
                </div>
                <Respostas opcaoResposta={res1}/>
                <Respostas opcaoResposta={res2}/>
                <Respostas opcaoResposta={res3}/>
                <Respostas opcaoResposta={res4}/>
                <Respostas opcaoResposta={res5}/>
                <div className="container-buttons">
                    <button type="button">Voltar</button>
                    <button id="botaoCadastrar" type="button">Avançar</button>
                </div>            
            </div>
        </div>
    );
}