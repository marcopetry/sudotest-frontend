import React from 'react';
import TelaConfirmacao from "../TelaConfirmacao/TelaConfirmacao";

export default function Logout(props) {

    const encerrarSessao = () => {
        localStorage.clear();
        props.history.push('/');
    }

    const cancelar = () => {
        props.history.push('/home');
    }

    return (
        <TelaConfirmacao
            funcaoCancelar={cancelar}
            funcaoConfirmacao={encerrarSessao}
            mensagem="Você deseja encerrar o sistema?"
        />
    );
}