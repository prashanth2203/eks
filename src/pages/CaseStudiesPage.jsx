import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CaseStudiesPage.css';

const FEATURED_CASES = [
  {
    id: 'nmdc',
    client: 'NMDC',
    sector: 'Mining & Public Sector',
    problem: 'Production dispatch, weighbridge capture, and statutory filings operated through disconnected spreadsheets and manual logs.',
    whatChanged: 'Centralized telemetry, automated weighbridge data acquisition, and real-time statutory reporting across production units.',
    highlights: ['Automated weighbridge integration', 'Digital dispatch pass system', 'Statutory compliance reporting'],
  },
  {
    id: 'greenko',
    client: 'Greenko',
    sector: 'Energy & Utilities',
    problem: 'Operational data from distributed renewable generation assets was fragmented across disparate plant-level systems.',
    whatChanged: 'Unified generation telemetry and asset performance data into a single real-time operational platform.',
    highlights: ['Multi-site asset telemetry', 'Real-time performance dashboards', 'Operational data consolidation'],
  },
  {
    id: 'us-healthcare',
    client: 'US Healthcare Engagement',
    sector: 'Healthcare & Clinical AI',
    problem: 'Clinical, EHR, and claims data resided in disconnected systems, delaying risk stratification and care team workflows.',
    whatChanged: 'Built FHIR-compliant ingestion pipelines and automated cohort analytics integrated directly into care management operations.',
    highlights: ['FHIR data ingestion pipelines', 'Automated cohort risk tracking', 'Care team operational integration'],
  },
];

const PUBLIC_SECTOR_CASES = [
  {
    id: 'uom',
    client: 'University of Mysore',
    sector: 'State Institutional Governance & Examination Security',
    problem: 'Administrative operations across 70+ postgraduate departments and 100+ affiliated centres operated through disjointed manual paperwork, causing weeks-long bottlenecks in admissions, examination processing, and records retrieval.',
    whatChanged: 'Deployed centralized institutional governance suite unifying lifecycle management, barcode-driven confidential examination processing with masked dummy grading, and CAG-audit-ready double-entry financial accounting.',
    highlights: ['70+ PG Departments', '100+ Affiliated Centres', 'Barcode Dummy Number Masking', 'CAG Audit Compliance'],
  },
  {
    id: 'state-det',
    client: 'State Technical Education & Polytechnic Directorate (DET)',
    sector: 'Statewide Admissions & Web Counselling',
    problem: 'Multi-round statewide admission counselling across 100+ polytechnic institutions suffered from server crashes and verification backlogs during peak candidate seat allocation cycles.',
    whatChanged: 'Engineered a high-throughput web counselling engine handling simultaneous statewide candidate verification, rank-based choice filling, and real-time seat allocations under statutory reservation quotas.',
    highlights: ['50,000+ Simultaneous Allocations', 'Multi-Round Web Counselling', 'Statutory Quota Validation', 'Zero-Downtime Peak Load'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="case-studies-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Selected Work</div>
          <h1 className="page-hero__title">Mission-critical delivery track record.</h1>
          <p className="page-hero__desc">
            Two lines each — the problem, what changed. Real systems operating in production across mining, energy, healthcare, and government.
          </p>
        </div>
      </section>

      {/* Featured 3 Cases */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 32 }}>Primary Engagements</div>
          <div className="featured-cases-stack" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {FEATURED_CASES.map((c) => (
              <div
                key={c.id}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--stone-200)',
                  borderRadius: 'var(--r-lg)',
                  padding: 'clamp(24px, 4vw, 36px)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--stone-100)' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ember)', marginBottom: 4 }}>
                      {c.sector}
                    </span>
                    <h2 style={{ fontSize: '1.75rem', margin: 0 }}>{c.client}</h2>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 24 }}>
                  <div style={{ background: 'var(--stone-50)', padding: '20px', borderRadius: 'var(--r-md)' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-faint)', marginBottom: 8 }}>
                      The Problem
                    </span>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {c.problem}
                    </p>
                  </div>

                  <div style={{ background: 'var(--stone-50)', padding: '20px', borderRadius: 'var(--r-md)', borderLeft: '3px solid var(--ember)' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ember)', marginBottom: 8 }}>
                      What Changed
                    </span>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--ink)', lineHeight: 1.6, margin: 0 }}>
                      {c.whatChanged}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {c.highlights.map((h, i) => (
                    <span key={i} style={{ fontSize: '0.8125rem', padding: '6px 14px', background: 'var(--stone-100)', borderRadius: 'var(--r-full)', color: 'var(--ink-secondary)', fontWeight: 500 }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Sector & Institutional Section */}
      <section className="section section--stone" id="public-sector">
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 12 }}>Public Sector Delivery</div>
          <h2 className="section-title" style={{ marginBottom: 12 }}>Public Sector & Institutional Platforms</h2>
          <p className="section-subtitle" style={{ maxWidth: 760, marginBottom: 36 }}>
            High-concurrency web counselling engines, confidential examination security, and state-wide administrative databases delivered at institutional scale.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {PUBLIC_SECTOR_CASES.map((h) => (
              <div
                key={h.id}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--stone-200)',
                  borderRadius: 'var(--r-lg)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px -4px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--stone-100)' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--ember)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      marginBottom: 6,
                    }}
                  >
                    {h.sector}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--ink)' }}>
                    {h.client}
                  </h3>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--ink-faint)',
                      marginBottom: 4,
                    }}
                  >
                    The Problem
                  </span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {h.problem}
                  </p>
                </div>

                <div style={{ marginBottom: 20, borderLeft: '2.5px solid var(--ember)', paddingLeft: 12 }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--ember)',
                      marginBottom: 4,
                    }}
                  >
                    What Changed
                  </span>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.6, margin: 0 }}>
                    {h.whatChanged}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto', paddingTop: 12 }}>
                  {h.highlights.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        background: 'var(--stone-100)',
                        borderRadius: 'var(--r-full)',
                        color: 'var(--ink-secondary)',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 className="section-title">Discuss your platform requirements</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Speak directly with our engineering leadership about your systems and operational goals.
          </p>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Talk to us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
