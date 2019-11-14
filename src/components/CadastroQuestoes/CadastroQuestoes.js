import React, { useState, Redirect } from 'react';
import './CadastroQuestoes.css';
import api from '../../services/api';

export default function CadastroQuestoes() {
    const [enunciado, setEnunciado] = useState(''),
        [alternativa1, setAlternativa1] = useState(''),
        [alternativa2, setAlternativa2] = useState(''),
        [alternativa3, setAlternativa3] = useState(''),
        [alternativa4, setAlternativa4] = useState(''),
        [alternativa5, setAlternativa5] = useState(''),
        [alternativacorreta, setAlternativaCorreta] = useState(''),
        [voltar, setVoltar] = useState(false),
        [categoria, setCategoria] = useState('Selecione');

    async function cadastrarQuestao(e) {
        e.preventDefault();

        const response = await api.post('/cadastroQuestao', {
            enunciado,
            alternativa1,
            alternativa2,
            alternativa3,
            alternativa4,
            alternativa5,
            alternativacorreta,
            categoria
        })

        if (response.data.Erro) {
            alert(response.data.Erro)
        } else{
            alert('Questão cadastrada com sucesso')
        }
    }

    return (
        <div className="container-questao">
            <form onSubmit={cadastrarQuestao}>
                <div className="container-form">
                    <h1>Cadastre a questão e marque a alternativa correta:</h1>
                    <div className="item-cadastro-questao-sem-radio">
                        <select className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} >
                            <option value="Selecione">Selecione uma categoria:</option>
                            <option value="portugues">Português</option>
                            <option value="matematica">Matemática</option>
                            <option value="informatica">Informática</option>
                            <option value="conhecimentos">Conhecimentos Gerais</option>
                        </select>
                    </div>

                    <div className="item-cadastro-questao-sem-radio">
                        <textarea
                            className="form-control"
                            id="inputEnunciado"
                            placeholder="Digite a pergunta:"
                            value={enunciado}
                            onChange={e => setEnunciado(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio"
                            name="alternativacorreta"
                            value="alternativa1"
                            checked={alternativacorreta === "alternativa1"}
                            onChange={e => setAlternativaCorreta(e.target.value)}
                        />
                        <textarea
                            className="form-control"
                            id="inputAlternativa1"
                            placeholder="Digite a primeira alternativa:"
                            value={alternativa1}
                            onChange={e => setAlternativa1(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio"
                            name="alternativacorreta"
                            value="alternativa2"
                            checked={alternativacorreta === "alternativa2"}
                            onChange={e => setAlternativaCorreta(e.target.value)}
                        />
                        <textarea
                            className="form-control"
                            id="inputalternativa2"
                            placeholder="Digite a segunda alternativa:"
                            value={alternativa2}
                            onChange={e => setAlternativa2(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio"
                            name="alternativacorreta"
                            value="alternativa3"
                            checked={alternativacorreta === "alternativa3"}
                            onChange={e => setAlternativaCorreta(e.target.value)}
                        />
                        <textarea
                            className="form-control"
                            id="inputalternativa3"
                            placeholder="Digite a terceira alternativa:"
                            value={alternativa3}
                            onChange={e => setAlternativa3(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio"
                            name="alternativacorreta"
                            value="alternativa4"
                            checked={alternativacorreta === "alternativa4"}
                            onChange={e => setAlternativaCorreta(e.target.value)}
                        />
                        <textarea
                            className="form-control"
                            id="inputalternativa4"
                            placeholder="Digite a quarta alternativa:"
                            value={alternativa4}
                            onChange={e => setAlternativa4(e.target.value)}
                        />
                    </div>

                    <div className="item-cadastro-questao">
                        <input type="radio"
                            name="alternativacorreta"
                            value="alternativa5"
                            checked={alternativacorreta === "alternativa5"}
                            onChange={e => setAlternativaCorreta(e.target.value)}
                        />
                        <textarea
                            className="form-control"
                            id="inputalternativa5"
                            placeholder="Digite a quinta alternativa :"
                            value={alternativa5}
                            onChange={e => setAlternativa5(e.target.value)}
                        />
                    </div>

                    <div className="cont-buttons">
                        <button type="button" onClick={e => setVoltar(true)}>Limpar campos</button>
                        <button id="botaoCadastrar" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>

    );
}