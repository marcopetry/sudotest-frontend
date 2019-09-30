import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Autocadastro.css';

import api from '../../services/api'

import logo from '../../assets/logo.png';

export default function Autocadastro() {
    const [nome, setNome] = useState(''),
          [email, setEmail] = useState(''),
          [senha, setSenha] = useState(''),
          [telefone, setTelefone] = useState(''),
          [idade, setIdade] = useState(''),
          [cpf, setCpf] = useState('');

    async function handleCadastrar(e) {
        e.preventDefault();

        const response = await api.post('/cadastroAluno', {
            nome,
            email,
            senha,
            telefone,
            idade,
            cpf

        });

        console.log(response.data);
    }

    return (
        <div className="main-container">
            <div className="sudotest-container">
                <img src={logo} alt="Sudotec Logo" />
                <div className="titulo">
                    <p className="sudo">SUDO</p>
                    <p className="test">TEST</p>
                </div>
                <p className="sudotest-texto">Sistema de provas online</p>
            </div>

            <div className="autocadastro-container">
                <form onSubmit={handleCadastrar}>
                    <h1>Cadastre-se</h1>

                    <p>Nome</p>
                    <input
                        class="form-control"
                        id="inputNome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />

                    <p>E-mail</p>
                    <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <p>Senha</p>
                    <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <p>Telefone</p>
                    <input
                        class="form-control"
                        id="inputTelefone"
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    />

                    <div className="number-input">
                        <div className="idade">
                            <p>Idade</p>
                            <input
                                // class="form-control"
                                id="inputCity"
                                placeholder="Idade"
                                value={idade}
                                onChange={e => setIdade(e.target.value)}
                            />
                        </div>

                        <div className="cpf">
                            <p>CPF</p>
                            <input
                                // class="form-control"
                                id="inputCPF"
                                placeholder="Digite seu CPF"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit">Cadastrar</button>

                    <Link to="/" style={{ textDecoration: 'none'}}>
                        <p className="p-link">Já é cadastrado? Faça o login</p>
                    </Link>
                </form>
            </div >

        </div>
    );
}