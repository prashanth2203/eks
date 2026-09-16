import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Request Demo</div>
          <h1 className="page-hero__title">See our platform in action.</h1>
          <p className="page-hero__desc">
            Schedule a personalized walkthrough tailored to your institution's specific needs and scale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
            {/* Left: Benefits */}
            <div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>What to expect</h2>
              <p style={{ fontSize: '1rem', color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 32 }}>
                Our solutions architects will present a tailored demonstration covering your institution type, compliance requirements, and operational bottlenecks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Live platform walkthrough with your institution\'s use cases',
                  'Architecture overview — single database, cloud/on-premise options',
                  'Compliance mapping against UGC, AICTE, and state guidelines',
                  'Migration feasibility assessment for existing data',
                  'Custom deployment timeline and pricing proposal',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--ember)', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--ink-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, padding: 24, background: 'var(--stone-50)', borderRadius: 'var(--r-lg)' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.65 }}>
                  <strong style={{ color: 'var(--ink)' }}>Prefer to call?</strong><br />
                  Reach our solutions team directly at <a href="tel:04023554455" style={{ color: 'var(--ember)', textDecoration: 'none', fontWeight: 600 }}>040 2355 4455</a>
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ padding: 36, background: 'var(--stone-50)', borderRadius: 'var(--r-xl)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--ember)', marginBottom: 16 }} />
                  <h3 style={{ marginBottom: 8 }}>Request Submitted</h3>
                  <p style={{ color: 'var(--ink-muted)' }}>Our team will contact you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: 24 }}>Schedule Your Demo</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-input" required placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Designation</label>
                      <input type="text" className="form-input" placeholder="e.g. Registrar" />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input type="email" className="form-input" required placeholder="Official email" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone *</label>
                      <input type="tel" className="form-input" required placeholder="Phone number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Institution / Organization *</label>
                    <input type="text" className="form-input" required placeholder="University or college name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Area of Interest *</label>
                    <select className="form-input" required>
                      <option value="">Select an option</option>
                      <option>University e-Governance ERP</option>
                      <option>College & Autonomous Institute ERP</option>
                      <option>K-12 School Management</option>
                      <option>Examination & CBCS Portal</option>
                      <option>Cloud Migration & Server Setup</option>
                      <option>AI Healthcare Research</option>
                      <option>Mining Logistics Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Additional Details</label>
                    <textarea className="form-input" placeholder="Tell us about your requirements..." rows={4} />
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                    Submit Request <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
