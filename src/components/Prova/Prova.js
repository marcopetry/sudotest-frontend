import React, { useState, useEffect } from 'react';
import './Prova.css';
import Scrollbar from 'react-scrollbars-custom';
import api from '../../services/api';

let data = new Date();

export default function Prova(props) {
    
    const [numeroQuestao, setNumero] = useState(0),
        [pergunta, setPergunta] = useState(props.questao[numeroQuestao].enunciado),
        [res1, setRes1] = useState(props.questao[numeroQuestao].alternativa1),
        [res2, setRes2] = useState(props.questao[numeroQuestao].alternativa2),
        [res3, setRes3] = useState(props.questao[numeroQuestao].alternativa3),
        [res4, setRes4] = useState(props.questao[numeroQuestao].alternativa4),
        [res5, setRes5] = useState(props.questao[numeroQuestao].alternativa5),
        [respostaCerta, setRespostaCerta] = useState(props.questao[numeroQuestao].alternativaCorreta),
        [respostaMarcadaSalva, setRespostaMarcadaSalva] = useState(''),
        [respostaMarcada, setRespostaMarcada] = useState(''),
        [tempoRestanteProva, setTempo] = useState(data.getHours() + ' : ' + data.getMinutes());

    console.log(props.questao[numeroQuestao].id);
    useEffect(() => {
        setPergunta(props.questao[numeroQuestao].enunciado);
        setRes1(props.questao[numeroQuestao].alternativa1);
        setRes2(props.questao[numeroQuestao].alternativa2);
        setRes3(props.questao[numeroQuestao].alternativa3);
        setRes4(props.questao[numeroQuestao].alternativa4);
        setRes5(props.questao[numeroQuestao].alternativa5);
        setRespostaMarcadaSalva(respostaMarcada);
        setRespostaCerta(props.questao[numeroQuestao].alternativaCorreta);
        setRespostaMarcada('');
    }, [numeroQuestao]);
    
    const atualizaHorario = () => {
        data = new Date();
        setTempo(data.getHours() + ' : ' + data.getMinutes());
    };
    
    setInterval(atualizaHorario, 60000);

    async function buscarQuestoes(e) {
        const response = api.get('/buscaProvasQuestoes', {
            params: {
                //PRECISA DO ID DA PROVA
            }
        })
        console.log(response);
    }

    const decrementaQuestao = () => {
        if(numeroQuestao > 0) setNumero(numeroQuestao - 1)
    }


    const encrementaQuestao = () => {
        if(numeroQuestao < props.questao.length - 1) setNumero(numeroQuestao + 1)
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
                            className="check-resposta"
                            name="resposta-marcada"
                            value={res1}
                            onChange={() => setRespostaMarcada(res1)}
                            checked={respostaMarcada === res1} />
                        <label className="texto-resposta">{res1}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            className="check-resposta"
                            name="resposta-marcada"
                            value={res2}
                            onChange={() => setRespostaMarcada(res2)}
                            checked={respostaMarcada === res2} />
                        <label className="texto-resposta">{res2}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            className="check-resposta"
                            name="resposta-marcada"
                            value={res3}
                            onChange={() => setRespostaMarcada(res3)}
                            checked={respostaMarcada === res3} />
                        <label className="texto-resposta">{res3}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            className="check-resposta"
                            name="resposta-marcada"
                            value={res4}
                            onChange={() => setRespostaMarcada(res4)}
                            checked={respostaMarcada === res4} />
                        <label className="texto-resposta">{res4}</label>
                    </div>
                    <div className="container-info">
                        <input type="radio"
                            className="check-resposta"
                            name="resposta-marcada"
                            value={res5}
                            onChange={() => setRespostaMarcada(res5)}
                            checked={respostaMarcada === res5} />
                        <label className="texto-resposta">{res5}</label>
                    </div>
                    <div className="container-buttons">
                        <button onClick={decrementaQuestao}type="button">Voltar</button>
                        <button onClick={encrementaQuestao} id="botaoCadastrar" type="button">Avançar</button>
                    </div>
                </div>
            </div>
        </Scrollbar>
    );
}
