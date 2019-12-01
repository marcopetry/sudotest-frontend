import React, { useState } from 'react';
import api from '../services/api';

export default function ControllerMeusResultados(){
    const [dados, setDados] = useState('');

    async function buscarResultados(idAluno) {
        const response = await api.get('/buscaAlunosProvas', {
            params: {
                idAluno
            }
        })
        console.log(response.data);
        setDados(response.data);
    }

    console.log(localStorage.getItem('idUsuario'));
    if(dados === '')
        buscarResultados(localStorage.getItem('idUsuario'));

    return (
        <div>
            jegue
        </div>
    );
}