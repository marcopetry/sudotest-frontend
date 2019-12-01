import React, { useEffect, useState } from 'react';
import './Dashboards.css';
import Scrollbar from 'react-scrollbars-custom';
import { useHistory } from 'react-router-dom';

export default function Dashboards(props) {
    let history = useHistory();
    const tipoUsuario = localStorage.getItem('Usuario');
    const [acao, setAcao] = useState(history.location.pathname);

    function formatarUrlParaAcao(url) {
        return url.split('/')[2];
    }

    useEffect(() => {
        if(tipoUsuario === 'user-prova' && history.location.pathname !== '/prova/encerrar-prova'){
            mudaAtividade(formatarUrlParaAcao(history.location.pathname));
        }else{
            mudaAtividade(history.location.pathname);
        }
    }, [history.location.pathname, acao]);
    
    const mudaAtividade = (e) => {
        history.push(e);
        setAcao(e);
        props.mudarAtividade(e);
        const elementoMarcado = document.getElementsByClassName('atual');
        if (elementoMarcado[0] !== undefined) {
            elementoMarcado[0].classList.remove('atual');
        }
        const elemento = document.getElementById(e);
        if(elemento !== null && elemento !== undefined)
            elemento.classList.add('atual');
    }

    return (
        <div className="container-dash">
            <Scrollbar>
                <ul>
                    {props.acoesUsuario.map((e) => <li id={e.acao} onClick={() => mudaAtividade(e.acao)}>{e.texto}</li>)}
                </ul>
            </Scrollbar>
        </div>
    );
}