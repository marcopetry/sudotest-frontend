import React, { useState } from 'react';
import './InserirToken.css';

import logo from '../../assets/logo.png';

export default function InserirToken(props, { history }) {
    const [token, setToken] = useState('');

    return (
        <div className="token-container">
            <form>
                <div className="img-form">
                    <img src={logo} alt="Sudotec Logo" />
                </div>
                <input
                    type="text" 
                    placeholder="Digite seu token:" 
                    value={token}
                    onChange={e => setToken(e.target.value)}
                />
                <button type="submit">Iniciar prova</button>
            </form>
        </div>
    );
}