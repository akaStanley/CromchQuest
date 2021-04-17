import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CromchBar from "./CromchBar";
import PlusButton from "./PlusButton";
import CerealList from "./CerealList";

function App() {
  return (
    <div className="App">
      <CromchBar />

      <CerealList />
      <div
        style={{
          background: "linear-gradient(-45deg, #788cff, #b4c8ff)",
        }}
      >
        <h1>Hello, React!</h1>
      </div>
      <PlusButton />
    </div>
  );
}

export default App;
