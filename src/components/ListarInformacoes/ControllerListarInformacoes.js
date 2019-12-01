import React, { useState } from 'react';
import ListarInformacoes from "./ListarInformacoes";
import api from '../../services/api';
import TelaEspera from '../TelaEspera/TelaEspera';
import Feedback from '../Feedback/Feedback';
import { formatarDadosProvasAbertas, formatarDadosProvasEncerradas } from '../../helpers/TratamentoDadosParaTabela';

const cabecalhoProvasAbertas = ["Nome", "Data", "Hora de início", "Hora término", "Quantidade de vagas", "Token"];
const cabecalhoProvasFechadas = ["Nome", "Data", "Quantidade de aprovados", "Quantidade de vagas", "Média geral", "Status"];

let cabecalhoTabela;
//Guardo eles para mandar pra outros componentes
let dadosSemTratamento;

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
            let listaDados = formatarDadosProvasAbertas(response.data);
            dadosSemTratamento = response.data;
            setDados(listaDados);
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
            let listaDados = formatarDadosProvasEncerradas(response.data);
            dadosSemTratamento = response.data;
            setDados(listaDados);
            setLoading(false);
            return true;
        }
    }

    

    //aqui pega o idClique, passa os dados da prova clicada pros controllers dependendo da ação
    if (idClicado !== '' && caminho === '/provas-abertas'){
        let dadosProvaClicada;
        dadosSemTratamento.map(prova => {
            if(idClicado === prova.id){
                dadosProvaClicada = prova;
            }
        });
        console.log('prova ', dadosProvaClicada);
        history.push({
            pathname: '/info-prova',
            state: dadosProvaClicada
       })
    }

    if (idClicado !== '' && caminho === '/provas-encerradas'){
        let dadosProvaClicada;
        dadosSemTratamento.map(prova => {
            if(idClicado === prova.id)
                dadosProvaClicada = prova;
        });
        history.push({
            pathname: '/ranking-prova',
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