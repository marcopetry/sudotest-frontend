import React, { useState } from 'react';
import './Dashboard.css';
import ControlerAdm from '../ControlerAdm/ControlerAdm';

export default function Dashboard({ history }) {
    const [atividade, setAtividade] = useState('home'),
          [espera, setEspera] = useState(false);

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
                        <li id="listar-alunos" onClick={() => mudaAtividade('listar-alunos')}>Alunos Cadastrados</li>
                        <li id="cadastrar-questao" onClick={() => mudaAtividade('cadastrar-questao')}>Cadastrar de questão</li>
                        <li id="cadastrar-prova" onClick={() => mudaAtividade('cadastrar-prova')}>Cadastrar prova</li>
                        <li id="listar-provas-abertas" onClick={() => mudaAtividade('listar-provas-abertas')}>Provas abertas</li>
                        <li id="listar-provas-encerradas" onClick={() => mudaAtividade('listar-provas-encerradas')}>Provas encerradas</li>
                        <li onClick={() => history.push('/')}>Sair</li>
                    </ul>
                </div>
                <ControlerAdm atividade={atividade} espera={espera}/>
            </div>
    );
}