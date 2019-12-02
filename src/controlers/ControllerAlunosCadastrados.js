import React, { useState } from 'react';
import api from '../services/api';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import { formatarDadosAlunosParaExibicao } from '../helpers/TratamentoDadosParaTabela';
import TelaEspera from '../components/TelaEspera/TelaEspera';

const cabecalhoAlunosCadastrados = ["Nome", "Email", "CPF", "Telefone", "Idade"];
export default function ControllerAlunosCadastrados(){
    const [dados, setDados] = useState('');

    async function buscarAlunosCadastrados() {
        const response = await api.get('/buscaAlunosCadastrados');
        //console.log(response.data);
        setDados(formatarDadosAlunosParaExibicao(response.data));
    }
    
    if(dados === ''){
        buscarAlunosCadastrados();
        return <TelaEspera />
    }

    return (
        <ListarInformacoes 
            dadosTabela={dados}
            cabecalhoTabela={cabecalhoAlunosCadastrados}
            funcaoClick={() => {}}/>
    );
}