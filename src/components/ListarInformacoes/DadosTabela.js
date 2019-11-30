import React from 'react';
import Scrollbar from 'react-scrollbars-custom';


export default function linhasDadosTabela(props) {
    return (
        <Scrollbar>
            <tbody>
                {props.dadosTabela.map(elemento => {
                    return (
                        <tr className="row-table" key={elemento.id} onClick={() => props.funcaoClick(elemento.id)}>
                            <td>{elemento.primeiraInfo}</td>
                            <td>{elemento.segundaInfo}</td>
                            <td>{elemento.terceiraInfo}</td>
                            <td>{elemento.quartaInfo}</td>
                            <td>{elemento.quintaInfo}</td>
                            <td>{elemento.sextaInfo}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Scrollbar>
    );
}