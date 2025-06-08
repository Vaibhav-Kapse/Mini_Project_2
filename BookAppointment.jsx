import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Navbar,
  Nav,
  Alert,
} from "react-bootstrap";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const backgroundStyle = {
    backgroundImage:
      "url('https://t4.ftcdn.net/jpg/08/94/34/01/240_F_894340194_gzKHb2EyMrJByZxa6989VIx7MWwRVTJs.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
    paddingTop: "56px",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0,0,0,0.5)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.doctor) newErrors.doctor = "Please select a doctor";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";

    setErrors(newErrors);
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate successful submission
      setSubmitted(true);
      console.log("Appointment booked:", formData);
      // Reset form if needed
      // setFormData({ doctor: "", date: "", time: "" });
    } else {
      setSubmitted(false);
    }
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
                    active={item === "Book Appointment"}
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
        <Container style={{ maxWidth: "600px" }}>
          <Card
            className="shadow p-4 rounded-5"
            style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
          >
            <h3 className="mb-3 fw-bold text-primary">Book Appointment</h3>
            <p className="text-muted mb-4">
              Please fill in the details below to book your appointment.
            </p>

            {submitted && (
              <Alert
                variant="success"
                onClose={() => setSubmitted(false)}
                dismissible
              >
                Appointment booked successfully!
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formDoctor">
                <Form.Label className="fw-semibold">Select Doctor</Form.Label>
                <Form.Select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  aria-label="Select Doctor"
                  style={{ borderRadius: "8px", padding: "0.5rem" }}
                  isInvalid={!!errors.doctor}
                >
                  <option value="">-- Select a doctor --</option>
                  <option>Dr. Sarah Lee</option>
                  <option>Dr. John Smith</option>
                  <option>Dr. Emily Johnson</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.doctor}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formDate">
                <Form.Label className="fw-semibold">Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", padding: "0.5rem" }}
                  isInvalid={!!errors.date}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formTime">
                <Form.Label className="fw-semibold">Select Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  style={{ borderRadius: "8px", padding: "0.5rem" }}
                  isInvalid={!!errors.time}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.time}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2 fw-semibold"
                style={{ fontSize: "1.1rem" }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Book Appointment
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default BookAppointment;
