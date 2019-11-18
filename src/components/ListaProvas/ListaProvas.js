import React from 'react';
import './ListaProvas.css'

export default function ListaProvas(){

    return(
        <div className="container-lista-provas">
            <table>
                <thead className="cabecalho-tabela">
                    <tr>
                        <th>Data prova</th>
                        <th>Porcentagem de aprovação</th>
                        <th>Quantidade de aprovados</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td className="container-btn"><button className="btn-ver-mais">Ver mais</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}