import React, { useState } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Database, 
  Building2, 
  Headphones, 
  Landmark, 
  GraduationCap, 
  Pickaxe, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Mail, 
  PhoneCall 
} from 'lucide-react';
import ClientStripLogos from '../components/ClientStripLogos';
import './HomePage.css';

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="homepage-streamlined">
      {/* 1. HERO */}
      <section className="hero-compact">
        <div className="container">
          <div className="hero-compact__content">
            <h1 className="hero-compact__title">
              Digital transformation, powered by AI.
            </h1>
            <p className="hero-compact__desc">
              25+ years building mission-critical systems for government, education, mining, energy and healthcare.
            </p>
            <div className="hero-compact__actions">
              <a href="#contact" className="btn btn--primary btn--lg">
                Talk to us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT STRIP (Logos only, no heading, no caption) */}
      <section className="client-strip-section" aria-label="Client Partners">
        <ClientStripLogos />
      </section>

      {/* 3. WHAT WE DO (Four cards, one line each) */}
      <section className="section" id="what-we-do">
        <div className="container">
          <div className="section-head-compact">
            <div className="section-eyebrow">Capabilities</div>
            <h2 className="section-title">What we do</h2>
          </div>

          <div className="grid-four">
            <div className="compact-card">
              <div className="compact-card__icon">
                <Cpu size={18} />
              </div>
              <h3 className="compact-card__title">Digital Transformation</h3>
              <p className="compact-card__line">
                Modernising legacy systems into platforms that work.
              </p>
            </div>

            <div className="compact-card">
              <div className="compact-card__icon">
                <Database size={18} />
              </div>
              <h3 className="compact-card__title">Data &amp; AI</h3>
              <p className="compact-card__line">
                Data platforms, analytics and AI built into operations, not bolted on.
              </p>
            </div>

            <div className="compact-card">
              <div className="compact-card__icon">
                <Building2 size={18} />
              </div>
              <h3 className="compact-card__title">Enterprise Platforms</h3>
              <p className="compact-card__line">
                ERP, e-Governance and campus management at institutional scale.
              </p>
            </div>

            <div className="compact-card">
              <div className="compact-card__icon">
                <Headphones size={18} />
              </div>
              <h3 className="compact-card__title">Run &amp; Support</h3>
              <p className="compact-card__line">
                We stay on after go-live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHERE WE WORK (Five cards, one line each) */}
      <section className="section section--stone" id="where-we-work">
        <div className="container">
          <div className="section-head-compact">
            <div className="section-eyebrow">Domains</div>
            <h2 className="section-title">Where we work</h2>
          </div>

          <div className="grid-five">
            <div className="compact-card compact-card--elevated">
              <div className="compact-card__icon">
                <Landmark size={18} />
              </div>
              <h3 className="compact-card__title">Government &amp; e-Governance</h3>
              <p className="compact-card__line">
                State departments and public institutions.
              </p>
            </div>

            <div className="compact-card compact-card--elevated">
              <div className="compact-card__icon">
                <GraduationCap size={18} />
              </div>
              <h3 className="compact-card__title">Education</h3>
              <p className="compact-card__line">
                ERP and campus management for schools, colleges and institutions.
              </p>
            </div>

            <div className="compact-card compact-card--elevated">
              <div className="compact-card__icon">
                <Pickaxe size={18} />
              </div>
              <h3 className="compact-card__title">Mining</h3>
              <p className="compact-card__line">
                NMDC and the public-sector mining ecosystem.
              </p>
            </div>

            <div className="compact-card compact-card--elevated">
              <div className="compact-card__icon">
                <Zap size={18} />
              </div>
              <h3 className="compact-card__title">Energy</h3>
              <p className="compact-card__line">
                Technology platforms and infrastructure for energy operations.
              </p>
            </div>

            <div className="compact-card compact-card--elevated">
              <div className="compact-card__icon">
                <Activity size={18} />
              </div>
              <h3 className="compact-card__title">Healthcare</h3>
              <p className="compact-card__line">
                Data and AI for US payers and provider organisations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK (Three cases, two lines each: problem, what changed) */}
      <section className="section" id="selected-work">
        <div className="container">
          <div className="section-head-compact">
            <div className="section-eyebrow">Track Record</div>
            <h2 className="section-title">Selected work</h2>
          </div>

          <div className="grid-three-cases">
            {/* Case 1: NMDC */}
            <div className="case-card">
              <div className="case-card__header">
                <span className="case-card__tag">Mining &amp; Public Sector</span>
                <h3 className="case-card__title">NMDC</h3>
              </div>
              <div className="case-card__body">
                <div className="case-card__line">
                  <span className="case-card__label">Problem:</span>
                  <span className="case-card__text">
                    Manual weighbridge registers and disconnected site logs across remote mining complexes led to audit risks and logistical delays.
                  </span>
                </div>
                <div className="case-card__line">
                  <span className="case-card__label">What changed:</span>
                  <span className="case-card__text">
                    Deployed hardware-integrated automated weighbridges with real-time central telemetry and digital dispatch passes.
                  </span>
                </div>
              </div>
            </div>

            {/* Case 2: Greenko */}
            <div className="case-card">
              <div className="case-card__header">
                <span className="case-card__tag">Energy &amp; Infrastructure</span>
                <h3 className="case-card__title">Greenko</h3>
              </div>
              <div className="case-card__body">
                <div className="case-card__line">
                  <span className="case-card__label">Problem:</span>
                  <span className="case-card__text">
                    Distributed renewable power assets lacked unified real-time monitoring and standardized operational reporting.
                  </span>
                </div>
                <div className="case-card__line">
                  <span className="case-card__label">What changed:</span>
                  <span className="case-card__text">
                    Built integrated telemetry and data platforms unifying generation metrics across plant operations.
                  </span>
                </div>
              </div>
            </div>

            {/* Case 3: US Healthcare Engagement */}
            <div className="case-card">
              <div className="case-card__header">
                <span className="case-card__tag">Healthcare, Payers &amp; Providers</span>
                <h3 className="case-card__title">US Healthcare Engagement</h3>
              </div>
              <div className="case-card__body">
                <div className="case-card__line">
                  <span className="case-card__label">Problem:</span>
                  <span className="case-card__text">
                    Disconnected clinical records and unstructured claims data hindered care coordination and clinical document indexing.
                  </span>
                </div>
                <div className="case-card__line">
                  <span className="case-card__label">What changed:</span>
                  <span className="case-card__text">
                    Implemented clinical data pipelines and NLP models to parse, extract, and standardize EHR records for care teams.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT (Name, email, phone. One form or one email link. Nothing else.) */}
      <section className="section section--beige" id="contact">
        <div className="container container--narrow">
          <div className="contact-box">
            <div className="contact-box__info">
              <div className="section-eyebrow">Connect</div>
              <h2 className="section-title">Talk to us</h2>
              <p className="contact-box__desc">
                Direct discussion with engineering and delivery leadership.
              </p>

              <div className="contact-box__direct">
                <a href="mailto:info@ekspertech.com" className="contact-direct-link">
                  <Mail size={16} />
                  <span>info@ekspertech.com</span>
                </a>
                <a href="tel:04023554455" className="contact-direct-link">
                  <PhoneCall size={16} />
                  <span>040 2355 4455</span>
                </a>
              </div>
            </div>

            <div className="contact-box__form-wrap">
              {formSubmitted ? (
                <div className="contact-box__success">
                  <CheckCircle2 size={32} style={{ color: 'var(--ember)', marginBottom: 12 }} />
                  <h4>Message received.</h4>
                  <p>Our engineering team will get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-compact-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label htmlFor="name" className="form-field__label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="form-field__input"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="form-field__label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@organization.com"
                      className="form-field__input"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone" className="form-field__label">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="form-field__input"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="form-field__label">Brief requirements (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Brief note on your project..."
                      className="form-field__input form-field__textarea"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="btn btn--primary" style={{ width: '100%', marginTop: 8 }}>
                    Send Message
                    <ArrowRight size={15} />
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
