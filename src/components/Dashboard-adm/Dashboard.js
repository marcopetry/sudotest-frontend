import React, { useState } from 'react';
import './Dashboard.css';
import ControlerAdm from '../ControlerAdm/ControlerAdm';

export default function Dashboard({ history }) {
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
                        <li id="cadastrar-questao" onClick={() => mudaAtividade('cadastrar-questao')}>Cadastrar de questão</li>
                        <li id="cadastrar-prova" onClick={() => mudaAtividade('cadastrar-prova')}>Criar de prova</li>
                        <li id="listar-provas" onClick={() => mudaAtividade('listar-provas')}>Provas abertas</li>
                        <li id="home" onClick={() => mudaAtividade('home')}>Provas encerradas</li>
                        <li onClick={() => history.push('/')}>Sair</li>
                    </ul>
                </div>
                <ControlerAdm atividade={atividade}/>
            </div>
    );
}