import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Eye, FileText, Activity } from 'lucide-react';

export default function AiHealthcarePage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Healthcare & Clinical AI</div>
          <h1 className="page-hero__title">Data pipelines & clinical AI for payers and providers.</h1>
          <p className="page-hero__desc">
            FHIR data integration, electronic health record extraction, and machine learning models for risk stratification and precision clinical diagnostics.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'center' }}>
            <div>
              <div className="section-eyebrow">Capabilities</div>
              <h2 className="section-title">Data and AI built into healthcare operations</h2>
              <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 32 }}>
                We engineer FHIR-compliant pipelines, EHR data extraction, and machine learning models that integrate directly into provider care management and payer claims workflows.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: <FileText size={18} />, title: 'FHIR Pipelines & EHR Ingestion', desc: 'Normalized clinical and claims ingestion pipelines compliant with HL7 and FHIR standards.' },
                  { icon: <Activity size={18} />, title: 'Risk Stratification & Cohort Analytics', desc: 'Predictive cohort scoring and automated risk identification embedded into care team workflows.' },
                  { icon: <Eye size={18} />, title: 'Clinical Imaging & Diagnostic AI', desc: 'Computer vision algorithms for radiology and pathology anomaly detection.' },
                  { icon: <Brain size={18} />, title: 'NLP for Unstructured Clinical Records', desc: 'Natural language extraction for medical notes, pathology summaries, and discharge documentation.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 20px', background: 'var(--stone-50)', borderRadius: 'var(--r-md)' }}>
                    <span style={{ color: 'var(--ember)', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.9375rem', color: 'var(--ink)', marginBottom: 4 }}>{item.title}</strong>
                      <span style={{ fontSize: '0.875rem', color: 'var(--ink-muted)' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden' }}>
              <img src="/images/editorial/medical_institution.jpg" alt="Healthcare and AI" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--stone">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 className="section-title">Discuss healthcare data & AI solutions</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Connect with our engineering team to discuss FHIR integration, clinical AI models, and data pipelines.
          </p>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Talk to us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
