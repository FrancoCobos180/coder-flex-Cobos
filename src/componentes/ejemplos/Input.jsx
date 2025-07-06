import React, { useState } from 'react';

const Input = () => {
    const [name, setName]= useState('')
  const inputHandler = (e) => {
    console.log(e.target.value);
  };
  const noVocals= (e) =>{
console.log(e)
  }

  return (
    <div>
      <input
        placeholder="Ingrese su Nombre"
        type="text"
        name="Nombre Completo"
        onChange={inputHandler}
      />
      <p>{name}</p>
      <h2>no se permiten vocales</h2>
      <input placeholder='no vocals' type='text' onKeyDown={noVocals}/>
    </div>
  );
};

export default Input;

