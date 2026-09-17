import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const SECTORS = [
  { label: 'Government & e-Governance', path: '/#where-we-work' },
  { label: 'Education', path: '/#where-we-work' },
  { label: 'Mining', path: '/mining' },
  { label: 'Energy', path: '/#where-we-work' },
  { label: 'Healthcare', path: '/ai-healthcare' },
];

const SERVICES = [
  { label: 'Digital Transformation', path: '/services' },
  { label: 'Data & AI', path: '/ai-healthcare' },
  { label: 'Enterprise Platforms', path: '/enterprise-platforms' },
  { label: 'Cloud Infrastructure', path: '/cloud-services' },
  { label: 'Mining Telemetry', path: '/mining' },
];

const COMPANY = [
  { label: 'Who We Are', path: '/about' },
  { label: 'Clients & Cases', path: '/case-studies' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer__cta">
        <div className="container">
          <div className="footer__cta-inner">
            <div className="footer__cta-text">
              <h2>Digital transformation, powered by AI.</h2>
              <p>25+ years building mission-critical systems for government, education, mining, energy and healthcare.</p>
            </div>
            <div className="footer__cta-actions">
              <Link to="/contact" className="btn btn--white btn--lg">
                Talk to us
                <ArrowRight size={16} />
              </Link>
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
              <h4 className="footer__col-title">Sectors</h4>
              {SECTORS.map((item) => (
                <Link key={item.label} to={item.path} className="footer__link">{item.label}</Link>
              ))}
            </div>

            <div className="footer__links-col">
              <h4 className="footer__col-title">Services</h4>
              {SERVICES.map((item) => (
                <Link key={item.label} to={item.path} className="footer__link">{item.label}</Link>
              ))}
            </div>

            <div className="footer__links-col">
              <h4 className="footer__col-title">Company</h4>
              {COMPANY.map((item) => (
                <Link key={item.path} to={item.path} className="footer__link">{item.label}</Link>
              ))}
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
