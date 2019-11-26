import React from 'react';
import './Resultado.css';

export default function Resultado(props){

    return (
        <div className="container-resposta">
            <div className="container-texto">
                <h1>Parabéns Marco, você a concluiu a prova!</h1>
                <h2>Sua nota foi 10.</h2>
                <button className="button" onClick={() => alert('O cara do meu lado é corno.')}>Concluído</button>
            </div>
        </div>
    );
}