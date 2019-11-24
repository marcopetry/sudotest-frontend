import React, { useState, useEffect } from 'react';
import './ListaProvas.css';

export default function ListaProvas(props) {

    useEffect(() => {
        //coloca as bordas no cabecalho da tabela
        const cabecalho = document.getElementsByTagName('th');
        cabecalho[0].classList.add('border-left');
        cabecalho[cabecalho.length - 1].classList.add('border-right');
        const linhasTabela = document.getElementsByClassName('row-table');
        
        //coloca as bordas nas linhas da tabela
        for(let i = 0; i < linhasTabela.length; i++){
            linhasTabela[i].firstChild.classList.add('border-left');
            linhasTabela[i].lastChild.classList.add('border-right');
        }
    }, []);

    return (
        <div className="container-lista-provas">
            <table cellpadding="0" cellspacing="0">
                <thead className="cabecalho-tabela">
                    <tr>
                        {props.cabecalhoTabela.map(cabecalho => <th>{cabecalho}</th>)}
                    </tr>
                </thead>

                <tbody>
                    {}
                    <tr className="row-table" onClick={props.funcao}>
                        <td>Aprender e crescer 2019</td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td>Aberto</td>
                    </tr>
                    <tr className="row-table" onClick={props.funcao}>
                        <td>Aprender e crescer 2019</td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td>Aberto</td>
                    </tr>
                    <tr className="row-table" onClick={props.funcao}>
                        <td>Aprender e crescer 2019</td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td>Aberto</td>
                    </tr>
                    <tr className="row-table" onClick={props.funcao}>
                        <td className="border-left">Aprender e crescer 2019</td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}