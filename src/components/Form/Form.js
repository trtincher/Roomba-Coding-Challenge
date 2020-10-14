import React, { useState, useEffect } from "react";
import "./Form.css";
import Files from "react-files";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormComponent({ input, setInput }) {
  const [form, setForm] = useState({
    ...input,
  });
  const [file, setFile] = useState({});

  console.log("file", file);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    setInput(form);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name !== "dirtLocations") value = value.split(",");

    setForm({
      ...form,
      [name]: value,
    });
    console.log(`[${name}]: ${value}`);
  };

  let fileReader = new FileReader();
  fileReader.onload = (event) => {
    setFile({ jsonFile: JSON.parse(event.target.result) });
  };

  return (
    <div className="formContainer">
      <div className="files">
        <Files
          className="files-dropzone"
          onChange={(file) => fileReader.readAsText(file[0])}
          onError={(err) => console.log(err)}
          accepts={[".json"]}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
      </div>
      <Form onSubmit={handleSubmit}>
        <h5>- Or Fill Out Form -</h5>
        <Row>
          <Col>
            <Form.Group controlId="room-dimensions">
              <Form.Label>Room Dimensions</Form.Label>
              <Form.Control
                type="text"
                placeholder="[10, 10]"
                value={form.roomDimensions}
                name="roomDimensions"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="initial-roomba-location">
              <Form.Label>Initial Roomba Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="[1, 1]"
                value={form.initialRoombaLocation}
                name="initialRoombaLocation"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="dirt-locations">
          <Form.Label>Dirt Locations</Form.Label>
          <Form.Control
            type="text"
            placeholder="[1, 2], [3, 5], [5, 5], [7, 9]"
            value={form.dirtLocations}
            name="dirtLocations"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="driving-instructions">
          <Form.Label>Driving Instructions</Form.Label>
          <Form.Control
            type="text"
            placeholder="N, E, E, N, N, S..."
            value={form.drivingInstructions}
            name="drivingInstructions"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormComponent;
