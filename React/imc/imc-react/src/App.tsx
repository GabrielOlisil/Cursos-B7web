import styles from './App.module.css'
import Logo from './assets/powered.png'
import React, { useState } from 'react';
import styled from "styled-components";

const App = () => {
  const [heightField, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0);

  const [positionMessagemErro, setPositionMessagemErro] = useState('errorMessageClosed');

  return (

    <div className={styles.main}>
      <ErrorMessage positionMessagemError={positionMessagemErro}></ErrorMessage>
      <header>
        <div className={styles.headerContainer}>
          <img src={Logo} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1>Calcule o seu imc</h1>
          <p className={styles.description}>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização mundial de Saúde para calcular o peso ideal de cada pessoa</p>

          <div className={styles.inputGrid}>

            <input type="number" id="heightField"
              onChange={(e) => setHeightField(+e.target.value)}
              placeholder="Digite sua altura. Ex: 1,80"
              value={heightField || ''} />

            <input type="number" id="wheigthField"
              onChange={(e) => setWeightField(+e.target.value)}
              placeholder="Digite seu peso. Ex: 79"
              value={weightField || ''} />

            <button onClick={(e) => {
              if (!(weightField && heightField)) {
                setPositionMessagemErro('errorMessageOpened');
                setTimeout(() =>{setPositionMessagemErro('errorMessageClosed')}, 2000);
              }
            }}>Calcular</button>
          </div>
        </div>


        <div className={styles.rightSide}>
          ...
        </div>

      </div>
    </div>
  )
}

interface ErrorType {
  positionMessagemError: string;
}

const ErrorMessage = ({positionMessagemError, ...props}: ErrorType) => {
  const ErrorDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #ff6a6a;
    transition: all ease .4s;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 3s;
    transform: translateY(-40px)
  `;

  const className = positionMessagemError;

  return (
      <ErrorDiv id='error' className={styles[className]}>
        Erro, insira ambos os valores
      </ErrorDiv>
  );
}

export default App
