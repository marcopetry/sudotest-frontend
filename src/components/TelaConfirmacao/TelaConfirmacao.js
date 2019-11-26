import React from 'react';
import './TelaConfirmacao.css';

export default function TelaConfirmacao(props) {

    return (
        <div className="container-confirmacao">
            <div className="container-texto-confirmacao">
                <h1>{props.mensagem}</h1>
                <div className="container-botoes-confirmacao">
                    <button id="botaoCancelarExclusao" className="botoes-confirmacao" onClick={props.funcaoCancelar}>Não</button>
                    <button className="botoes-confirmacao" onClick={props.funcaoConfirmacao}>Sim</button>
                </div>
            </div>
        </div>
    );
}

//funcaoConfirmacao, funcaoCancelar, mensagem