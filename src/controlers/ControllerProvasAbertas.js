import React, { useState } from 'react';
import InfoProva from '../components/InfoProva/InfoProva';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import Feedback from '../components/Feedback/Feedback';
import CadastroProva from '../components/CadastroProva/CadastroProva';
import api from '../services/api';
import TelaEspera from '../components/TelaEspera/TelaEspera';

let msgFeedback;
let feedback;
export default function ControllerProvasAbertas({ history }) {
    const [acao, setAcao] = useState(''),
        [prova, setProva] = useState(history.location.state);

    const encerrarProva = async function encerrarProva(idProva) {
        setAcao('espera');
        const response = await api.post('/encerraProva', {
            id: idProva
        })
        if(response.error){
            msgFeedback = "Problema ao encerrara a prova, tente novamente!";
        }else {
            setAcao('encerrada-com-sucesso');
            msgFeedback = "Prova encerrada com sucesso!"
        }
        console.log(response);
    }

    const deletarProva = async function excluirProva(id) {
        setAcao('espera');
        const response = await api.post('/deletaProva', {
            id,
        });
        console.log(response);
        setAcao('deletada-com-sucesso');
    }

    const cancelarDeletar = () => setAcao('mostrar');

    const alterarAcao = e => setAcao(e);

    if (acao === 'encerrar') {

        return (
            <TelaConfirmacao
                mensagem="Tem certeza que deseja encerrar essa prova?"
                funcaoCancelar={cancelarDeletar}
                funcaoConfirmacao={() => encerrarProva(prova.id)} />
        );
    }

    if (acao === 'espera') return <TelaEspera />

    if (acao === 'excluir') {
        return (
            <TelaConfirmacao
                mensagem="Tem certeza que deseja excluir essa prova?"
                funcaoCancelar={cancelarDeletar}
                funcaoConfirmacao={() => deletarProva(prova.id)} />
        );
        //tela confirmação, chamar a função e feedback
    }

    if (acao === 'encerrada-com-sucesso') {
        setTimeout(() => history.push('/provas-abertas'), 2000);
        return (
            <Feedback
                msgPrimaria="Prova encerrada com sucesso!"
                img={'certo'}
            />
        );
    }

    if (acao === 'deletada-com-sucesso') {
        setTimeout(() => history.push('/provas-abertas'), 2000);
        return (
            <Feedback
                msgPrimaria="Prova excluída com sucesso!"
                img={'certo'}
            />
        );
    }

    if (acao === 'editar') {
        return (
            <CadastroProva prova={prova} history={history} />
        );
    }


    return (
        <InfoProva
            prova={prova}
            acao={alterarAcao}
            history={history}
        />
    );
}