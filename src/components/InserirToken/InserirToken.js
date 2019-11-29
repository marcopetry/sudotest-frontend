import React, { useState } from 'react';
import './InserirToken.css';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import TelaEspera from '../TelaEspera/TelaEspera';

export default function InserirToken(props) {
    const [token, setToken] = useState(''),
        [espera, setEspera] = useState(false);

    async function buscarToken(e) {
        e.preventDefault();
        setEspera(true);
        const response = await api.get('/buscaToken', {
            params: {
                token,
            }
        });
        setEspera(false);
        if (response.data == null) {
            alert('Token Inválido');
        } else {
            /* const res = await api.get('/validaAlunosProvas', {
                params: {
                    idProva: response.data.id,
                    idAluno: localStorage.getItem('idUsuario'),
                }
            })
            if (res.data != null) {
                alert('Essa prova já foi realizada por você')
            } else { */
                localStorage.setItem('prova', JSON.stringify(response.data));
                localStorage.setItem('Usuario', 'user-prova');
                props.history.push('/prova');
            /* } */
        }
    }

    if (espera) return <TelaEspera />

    return (
        <div className="token-container">
            <form onSubmit={buscarToken}>
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