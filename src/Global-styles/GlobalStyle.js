import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    padding: 25px;
    background: #4B79A1;
    background: linear-gradient(to right, #283E51, #4B79A1);
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.4;
    font-family: 'Roboto', sans-serif;
    color: #222;
    background: #fff;
    border-radius: 3px
  }

`;

export default GlobalStyle;
