import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Truck, BarChart3, Shield } from 'lucide-react';

export default function MiningPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Mining Telemetry</div>
          <h1 className="page-hero__title">Weighbridge automation & dispatch logistics.</h1>
          <p className="page-hero__desc">
            Automated weighbridge hardware integration, digital transit passes, and real-time mineral extraction telemetry for NMDC and public-sector operations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 56 }}>
            {[
              { icon: <Scale size={20} />, title: 'Automated Weighbridge Capture', desc: 'Hardware-integrated load cell measurement with tamper-proof gross/tare logging and instant digital weight tickets.' },
              { icon: <Truck size={20} />, title: 'Electronic Transit Passes (e-TP)', desc: 'Tamper-resistant digital dispatch passes with QR verification and automatic vehicle reconciliation.' },
              { icon: <BarChart3 size={20} />, title: 'Production & Shift Analytics', desc: 'Real-time extraction rate dashboards, weighbridge throughput metrics, and dispatch bottlenecks tracking.' },
              { icon: <Shield size={20} />, title: 'Statutory Mining Compliance', desc: 'Automated regulatory filings compliant with state mining directorates, royalty frameworks, and audit rules.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 32, background: 'var(--stone-50)', borderRadius: 'var(--r-lg)' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'var(--white)', border: '1px solid var(--stone-200)', color: 'var(--ink-secondary)', marginBottom: 16 }}>{item.icon}</span>
                <h4 style={{ marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Talk to us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
