import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import ControlerAdm from '../ControlerAdm/ControlerAdm';

export default function Dashboard({ history }) {
    const [atividade, setAtividade] = useState('');

    const desmarcaLink = (elementoMarcado) => {
        const lista = document.getElementsByClassName('atual');
        for(let i = 0; i < lista.length; i++){
            if(lista[i].id !== elementoMarcado.id){
                lista[i].classList.remove('atual');
            }
        }
    }

    const mudaAtividade = (e) => {
        setAtividade(e);
        const elemento = document.getElementById(e);
        elemento.classList.add('atual');
        desmarcaLink(elemento);
    }

    return (
        
        <div className="container">
            <div className="dashboard-comandos">
                {/* <img src={logo} alt="Sudotec Logo" className="img-dash"/> */}
                <div className="container-opcoes">
                    <ul>
                        <li id="home" onClick={() => mudaAtividade('home')}>Home</li>
                        <li id="cadastrar-questao" onClick={() => mudaAtividade('cadastrar-questao')}>Cadastro de questão</li>
                        <li>Cadastro de prova</li>
                        <li>Relatórios</li>
                        <li>Sair</li>
                    </ul>
                </div>
                
            </div>
            <ControlerAdm atividade={atividade}/>
        </div>
    );
}