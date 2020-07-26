import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary: #000;
    --secondary: #7B7F9E;
    --liver: #54494B;
    --flax: #E3D081;
    --mint: #F1F7ED;
    --turquoise: #91C7B1;
    --bright: #B33951;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--mint);
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body{
    background-color: var(--turquoise);
  }
`;