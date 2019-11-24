import React, { useState } from 'react';
import './Prova.css';
import Scrollbar from 'react-scrollbars-custom';

export default function Prova(props) {
    const [pergunta, setPergunta] = useState(' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem'),
        [res1, setRes1] = useState('2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem'),
        [res2, setRes2] = useState('3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem'),
        [res3, setRes3] = useState('4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem'),
        [res4, setRes4] = useState('5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem'),
        [res5, setRes5] = useState('6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem'),
        [respostaMarcada, setRespostaMarcada] = useState(''),
        [tempoRestanteProva, setTempo] = useState(pegarData());
        
    function pegarData(){
        let dNow = new Date();
        let localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
        return localdate;
    }

    console.log(tempoRestanteProva);

    return (
        <Scrollbar>
            <div className="container-questoes">
                <div className="form-questoes">
                    <div className="container-info info-prova">
                        <h3 className="alinhar-esquerda">Questão número 1:</h3>
                        <h3>Tempo restante de prova: 2 horas</h3>
                    </div> 
                    <div className="container-info">
                        <label className="alinhar-esquerda">{pergunta}</label>
                    </div>
                    <div className="container-info">
                        <input  type="radio" 
                                className="check-resposta" 
                                name="resposta-marcada" 
                                value={res1} 
                                onChange={() => setRespostaMarcada(res1)}
                                checked={respostaMarcada === res1} />
                        <label className="texto-resposta">{res1}</label>
                    </div>
                    <div className="container-info">
                        <input  type="radio" 
                                className="check-resposta" 
                                name="resposta-marcada" 
                                value={res2}
                                onChange={() => setRespostaMarcada(res2)}
                                checked={respostaMarcada === res2} />
                        <label className="texto-resposta">{res2}</label>
                    </div>
                    <div className="container-info">
                        <input  type="radio" 
                                className="check-resposta" 
                                name="resposta-marcada" 
                                value={res3}
                                onChange={() => setRespostaMarcada(res3)}
                                checked={respostaMarcada === res3} />
                        <label className="texto-resposta">{res3}</label>
                    </div>
                    <div className="container-info">
                        <input  type="radio" 
                                className="check-resposta" 
                                name="resposta-marcada" 
                                value={res4}
                                onChange={() => setRespostaMarcada(res4)}
                                checked={respostaMarcada === res4}  />
                        <label className="texto-resposta">{res4}</label>
                    </div>
                    <div className="container-info">
                        <input  type="radio" 
                                className="check-resposta" 
                                name="resposta-marcada" 
                                value={res5} 
                                onChange={() => setRespostaMarcada(res5)}
                                checked={respostaMarcada === res5}  />
                        <label className="texto-resposta">{res5}v></label>
                    </div>
                    <div className="container-buttons">
                        <button type="button">Voltar</button>
                        <button id="botaoCadastrar" type="button">Avançar</button>
                    </div>
                </div>
            </div>
        </Scrollbar>
    );
}
