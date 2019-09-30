import React, { useState } from 'react';
import './Login.css';

import api from '../../services/api';

import logo from '../../assets/logo.png';

export default function Login({ history }) {
    const [email, setEmail] = useState(''),
          [senha, setSenha] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        const response = await api.post('/aluno', {
            email,
            senha,
        });

        if(response.data.login === true){
            history.push(`/autocadastro`);
        }else{
            console.log('Email ou Senha Inválidos')
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <div className="img-form">
                    <img src={logo} alt="Sudotec Logo" />
                </div>
                <input 
                    placeholder="Digite seu e-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password" 
                    placeholder="Digite sua senha" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}