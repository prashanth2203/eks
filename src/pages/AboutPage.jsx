import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Award, Globe, Calendar, Database, Shield, Building2 } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  const milestones = [
    { year: '2000', title: 'Founded in Hyderabad', desc: 'Eksper Technologies established with a vision to digitize Indian higher education administration.' },
    { year: '2005', title: 'First University ERP', desc: 'Deployed comprehensive university management system for University of Mysore — 76 PG departments.' },
    { year: '2010', title: 'State-Wide Governance', desc: 'Scaled to state-wide ITI admission counselling for Telangana Government (DET).' },
    { year: '2015', title: 'AI Research Lab', desc: 'Launched clinical AI research division for medical imaging diagnostics and EHR indexing.' },
    { year: '2020', title: 'Cloud & Modern Stack', desc: 'Migrated all platforms to cloud-native architecture supporting 500,000+ concurrent users.' },
    { year: '2024', title: 'CBCS & National Framework', desc: 'Full National Academic Depository (NAD) and DigiLocker integration across all campus modules.' },
  ];

  const values = [
    { icon: <Shield size={20} />, title: 'Statutory Compliance', desc: 'Every module is architected around UGC, AICTE, and state government statutory requirements — not retrofitted.' },
    { icon: <Database size={20} />, title: 'Single Database Architecture', desc: 'No data silos. One centralized database powers every campus function from admissions to audit.' },
    { icon: <Users size={20} />, title: 'Domain Expertise', desc: '24+ years of deep institutional knowledge — not generic enterprise software adapted for education.' },
    { icon: <Globe size={20} />, title: 'Pan-India Deployments', desc: 'Proven across Karnataka, Telangana, Gujarat, and beyond. State governments and private institutions alike.' },
  ];

  return (
    <div className="about">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">About Eksper Technologies</div>
          <h1 className="page-hero__title">Engineering institutional excellence since 2000.</h1>
          <p className="page-hero__desc">
            We are an enterprise software company that architects mission-critical digital campus and e-Governance infrastructure for India's premier universities, medical institutions, and state governments.
          </p>
        </div>
      </section>

      {/* Story + Image */}
      <section className="section">
        <div className="container">
          <div className="about__story-layout">
            <div className="about__story-text">
              <div className="section-eyebrow">Our Story</div>
              <h2 className="section-title">From Hyderabad to campuses across India</h2>
              <p style={{ marginBottom: 16 }}>
                Founded in 2000, Eksper Technologies Limited began with a simple belief: that Indian universities and public institutions deserve purpose-built digital infrastructure — not generic tools adapted from other industries.
              </p>
              <p style={{ marginBottom: 16 }}>
                Over two decades, we've grown from a focused ERP provider into a comprehensive technology partner for state governments, medical universities, autonomous colleges, and K-12 school networks across India.
              </p>
              <p>
                Today, our platforms power the academic lifecycle — from entrance test registration to convocation — for over <strong>500,000 students and stakeholders</strong>, with deployments across Karnataka, Telangana, Gujarat, and beyond.
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
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>What Sets Us Apart</div>
            <h2 className="section-title">Built different, by design</h2>
            <p className="section-subtitle">
              We don't adapt generic enterprise tools. We engineer from first principles for Indian educational governance.
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
            <h2 className="section-title">Key milestones</h2>
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
              <div className="section-eyebrow" style={{ color: 'var(--stone-300)' }}>Technology Foundation</div>
              <h2 className="section-title">Enterprise-grade stack</h2>
              <p className="section-subtitle" style={{ color: 'var(--stone-300)', marginBottom: 32 }}>
                Built on proven enterprise technologies with security, scalability, and auditability at every layer.
              </p>

              <div className="about__tech-list">
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>Java Enterprise, Spring Framework, Groovy & Grails</span>
                </div>
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>Hibernate ORM with role-based encryption</span>
                </div>
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>AWS / Azure cloud with auto-scaling infrastructure</span>
                </div>
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>Device-independent responsive web & mobile portals</span>
                </div>
                <div className="about__tech-item">
                  <CheckCircle2 size={16} />
                  <span>ISO 9001:2015 certified development processes</span>
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
              Whether you're modernizing a state university or launching a new campus, we'd love to explore how we can help.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/enquiry" className="btn btn--primary btn--lg">
                Schedule Consultation <ArrowRight size={14} />
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
