import React from "react";
import { RouterComponent } from "./routes";
import GlobalStyle from "./global/style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterComponent />
    </div>
  );
}

export default App;
