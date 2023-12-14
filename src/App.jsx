import React, { useEffect } from 'react';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import './App.css';
  

function App() {

  function ExecuteTour(){
    const driverObj = driver({
      showProgress: true,
      allowClose: false,
      nextBtnText: 'Avançar',
      prevBtnText: 'Voltar',
      doneBtnText: 'Fechar',
      popoverClass: 'driverjs-theme',
      steps: [
        { 
         element: '#page-header',
         popover: { 
          title: 'Título da aplicação',
          description: 'Aqui está a informação principal da aplicação.'
         } 
        },

        { 
         element: '#top-nav',
         popover: { 
          title: 'Descrição da aplicação',
          description: 'Essa é a descrção detalhada sobre o conteúdo na aplicação.'
         } 
        },

        { 
         element: '#sidebar',
         popover: { 
          title: 'Botão de ação',
          description: 'Esse botão inicia o tour na aplicação.'
         } 
        },

        { 
         element: '#footer',
         popover: { 
          title: 'Rodapé',
          description: 'Tour da aplicação encerrado.'
         } 
        },

      ]
    });
    driverObj.drive();
  }

  return (
    <div className="App">
      <h1 id="page-header">Bem-vindo ao Tour</h1>
      <p id="top-nav">Este é um exemplo simples de como pode ser visualizado um tour na aplicação de um produto,
      <br></br> clique no botão abaixo para iniciar o tour pela aplicação.</p>
      <button id="sidebar" onClick={() => ExecuteTour()} >Iniciar o Tour</button>
      <footer><span id="footer">Este é o final do tour.</span></footer>
    </div>
  );
}

export default App;
