import React, { useState } from 'react';
import './Login.css';

// import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    return (
        <div className="login-container">
            <form>
                <div className="img-form">
                    <img src={logo} alt="Sudotec Logo" />
                </div>
                <input 
                    placeholder="Digite seu e-mail" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password" 
                    placeholder="Digite sua senha" 
                    // value={username}
                    // onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}