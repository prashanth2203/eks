import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Server, Shield, Zap, RefreshCcw } from 'lucide-react';

export default function CloudServicesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Cloud Infrastructure</div>
          <h1 className="page-hero__title">Built for peak admission days.</h1>
          <p className="page-hero__desc">
            High-concurrency autoscaling infrastructure designed for massive traffic spikes during entrance exams, admissions, and result announcements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 56 }}>
            {[
              { icon: <Server size={20} />, title: 'AWS & Azure Deployments', desc: 'Multi-region cloud setups with auto-scaling groups, load balancers, and CDN for optimal performance.' },
              { icon: <Zap size={20} />, title: '50,000+ Concurrent Users', desc: 'Proven handling of massive concurrent traffic during state-wide admission and counselling windows.' },
              { icon: <Shield size={20} />, title: 'On-Premise Options', desc: 'For institutions requiring data residency — private datacenter setup with our managed services overlay.' },
              { icon: <RefreshCcw size={20} />, title: 'Disaster Recovery', desc: 'Automated backups, cross-region failover, and point-in-time recovery for mission-critical data.' },
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
              Discuss Infrastructure Needs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
