import React, { useState, Redirect } from 'react';
import './CadastroQuestoes.css';

export default function CadastroQuestoes() {
    const [pergunta, setPergunta] = useState(''),
        [res1, setRes1] = useState(''),
        [res2, setRes2] = useState(''),
        [res3, setRes3] = useState(''),
        [res4, setRes4] = useState(''),
        [res5, setRes5] = useState(''), 
        [respostaCerta, setResCerta] = useState(''),
        [voltar, setVoltar] = useState(false);

    
    //const voltar = () => alert('precisamos implementar o voltar'); 
    const cadastrarQuestao = () => alert('Falta implementar questao');

    if(voltar){
        return(
            <Redirect to='/' />
        );
    }

    return (
        <div className="main-container">
            <div className="cadastro-questoes-container">
                <form onSubmit={cadastrarQuestao}>
                    <h1>Cadastre a questão e marque a resposta correta:</h1>                    
                    
                    <div className="item-cadastro-questao">
                        <select className="form-control">
                            <option value="Selecione uma categoria">Selecione uma categoria:</option>
                            <option value="portugues">Português</option>
                            <option value="matematica">Matemática</option>
                            <option value="informatica">Informática</option>
                            <option value="conhecimentos">Conhecimentos Gerais</option>
                        </select>
                    </div>


                    <div className="item-cadastro-questao">                        
                        <textarea
                            className="form-control"
                            id="inputPergunta"
                            placeholder="Digite a pergunta:"
                            value={pergunta}
                            onChange={e => setPergunta(e.target.value)}                            
                        />
                    </div>
                    
                    <div className="item-cadastro-questao">                        
                        <input type="radio" 
                            name="resposta"
                            value="opcao1"
                            checked={respostaCerta === "opcao1"}
                            onChange={e => setResCerta(e.target.value)}                        
                        />
                        <textarea
                            className="form-control"
                            id="inputResposta1"
                            placeholder="Digite a primeira alternativa:"
                            value={res1}
                            onChange={e => setRes1(e.target.value)}                            
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio" 
                               name="resposta"
                               value="opcao2"
                               checked={respostaCerta === "opcao2"}
                               onChange={e => setResCerta(e.target.value)}                        
                        />
                        <textarea
                            className="form-control"
                            id="inputResposta2"
                            placeholder="Digite a segunda alternativa:"
                            value={res2}
                            onChange={e => setRes2(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio" 
                               name="resposta"
                               value="opcao3"
                               checked={respostaCerta === "opcao3"}
                               onChange={e => setResCerta(e.target.value)}                        
                        />
                        <textarea
                            className="form-control"
                            id="inputResposta3"
                            placeholder="Digite a terceira alternativa:"
                            value={res3}
                            onChange={e => setRes3(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio" 
                               name="resposta"
                               value="opcao4"
                               checked={respostaCerta === "opcao4"}
                               onChange={e => setResCerta(e.target.value)}                        
                        />
                        <textarea
                            className="form-control"
                            id="inputResposta4"
                            placeholder="Digite a quarta alternativa:"
                            value={res4}
                            onChange={e => setRes4(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio" 
                               name="resposta"
                               value="opcao5"
                               checked={respostaCerta === "opcao5"}
                               onChange={e => setResCerta(e.target.value)}                        
                        />
                        <textarea
                            className="form-control"
                            id="inputResposta5"
                            placeholder="Digite a quinta alternativa :"
                            value={res5}
                            onChange={e => setRes5(e.target.value)}
                        />
                    </div>

                    <div className="container-buttons">
                        <button type="button" onClick={e => setVoltar(true)}>Voltar</button>
                        <button id="botaoCadastrar" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div >

        </div>
    );
}