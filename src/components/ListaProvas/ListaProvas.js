import React from 'react';
import './ListaProvas.css'

export default function ListaProvas(props){

    return(
        <div className="container-lista-provas">
            <table cellpadding="0" cellspacing="0">
                <thead className="cabecalho-tabela">
                    <tr>
                        <th className="border-left">Data prova</th>
                        <th>Quantidade de vagas</th>
                        <th>Quantidade de aprovados</th>
                        <th>Média geral</th>
                        <th className="border-right">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={props.funcao}>
                        <td className="border-left">20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                    <tr onClick={props.funcao}>
                        <td className="border-left">20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                    <tr onClick={props.funcao}>
                        <td className="border-left">20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                    <tr onClick={props.funcao}>
                        <td className="border-left">20/12/2020</td>
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