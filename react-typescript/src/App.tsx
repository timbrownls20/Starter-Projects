import React from "react";
import "./App.css";
import reactIcon from "./assets/react-icon.png";

const App: React.FC = () => {
  const message: string = "React TypeScript app from scratch!!!";
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactIcon} className="App-logo" alt="logo" />
        {message}
      </header>
    </div>
  );
};

export default App;
