import React, { useState } from 'react';
import './InfoQuestao.css';

export default function InfoQuestao(props) {

    return (
        <div className="container-info-prova">
            <div className="cont-info">
                <div className="container-todas-info">
                    <div className="info">
                        <strong>Enunciado: </strong>
                        <p>{props.questao.enunciado}</p>
                    </div>
                    <div className="info">
                        <strong>Alternativa 1:</strong>
                        <p>{props.questao.alternativa1}</p>
                    </div>
                    <div className="info">
                        <strong>Alternativa 2:</strong>
                        <p>{props.questao.alternativa2}</p>
                    </div>
                    <div className="info">
                        <strong>Alternativa 3:</strong>
                        <p>{props.questao.alternativa3}</p>
                    </div>
                    <div className="info">
                        <strong>Alternativa 4:</strong>
                        <p>{props.questao.alternativa4}</p>
                    </div>
                    <div className="info">
                        <strong>Alternativa 5:</strong>
                        <p>{props.questao.alternativa5}</p>
                    </div>
                    <div className="info">
                        <strong>Alternativa correta:</strong>
                        <p>{props.questao.alternativacorreta}</p>
                    </div>
                </div>
                <div className="container-buttons-editar-prova">
                    <button onClick={() => props.history.push('/questoes')}>Voltar</button>
                    <button onClick={() => props.acao('editar')}>Editar</button>
                    <button id="botaoExcluir" onClick={() => props.acao('excluir')}>Excluir</button>
                </div>
            </div>
        </div>
    );
}