import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    background-color: #fffafc;
    color: #2d2d2d;
    letter-spacing: 0.03em;
    
  }

/* @keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
} */

body {
  margin: 0;
  padding: 0;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  letter-spacing: 0.03em;
  line-height: 1.6;
  font-size: 18px;
  position: relative;
  /* background: linear-gradient(135deg, #db9fb7ff, #ba627eff, #f3e5f5); */
  /* background: linear-gradient(135deg, #fffafc, #ffe3ec, #f3e5f5);
  background-size: 400% 400%;
  animation: gradientFlow 20s ease infinite;
  color: #2d2d2d; */
}




  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
  }

  p {
    margin: 0 0 1em;
  }

  ul, ol {
    padding-left: 1.2em;
    margin: 0 0 1em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;


export default GlobalStyle;
