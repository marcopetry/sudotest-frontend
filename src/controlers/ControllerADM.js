import React from 'react';
import Home from '../components/Home/Home';
import ListaAlunos from '../components/ListaAlunos/ListaAlunos';
import CadastroProva from '../components/CadastroProva/CadastroProva';
import CadastroQuestoes from '../components/CadastroQuestoes/CadastroQuestoes';
import ListaProva from '../components/ListaProvas/ListaProvas';

const cabecalhoProvasAbertas = ["Nome", "Data", "Hora de início", "Quantidade de vagas", "Token", "Status"];
//as acoes da dashboard estão no final deste arquivo
export default function ControllerADM(props) {
    console.log(props.acaoEscolhida);

    if (props.acaoEscolhida === 'listar-alunos') return <ListaAlunos />
    
    if (props.acaoEscolhida === 'cadastrar-prova') return <CadastroProva />
        
    if (props.acaoEscolhida === 'cadastrar-questao') return <CadastroQuestoes />

    if (props.acaoEscolhida === 'listar-provas-abertas') return <ListaProva cabecalhoTabela={cabecalhoProvasAbertas}/>

    if (props.acaoEscolhida === 'listar-provas-encerradas') return <Home />
            
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
                acao: 'sair',
                texto: 'Sair'
            },
        ];