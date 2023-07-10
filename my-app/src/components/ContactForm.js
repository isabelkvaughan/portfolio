import React from "react";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <Form>
      <Form.Group controlId="formPlaintextName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group controlId="formPlaintextEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="formPlaintextMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;
  