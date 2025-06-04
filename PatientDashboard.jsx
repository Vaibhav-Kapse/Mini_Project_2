import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const PatientDashboard = () => {
  return (
    <>
      {/* Top Navigation */}
      <Navbar bg="primary" variant="dark" expand="lg" className="px-4">
        <Container fluid>
          <Navbar.Brand href="#" className="fw-bold">
            BrandName
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link href="#book-appointment">Book Appointment</Nav.Link>
              <Nav.Link href="#my-appointments">My Appointments</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
            <Button variant="outline-light">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Dashboard Content */}
      <Container className="mt-4">
        <h4 className="fw-bold mb-3">Welcome, Patient 👋</h4>
        <p className="text-muted">
          Here's a quick overview of your health activity.
        </p>

        <Row className="mt-4">
          <Col md={4} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Next Appointment</Card.Title>
                <Card.Text className="text-muted">
                  Dr. Sarah Lee - June 10, 10:30 AM
                </Card.Text>
                <Button variant="primary" size="sm">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Health Tips</Card.Title>
                <Card.Text className="text-muted">
                  Stay hydrated and walk at least 30 mins daily.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Profile Status</Card.Title>
                <Card.Text className="text-muted">
                  80% complete — add medical history to finish.
                </Card.Text>
                <Button variant="outline-primary" size="sm">
                  Update Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PatientDashboard;
