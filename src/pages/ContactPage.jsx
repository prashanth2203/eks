import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && (formData.email || formData.phone)) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Get In Touch</div>
          <h1 className="page-hero__title">Contact</h1>
          <p className="page-hero__desc">
            Talk directly with our engineering and leadership team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="contact-box" style={{ margin: '0 auto' }}>
            {submitted ? (
              <div className="contact-success">
                <Check size={24} className="contact-success__icon" />
                <div>
                  <h4>Message received</h4>
                  <p>Thank you. We will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form className="contact-simple-form" onSubmit={handleSubmit}>
                <div className="contact-input-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 or international number"
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--lg contact-submit-btn">
                  Submit
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            <div className="contact-direct-link">
              <span>Or email us directly: </span>
              <a href="mailto:info@ekspertech.com">info@ekspertech.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
