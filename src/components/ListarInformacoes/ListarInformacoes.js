import React, { useState, useEffect } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import './ListarInformacoes.css';

export default function ListarInformacoes(props) {
    const [executar, setExecutar] = useState('');

    useEffect(() => {
        if (props.dadosTabela.length > 0) {
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

    return (
        <Scrollbar className="scroll-table">
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
                                <tr className="row-table" key={elemento.id} onClick={() => props.funcaoClick(elemento.id)}>
                                    {elemento.primeiraInfo !== "" && <td>{elemento.primeiraInfo}</td>}
                                    {elemento.segundaInfo !== "" && <td>{elemento.segundaInfo}</td>}
                                    {elemento.terceiraInfo !== "" && <td>{elemento.terceiraInfo}</td>}
                                    {elemento.quartaInfo !== "" && <td>{elemento.quartaInfo}</td>}
                                    {elemento.quintaInfo !== "" && <td>{elemento.quintaInfo}</td>}
                                    {elemento.sextaInfo !== "" && <td>{elemento.sextaInfo}</td>}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Scrollbar>
    );
}

