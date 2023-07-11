import React from 'react';
import PageHeading from '../components/PageHeading';
import ContactForm from '../components/ContactForm';

const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};


export default function Contact() {
  return (
    <div>
      <PageHeading pageHeading= 'Contact Isabel'/>
      <div style={styles.formContainer}>
      <ContactForm />
      </div>
    </div>
    
  );
}
