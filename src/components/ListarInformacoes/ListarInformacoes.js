import React, { useState, useEffect } from 'react';
import './ListarInformacoes.css';

export default function ListarInformacoes(props) {

    useEffect(() => {
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
    }, []);

    console.log(props.dadosTabela);

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
                            <tr className="row-table" key={elemento.id}>
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