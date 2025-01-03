'use client'
import "../style/contact.css"
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="formWrapper">
        <h1 className="title">
          Contact <span className="highlight">Me</span>
        </h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="inputWrapper">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="input"
            />
          </div>

          <div className="inputWrapper">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="input"
            />
          </div>

          <div className="inputWrapper">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              required
              className="input"
            />
          </div>

          <div className="inputWrapper">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="input"
            />
          </div>

          <div className="inputWrapper">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="input textarea"
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;