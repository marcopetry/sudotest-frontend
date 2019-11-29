import React, { useState, useEffect } from 'react';
import './ListarInformacoes.css';
import Feedback from '../Feedback/Feedback';
import InfoProva from '../InfoProva/InfoProva';

let prova = null;

export default function ListarInformacoes(props) {
    const [executar, setExecutar] = useState('');
    let funcaoClick;

    useEffect(() => {
        if(props.dadosTabela.length > 0){
            //coloca as bordas no cabecalho da tabela
            const cabecalho = document.getElementsByTagName('th');
            cabecalho[0].classList.add('border-left');
            cabecalho[cabecalho.length - 1].classList.add('border-right');
            const linhasTabela = document.getElementsByClassName('row-table');
    
            //coloca as bordas nas linhas da tabela
            for (let i = 0; i < linhasTabela.length; i++) {
                linhasTabela[i].firstChild.classList.add('border-left');
                linhasTabela[i].lastChild.classList.add('border-right');
            }
        }
    }, []);

    if(props.dadosTabela.length === 0){
        return <Feedback msgPrimaria={"Sua busca não retornou dados!"}/>
    }

    if(props.acaoClick === 'listar-provas-abertas'){
        funcaoClick = idProva => {
            console.log(idProva);
            props.dadosTabela.map(elemento => {
                if(idProva === elemento.id){
                    prova = elemento
                    setExecutar('mostrar-info-prova')
                }
            });
        }
    }

    if(executar === 'mostrar-info-prova'){
        return <InfoProva prova={prova} history={props.history}/>
    }

    return (
        <div className="container-lista-provas">
            <table cellpadding="0" cellspacing="0">
                <thead className="cabecalho-tabela">
                    <tr>
                        {props.cabecalhoTabela.map(cabecalho => <th>{cabecalho}</th>)}
                    </tr>
                </thead>

                <tbody>
                    {props.dadosTabela.map(elemento => {
                        return (
                            <tr className="row-table" key={elemento.id} onClick={() => funcaoClick(elemento.id)}>
                                <td>{elemento.nomeProva}</td>
                                <td>{elemento.dataRealizacao}</td>
                                <td>{elemento.horaInicio}</td>
                                <td>{elemento.vagasDisponiveis}</td>
                                <td>{elemento.token}</td>
                                <td>{elemento.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}