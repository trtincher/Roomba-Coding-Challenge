import React, { useState, useEffect } from "react";
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

  const buildTable = () => {
    let position = input.initialRoombaLocation;
    let dirtCount = 0;
    let wallCount = 0;

    input.drivingInstructions.forEach((instruction, index) => {
      //North Movement Logic
      if (instruction === "N")
        if (position[1] !== input.roomDimensions[1] - 1)
          //Normal
          position[1]++;
        //Wall Encountered
        else wallCount++;

      if (instruction === "E")
        if (position[0] !== input.roomDimensions[0] - 1)
          //Normal
          position[0]++;
        //Wall Encountered
        else wallCount++;

      if (instruction === "S")
        if (position[1] !== 0)
          //Normal
          position[1]--;
        //Wall Encountered
        else wallCount++;

      if (instruction === "W")
        if (position[0] !== 0)
          //Normal
          position[0]--;
        //Wall Encountered
        else wallCount++;

      //Check Position for Dirt
      input.dirtLocations.forEach((location) => {
        if (position[0] === location[0] && position[1] === location[1])
          dirtCount++;
      });

      //tableRow Object
      let tableRow = {
        step: index + 2,
        roombaLocation: position,
        action: instruction,
        totalDirtCollected: dirtCount,
        totalWallHits: wallCount,
      };

      setOutput([...output, tableRow]);
    });
  };

  useEffect(() => {
    buildTable();
  }, [input]);

  return (
    <div className="App">
      <h1>Roomba Coding Challenge</h1>
      <Form />
      <Table output={output} />
    </div>
  );
}

export default App;
