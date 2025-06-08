import React from "react";
import { Container, Form, Button, Navbar, Nav } from "react-bootstrap";

const Profile = () => {
  const backgroundStyle = {
    backgroundImage:
      "url('https://t3.ftcdn.net/jpg/11/33/73/24/240_F_1133732410_6W5USNoTizQkgAISNEFVwYHDpnjHJbju.jpg')", // Nice healthcare-themed background
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingTop: "56px",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    minHeight: "100vh",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  };

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
                    active={item === "Profile"}
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
            maxWidth: "600px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            padding: "2rem",
          }}
        >
          <h3 className="mb-4 fw-bold text-primary">Profile</h3>
          <p className="text-muted mb-4">Update your personal details below.</p>

          <Form>
            <Form.Group className="mb-4" controlId="formName">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                defaultValue="John Doe"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label className="fw-semibold">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue="john@example.com"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPhone">
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                defaultValue="+1 234 567 890"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formAddress">
              <Form.Label className="fw-semibold">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                defaultValue="123 Main Street"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 py-2 fw-semibold"
              style={{ fontSize: "1.1rem" }}
            >
              Save Changes
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
