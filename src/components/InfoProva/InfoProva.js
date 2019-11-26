import React, { useState } from 'react';
import './InfoProva.css';
import api from '../../services/api';

export default function InfoProva(props) {
    const [id, setId] = useState('');

    async function excluirProva(e) {
        e.preventDefault(e);

        const response = await api.post('/deletaProva', {
            id,
        });
        console.log(response);
    }

    return (
        <div className="container-info-prova">
            <div className="cont-info">
                <div className="container-todas-info">
                    <div className="info">
                        <strong>Nome da prova: </strong>
                        <p>Aprender a Crescer 2019/2</p>
                    </div>
                    <div className="info">
                        <strong>Data: </strong>
                        <p>20/12/2020</p>
                    </div>
                    <div className="info">
                        <strong>Hora início: </strong>
                        <p>13:00</p>
                    </div>
                    <div className="info">
                        <strong>Hora término:</strong>
                        <p>16:00</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de vagas:</strong>
                        <p>30</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de questões de português:</strong>
                        <p>10</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de questões de matemática:</strong>
                        <p>10</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de questões de informática:</strong>
                        <p>10</p>
                    </div>
                    <div className="info">
                        <strong>Quantidade de questões de conhecimentos gerais:</strong>
                        <p>10</p>
                    </div>
                    <div className="info">
                        <strong>Status:</strong>
                        <p>Aberta</p>
                    </div>
                    <div className="info">
                        <strong>Porcentagem para aprovação:</strong>
                        <p>60%</p>
                    </div>
                    <div className="info">
                        <strong>Token:</strong>
                        <p>1025</p>
                    </div>
                </div>
                <div className="container-buttons-editar-prova">
                    <button onClick={excluirProva}>Excluir</button>
                    <button id="botaoEditar">Editar</button>
                </div>
            </div>
        </div>
    );
}