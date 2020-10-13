import React from "react";
import { Table } from "react-bootstrap";
import "./Table.css";

function TableComponent({ output }) {
  console.log("output", output);
  return (
    <div className="tableContainer">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Step</th>
            <th>Roomba Location</th>
            <th>Action</th>
            <th>Total Dirt Collected</th>
            <th>Total Wall Hits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{output[0].step}</td>
            <td>{output[0].roombaLocation}</td>
            <td>{output[0].action}</td>
            <td>{output[0].totalDirtCollected}</td>
            <td>{output[0].totalWallHits}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
