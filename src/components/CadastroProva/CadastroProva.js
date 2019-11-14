import React from 'react';
import './CadastroProva.css';

export default function CadastroProva() {
    
    return (
        <div className="container-prova">
            <form>
                <div className="container-form">
                    <h1 className="text-h1">Faça o cadastro da prova:</h1>
                    <div className="container-input">
                        <p>Tempo de execução em minutos:</p>
                        <input type="number" placeholder="Digite os minutos aqui"/>
                    </div>
                    <div className="container-input">
                        <p>Data de realização:</p>
                        <input type="date"/>
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de matemática:</p>
                        <input type="number"/>
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de português:</p>
                        <input type="number"/>
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de informática:</p>
                        <input type="number"/>
                    </div>
                    <div className="container-input">
                        <p>Quantidade de questões de conhecimentos gerais:</p>
                        <input type="number"/>
                    </div>
                    <div className="container-input">
                        <p>Porcentagem para aprovação:</p>
                        <input type="number"/>
                    </div>
                    <div className="container-input">
                        <p>Número de aprovados:</p>
                        <input type="number"/>
                    </div>
                    <div className="container-input cont-buttons">
                        <button>Limpar campos</button>
                        <button id="botaoCadastrar">Cadastrar</button>                    
                    </div>
                </div>
            </form>
        </div>
    );
}