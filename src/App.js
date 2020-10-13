import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Table from "./components/Table/Table";
import Form from "./components/Form/Form";

function App() {
  const [input, setInput] = useState({
    roomDimensions: [10, 10],
    initialRoombaLocation: [1, 1],
    dirtLocations: [
      [1, 2],
      [3, 5],
      [5, 5],
      [7, 9],
    ],
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

  const [output, setOutput] = useState([
    {
      step: 1,
      roombaLocation: input.initialRoombaLocation,
      action: null,
      totalDirtCollected: 0,
      totalWallHits: 0,
    },
  ]);

  const buildTable = () => {};

  return (
    <div className="App">
      <h1>Roomba Coding Challenge</h1>
      <Form />
      <Table output={output} />
    </div>
  );
}

export default App;
