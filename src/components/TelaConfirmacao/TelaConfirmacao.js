import React, { useState } from 'react';
import './TelaConfirmacao.css';

export default function TelaConfirmacao(props) {
    const [confirmado, setConfirmado] = useState(false);

    const funcaoConfirmar = () => {
        props.funcaoConfirmacao();
        /* props.history.push('/home'); */
    }

    const cancelar = () =>{
        props.funcaoCancelar();
    }

    return (
        <div className="container-confirmacao">
            <div className="container-texto-confirmacao">
                <h1>{props.mensagem}</h1>
                <div className="container-botoes-confirmacao">
                    <button id="botaoCancelarExclusao" className="botoes-confirmacao" onClick={props.funcaoCancelar}>Não</button>
                    <button className="botoes-confirmacao" onClick={funcaoConfirmar}>Sim</button>
                </div>
            </div>
        </div>
    );
}
