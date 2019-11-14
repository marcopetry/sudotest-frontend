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
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                </div>
                <Respostas />
                <Respostas />
                <Respostas />
                <Respostas />
                <Respostas />
                <div className="container-buttons">
                    <button type="button">Voltar</button>
                    <button id="botaoCadastrar" type="button">Avançar</button>
                </div>            
            </div>
        </div>
    );
}