import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleBlur = () => {
    setShowValidation(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    setShowValidation(false);
  };

  const isEmailValid = () => {
    if (showValidation && email === '') {
      return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div style={styles.form} className='col-8 col-lg-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPlaintextName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            onBlur={handleBlur}
            isInvalid={showValidation && name === ''}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a Name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPlaintextEmail" className='mt-4'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            isInvalid={!isEmailValid()}
            required
          />
          <Form.Control.Feedback type="invalid">
            {showValidation && email === ''
              ? 'Please enter an Email.'
              : 'Please enter a valid Email.'}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPlaintextMessage" className='mt-4'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={handleMessageChange}
            onBlur={handleBlur}
            isInvalid={showValidation && message === ''}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a Message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          style={styles.formBtn}
          type="submit"
          className='mt-4'
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
