import React from 'react';
import styles from './contactForm.module.scss';

const ContactForm = () => {
  const handleSubmit = () => {};

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit()}></form>
  );
};

export default ContactForm;
