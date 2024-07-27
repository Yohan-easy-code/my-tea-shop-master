import React, { useState } from 'react';

const Form = ({ onCodeSubmit }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCodeSubmit(code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Entrez votre code"
      />
      <button type="submit">Valider</button>
    </form>
  );
};

export default Form;
