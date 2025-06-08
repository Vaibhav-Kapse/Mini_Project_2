import React from "react";
import { Container, Table, Button, Navbar, Nav } from "react-bootstrap";

const MyAppointments = () => {
  const backgroundStyle = {
    backgroundImage:
      "url('https://t4.ftcdn.net/jpg/08/94/33/97/240_F_894339701_xPYn6IshrIpPBD3mYDSYLWw0J1nu46o7.jpg')", // Replace with your licensed Adobe Stock image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingTop: "56px",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    minHeight: "100vh",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  };

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
    <div style={backgroundStyle}>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="px-4 fixed-top"
      >
        <Container fluid>
          <Navbar.Brand className="fw-bold">BrandName</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav className="me-3">
              {["Book Appointment", "My Appointments", "Profile"].map(
                (item, i) => (
                  <Nav.Link
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    key={i}
                    className="text-white"
                    active={item === "My Appointments"}
                  >
                    {item}
                  </Nav.Link>
                )
              )}
            </Nav>
            <Button variant="outline-light">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={overlayStyle}>
        <Container
          style={{
            maxWidth: "900px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            padding: "2rem",
          }}
        >
          <h3 className="mb-4 fw-bold text-primary">My Appointments</h3>
          <Table striped bordered hover responsive className="mb-0">
            <thead className="table-primary">
              <tr>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th style={{ minWidth: "100px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(({ id, doctor, date, time, status }) => (
                <tr key={id}>
                  <td>{doctor}</td>
                  <td>{date}</td>
                  <td>{time}</td>
                  <td>
                    <span
                      className={`badge ${
                        status === "Confirmed"
                          ? "bg-success"
                          : status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                      style={{ fontSize: "0.9rem", padding: "0.4em 0.8em" }}
                    >
                      {status}
                    </span>
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      style={{ borderRadius: "20px", fontWeight: "600" }}
                      onClick={() => alert(`Cancel appointment ID ${id}`)}
                    >
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default MyAppointments;
