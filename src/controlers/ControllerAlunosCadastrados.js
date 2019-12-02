import React, { useState } from 'react';
import api from '../services/api';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import { formatarDadosAlunosParaExibicao } from '../helpers/TratamentoDadosParaTabela';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import Feedback from '../components/Feedback/Feedback';

const cabecalhoAlunosCadastrados = ["Nome", "Email", "CPF", "Telefone", "Idade"];
export default function ControllerAlunosCadastrados() {
    const [dados, setDados] = useState(''),
        [espera, setEspera] = useState(true);

    async function buscarAlunosCadastrados() {
        const response = await api.get('/buscaAlunosCadastrados');
        //console.log(response.data);
        setDados(formatarDadosAlunosParaExibicao(response.data));
        setEspera(false);
    }

    if (espera) {
        buscarAlunosCadastrados();
        return <TelaEspera />
    }

    if (dados.length === 0) {
        return <Feedback msgPrimaria={'Você não tem alunos cadastrados!'} />
    }

    return (
        <ListarInformacoes
            dadosTabela={dados}
            cabecalhoTabela={cabecalhoAlunosCadastrados}
            funcaoClick={() => { }} />
    );
}