import React, { useState } from 'react';
import './DashboardAluno.css';
import ControlerAluno from '../ControlerAluno/ControlerAluno';

export default function DashboardAluno({ history }) {
    const [atividade, setAtividade] = useState('home');

    const mudaAtividade = (e) => {
        setAtividade(e);
        const elementoMarcado = document.getElementsByClassName('atual');
        if(elementoMarcado[0] !== undefined){
            elementoMarcado[0].classList.remove('atual');
        }
        const elemento = document.getElementById(e);
        elemento.classList.add('atual');
    }

    return (
            <div className="container">
                <div className="container-dash">
                    <ul>
                        <li id="home" onClick={() => mudaAtividade('home')}>Home</li>
                        <li id="inserir-token" onClick={() => mudaAtividade('inserir-token')}>Fazer prova</li>
                        <li id="questoes" onClick={() => mudaAtividade('questoes')}>Questões da prova</li>
                        <li id="meus-resultados" onClick={() => mudaAtividade('meus-resultados')}>Meus resultados</li>
                        <li id="prova" onClick={() => mudaAtividade('prova')}>Editar perfil</li>
                        <li onClick={() => history.push('/')}>Sair</li>
                    </ul>
                </div>
                <ControlerAluno atividade={atividade}/>
            </div>
    );
}