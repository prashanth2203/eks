import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Database, Cpu, LifeBuoy } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  const milestones = [
    { year: '2000', title: 'Founded in Hyderabad', desc: 'Established with a focus on engineering dependable software platforms for complex institutional environments.' },
    { year: '2005', title: 'Large-Scale Institutional Platforms', desc: 'Deployed multi-department governance and administration systems across large public bodies.' },
    { year: '2010', title: 'State-Wide Public Governance', desc: 'Architected high-throughput state-wide admissions and logistics platforms for public government departments.' },
    { year: '2016', title: 'Mining & Energy Telemetry', desc: 'Expanded into industrial systems, weighbridge automation, and telemetry across public and private sector operations.' },
    { year: '2020', title: 'Healthcare Data & AI Pipelines', desc: 'Engineered clinical data ingestion, FHIR-compliant pipelines, and analytics for US healthcare partners.' },
    { year: '2024+', title: 'Operational AI & Enterprise Modernization', desc: 'Modernizing legacy architectures into cloud-native platforms with embedded operational AI.' },
  ];

  const values = [
    { icon: <Shield size={20} />, title: 'Mission-Critical Delivery', desc: 'Zero tolerance for downtime or compliance failure. Systems engineered for strict statutory and regulatory mandates.' },
    { icon: <Database size={20} />, title: 'Data Built Into Operations', desc: 'Data platforms, analytics, and operational AI integrated into day-to-day operations, not bolted on.' },
    { icon: <Cpu size={20} />, title: 'Scale & Resilience', desc: 'High-concurrency architectures that perform under extreme seasonal loads and mission-critical telemetry.' },
    { icon: <LifeBuoy size={20} />, title: 'Run & Support', desc: 'We do not hand over code and disappear. We stay on after go-live with continuous engineering and operational support.' },
  ];

  return (
    <div className="about">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Who We Are</div>
          <h1 className="page-hero__title">25+ years engineering mission-critical systems.</h1>
          <p className="page-hero__desc">
            Eksper Technologies builds digital transformation and AI solutions for government, education, mining, energy and healthcare.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about__story-layout">
            <div className="about__story-text">
              <div className="section-eyebrow">Our Story</div>
              <h2 className="section-title">Built for institutional reliability</h2>
              <p style={{ marginBottom: 16 }}>
                Founded in 2000 in Hyderabad, Eksper Technologies Limited was built around a singular principle: mission-critical organizations require purpose-engineered systems that work under real-world operational pressure.
              </p>
              <p style={{ marginBottom: 16 }}>
                Over two and a half decades, we have delivered core platforms for state government bodies, premier public institutions, industrial mining leaders like NMDC, renewable energy operators like Greenko, and US healthcare organisations.
              </p>
              <p>
                Whether it is modernising multi-decade legacy platforms, deploying real-time industrial telemetry, or building clinical AI pipelines, we take end-to-end accountability from initial architecture through post-launch operations.
              </p>
            </div>
            <div className="about__story-image">
              <img src="/images/editorial/team_collaboration.jpg" alt="Eksper Technologies team" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--beige">
        <div className="container">
          <div className="section-header--center" style={{ marginBottom: 56 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Engineering Philosophy</div>
            <h2 className="section-title">How we deliver</h2>
            <p className="section-subtitle">
              Platforms that work in production, supported by teams that stay on after go-live.
            </p>
          </div>

          <div className="grid grid--4">
            {values.map((v, i) => (
              <div key={i} className="card card--flat" style={{ textAlign: 'center', padding: '36px 24px' }}>
                <div className="about__value-icon">{v.icon}</div>
                <h4 style={{ margin: '16px 0 8px' }}>{v.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container container--narrow">
          <div className="section-header--center" style={{ marginBottom: 56 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Our Journey</div>
            <h2 className="section-title">25+ years of delivery milestones</h2>
          </div>

          <div className="about__timeline">
            {milestones.map((m, i) => (
              <div key={i} className="about__timeline-item">
                <span className="about__timeline-year">{m.year}</span>
                <div className="about__timeline-content">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section section--dark">
        <div className="container">
          <div className="about__tech-layout">
            <div>
              <div className="section-eyebrow" style={{ color: 'var(--stone-300)' }}>Platform Architecture</div>
              <h2 className="section-title">Enterprise technology foundation</h2>
              <p className="section-subtitle" style={{ color: 'var(--stone-300)', marginBottom: 32 }}>
                Built on proven enterprise frameworks with security, high availability, and auditability at every layer.
              </p>

              <div className="about__tech-list">
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>Java Enterprise, Spring Framework, and resilient microservices</span>
                </div>
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>Secure persistence with encrypted audit trails and statutory compliance</span>
                </div>
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>Multi-region AWS & Azure cloud infrastructure with auto-scaling</span>
                </div>
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>Operational telemetry, weighbridge hardware integration & IoT gateways</span>
                </div>
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>ISO 9001:2015 certified engineering and quality delivery processes</span>
                </div>
              </div>
            </div>

            <div className="about__tech-visual">
              <img src="/images/editorial/platform_dashboard.jpg" alt="Enterprise platform" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <h2 className="section-title">Work with us</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Connect with our leadership and engineering teams to discuss your systems and roadmap.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--primary btn--lg">
                Talk to us <ArrowRight size={14} />
              </Link>
              <Link to="/careers" className="btn btn--outline btn--lg">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
