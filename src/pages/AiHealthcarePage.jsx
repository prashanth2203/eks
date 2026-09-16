import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Brain, Eye, FileText, Stethoscope } from 'lucide-react';

export default function AiHealthcarePage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">AI Healthcare Research</div>
          <h1 className="page-hero__title">Clinical AI for precision diagnostics.</h1>
          <p className="page-hero__desc">
            Collaborative machine learning research for medical imaging diagnostics, clinical document parsing, and predictive healthcare analytics.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <div className="section-eyebrow">Research Capabilities</div>
              <h2 className="section-title">Advancing healthcare with artificial intelligence</h2>
              <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 32 }}>
                Our AI Healthcare Lab collaborates with medical institutions to develop computer vision models for radiology, pathology, and clinical decision support systems.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: <Eye size={18} />, title: 'Medical Imaging AI', desc: 'Computer vision models for radiology anomaly detection in X-rays, CT scans, and MRIs.' },
                  { icon: <FileText size={18} />, title: 'NLP for EHR', desc: 'Natural language processing for electronic health record extraction and clinical document indexing.' },
                  { icon: <Brain size={18} />, title: 'Predictive Analytics', desc: 'Early diagnostic prediction models using patient history, vitals, and lab results.' },
                  { icon: <Stethoscope size={18} />, title: 'Clinical Decision Support', desc: 'AI-assisted diagnostic suggestions integrated into hospital information systems.' },
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
              <img src="/images/editorial/medical_institution.jpg" alt="Medical AI Research" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--stone">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 className="section-title">Interested in collaboration?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            We partner with medical institutions for clinical AI research and development.
          </p>
          <Link to="/enquiry" className="btn btn--primary btn--lg">
            Explore Partnership <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
