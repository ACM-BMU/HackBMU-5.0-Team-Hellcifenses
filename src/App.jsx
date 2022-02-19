import { BrowserRouter } from "react-router-dom";

import RoutesComponent from "./routes";

import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
