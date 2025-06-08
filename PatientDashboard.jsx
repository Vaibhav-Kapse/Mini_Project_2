import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  Card,
  ProgressBar,
} from "react-bootstrap";

const PatientDashboard = () => {
  const cards = [
    {
      title: "Next Appointment",
      text: "Dr. Sarah Lee - June 10, 10:30 AM",
      button: { label: "View Details", variant: "primary" },
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80", // doctor portrait
    },
    {
      title: "Health Tips",
      text: "Stay hydrated and walk at least 30 mins daily.",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80", // patient exercising
    },
    {
      title: "Profile Status",
      text: "80% complete — add medical history to finish.",
      button: { label: "Update Profile", variant: "outline-primary" },
      image:
        "https://images.unsplash.com/photo-1588776814546-7531b7f94e88?auto=format&fit=crop&w=400&q=80", // doctor with patient
      progress: 80,
    },
  ];

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="px-4">
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

      <Container className="mt-4">
        <h4 className="fw-bold mb-3">Welcome, Patient 👋</h4>
        <p className="text-muted">
          Here's a quick overview of your health activity.
        </p>

        <Row className="mt-4">
          {cards.map((card, i) => (
            <Col md={4} className="mb-3" key={i}>
              <Card
                className="shadow-sm h-100 text-white"
                style={{ overflow: "hidden", borderRadius: "12px" }}
              >
                <div
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "180px",
                    position: "relative",
                  }}
                >
                  {/* Overlay with lighter opacity only for Profile Status */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor:
                        card.title === "Profile Status"
                          ? "rgba(0,0,0,0.3)"
                          : "rgba(0,0,0,0.5)",
                    }}
                  />
                  {/* Text content on image */}
                  <Card.Body
                    style={{
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>

                    {/* Add progress bar only to Profile Status */}
                    {card.title === "Profile Status" && card.progress && (
                      <ProgressBar
                        now={card.progress}
                        label={`${card.progress}%`}
                        variant="success"
                        className="mb-2"
                      />
                    )}

                    {card.button && (
                      <Button
                        variant={card.button.variant}
                        size="sm"
                        className="align-self-start mt-2"
                      >
                        {card.button.label}
                      </Button>
                    )}
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PatientDashboard;
