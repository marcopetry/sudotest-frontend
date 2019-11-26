import React from 'react';
import './TelaConfirmacao.css';

export default function TelaConfirmacao(props){

    return (
        <div className="container-confirmacao">
            <div className="container-texto-confirmacao">
                <h1>Você tem certeza que quer excluir essa prova?</h1>
                <div className="container-botoes-confirmacao">
                    <button id="botaoCancelarExclusao" className="botoes-confirmacao" onClick={() => alert('O cara do meu lado é corno.')}>Não</button>
                    <button className="botoes-confirmacao" onClick={() => alert('O cara do meu lado é corno.')}>Sim</button>
                </div>
            </div>
        </div>
    );
}