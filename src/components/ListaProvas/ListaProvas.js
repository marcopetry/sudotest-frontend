import React from 'react';
import './ListaProvas.css'

export default function ListaProvas(){

    return(
        <div className="container-lista-provas">
            <table cellpadding="0" cellspacing="0">
                <thead className="cabecalho-tabela">
                    <tr>
                        <th className="border-left"></th>
                        <th>Data prova</th>
                        <th>Quantidade de vagas</th>
                        <th>Quantidade de aprovados</th>
                        <th>Média geral</th>
                        <th className="border-right">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-left"><input type="checkbox" /></td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                    <tr>
                        <td className="border-left"><input type="checkbox" /></td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                    <tr>
                        <td className="border-left"><input type="checkbox" /></td>
                        <td>20/12/2020</td>
                        <td>60</td>
                        <td>20</td>
                        <td>60</td>
                        <td className="border-right">Aberto</td>
                    </tr>
                    <tr className="btn-container">
                        <td className="border-left col-btn" colSpan="3"><button className="btn-table">Marcar todos</button></td>
                        <td className="border-right col-btn" colSpan="3"><button className="btn-table">Ver mais</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}