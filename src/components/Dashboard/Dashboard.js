import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import ControlerAdm from '../ControlerAdm/ControlerAdm';

export default function Dashboard({ history }) {
    const [atividade, setAtividade] = useState('cadastrar-questao');

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
                        <li id="cadastrar-prova" onClick={() => mudaAtividade('cadastrar-prova')}>Provas abertas</li>
                        <li id="cadastrar-prova" onClick={() => mudaAtividade('cadastrar-prova')}>Provas encerradas</li>
                        <li>Sair</li>
                    </ul>
                </div>
                <ControlerAdm atividade={atividade}/>
            </div>
    );
}