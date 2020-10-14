import React from "react";
import Card from "react-bootstrap/Card";
import "./Summary.css";

function Summary({ output }) {
  let finalStep = output[output.length - 1];
  let totalDistanceTraveled = output.length - (1 + finalStep.totalWallHits);

  return (
    <Card style={{ width: "18rem" }} className="summaryCard">
      <Card.Body>
        <Card.Title>Summary</Card.Title>
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
