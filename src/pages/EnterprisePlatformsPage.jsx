import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Building2, ShieldCheck, Database, FileCheck, Users, Award } from 'lucide-react';

const DEPLOYMENT_TYPES = [
  {
    icon: <GraduationCap size={24} />,
    title: 'Institutional Governance & Examination Security Platforms',
    subtitle: 'Comprehensive governance architectures for large-scale institutional administration',
    desc: 'End-to-end digital platforms for large public institutions handling tens of thousands of candidates, multi-faculty departments, and confidential evaluations.',
    capabilities: [
      'Statewide online admissions and automated multi-channel merit list generation',
      'Choice Based Credit System (CBCS) supporting core, elective, and interdisciplinary tracks',
      'Confidential examination management with barcode-based dummy number masking',
      'Double-blind evaluation workflows and automated tabulator score reconciliation',
      'Student lifecycle management, fee collection gateways, and digital credentialing (NAD / DigiLocker)',
      'Ph.D. scholar lifecycle tracking, research guide allocation, and thesis defense milestones',
    ],
    deployments: [
      'University of Mysore (70+ PG departments, 100+ affiliated centres)',
      'Kadi Sarva Vishwavidyalaya (KSV) & constituent institutions',
      'GNITS Hyderabad & autonomous institutions',
    ],
  },
  {
    icon: <Building2 size={24} />,
    title: 'State e-Governance & Public Administration Systems',
    subtitle: 'Directorate-level high-throughput admissions and statutory administrative engines',
    desc: 'Large-scale workflow engines engineered for state government departments, directorates, and statutory bodies with strict reservation quotas and regulatory audit mandates.',
    capabilities: [
      'High-throughput web counselling engine handling simultaneous statewide seat allocations',
      'Statutory reservation quota validation (caste, merit, regional, and special categories)',
      'Central Records Branch (CRB) barcoded file management guaranteeing rapid physical retrieval',
      'Real-time verification center dashboards and candidate document authentication',
      'Audit-ready audit trails compliant with CAG and State Vigilance guidelines',
    ],
    deployments: [
      'State Technical Education & Polytechnic Directorate (DET)',
      'State Secretariat Central Records Branch (GAD)',
    ],
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Enterprise Operational & Financial Backbones',
    subtitle: 'Single-database architectures unifying accounting, payroll, and asset management',
    desc: 'Mission-critical institutional operations platforms replacing error-prone spreadsheets with unified, tamper-evident transactional backbones.',
    capabilities: [
      'CAG-compliant double-entry fund accounting and multi-budget head tracking',
      'Pay commission salary automation with biometric attendance hardware integration',
      'Multi-department procurement, vendor management, and store inventory ledgering',
      'Role-based granular access control (RBAC) with complete cryptographic logging',
    ],
    deployments: [
      'State institutional administrative finance wings',
      'Multi-branch organizational networks',
    ],
  },
];

const ARCHITECTURE_PILLARS = [
  {
    icon: <Database size={20} />,
    title: 'Single-Database Architecture',
    desc: 'Eliminates data silos across admissions, academic records, finance, and exams. A unified institutional ledger ensures absolute consistency.',
  },
  {
    icon: <FileCheck size={20} />,
    title: 'Statutory & Audit Compliance',
    desc: 'Built ground-up around state regulations, public governance councils, and CAG double-entry standards. Ready for statutory review.',
  },
  {
    icon: <Users size={20} />,
    title: 'High-Concurrency Scaling',
    desc: 'Tested to sustain extreme traffic surges during state admission counselling rounds and statewide result publications without downtime.',
  },
  {
    icon: <Award size={20} />,
    title: 'Confidential Exam Security',
    desc: 'Barcode dummy indexing and masked evaluation workflows guarantee complete integrity from evaluation centers to degree conferral.',
  },
];

export default function EnterprisePlatformsPage() {
  return (
    <div className="enterprise-platforms-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Enterprise Platforms</div>
          <h1 className="page-hero__title">High-concurrency institutional and governance platforms.</h1>
          <p className="page-hero__desc">
            25+ years engineering unified administrative, examination, and state-level workflow platforms for public directorates and large institutions.
          </p>
        </div>
      </section>

      {/* Proven Deployment Types */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Deployment Architectures</div>
          <h2 className="section-title">Engineered for complex institutional scale</h2>
          <p className="section-subtitle">
            Three specialized platform architectures battle-tested across state directorates and large public institutions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 40 }}>
            {DEPLOYMENT_TYPES.map((type, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--stone-200)',
                  borderRadius: 'var(--r-lg)',
                  padding: 'clamp(28px, 4vw, 44px)',
                  boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--r-md)',
                      background: 'var(--stone-100)',
                      color: 'var(--ember)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {type.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', margin: 0 }}>{type.title}</h3>
                    <span style={{ fontSize: '0.875rem', color: 'var(--ink-muted)' }}>{type.subtitle}</span>
                  </div>
                </div>

                <p style={{ fontSize: '1rem', color: 'var(--ink-secondary)', lineHeight: 1.65, marginBottom: 24 }}>
                  {type.desc}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 28 }}>
                  <div style={{ background: 'var(--stone-50)', padding: '24px', borderRadius: 'var(--r-md)' }}>
                    <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-faint)', marginBottom: 14 }}>
                      Key Capabilities
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {type.capabilities.map((cap, i) => (
                        <li key={i} style={{ fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <span style={{ color: 'var(--ember)', fontWeight: 700 }}>•</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ background: 'var(--stone-50)', padding: '24px', borderRadius: 'var(--r-md)', display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ember)', marginBottom: 14 }}>
                      Proven Deployments & Scale
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {type.deployments.map((dep, i) => (
                        <li key={i} style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink-secondary)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <span style={{ color: 'var(--ink-faint)' }}>✓</span>
                          <span>{dep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Pillars */}
      <section className="section section--stone">
        <div className="container">
          <div className="section-eyebrow">Architecture</div>
          <h2 className="section-title">Built for institutional resilience</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginTop: 36 }}>
            {ARCHITECTURE_PILLARS.map((p, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--stone-200)',
                  borderRadius: 'var(--r-md)',
                  padding: 24,
                }}
              >
                <div style={{ color: 'var(--ember)', marginBottom: 12 }}>{p.icon}</div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discuss Requirements CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <h2 className="section-title">Modernize your institutional infrastructure</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Speak with our systems architects about deploying scalable governance, examination security, or administrative solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Talk to us <ArrowRight size={16} />
            </Link>
            <Link to="/case-studies" className="btn btn--outline btn--lg">
              Explore Track Record
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
