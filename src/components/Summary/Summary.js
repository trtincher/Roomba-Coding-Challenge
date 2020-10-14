import React from "react";
import Card from "react-bootstrap/Card";

function Summary({ output }) {
  let finalStep = output[output.length - 1];
  let totalDistanceTraveled = output.length - (1 + finalStep.totalWallHits);
  console.log("finalStep", finalStep);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>
          Final Position:{" "}
          {`${finalStep.roombaLocation[0]}, ${finalStep.roombaLocation[1]}`}
        </Card.Text>
        <Card.Text>
          Total Dirt Collected: {finalStep.totalDirtCollected}
        </Card.Text>
        <Card.Text>Total Distance Traveled: {totalDistanceTraveled}</Card.Text>
        <Card.Text>Total Walls Hit: {finalStep.totalWallHits}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Summary;
