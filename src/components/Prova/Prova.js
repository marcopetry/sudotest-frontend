import React, { useState, useEffect } from 'react';
import './Prova.css';
import Scrollbar from 'react-scrollbars-custom';
import api from '../../services/api';
import { horarioRestanteProva } from '../../helpers/Relógio';
import { monitorarQuestoesProva } from '../../helpers/MonitorQuestoesProva';

let listaRespostas = [];

export default function Prova(props) {
    
    const [numeroQuestao, setNumero] = useState(0),
        [pergunta, setPergunta] = useState(props.questao[numeroQuestao].enunciado),
        [res1, setRes1] = useState(props.questao[numeroQuestao].alternativa1),
        [res2, setRes2] = useState(props.questao[numeroQuestao].alternativa2),
        [res3, setRes3] = useState(props.questao[numeroQuestao].alternativa3),
        [res4, setRes4] = useState(props.questao[numeroQuestao].alternativa4),
        [res5, setRes5] = useState(props.questao[numeroQuestao].alternativa5),
        [alternativaCerta, setAlternativaCerta] = useState(props.questao[numeroQuestao].alternativacorreta),
        [alternativaMarcada, setAlternativaMarcada] = useState(''),
        [tempoRestanteProva, setTempo] = useState();

    const idAluno = localStorage.getItem('idUsuario');
    const idProva = props.idProva;
    const idQuestao = props.questao[numeroQuestao].id;

    /* 
        idAluno
        idProva
        idQuestao
        correta/errada
        alternativaMarcada
    */

    useEffect(() => {
        setPergunta(props.questao[numeroQuestao].enunciado);
        setRes1(props.questao[numeroQuestao].alternativa1);
        setRes2(props.questao[numeroQuestao].alternativa2);
        setRes3(props.questao[numeroQuestao].alternativa3);
        setRes4(props.questao[numeroQuestao].alternativa4);
        setRes5(props.questao[numeroQuestao].alternativa5);
        setAlternativaCerta(props.questao[numeroQuestao].alternativacorreta);
        if(listaRespostas.length > 0 && numeroQuestao < listaRespostas.length){
            setAlternativaMarcada(listaRespostas[numeroQuestao].alternativaMarcada);
        }else{
            setAlternativaMarcada('');
        }
    }, [numeroQuestao]);

    const atualizaHorario = () => {
        setTempo(horarioRestanteProva(props.horaTermino));
    };

    //setInterval(atualizaHorario, 10000);

    async function cadastrarResposta(e) {
        e.preventDefault();
        const response = await api.post('/cadastraAlunosProvasQuestoes', {
            idAluno,
            idProva,
            idQuestao,
            //resposta,
            alternativaMarcada,
        })
        console.log(response);
    }

    async function buscarResposta(e) {
        e.preventDefault();
        const response = await api.get('/buscaAlunosProvasQuestoes', {
            params: {
                idAluno,
                idProva,
                idQuestao,
            }
        })
        console.log(response);
    }

    const decrementaQuestao = () => {
        listaRespostas = monitorarQuestoesProva(listaRespostas, numeroQuestao, props.questao[numeroQuestao].id, alternativaMarcada)
        if (numeroQuestao > 0) setNumero(numeroQuestao - 1);
    }


    const encrementaQuestao = () => {
        listaRespostas = monitorarQuestoesProva(listaRespostas, numeroQuestao, props.questao[numeroQuestao].id, alternativaMarcada)
        if (numeroQuestao < props.questao.length - 1) setNumero(numeroQuestao + 1)
    }

    return (
        <Scrollbar>
            <div className="container-questoes">
                <div className="form-questoes">
                    <div className="container-info info-prova">
                        <h3 className="alinhar-esquerda">Questão número {numeroQuestao + 1}:</h3>
                        <h3>Tempo restante: {tempoRestanteProva}</h3>
                    </div>
                    <div className="container-info">
                        <label className="alinhar-esquerda">{pergunta}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            id="alternativa1"
                            className="check-alternativa"
                            name="alternativa-marcada"
                            value={res1}
                            onChange={(e) => setAlternativaMarcada(e.target.id)}
                            checked={alternativaMarcada === 'alternativa1'} />
                        <label className="texto-resposta">{res1}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            id="alternativa2"
                            className="check-alternativa"
                            name="alternativa-marcada"
                            value={res2}
                            onChange={(e) => setAlternativaMarcada(e.target.id)}
                            checked={alternativaMarcada === 'alternativa2'} />
                        <label className="texto-resposta">{res2}</label>
                        <label className="texto-alternativa">{res2}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            id="alternativa3"
                            className="check-alternativa"
                            name="alternativa-marcada"
                            value={res3}
                            onChange={(e) => setAlternativaMarcada(e.target.id)}
                            checked={alternativaMarcada === 'alternativa3'} />
                        <label className="texto-resposta">{res3}</label>
                        <label className="texto-alternativa">{res3}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            id="alternativa4"
                            className="check-alternativa"
                            name="alternativa-marcada"
                            value={res4}
                            onChange={(e) => setAlternativaMarcada(e.target.id)}
                            checked={alternativaMarcada === 'alternativa4'} />
                        <label className="texto-resposta">{res4}</label>
                        <label className="texto-alternativa">{res4}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            id="alternativa5"
                            className="check-alternativa"
                            name="alternativa-marcada"
                            value={res5}
                            onChange={(e) => setAlternativaMarcada(e.target.id)}
                            checked={alternativaMarcada === 'alternativa5'} />
                        <label className="texto-resposta">{res5}</label>
                        <label className="texto-alternativa">{res5}</label>
                    </div>
                    <div className="container-buttons">
                        <button onClick={decrementaQuestao} type="button">Voltar</button>
                        <button onClick={encrementaQuestao} id="botaoCadastrar" type="button">Avançar</button>
                    </div>
                </div>
            </div>
        </Scrollbar>
    );
}
