import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Scale, Truck, BarChart3, Shield } from 'lucide-react';

export default function MiningPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Mining Solutions</div>
          <h1 className="page-hero__title">Mining telemetry & weighbridge automation.</h1>
          <p className="page-hero__desc">
            Automated weighbridge hardware integration, digital dispatch passes, and real-time mining logistics telemetry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 56 }}>
            {[
              { icon: <Scale size={20} />, title: 'Automated Weighbridge', desc: 'Hardware-integrated weighbridge systems with tamper-proof load measurement and digital receipts.' },
              { icon: <Truck size={20} />, title: 'Digital Dispatch Passes', desc: 'Electronic dispatch pass generation with QR-code verification and real-time tracking.' },
              { icon: <BarChart3 size={20} />, title: 'Production Analytics', desc: 'Real-time production dashboards, shift-wise reporting, and mineral extraction analytics.' },
              { icon: <Shield size={20} />, title: 'Compliance & Audit', desc: 'Regulatory compliance reporting for mining departments and environmental audits.' },
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
              Discuss Mining Solutions <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
