import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const SOLUTIONS = [
  { label: 'University e-Governance', path: '/solutions#e-governance' },
  { label: 'College & Autonomous ERP', path: '/solutions#college' },
  { label: 'K-12 School Management', path: '/solutions#school' },
  { label: 'Examination System', path: '/solutions#examination' },
  { label: 'CBCS Engine', path: '/solutions#cbcs' },
];

const SERVICES = [
  { label: 'Cloud Infrastructure', path: '/cloud-services' },
  { label: 'AI Healthcare', path: '/ai-healthcare' },
  { label: 'Data Migration', path: '/services#sw-int-mig' },
  { label: 'Tamper-Proof Certificates', path: '/services#temper_proof' },
  { label: 'Mining Telemetry', path: '/mining' },
];

const COMPANY = [
  { label: 'About Us', path: '/about' },
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
              <h2>Ready to modernize your institution?</h2>
              <p>Schedule a consultation with our enterprise solutions team.</p>
            </div>
            <div className="footer__cta-actions">
              <Link to="/enquiry" className="btn btn--white btn--lg">
                Request Demo
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
                Enterprise campus management & e-Governance infrastructure for India's premier institutions since 2000.
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
                  <a href="mailto:support@ekspertechnologies.in">support@ekspertechnologies.in</a>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer__links-col">
              <h4 className="footer__col-title">Solutions</h4>
              {SOLUTIONS.map((item) => (
                <Link key={item.path} to={item.path} className="footer__link">{item.label}</Link>
              ))}
            </div>

            <div className="footer__links-col">
              <h4 className="footer__col-title">Services</h4>
              {SERVICES.map((item) => (
                <Link key={item.path} to={item.path} className="footer__link">{item.label}</Link>
              ))}
            </div>

            <div className="footer__links-col">
              <h4 className="footer__col-title">Company</h4>
              {COMPANY.map((item) => (
                <Link key={item.path} to={item.path} className="footer__link">{item.label}</Link>
              ))}
              <a href="/downloads" className="footer__link">
                Downloads <ArrowUpRight size={12} />
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
