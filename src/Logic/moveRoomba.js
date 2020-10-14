const moveRoomba = (input, setOutput) => {
  let position = [...input.initialRoombaLocation];
  let dirtCount = 0;
  let wallCount = 0;
  let dirtLocs = JSON.parse("[" + input.dirtLocations + "]");

  let tableRows = [
    {
      step: 1,
      roombaLocation: [...position],
      action: null,
      totalDirtCollected: 0,
      totalWallHits: 0,
    },
  ];

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
    dirtLocs.forEach((location, index) => {
      if (position[0] === location[0] && position[1] === location[1]) {
        dirtCount++;
        dirtLocs.splice(index, 1);
      }
    });

    //set tableRow Object
    const tableRow = {
      step: index + 2,
      roombaLocation: [...position],
      action: instruction,
      totalDirtCollected: dirtCount,
      totalWallHits: wallCount,
    };

    tableRows.push(tableRow);
  });

  setOutput(tableRows);
};

export default moveRoomba;
