import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import moveRoomba from "./Logic/moveRoomba";

function App() {
  const [input, setInput] = useState({
    roomDimensions: [10, 10],
    initialRoombaLocation: [1, 1],
    dirtLocations: "[1, 2], [3, 5], [5, 5],[7, 9]",
    drivingInstructions: [
      "N",
      "E",
      "E",
      "N",
      "N",
      "N",
      "E",
      "E",
      "S",
      "W",
      "S",
      "S",
      "S",
      "S",
      "S",
    ],
  });

  const [output, setOutput] = useState([]);

  useEffect(() => {
    moveRoomba(input, setOutput);
  }, [input]);

  return (
    <div className="App">
      <h1>Roomba Coding Challenge</h1>
      <Form input={input} setInput={setInput} />
      <Table output={output} />
    </div>
  );
}

export default App;
