import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';

const OPENINGS = [
  { title: 'Senior Backend / Java Engineer', dept: 'Engineering', location: 'Hyderabad', type: 'Full-time', desc: 'Build and maintain high-concurrency Java and microservices architectures powering mission-critical platforms.' },
  { title: 'Data & AI Pipeline Engineer', dept: 'Data & AI', location: 'Hyderabad', type: 'Full-time', desc: 'Engineer robust data ingestion pipelines, FHIR healthcare integrations, and operational telemetry models.' },
  { title: 'Cloud & Infrastructure Architect', dept: 'Infrastructure', location: 'Hyderabad', type: 'Full-time', desc: 'Architect resilient multi-region cloud and hybrid deployments built for extreme throughput and zero downtime.' },
  { title: 'UI/UX Systems Designer', dept: 'Design', location: 'Hyderabad', type: 'Full-time', desc: 'Design clean, high-density interfaces for complex operational and institutional administrative workflows.' },
  { title: 'Enterprise Solutions Lead', dept: 'Client Solutions', location: 'Hyderabad / Hybrid', type: 'Full-time', desc: 'Partner with engineering leadership across public directorates, mining operations, and enterprise clients.' },
];

export default function CareersPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Careers</div>
          <h1 className="page-hero__title">Build mission-critical systems at enterprise scale.</h1>
          <p className="page-hero__desc">
            Join an engineering team building digital transformation and AI solutions across government, mining, energy, healthcare, and education.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56 }}>
            <div>
              <div className="section-eyebrow">Why Eksper</div>
              <h2 className="section-title">Real impact, real scale</h2>
              <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 24 }}>
                When you join Eksper Technologies, your code powers production systems under real-world operational pressure — from state-wide public governance and automated mining telemetry to high-availability energy platforms and clinical AI ingestion.
              </p>
              <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                We're a team of systems engineers, data architects, and designers based in Hyderabad, solving engineering problems that genuinely matter.
              </p>

              <div style={{ marginTop: 32, padding: 24, background: 'var(--stone-50)', borderRadius: 'var(--r-lg)' }}>
                <h4 style={{ marginBottom: 12 }}>Can't find your role?</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', marginBottom: 16 }}>
                  Send your resume to <a href="mailto:careers@ekspertech.com" style={{ color: 'var(--ember)', textDecoration: 'none', fontWeight: 600 }}>careers@ekspertech.com</a>
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: 24 }}>Open Positions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {OPENINGS.map((job, i) => (
                  <div key={i} style={{
                    padding: '24px 28px',
                    background: 'var(--white)',
                    border: '1px solid var(--stone-200)',
                    borderRadius: 'var(--r-lg)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--stone-300)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--stone-200)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                      <div>
                        <h4 style={{ marginBottom: 4 }}>{job.title}</h4>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', marginBottom: 8 }}>{job.desc}</p>
                        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--ink-faint)' }}>
                            <Briefcase size={12} /> {job.dept}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--ink-faint)' }}>
                            <MapPin size={12} /> {job.location}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: 'var(--ink-faint)' }}>
                            <Clock size={12} /> {job.type}
                          </span>
                        </div>
                      </div>
                      <a href={`mailto:careers@ekspertech.com?subject=Application: ${job.title}`} className="btn btn--outline btn--sm" style={{ flexShrink: 0, marginTop: 4 }}>
                        Apply
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
