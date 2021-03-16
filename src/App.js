import React from 'react';
import Question from './Question';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [avancar, setAvancar] = React.useState(true);
  const [slide, setSlide] = React.useState(0);
  const [verAcertos, setverAcertos] = React.useState(false);
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  function avancarSlide() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setAvancar(false);
    }
  }

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function verificarAcertos() {
    setverAcertos(true);
  }

  if (verAcertos) {
    const acertos = perguntas.filter((pergunta) => {
      return pergunta.resposta === respostas[pergunta.id];
    });

    return (
      <div style={{ width: '550px', margin: 'auto', textAlign: 'center' }}>
        Você acertou {acertos.length} de {perguntas.length}!
      </div>
    );
  }

  return (
    <form style={{ width: '550px', margin: 'auto' }}>
      {perguntas.map((pergunta, indice) => {
        return (
          <Question
            key={indice}
            {...pergunta}
            value={respostas[pergunta.id]}
            respostas={setRespostas}
            onChange={handleChange}
            slideAtual={slide === indice}
          />
        );
      })}
      {avancar && (
        <button type="button" onClick={avancarSlide}>
          Próximo
        </button>
      )}
      {!avancar && (
        <button onClick={verificarAcertos} type="button">
          Calcular acertos
        </button>
      )}
    </form>
  );
}

export default App;
