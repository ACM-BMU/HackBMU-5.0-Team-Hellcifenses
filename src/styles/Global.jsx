import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }


    body {
      font-family: "Roboto", sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    body, button, input {
      font: 16px "Roboto", Arial, sans-serif;
    }

    button {
      cursor: pointer;
    }


    :root {
      --green-color: #138808;
      --orange-color: #E38916;
      --blue-color: #002776;
    }
`;
