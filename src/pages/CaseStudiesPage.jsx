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
