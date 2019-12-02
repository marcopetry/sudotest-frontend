import React from 'react';
import './Feedback.css';
import certo from '../../assets/certo.png';
import errado from '../../assets/errado.png';

export default function Feedback(props) {
    let imagem;

    if(props.img === 'certo'){
        imagem = certo;
    }else if(props.img === 'errado'){
        imagem = errado;
    }else {
        imagem = null;
    }

    return (
        <div className="container-resposta">
            <div className="container-texto">
                {imagem !== null && <img id="img-feedback" src={imagem} />}
                <div>
                    <h1>{props.msgPrimaria}</h1>
                    <h2>{props.msgSecundaria}</h2>
                </div>
            </div>
        </div>
    );
}