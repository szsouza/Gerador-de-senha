import React, { useState } from 'react';



function App() {



  const [range, setRange] = useState(6);
  const [password, setPassword] = useState('');
  const [checkboxSymbols, setCheckboxSymbols] = useState(false);
  const [checkboxLowerCharacters, setCheckboxLowerCharacters] = useState(false);
  const [checkboxNumbers, setCheckboxNumbers] = useState(false);
  const [text, setText] = useState('')


  const handleChangeCheckboxSymbols = (event) => {
    setCheckboxSymbols(event.target.checked);
  };

  const handleChangeCheckboxCharacters = (event) => {
    setCheckboxLowerCharacters(event.target.checked);
  };

  const handleChangeCheckboxNumbers = (event) => {
    setCheckboxNumbers(event.target.checked);
  };

  const generatePassword = () => {
    let lowerCharacters = '';
    let numbers = '';
    let symbols = '';

    if (checkboxLowerCharacters) {
      lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
    }

    if (checkboxNumbers) {
      numbers = '0123456789';
    }

    if (checkboxSymbols) {
      symbols = '!@#$%^&*()_+~|}{[]:;?><,./-=';
    }

    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ${lowerCharacters}${numbers}${symbols}`;

    let newPassword = '';
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setText('Sua senha é')
    setPassword(newPassword);
  };

  return (
    <>
      <main>
        <div>
          <input id="range" type="range" min="6" max="24" onChange={(e) => setRange(e.target.value)} />
          <label htmlFor="range">{range}</label>
        </div>
        <div>
          <input type="checkbox" id="chkLower" onChange={handleChangeCheckboxCharacters} checked={checkboxLowerCharacters} />
          <label htmlFor="chkLower">Letras Minúsculas</label>
        </div>
        <div>
          <input type="checkbox" id="chkNumber" onChange={handleChangeCheckboxNumbers} checked={checkboxNumbers} />
          <label htmlFor="chkNumber">Números</label>
        </div>
        <div>
          <input type="checkbox" id="chkSymbols" onChange={handleChangeCheckboxSymbols} checked={checkboxSymbols} />
          <label htmlFor="chkSymbols">Símbolos</label>
        </div>
        <button id="Gerar" onClick={generatePassword}>Gerar</button>
      </main>
      <h3>{text}</h3>
      <p>{password}</p>
    </>
  );
}

export default App;
