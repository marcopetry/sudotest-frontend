import React, { useState } from 'react';
import ListarInformacoes from "./ListarInformacoes";
import api from '../../services/api';
import TelaEspera from '../TelaEspera/TelaEspera';
import Feedback from '../Feedback/Feedback';
import ControllerProvasAbertas from '../../controlers/ControllerProvasAbertas';

const cabecalhoProvasAbertas = ["Nome", "Data", "Hora de início", "Quantidade de vagas", "Token", "Status"];
const cabecalhoProvasFechadas = ["Nome", "Data", "Quantidade de aprovados", "Quantidade de vagas", "Média geral", "Status"];
const cabecalhoAlunosCadastrados = ["Nome", "Email", "CPF", "Telefone", "Idade"];
let cabecalhoTabela;

export default function ControllerListarInformacoes({ history }) {
    const [loading, setLoading] = useState(false),
        [dados, setDados] = useState(''), 
        [idClicado, setIdClicado] = useState('');
    
    const caminho = window.location.pathname;
    async function buscarProvas() {
        setLoading(true);
        if (caminho === '/provas-abertas') {
            let status = 'Aberta';
            cabecalhoTabela = cabecalhoProvasAbertas;
            const response = await api.get('/buscaProvas', {
                params: {
                    status,
                }
            });
            setDados(response.data);
            setLoading(false);
            return;
        } else if (caminho === '/provas-encerradas') {
            let status = 'Encerrada';
            cabecalhoTabela = cabecalhoProvasFechadas;
            const response = await api.get('/buscaProvas', {
                params: {
                    status,
                }
            });
            setDados(response.data);
            setLoading(false);
            return true;
        }
    }

    //aqui pega o idClique, passa os dados da prova clicada pros controllers dependendo da ação
    if (idClicado !== '' && caminho === '/provas-abertas'){
        let dadosProvaClicada;
        dados.map(prova => {
            if(idClicado === prova.id)
                dadosProvaClicada = prova;
        });
        history.push({
            pathname: '/info-prova',
            state: dadosProvaClicada
       })
    }

    if (loading) return <TelaEspera />

    if (dados === '' && !loading) {
        buscarProvas();
        return <Feedback msgPrimaria={"Sua busca não retornou dados!"} />
    }

    //pega o id do clique
    const pegarClique = e => setIdClicado(e);
    return (
        <ListarInformacoes
            cabecalhoTabela={cabecalhoTabela} 
            dadosTabela={dados} 
            funcaoClick={pegarClique}/>
    );
}