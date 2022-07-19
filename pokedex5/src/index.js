import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import Poppins from './assets/Fonts/Poppins/Poppins-Regular.ttf'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @font-face {
    font-family:'Poppins' ;
    src: url(${Poppins});
  }
}
#root,body{
max-width: 100vw;
min-height: 100vh;
}
#root{
  display: flex;
  flex-direction: column;
}
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);


