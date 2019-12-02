import React, { useState } from 'react';
import './InserirToken.css';
import api from '../../services/api';

import logo from '../../assets/logo1.png';
import TelaEspera from '../TelaEspera/TelaEspera';
import { preencherListaComRespostasVazias } from '../../helpers/MonitorQuestoesProva';

//Uma lista com todas as respostas vazias do usuário para gerenciar no front-end
let listaRespostasVazias = [];
//Uma lista com todas as questões para mandar pro componente prova
let questoesProva = [];

export default function InserirToken({ history }) {
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
        if (response.data == null) {
            setEspera(false);
            alert('Token Inválido');
        } else {
            const res = await api.get('/validaAlunosProvas', {
                params: {
                    idProva: response.data.id,
                    idAluno: localStorage.getItem('idUsuario'),
                }
            })
            if (res.data != null) {
                alert('Essa prova já foi realizada por você')
            } else {
                localStorage.setItem('prova', JSON.stringify(response.data));
                localStorage.setItem('Usuario', 'user-prova');
                history.push('prova/questao-1');
            }
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