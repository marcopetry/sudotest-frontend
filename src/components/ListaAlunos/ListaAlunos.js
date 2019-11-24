import React from 'react';
import './ListaAlunos.css'

export default function ListaAlunos(){

    return(
        <div className="container-lista-alunos">
            <table cellpadding="0" cellspacing="0">
                <thead className="cabecalho-tabela">
                    <tr>
                        <th className="border-left">Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th className="border-right">Idade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-left">Marco Petry</td>
                        <td>marco@galocinza.com</td>
                        <td>12345678910</td>
                        <td>51-91919191</td>
                        <td className="border-right">15</td>
                    </tr>
                    <tr>
                        <td className="border-left">Marco Petry</td>
                        <td>marco@galocinza.com</td>
                        <td>12345678910</td>
                        <td>51-91919191</td>
                        <td className="border-right">15</td>
                    </tr>
                    <tr>
                        <td className="border-left">Marco Petry</td>
                        <td>marco@galocinza.com</td>
                        <td>12345678910</td>
                        <td>51-91919191</td>
                        <td className="border-right">15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}