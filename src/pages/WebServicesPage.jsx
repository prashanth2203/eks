import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Palette, Code, Wrench } from 'lucide-react';

export default function WebServicesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Web Services</div>
          <h1 className="page-hero__title">Professional web design & hosting.</h1>
          <p className="page-hero__desc">
            Modern, responsive institutional websites with content management, SSL security, and 24/7 uptime monitoring.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 56 }}>
            {[
              { icon: <Palette size={20} />, title: 'Institutional Web Design', desc: 'Custom-designed responsive websites for universities, colleges, and educational institutions.' },
              { icon: <Code size={20} />, title: 'CMS & Development', desc: 'Content management systems allowing non-technical staff to update pages, news, and announcements.' },
              { icon: <Globe size={20} />, title: 'Secure Web Hosting', desc: 'SSL-secured hosting with CDN, DDoS protection, and 99.9% uptime guarantee.' },
              { icon: <Wrench size={20} />, title: 'Ongoing Maintenance', desc: 'Regular updates, security patches, performance optimization, and technical support.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 32, background: 'var(--stone-50)', borderRadius: 'var(--r-lg)' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'var(--white)', border: '1px solid var(--stone-200)', color: 'var(--ink-secondary)', marginBottom: 16 }}>{item.icon}</span>
                <h4 style={{ marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/enquiry" className="btn btn--primary btn--lg">
              Discuss Your Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
