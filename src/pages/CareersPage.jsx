import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';

const OPENINGS = [
  { title: 'Senior Java Developer', dept: 'Engineering', location: 'Hyderabad', type: 'Full-time', desc: 'Build and maintain enterprise Java/Spring applications powering institutional ERP platforms.' },
  { title: 'Business Analyst', dept: 'Product', location: 'Hyderabad', type: 'Full-time', desc: 'Bridge institutional requirements with technical implementation for university ERP deployments.' },
  { title: 'UI/UX Designer', dept: 'Design', location: 'Hyderabad', type: 'Full-time', desc: 'Design intuitive interfaces for complex enterprise campus management workflows.' },
  { title: 'Software Tester / QA', dept: 'Quality', location: 'Hyderabad', type: 'Full-time', desc: 'Ensure quality and reliability of mission-critical educational software platforms.' },
  { title: 'Business Development Executive', dept: 'Sales', location: 'Hyderabad / Remote', type: 'Full-time', desc: 'Drive enterprise sales for ERP and e-Governance solutions across universities and government bodies.' },
];

export default function CareersPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Careers</div>
          <h1 className="page-hero__title">Build the infrastructure that powers education.</h1>
          <p className="page-hero__desc">
            Join a team that's transforming how India's leading universities and institutions operate.
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
                When you join Eksper Technologies, your code doesn't just ship to a staging server — it powers university admissions for thousands of students, manages examination integrity for entire states, and helps institutions modernize decades-old processes.
              </p>
              <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                We're a team of engineers, designers, and domain experts based in Hyderabad, working on problems that genuinely matter for Indian higher education.
              </p>

              <div style={{ marginTop: 32, padding: 24, background: 'var(--stone-50)', borderRadius: 'var(--r-lg)' }}>
                <h4 style={{ marginBottom: 12 }}>Can't find your role?</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', marginBottom: 16 }}>
                  Send your resume to <a href="mailto:careers@ekspertechnologies.in" style={{ color: 'var(--ember)', textDecoration: 'none', fontWeight: 600 }}>careers@ekspertechnologies.in</a>
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
                      <a href={`mailto:careers@ekspertechnologies.in?subject=Application: ${job.title}`} className="btn btn--outline btn--sm" style={{ flexShrink: 0, marginTop: 4 }}>
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
