import React, { useState } from 'react';
import './Resposta.css'

export default function Reposta(props) {
    
    return (
        <div className="resposta">            
            <input type="radio" className="check-resposta" name="resposta-marcada" value={resposta}/>            
            <div className="item-resposta">                
                <label className="texto-resposta">
                    {props.opcaoResposta}
                </label>
            </div>            
        </div>
    );
}