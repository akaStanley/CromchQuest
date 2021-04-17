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

      <PlusButton />
    </div>
  );
}

export default App;
