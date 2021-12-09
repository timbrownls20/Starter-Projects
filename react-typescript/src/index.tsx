import ReactDOM from "react-dom";
import React from "react";

const App = () => {
  const message: string = "This is my React TS App!!!";

  return <h1>{message}</h1>;
};

ReactDOM.render(<App />, document.getElementById("app"));
