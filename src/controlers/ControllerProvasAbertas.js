import React, { useState } from 'react';
import InfoProva from '../components/InfoProva/InfoProva';
import TelaConfirmacao from '../components/TelaConfirmacao/TelaConfirmacao';
import Feedback from '../components/Feedback/Feedback';
import CadastroProva from '../components/CadastroProva/CadastroProva';
import api from '../services/api';
import TelaEspera from '../components/TelaEspera/TelaEspera';

export default function ControllerProvasAbertas({ history }){
    const [acao, setAcao] = useState('');
    const prova = history.location.state;

    const deletarProva = async function excluirProva(id) {
        setAcao('espera');
        const response = await api.post('/deletaProva', {
            id,
        });
        console.log(response);
        setAcao('deletada-com-sucesso');
    }

    const cancelarDeletar = () => setAcao('mostrar');

    const confirmarFeedback = () => history.push('/provas-abertas');

    if(acao === 'espera') return <TelaEspera />

    if(acao === 'excluir'){
        return (
            <TelaConfirmacao 
                mensagem="Tem certeza que deseja excluir essa prova?"
                funcaoCancelar={cancelarDeletar}
                funcaoConfirmacao={() => deletarProva(prova.id)}/>
        );
        //tela confirmação, chamar a função e feedback
    }

    if(acao === 'deletada-com-sucesso'){
        setTimeout(() => history.push('/provas-abertas'), 2000);
        return (
            <Feedback 
                msgPrimaria="Prova excluída com sucesso!"
                funcaoBotao={confirmarFeedback}
                />
        );
    }

    if(acao === 'editar'){
        return (
            <CadastroProva prova={prova} history={history}/>
        );
    }
    
    const alterarAcao = e => setAcao(e);
    return (
        <InfoProva 
            prova={history.location.state} 
            acao={alterarAcao}
            history={history}
            />
    );
}