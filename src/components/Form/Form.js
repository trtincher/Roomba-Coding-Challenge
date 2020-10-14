import React, { useState } from "react";
import "./Form.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormComponent({ input, setInput }) {
  const [form, setForm] = useState({
    ...input,
  });

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

  return (
    <div className="formContainer">
      <Form onSubmit={handleSubmit}>
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
