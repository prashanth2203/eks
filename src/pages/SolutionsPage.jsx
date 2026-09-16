import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, GraduationCap, Layers, BookOpen, Users, FileText } from 'lucide-react';

const SOLUTIONS = [
  {
    id: 'e-governance',
    icon: <Building2 size={20} />,
    tag: 'State e-Governance',
    title: 'University e-Governance Suite (UMS)',
    desc: 'A turnkey digital governance platform for state-level public universities — automating every academic function from entrance tests to convocation, strictly compliant with UGC, AICTE, and State Government statutory guidelines.',
    image: '/images/editorial/hero_campus.jpg',
    features: [
      'State-wide online admissions & multi-round web counselling',
      'Central Records Branch (CRB) file barcoding — guaranteed 1-hour physical retrieval',
      'Confidential examination system with dummy number masking',
      'Audit-ready double-entry finance (CAG compliant)',
      '6th/7th Pay Commission HRMS with biometric attendance',
      'PhD candidate lifecycle management & guide allocation',
    ],
    deployments: ['University of Mysore', 'Telangana State ITI (DET)', 'State Secretariat CRB (GAD)'],
  },
  {
    id: 'college',
    icon: <GraduationCap size={20} />,
    tag: 'Higher Education',
    title: 'College & Autonomous Institute ERP (CMS)',
    desc: 'Purpose-built for autonomous engineering colleges, deemed universities, and multi-branch institute groups requiring agile digital transformation with student-facing portals and parent engagement.',
    image: '/images/editorial/college_classroom.jpg',
    features: [
      'Choice Based Credit System (CBCS) — hard, soft & open elective automation',
      'Examination evaluation portal with double-blind masked grading',
      'Smart Card campus — RFID library, turnstiles, fee payment',
      'Student Information System (SIS) with real-time dashboards',
      'Automated hall ticket, seating plan & attendance generation',
      'NAD and DigiLocker compatibility for digital credentials',
    ],
    deployments: ['Kadi Sarva Vishwavidyalaya (KSV)', 'GNITS Hyderabad', 'Multiple autonomous colleges'],
  },
  {
    id: 'school',
    icon: <BookOpen size={20} />,
    tag: 'K-12 Education',
    title: 'K-12 School Management Suite (SMS)',
    desc: 'Complete school ERP for CBSE, ICSE, and state board schools covering admissions, timetable, attendance, fee collection, transport, and parent communication.',
    image: '/images/education-erp-1.jpg',
    features: [
      'Multi-branch school network management from single admin',
      'Parent mobile app — attendance, homework, report cards',
      'GPS bus telemetry with real-time tracking dashboard',
      'Online fee collection with multi-bank payment reconciliation',
      'Automated SMS/email notification gateway',
      'Student performance analytics with comparative reporting',
    ],
    deployments: ['Multi-branch school networks across AP & Telangana'],
  },
];

export default function SolutionsPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const idx = SOLUTIONS.findIndex(s => s.id === id);
      if (idx >= 0) {
        setActiveTab(idx);
        setTimeout(() => {
          document.getElementById('solutions-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  const current = SOLUTIONS[activeTab];

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Solutions</div>
          <h1 className="page-hero__title">Purpose-built platforms for every institution type.</h1>
          <p className="page-hero__desc">
            Not one-size-fits-all. Three specialized suites engineered around statutory compliance and institutional scale.
          </p>
        </div>
      </section>

      {/* Tab selector */}
      <section className="section section--beige" id="solutions-detail">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 48 }}>
            {SOLUTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '16px 20px',
                  background: activeTab === i ? 'var(--white)' : 'transparent',
                  border: `1.5px solid ${activeTab === i ? 'var(--ink)' : 'var(--stone-200)'}`,
                  borderRadius: 'var(--r-lg)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease',
                }}
              >
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 40, height: 40, borderRadius: 'var(--r-md)',
                  background: activeTab === i ? 'var(--ink)' : 'var(--stone-100)',
                  color: activeTab === i ? '#fff' : 'var(--ink-muted)',
                  flexShrink: 0,
                }}>
                  {s.icon}
                </span>
                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ember)' }}>{s.tag}</span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginTop: 2 }}>{s.title.split('(')[0].trim()}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, animation: 'fadeInUp 0.4s cubic-bezier(0.16,1,0.3,1)' }} key={activeTab}>
            <div>
              <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '16/10' }}>
                <img src={current.image} alt={current.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 16, padding: '16px 20px', background: 'var(--white)', border: '1px solid var(--stone-200)', borderRadius: 'var(--r-md)' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 8 }}>Deployments</span>
                {current.deployments.map((d, i) => (
                  <span key={i} style={{ display: 'block', fontSize: '0.875rem', color: 'var(--ink-secondary)', padding: '4px 0' }}>• {d}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="chip chip--ember">{current.tag}</div>
              <h3 style={{ fontSize: 'clamp(1.375rem, 2vw, 1.625rem)', margin: '12px 0 16px' }}>{current.title}</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 24 }}>{current.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {current.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'var(--ink-secondary)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--ember)', flexShrink: 0, marginTop: 2 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12 }}>
                <Link to="/enquiry" className="btn btn--primary">
                  Request Demo <ArrowRight size={14} />
                </Link>
                <Link to="/case-studies" className="btn btn--outline">
                  Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
