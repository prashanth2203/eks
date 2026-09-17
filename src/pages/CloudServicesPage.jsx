import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Shield, Zap, RefreshCcw } from 'lucide-react';

export default function CloudServicesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Cloud Infrastructure</div>
          <h1 className="page-hero__title">Built for high concurrency and zero downtime.</h1>
          <p className="page-hero__desc">
            High-concurrency autoscaling infrastructure engineered for extreme traffic surges, real-time telemetry, and 24/7 mission-critical availability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 56 }}>
            {[
              { icon: <Server size={20} />, title: 'AWS & Azure Multi-Region', desc: 'Resilient cloud topologies with auto-scaling groups, global load balancing, and edge caching for sub-second latency.' },
              { icon: <Zap size={20} />, title: 'Extreme Concurrency', desc: 'Proven handling of 50,000+ simultaneous concurrent requests during mission-critical reporting and transaction windows.' },
              { icon: <Shield size={20} />, title: 'Private & Hybrid Cloud', desc: 'Dedicated private datacenter setups and air-gapped options for institutions and government bodies requiring strict data residency.' },
              { icon: <RefreshCcw size={20} />, title: 'Disaster Recovery & Failover', desc: 'Automated point-in-time backups, multi-zone replication, and zero-data-loss failover protocols.' },
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
