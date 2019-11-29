import React, { useState } from 'react';
import './InfoProva.css';
import api from '../../services/api';
import TelaConfirmacao from '../TelaConfirmacao/TelaConfirmacao';
import Feedback from '../Feedback/Feedback';
import CadastroProva from '../CadastroProva/CadastroProva';

export default function InfoProva(props) {
    const [operacao, setOperacao] = useState('mostrar');
    console.log(props.prova);

    const deletarProva = async function excluirProva(id) {
        const response = await api.post('/deletaProva', {
            id,
        });
        console.log(response);
        setOperacao('deletada-com-sucesso');
    }

    const cancelarDeletar = () => setOperacao('mostrar');

    const confirmarFeedback = () => props.history.push('/home');

    if(operacao === 'excluir'){
        return (
            <TelaConfirmacao 
                mensagem="Tem certeza que deseja excluir essa prova?"
                funcaoCancelar={cancelarDeletar}
                funcaoConfirmacao={() => deletarProva(props.prova.id)}/>
        );
        //tela confirmação, chamar a função e feedback
    }

    if(operacao === 'deletada-com-sucesso'){
        return (
            <Feedback 
                msgPrimaria="Prova deletada com sucesso!"
                textoBotao="Ok"
                funcaoBotao={confirmarFeedback}
                />
        );
    }

    if(operacao === 'editar'){
        return (
            <CadastroProva prova={props.prova} history={props.history}/>
        );
    }

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
                    <button onClick={() => setOperacao('excluir')}>Excluir</button>
                    <button id="botaoEditar" onClick={() => setOperacao('editar')}>Editar</button>
                </div>
            </div>
        </div>
    );
}