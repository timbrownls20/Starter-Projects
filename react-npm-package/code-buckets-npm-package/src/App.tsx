import React from "react";
import "./App.css";
import image from "./assets/jumping-crab.gif";

const App: React.FC = () => {
  const message: string = "Hello from Code Buckets";
  return (
    <div className="App" >
      <header className="App-header">
        <div className="crab-bucket">
        <img src={image} alt="jumping crab" />
        <div>{message}</div>
        </div>
      </header>
    </div>
  );
};

export default App;
