import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const BookAppointment = () => {
  return (
    <Container className="mt-4">
      <h3>Book Appointment</h3>
      <p>Please fill in the details below to book your appointment.</p>

      <Form>
        <Form.Group className="mb-3" controlId="formDoctor">
          <Form.Label>Select Doctor</Form.Label>
          <Form.Select>
            <option>Dr. Sarah Lee</option>
            <option>Dr. John Smith</option>
            <option>Dr. Emily Johnson</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTime">
          <Form.Label>Select Time</Form.Label>
          <Form.Control type="time" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Book Appointment
        </Button>
      </Form>
    </Container>
  );
};

export default BookAppointment;
