import React, { useState } from 'react';
import './InserirToken.css';
import api from '../../services/api';

import logo from '../../assets/logo.png';

export default function InserirToken(props, { history }) {
    const [token, setToken] = useState('');

    async function buscarToken (e) {
        e.preventDefault();
        const response = await api.get('/buscaToken', {
            params: {
                token,
            }
        });
        
        if(response.data == null) {
            alert('Token Inválido');
        } else {
            console.log(response.data);
        }
    }

    return (
        <div className="token-container">
            <form onSubmit={buscarToken}>
                <div className="img-form">
                    <img src={logo} alt="Sudotec Logo" />
                </div>
                <input
                    type="password" 
                    placeholder="Digite seu token:" 
                    value={token}
                    onChange={e => setToken(e.target.value)}
                />
                <button type="submit">Iniciar prova</button>
            </form>
        </div>
    );
}