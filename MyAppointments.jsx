import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const MyAppointments = () => {
  // Dummy appointments data
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Lee",
      date: "June 10, 2025",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. John Smith",
      date: "July 5, 2025",
      time: "2:00 PM",
      status: "Pending",
    },
  ];

  return (
    <Container className="mt-4">
      <h3>My Appointments</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(({ id, doctor, date, time, status }) => (
            <tr key={id}>
              <td>{doctor}</td>
              <td>{date}</td>
              <td>{time}</td>
              <td>{status}</td>
              <td>
                <Button variant="danger" size="sm">
                  Cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyAppointments;
