import React, { useState } from 'react';
import Home from '../components/Home/Home';
import CadastroProva from '../components/CadastroProva/CadastroProva';
import CadastroQuestoes from '../components/CadastroQuestoes/CadastroQuestoes';
import InfoProva from '../components/InfoProva/InfoProva';
import ListarInformacoes from '../components/ListarInformacoes/ListarInformacoes';
import TelaEspera from '../components/TelaEspera/TelaEspera';
import { dados } from  '../components/banco';

const cabecalhoProvasAbertas = ["Nome", "Data", "Hora de início", "Quantidade de vagas", "Token", "Status"];
const cabecalhoProvasFechadas = ["Nome", "Data", "Quantidade de aprovados", "Quantidade de vagas", "Média geral", "Status"];
const cabecalhoAlunosCadastrados = ["Nome", "Email", "CPF", "Telefone", "Idade"];

//as acoes da dashboard estão no final deste arquivo
export default function ControllerADM(props) {
    const [espera] = useState(false);

    if (props.acaoEscolhida === 'listar-alunos') return <ListarInformacoes cabecalhoTabela={cabecalhoAlunosCadastrados} dadosTabela={dados}/>
    
    if (props.acaoEscolhida === 'cadastrar-prova') return <CadastroProva />
        
    if (props.acaoEscolhida === 'cadastrar-questao') return <CadastroQuestoes />

    if (props.acaoEscolhida === 'listar-provas-abertas') return <ListarInformacoes cabecalhoTabela={cabecalhoProvasAbertas} dadosTabela={dados}/>

    if (props.acaoEscolhida === 'listar-provas-encerradas') return <InfoProva />
    
    if(props.acaoEscolhida === 'listar-questoes') return <ListarInformacoes cabecalhoTabela={cabecalhoProvasAbertas} dadosTabela={dados} />
            
    if(espera) return <TelaEspera />

    return (
        <Home />
    );
}

export const acoesADM = 
        [
            {
                acao: 'home',
                texto: 'Home'
            },
            {
                acao: 'listar-alunos',
                texto: 'Alunos Cadastrados'
            },
            {
                acao: 'cadastrar-prova',
                texto: 'Cadastrar Prova'
            },
            {
                acao: 'cadastrar-questao',
                texto: 'Cadastrar Questão'
            },
            {
                acao: 'listar-provas-abertas',
                texto: 'Provas Abertas'
            },
            {
                acao: 'listar-provas-encerradas',
                texto: 'Provas Encerradas'
            },
            {
                acao: 'listar-questoes',
                texto: 'Questôes Cadastradas',
            },
            {
                acao: 'sair',
                texto: 'Sair'
            },
        ];