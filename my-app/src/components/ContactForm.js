import React from "react";
import { Form, Button } from "react-bootstrap";

const styles = {
  form: {
    textAlign: 'center',
    color: '#54667D',
    paddingTop: '15px'
  },
  formBtn: {
    backgroundColor: '#54667D',
    border: 'none',
  }
};

function ContactForm() {
  return (
    <div style={styles.form} className='col-8 col-lg-5'>
    <Form>
      <Form.Group controlId="formPlaintextName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="formPlaintextEmail" className='mt-4'>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group controlId="formPlaintextMessage" className='mt-4'>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button style={styles.formBtn} type="submit" className='mt-4'>Submit</Button>
    </Form>
    </div>
  );
}

export default ContactForm;
