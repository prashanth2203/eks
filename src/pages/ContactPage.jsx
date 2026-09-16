import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Contact</div>
          <h1 className="page-hero__title">Let's talk.</h1>
          <p className="page-hero__desc">
            Whether you have a question about our solutions, need technical support, or want to explore a partnership — we're here.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            {/* Contact Info */}
            <div>
              <h2 className="section-title" style={{ marginBottom: 32 }}>Get in touch</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'var(--stone-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} style={{ color: 'var(--ink-secondary)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 4 }}>Headquarters</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                      Plot No 32, Road No 17,<br />
                      Jubilee Hills, Hyderabad – 500 033,<br />
                      Telangana, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'var(--stone-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} style={{ color: 'var(--ink-secondary)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 4 }}>Phone</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)' }}>
                      <a href="tel:04023554455" style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}>040 2355 4455</a><br />
                      <a href="tel:04023554466" style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}>040 2355 4466</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'var(--stone-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} style={{ color: 'var(--ink-secondary)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 4 }}>Email</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)' }}>
                      <a href="mailto:support@ekspertechnologies.in" style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}>support@ekspertechnologies.in</a><br />
                      <a href="mailto:info@ekspertechnologies.in" style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}>info@ekspertechnologies.in</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'var(--stone-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={18} style={{ color: 'var(--ink-secondary)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 4 }}>Working Hours</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)' }}>
                      Monday – Saturday: 9:00 AM – 6:30 PM IST<br />
                      Support: Available 24/7 for active deployments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div style={{ padding: 32, background: 'var(--stone-50)', borderRadius: 'var(--r-xl)' }}>
              <h3 style={{ marginBottom: 24 }}>Send us a message</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you soon.'); }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-input" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-input" placeholder="Phone number" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea className="form-input" placeholder="How can we help?" required />
                </div>
                <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                  Send Message <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
