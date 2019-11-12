import React, { useState } from 'react';
import './Resposta.css'

export default function Reposta() {
const [resposta, setResposta] = useState('');
    
    return (
        <div className="resposta">            
            <input type="radio" className="check-resposta" name="resposta-marcada" value={resposta}/>            
            <div className="item-resposta">                
                <label className="texto-resposta">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                                         
                </label>
            </div>            
        </div>
    );
}