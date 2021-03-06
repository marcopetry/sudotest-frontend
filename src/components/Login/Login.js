import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

import api from '../../services/api';

import logo from '../../assets/logo1.png';
import TelaEspera from '../TelaEspera/TelaEspera';

export default function Login({ history }) {
    const [email, setEmail] = useState(''),
          [senha, setSenha] = useState(''),
          [espera, setEspera] = useState(false);

        

    async function handleLogin(e) {
        e.preventDefault();
        if(email === '' || senha === '') return alert('Campo email e/ou senha vazios.')

        setEspera(true);
        const response = await api.post('/aluno', {
            email,
            senha,
        });

        setEspera(false);
        if(response.data.login === true){
            setUsuario(email, response.data.idAluno, response.data.nomeAluno);            
            history.push('/home');
        }else{
            alert('Email ou Senha Inválidos');
        }
    }

    function setUsuario(user, idAluno, nomeAluno){
        if(user === 'adm@adm.com'){
            localStorage.setItem('Usuario', 'adm');
        }else{
            localStorage.setItem('Usuario', 'user');
            localStorage.setItem('idUsuario', idAluno);
            localStorage.setItem('nomeUsuario', nomeAluno);
        }
    }

    if(espera) return <TelaEspera />

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
                
                <Link to="/autocadastro" style={{ textDecoration: 'none'}}>
                    <p>Não tem cadastro?</p>
                </Link>
            </form>
        </div>
    );
}