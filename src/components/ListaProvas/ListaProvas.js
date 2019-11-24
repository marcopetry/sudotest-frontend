import React, { useEffect } from 'react';
import './ListaProvas.css'

export default function ListaProvas(props){

    useEffect(() => {
        const cabecalho = document.getElementsByTagName('th');
        cabecalho[0].classList.add('border-left');
        cabecalho[cabecalho.length - 1].classList.add('border-right');
    });

    return(
        <div className="container-lista-provas">
            <table cellpadding="0" cellspacing="0">
                <thead className="cabecalho-tabela">
                    <tr className="row-table">
                        {props.cabecalhoTabela.map(cabecalho => <th>{cabecalho}</th>)}
                        {/* <th className="border-left">Nome da prova</th>
                        <th>Data</th>
                        <th>Hora de início</th>
                        <th>Quantidade de vagas</th>
                        <th>Token</th>
                        <th className="border-right">Status</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr className="row-table" onClick={props.funcao}>
                        <td>Aprender e crescer 2019</td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td>Aberto</td>
                    </tr>
                    <tr onClick={props.funcao}>
                        <td className="border-left">Aprender e crescer 2019</td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                    <tr onClick={props.funcao}>
                        <td className="border-left">Aprender e crescer 2019</td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                    <tr onClick={props.funcao}>
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