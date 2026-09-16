import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const WHAT_WE_DO = [
  { label: 'Digital Transformation', path: '/#what-we-do' },
  { label: 'Data & AI', path: '/#what-we-do' },
  { label: 'Enterprise Platforms', path: '/#what-we-do' },
  { label: 'Run & Support', path: '/#what-we-do' },
];

const WHERE_WE_WORK = [
  { label: 'Government & e-Governance', path: '/#where-we-work' },
  { label: 'Education', path: '/#where-we-work' },
  { label: 'Mining', path: '/#where-we-work' },
  { label: 'Energy', path: '/#where-we-work' },
  { label: 'Healthcare', path: '/#where-we-work' },
];

const SELECTED_WORK = [
  { label: 'NMDC Telemetry', path: '/#selected-work' },
  { label: 'Greenko Operations', path: '/#selected-work' },
  { label: 'US Healthcare Engagement', path: '/#selected-work' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer__cta">
        <div className="container">
          <div className="footer__cta-inner">
            <div className="footer__cta-text">
              <h2>Ready to build mission-critical systems?</h2>
              <p>Speak directly with our engineering and delivery leadership.</p>
            </div>
            <div className="footer__cta-actions">
              <a href="#contact" className="btn btn--white btn--lg">
                Talk to us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img src="/images/logo_text.png" alt="Eksper Technologies" />
              </Link>
              <p className="footer__tagline">
                25+ years building mission-critical systems for government, education, mining, energy and healthcare.
              </p>

              <div className="footer__hq">
                <div className="footer__hq-row">
                  <MapPin size={14} />
                  <span>
                    Plot 32, Road No. 17, Jubilee Hills,<br />
                    Hyderabad – 500 033, Telangana
                  </span>
                </div>
                <div className="footer__hq-row">
                  <Phone size={14} />
                  <a href="tel:04023554455">040 2355 4455</a>
                </div>
                <div className="footer__hq-row">
                  <Mail size={14} />
                  <a href="mailto:info@ekspertech.com">info@ekspertech.com</a>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer__links-col">
              <h4 className="footer__col-title">What We Do</h4>
              {WHAT_WE_DO.map((item, idx) => (
                <a key={idx} href={item.path} className="footer__link">{item.label}</a>
              ))}
            </div>

            <div className="footer__links-col">
              <h4 className="footer__col-title">Where We Work</h4>
              {WHERE_WE_WORK.map((item, idx) => (
                <a key={idx} href={item.path} className="footer__link">{item.label}</a>
              ))}
            </div>

            <div className="footer__links-col">
              <h4 className="footer__col-title">Selected Work</h4>
              {SELECTED_WORK.map((item, idx) => (
                <a key={idx} href={item.path} className="footer__link">{item.label}</a>
              ))}
              <a href="#contact" className="footer__link" style={{ marginTop: 12, color: 'var(--ember)', fontWeight: 600 }}>
                Talk to us →
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Eksper Technologies Limited. All rights reserved.
            </p>
            <p className="footer__legal">
              CIN: U72200AP2005PLC048024 · An ISO 9001:2015 Certified Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
