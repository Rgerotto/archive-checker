import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [validationMessage, setValidationMessage] = useState(''); // To store the validation message

  // Function to update the input value in state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function called when the button is clicked
  const handleValidation = () => {
    // Split the input value into parts based on the hyphen
    const parts = inputValue.split('-');
    let message = '';

    // Check if the number of parts is correct
    if (parts.length !== 4) {
      message = 'The sequence must have 4 parts.';
    } else {
      // Validate each part individually
      if (!/^[A-Za-z0-9]{3}$/.test(parts[0])) {
        message += 'The first part must have 3 characters. ';
      }
      if (!/^[A-Za-z0-9]{4}$/.test(parts[1])) {
        message += 'The second part must have 4 characters. ';
      }
      if (!/^[A-Za-z0-9]{4}$/.test(parts[2])) {
        message += 'The third part must have 4 characters. ';
      }
      if (!/^[A-Za-z0-9]{4}$/.test(parts[3])) {
        message += 'The fourth part must have 4 characters. ';
      }
    }

    // Update the validation message
    setValidationMessage(message || 'The sequence is valid!');
  };

  return (
    <div className='container'>
      <div className="sequence">
        <p>ABC-1234-5678-9101</p>
        <p>The sequence must contain 3 characters in the first block, and 4 characters in the second, third, and fourth blocks.</p>
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
        {/* Button to validate the sequence */}
        <button type="button" onClick={handleValidation}>
          Validate sequence
        </button>
      </form>

      {/* Displaying the entered value */}
      <p>You entered: {inputValue}</p>

      {/* Validation message */}
      {validationMessage && <p style={{ color: 'red' }}>{validationMessage}</p>}
    </div>
  );
}

export default App;
