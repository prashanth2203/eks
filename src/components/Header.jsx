import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X, Phone } from 'lucide-react';
import './Header.css';

const NAV_ITEMS = [
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Digital Transformation', desc: 'Modernising legacy systems into platforms that work', path: '/services#digital-transformation' },
      { label: 'Data & AI', desc: 'Data platforms, analytics and operational AI', path: '/ai-healthcare' },
      { label: 'Enterprise Platforms', desc: 'State e-Governance & institutional platforms', path: '/enterprise-platforms' },
      { label: 'Cloud Infrastructure', desc: 'High-concurrency & mission-critical systems', path: '/cloud-services' },
      { label: 'Mining Telemetry', desc: 'Weighbridge capture and dispatch logistics', path: '/mining' },
    ]
  },
  { label: 'Who We Are', path: '/about' },
  { label: 'Clients & Cases', path: '/case-studies' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActive = (item) => {
    if (item.path === '/') return location.pathname === '/';
    return location.pathname.startsWith(item.path);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="Eksper Technologies">
          <img src="/images/logo_text.png" alt="Eksper Technologies" />
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${item.children ? 'nav-item--has-children' : ''}`}
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={item.children ? handleMouseLeave : undefined}
            >
              <Link
                to={item.path}
                className={`nav-link ${isActive(item) ? 'nav-link--active' : ''}`}
              >
                {item.label}
                {item.children && <ChevronDown size={13} className="nav-caret" />}
              </Link>

              {item.children && (
                <div className={`dropdown ${openDropdown === item.label ? 'dropdown--open' : ''}`}>
                  <div className="dropdown__list">
                    {item.children.map((child) => (
                      <Link key={child.path} to={child.path} className="dropdown__item">
                        <span className="dropdown__item-label">{child.label}</span>
                        <span className="dropdown__item-desc">{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="header__actions">
          <a href="tel:04023554455" className="header__phone" title="Call us">
            <Phone size={14} />
            <span>040 2355 4455</span>
          </a>
          <Link to="/contact" className="btn btn--primary btn--sm">
            Talk to us
            <ArrowRight size={14} />
          </Link>
          <button
            type="button"
            className="header__burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__head">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src="/images/logo_text.png" alt="Eksper Technologies" className="mobile-drawer__logo" />
          </Link>
          <button type="button" className="mobile-drawer__close" onClick={() => setMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer__body">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <Link
                to={item.path}
                className="mobile-drawer__link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mobile-drawer__sub">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="mobile-drawer__sub-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/careers" className="mobile-drawer__link" onClick={() => setMobileOpen(false)}>Careers</Link>
        </div>

        <div className="mobile-drawer__foot">
          <Link to="/contact" className="btn btn--primary" style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>
            Talk to us
            <ArrowRight size={14} />
          </Link>
          <p className="mobile-drawer__contact">
            <a href="tel:04023554455">040 2355 4455</a>
            <span> · </span>
            <a href="mailto:info@ekspertech.com">info@ekspertech.com</a>
          </p>
        </div>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
