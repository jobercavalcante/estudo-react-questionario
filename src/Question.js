import React from 'react';

function Question({
  pergunta,
  options,
  resposta,
  id,
  value,
  onChange,
  slideAtual,
}) {
  if (!slideAtual) {
    return null;
  }

  return (
    <div>
      <p>{pergunta}</p>
      <div style={{ background: '#c0c0c0' }}>
        {options.map((opcao, indice) => {
          return (
            <p key={indice}>
              <label>
                <input
                  id={id}
                  checked={value === opcao}
                  onChange={onChange}
                  type="radio"
                  value={opcao}
                />
                {opcao}
              </label>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
