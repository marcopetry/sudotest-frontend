import React, { useState, useEffect } from 'react';
import Dashboards from '../containers/Dashboards/Dashboards';
import AcaoUSuario from '../containers/AcaoUsuario/AcaoUsuario'

export default function ControlerInicial() {
    //verificar se é usuário ou adm e passar informações pra dash
    const [acao, setAcao] = useState('home'),
        [tipoUsuario, setUsuario] = useState('adm');


    const acoesADM = 
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

    const trocarAcao = (e) => setAcao(e);

    return (
        
        <>
            <Dashboards mudarAtividade={trocarAcao} acoesUsuario={acoesADM} />
            {<AcaoUSuario acaoEscolhida={acao} />}
        </>
    );
}
