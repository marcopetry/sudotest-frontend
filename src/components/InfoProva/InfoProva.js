import React, { useState } from 'react';
import './InfoProva.css';

export default function InfoProva(props) {

    return (
        <div className="container-info-prova">
            <div className="cont-info">
                <div className="container-todas-info">
                    <div className="info">
                        <strong>Nome da prova: </strong>
                        <p>{props.prova.nomeProva}</p>
                    </div>
                    <div className="info">
                        <strong>Data: </strong>
                        <p>{props.prova.dataRealizacao}</p>
                    </div>
                    <div className="info">
                        <strong>Hora início: </strong>
                        <p>{props.prova.horaInicio}</p>
                    </div>
                    <div className="info">
                        <strong>Hora término:</strong>
                        <p>{props.prova.horaTermino}</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de vagas:</strong>
                        <p>{props.prova.vagasDisponiveis}</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de questões de português:</strong>
                        <p>{props.prova.qtdQuestoesPortugues}</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de questões de matemática:</strong>
                        <p>{props.prova.qtdQuestoesMatematica}</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de questões de informática:</strong>
                        <p>{props.prova.qtdQuestoesInformatica}</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de questões de conhecimentos gerais:</strong>
                        <p>{props.prova.qtdQuestoesConhecimentosGerais}</p>
                    </div>
                    <div className="info">
                        <strong>Status:</strong>
                        <p>{props.prova.status}</p>
                    </div>
                    <div className="info">
                        <strong>Porcentagem para aprovação:</strong>
                        <p>{props.prova.porcentagemAprovacao}</p>
                    </div>
                    <div className="info">
                        <strong>Token:</strong>
                        <p>{props.prova.token}</p>
                    </div>
                </div>
                <div className="container-buttons-editar-prova">
                    <button onClick={() => props.history.push('/provas-abertas')}>Voltar</button>
                    <button onClick={() => props.acao('editar')}>Editar</button>
                    <button id="botaoExcluir" onClick={() => props.acao('excluir')}>Excluir</button>
                </div>
            </div>
        </div>
    );
}