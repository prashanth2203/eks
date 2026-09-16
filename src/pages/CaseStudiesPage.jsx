import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import './CaseStudiesPage.css';

const CATEGORIES = [
  {
    title: 'State Universities & Government',
    clients: [
      { name: 'University of Mysore', logo: '/images/editorial/mysore_university.jpg' },
      { name: 'Mangalore University', logo: '/images/mangalore_university_logo.png' },
      { name: 'Telangana State ITI (DET)', logo: '/images/iti_logo.png' },
      { name: 'State Secretariat CRB (GAD)', logo: '/images/gad-logo.jpg' },
    ],
  },
  {
    title: 'Health Sciences & Medical',
    clients: [
      { name: 'Dr. NTR University of Health Sciences', logo: '/images/ntr-university-logo.jpg' },
    ],
  },
  {
    title: 'Autonomous Colleges & Universities',
    clients: [
      { name: 'Kadi Sarva Vishwavidyalaya (KSV)', logo: '/images/kadi-client.jpg' },
      { name: 'GNITS Hyderabad', logo: '/images/gnits_logo.png' },
    ],
  },
  {
    title: 'Industry & Enterprise',
    clients: [
      { name: 'Ganges International', logo: '/images/ganges-client.jpg' },
    ],
  },
];

const CASES = [
  {
    id: 'uom',
    institution: 'University of Mysore',
    logo: '/images/editorial/mysore_university.jpg',
    location: 'Mysore, Karnataka',
    type: 'State University e-Governance',
    challenge: 'Unifying 76 postgraduate departments, 120 affiliated colleges, and 26,000+ students under a single digital governance platform.',
    solution: 'Deployed a comprehensive university management system covering admissions, examinations, CBCS, PhD management, finance, and Central Records Branch (CRB) file tracking.',
    outcomes: [
      'Single centralized database across all departments and colleges',
      'Automated confidential examinations with dummy number masking',
      'CRB barcode file tracking — guaranteed 1-hour retrieval',
      'Fully compliant with UGC and state government audit requirements',
    ],
    stats: [
      { value: '26,000+', label: 'Students' },
      { value: '76', label: 'PG Departments' },
      { value: '120', label: 'Affiliated Colleges' },
    ],
  },
  {
    id: 'mu',
    institution: 'Mangalore University',
    logo: '/images/mangalore_university_logo.png',
    location: 'Mangalore, Karnataka',
    type: 'University Web Portal',
    challenge: 'Building a comprehensive web portal for university-wide academic administration and student services.',
    solution: 'End-to-end web portal covering application workflows, admission processing, and academic management across all postgraduate courses.',
    outcomes: [
      'Complete digital application and admission workflow',
      'Multi-department course management system',
      'Automated notifications and status tracking',
      'Compliant with all academic guidelines and regulations',
    ],
    stats: [
      { value: '40+', label: 'Departments' },
      { value: '15,000+', label: 'Students' },
      { value: '100%', label: 'Digital Workflow' },
    ],
  },
  {
    id: 'ksv',
    institution: 'Kadi Sarva Vishwavidyalaya',
    logo: '/images/kadi-client.jpg',
    location: 'Gujarat',
    type: 'Autonomous University ERP',
    challenge: 'Automating 250+ examination sessions, inventory management, and campus operations for an autonomous university.',
    solution: 'Comprehensive ERP with examination scheduling, asset inventory tracking, student information system, and automated reporting.',
    outcomes: [
      '250+ automated exam schedules per academic cycle',
      'Complete asset and inventory management',
      'Real-time student performance dashboards',
      'Integrated finance and fee collection',
    ],
    stats: [
      { value: '250+', label: 'Exam Sessions' },
      { value: '100%', label: 'Automated' },
      { value: '5x', label: 'Faster Processing' },
    ],
  },
  {
    id: 'gnits',
    institution: 'GNITS Hyderabad',
    logo: '/images/gnits_logo.png',
    location: 'Hyderabad, Telangana',
    type: 'Autonomous College Management',
    challenge: 'Managing autonomous engineering college operations with smart card campus integration.',
    solution: 'Deployed college management suite with smart card campus, RFID integration, autonomous elective engines, and student portals.',
    outcomes: [
      'Smart card enabled campus with RFID library and turnstiles',
      'Autonomous examination and grading system',
      'Student and parent mobile portals',
      'Integrated fee payment gateway',
    ],
    stats: [
      { value: '5,000+', label: 'Students' },
      { value: 'RFID', label: 'Smart Campus' },
      { value: '100%', label: 'Autonomous' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Clients & Success Stories</div>
          <h1 className="page-hero__title">Trusted by India's premier enterprises.</h1>
          <p className="page-hero__desc">
            Discover the state governments, universities, and private enterprises that rely on our mission-critical software.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 40 }}>Our Client Network</div>
          {CATEGORIES.map((cat, i) => (
            <div key={i} style={{ marginBottom: i < CATEGORIES.length - 1 ? 56 : 0 }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 20 }}>{cat.title}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                {cat.clients.map((c, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px',
                    background: 'var(--stone-50)', borderRadius: 'var(--r-lg)',
                    border: '1px solid transparent', transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--stone-200)'; e.currentTarget.style.background = 'var(--white)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'var(--stone-50)'; }}
                  >
                    <img src={c.logo} alt={c.name} style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: 'var(--r-sm)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)' }}>{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="section section--beige">
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 40 }}>Detailed Case Studies</div>
          <div className="cases__list">
            {CASES.map((c, i) => (
              <article key={c.id} id={c.id} className="case-card">
                <div className="case-card__header">
                  <img src={c.logo} alt={c.institution} className="case-card__logo" />
                  <div>
                    <h3 className="case-card__institution">{c.institution}</h3>
                    <span className="case-card__meta">{c.location} · {c.type}</span>
                  </div>
                </div>

                <div className="case-card__body">
                  <div className="case-card__section">
                    <h4>Challenge</h4>
                    <p>{c.challenge}</p>
                  </div>
                  <div className="case-card__section">
                    <h4>Solution</h4>
                    <p>{c.solution}</p>
                  </div>
                  <div className="case-card__section">
                    <h4>Key Outcomes</h4>
                    <ul className="case-card__outcomes">
                      {c.outcomes.map((o, j) => (
                        <li key={j}>
                          <CheckCircle2 size={14} style={{ color: 'var(--ember)', flexShrink: 0, marginTop: 2 }} />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="case-card__stats">
                  {c.stats.map((s, j) => (
                    <div key={j} className="case-card__stat">
                      <span className="case-card__stat-value">{s.value}</span>
                      <span className="case-card__stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 className="section-title">See it in action</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Schedule a live walkthrough of our platform with your institution's specific requirements.
          </p>
          <Link to="/enquiry" className="btn btn--primary btn--lg">
            Request Demo <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
