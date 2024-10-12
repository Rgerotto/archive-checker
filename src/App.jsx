import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [validationMessage, setValidationMessage] = useState(''); // Para armazenar a mensagem de validação

  // Função que atualiza o valor do input no estado
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Função chamada quando o botão for clicado
  const handleValidation = () => {
    // Divide o valor do input em partes com base no hífen
    const parts = inputValue.split('-');
    let message = '';

    // Verifica se o número de partes está correto
    if (parts.length !== 4) {
      message = 'A sequência deve ter 4 partes.';
    } else {
      // Valida cada parte individualmente
      if (!/^[A-Za-z0-9]{3}$/.test(parts[0])) {
        message += 'A primeira parte deve ter 3 caracteres. ';
      }
      if (!/^[A-Za-z0-9]{4}$/.test(parts[1])) {
        message += 'A segunda parte deve ter 4 caracteres. ';
      }
      if (!/^[A-Za-z0-9]{4}$/.test(parts[2])) {
        message += 'A terceira parte deve ter 4 caracteres. ';
      }
      if (!/^[A-Za-z0-9]{4}$/.test(parts[3])) {
        message += 'A quarta parte deve ter 4 caracteres. ';
      }
    }

    // Atualiza a mensagem de validação
    setValidationMessage(message || 'A sequência é válida!');
  };

  return (
    <div className='container'>
    <div className="sequencia">
      <p>ABC-1234-5678-9101</p>
      <p>Sequencia deve conter no primeiro bloco 3 caracteres, segundo, terceiro e quarto bloco 4 caracteres</p>
    </div>
      <form action="" method="get">
        <label htmlFor="inputField">Insert</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ex: ABC-1234-5678-9101"
        />
        {/* Botão para validar a sequência */}
        <button type="button" onClick={handleValidation}>
          Validar sequência
        </button>
      </form>

      {/* Exibindo o valor digitado */}
      <p>Você digitou: {inputValue}</p>

      {/* Mensagem de validação */}
      {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>}
    </div>
  );
}

export default App;
