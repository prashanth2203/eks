import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const clientStripRef = useRef(null);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v2">
      {/* 1. HERO */}
      <section className="home-hero">
        <div className="container container--narrow">
          <h1 className="home-hero__title">
            Digital transformation, powered by AI.
          </h1>
          <p className="home-hero__sub">
            25+ years building mission-critical systems for government, education, mining, energy and healthcare.
          </p>
          <div className="home-hero__cta">
            <a href="#contact" onClick={scrollToContact} className="btn btn--primary btn--lg">
              Talk to us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Ripple Wave Field (Upper half visible only, no orb) */}
        <div className="hero-ripple-field" aria-hidden="true">
          <div className="ripple-ring"></div>
          <div className="ripple-ring"></div>
          <div className="ripple-ring"></div>
          <div className="ripple-ring"></div>
        </div>
      </section>

      {/* 2. CLIENT STRIP (Logos only, no heading, no caption) */}
      <section className="client-strip-section" aria-label="Clients">
        <div className="container">
          <div className="client-strip" ref={clientStripRef}>
            {/* NMDC */}
            <div className="client-strip__item" title="NMDC">
              <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                <text x="38" y="25" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="0.06em">NMDC</text>
              </svg>
            </div>

            {/* Greenko */}
            <div className="client-strip__item" title="Greenko">
              <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="19" r="12" fill="#059669" fillOpacity="0.15" />
                <path d="M12 24C12 18 16 13 22 13C22 19 18 24 12 24Z" fill="#059669" />
                <path d="M14 20C17 18 19 16 20 14" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.02em">greenko</text>
              </svg>
            </div>

            {/* Education Client: University of Mysore */}
            <div className="client-strip__item" title="University of Mysore">
              <div className="client-logo-combo">
                <img src="/images/Mysore_University_logo.png" alt="University of Mysore" className="client-logo-img" />
                <span className="client-logo-text">University of Mysore</span>
              </div>
            </div>

            {/* Interwell Health */}
            <div className="client-strip__item" title="Interwell Health">
              <svg className="client-logo" viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="19" r="11" stroke="#0284C7" strokeWidth="2.5" />
                <circle cx="20" cy="19" r="7" stroke="#0D9488" strokeWidth="2" />
                <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="600" fill="currentColor" letterSpacing="-0.01em">
                  interwell <tspan fontWeight="400" fill="#0284C7">health</tspan>
                </text>
              </svg>
            </div>

            {/* Geisinger */}
            <div className="client-strip__item" title="Geisinger">
              <svg className="client-logo" viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10H16M11 10V28M8 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <text x="24" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">Geisinger</text>
              </svg>
            </div>

            {/* CVS Health */}
            <div className="client-strip__item" title="CVS Health">
              <svg className="client-logo" viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14L10 20L16 14L12 10L10 12L8 10L4 14Z" fill="#CC0000" />
                <text x="22" y="23" fontFamily="'Inter', sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="-0.02em">
                  CVS<tspan fontWeight="400">Health</tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="section section--stone" id="what-we-do">
        <div className="container">
          <h2 className="section-title">What we do</h2>
          <div className="four-cards-grid">
            <div className="simple-card">
              <h3 className="simple-card__title">Digital Transformation</h3>
              <p className="simple-card__line">Modernising legacy systems into platforms that work.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Data & AI</h3>
              <p className="simple-card__line">Data platforms, analytics and AI built into operations, not bolted on.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Enterprise Platforms</h3>
              <p className="simple-card__line">ERP, e-Governance and campus management at institutional scale.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Run & Support</h3>
              <p className="simple-card__line">We stay on after go-live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHERE WE WORK */}
      <section className="section section--warm" id="where-we-work">
        <div className="container">
          <h2 className="section-title">Where we work</h2>
          <div className="five-cards-grid">
            <div className="simple-card">
              <h3 className="simple-card__title">Government & e-Governance</h3>
              <p className="simple-card__line">State departments and public institutions.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Education</h3>
              <p className="simple-card__line">ERP and campus management for schools, colleges and institutions.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Mining</h3>
              <p className="simple-card__line">NMDC and the public-sector mining ecosystem.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Energy</h3>
              <p className="simple-card__line">Technology platforms and infrastructure for energy operations.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Healthcare</h3>
              <p className="simple-card__line">Data and AI for US payers and provider organisations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK */}
      <section className="section section--stone" id="selected-work">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Selected work</h2>
          </div>

          <div className="work-list">
            <article className="work-row">
              <div className="work-client">
                <span className="work-index">01</span>
                <div>
                  <strong className="work-name">NMDC</strong>
                  <span className="work-sector">Mining & Public Sector</span>
                </div>
              </div>
              <div className="work-copy">
                <p>
                  <b className="work-label">Problem</b> — Production dispatch, weighbridge capture, and statutory filings operated through disconnected spreadsheets and manual logs.
                </p>
                <p>
                  <b className="work-label work-label--accent">What changed</b> — Centralized telemetry, automated weighbridge data acquisition, and real-time statutory reporting across production units.
                </p>
              </div>
            </article>

            <article className="work-row">
              <div className="work-client">
                <span className="work-index">02</span>
                <div>
                  <strong className="work-name">Greenko</strong>
                  <span className="work-sector">Energy & Utilities</span>
                </div>
              </div>
              <div className="work-copy">
                <p>
                  <b className="work-label">Problem</b> — Operational data from distributed renewable generation assets was fragmented across disparate plant-level systems.
                </p>
                <p>
                  <b className="work-label work-label--accent">What changed</b> — Unified generation telemetry and asset performance data into a single real-time operational platform.
                </p>
              </div>
            </article>

            <article className="work-row">
              <div className="work-client">
                <span className="work-index">03</span>
                <div>
                  <strong className="work-name">US Healthcare</strong>
                  <span className="work-sector">Healthcare & Clinical AI</span>
                </div>
              </div>
              <div className="work-copy">
                <p>
                  <b className="work-label">Problem</b> — Clinical, EHR, and claims data resided in disconnected systems, delaying risk stratification and care team workflows.
                </p>
                <p>
                  <b className="work-label work-label--accent">What changed</b> — Built FHIR-compliant ingestion pipelines and automated cohort analytics integrated directly into care management operations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container container--narrow">
          <div style={{ textAlign: 'center', padding: '24px 0 36px' }}>
            <h2 className="contact-title" style={{ marginBottom: 20 }}>Talk to us.</h2>
            <a
              href="mailto:info@ekspertech.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 600,
                color: 'var(--ink)',
                textDecoration: 'underline',
                textUnderlineOffset: '6px',
                transition: 'color var(--t-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ember)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
            >
              info@ekspertech.com
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
