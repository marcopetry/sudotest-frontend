import React, { useState } from 'react';
import './CadastroQuestoes.css';
import api from '../../services/api';
import Feedback from '../Feedback/Feedback';
import TelaEspera from '../TelaEspera/TelaEspera';

//uso essa variável pra renderizar imagem no componente feedback
let imgFeedback;
export default function CadastroQuestoes() {
    const [enunciado, setEnunciado] = useState(''),
        [alternativa1, setAlternativa1] = useState(''),
        [alternativa2, setAlternativa2] = useState(''),
        [alternativa3, setAlternativa3] = useState(''),
        [alternativa4, setAlternativa4] = useState(''),
        [alternativa5, setAlternativa5] = useState(''),
        [alternativacorreta, setAlternativaCorreta] = useState(''),
        [categoria, setCategoria] = useState('Selecione'),
        [espera, setEspera] = useState(false),
        [feedback, setFeedback] = useState('');

    function pegarPrimeiroCampoVazio() {
        if (categoria === 'Selecione')
            return 'Categoria não está selecionada.';
        if (!enunciado)
            return 'Enunciado da questão não está preenchido.';
        if (!alternativa1)
            return 'Primeira alternativa da questão não está preenchida.';
        if (!alternativa2)
            return 'Segunda alternativa da questão não está preenchida.';
        if (!alternativa3)
            return 'Terceira alternativa da questão não está preenchida.';
        if (!alternativa4)
            return 'Quarta alternativa da questão não está preenchida.';
        if (!alternativa5)
            return 'Quinta alternativa da questão não está preenchida.';
        if (!alternativacorreta)
            return 'Alternativa correta não foi selecionada.';
    }

    async function cadastrarQuestao(e) {
        e.preventDefault();
        if (!(enunciado && alternativa1 && alternativa2 && alternativa3 && alternativa4 && alternativa5 && alternativacorreta && categoria)) {
            alert(pegarPrimeiroCampoVazio());
            return;
        }
        setEspera(true);
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

        setEspera(false);
        if (response.data.Erro) {
            imgFeedback = 'errado';
            setFeedback(response.data.Erro)
        } else {
            imgFeedback = 'certo';
            setFeedback('Questão cadastrada com sucesso');
            limpar();
        }
    }

    const limpar = () => {
        setEnunciado('');
        setAlternativa1('');
        setAlternativa2('');
        setAlternativa3('');
        setAlternativa4('');
        setAlternativa5('');
        setCategoria('Selecione');
        setAlternativaCorreta('');
    }

    if (feedback !== '') {
        setTimeout(() => setFeedback(''), 2000)
        return <Feedback msgPrimaria={feedback} img={imgFeedback} />
    }

    if (espera) return <TelaEspera />

    return (
        <div className="container-questao">
            <form className="form" onSubmit={cadastrarQuestao}>
                <div className="container-form">
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
                            placeholder="Digite a primeira alternativa e marque se esta for a correta:"
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
                            placeholder="Digite a segunda alternativa e marque se esta for a correta:"
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
                            placeholder="Digite a terceira alternativa e marque se esta for a correta:"
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
                            placeholder="Digite a quarta alternativa e marque se esta for a correta:"
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
                            placeholder="Digite a quinta alternativa e marque se esta for a correta:"
                            value={alternativa5}
                            onChange={e => setAlternativa5(e.target.value)}
                        />
                    </div>

                    <div className="cont-buttons">
                        <button type="button" onClick={limpar}>Limpar campos</button>
                        <button id="botaoCadastrar" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>

    );
}