import React from 'react';
import './Feedback.css';

export default function Feedback(props) {

    //mensagem primaria, mensagem secundária, função pro botão

    return (
        <div className="container-resposta">
            <div className="container-texto">
                <h1>{props.msgPrimaria}</h1>
                <h2>{props.msgSecundaria}</h2>
                {/* <button className="button" onClick={props.funcaoBotao}>{props.textoBotao}</button> */}
            </div>
        </div>
    );
}