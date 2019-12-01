import React from 'react';
import './Feedback.css';
import certo from '../../assets/certo2.png';

export default function Feedback(props) {

    return (
        <div className="container-resposta">
            <div className="container-texto">
                <h1>{props.msgPrimaria}</h1>
                <h2>{props.msgSecundaria}</h2>
                {/* <button className="button" onClick={props.funcaoBotao}>{props.textoBotao}</button> */}
                <img id="img-feedback" src={certo} />
            </div>
        </div>
    );
}