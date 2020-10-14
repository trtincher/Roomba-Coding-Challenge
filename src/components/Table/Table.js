import React from "react";
import { Table } from "react-bootstrap";
import "./Table.css";
import Summary from "../Summary/Summary";

function TableComponent({ output }) {
  console.log("output", output);

  if (output[0] === undefined) return <h1>loading...</h1>;

  const tableRows = output.map((row) => (
    <tr key={row.step}>
      <td>{row.step}</td>
      <td>{`${row.roombaLocation[0]}, ${row.roombaLocation[1]}`}</td>
      <td>{row.action}</td>
      <td>{row.totalDirtCollected}</td>
      <td>{row.totalWallHits}</td>
    </tr>
  ));

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
        <tbody>{tableRows}</tbody>
      </Table>
      <Summary output={output} />
    </div>
  );
}

export default TableComponent;
