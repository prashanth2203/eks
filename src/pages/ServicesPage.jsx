import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Brain, Layers, ShieldCheck, LifeBuoy, Pickaxe } from 'lucide-react';
import './ServicesPage.css';

const SERVICES = [
  {
    id: 'digital-transformation',
    icon: <Layers size={22} />,
    title: 'Digital Transformation',
    desc: 'Modernising legacy systems into platforms that work. Decoupling monolithic legacy code, deduplicating databases, and standing up robust modern APIs.',
    features: ['Legacy modernization without operational downtime', 'Clean API architecture (REST, GraphQL, gRPC)', 'Database cleansing and schema consolidation', 'Statutory compliance & audit logging'],
  },
  {
    id: 'data-ai',
    icon: <Brain size={22} />,
    title: 'Data & AI',
    desc: 'Data platforms, analytics and AI built into operations, not bolted on. From automated clinical data pipelines to operational anomaly detection.',
    features: ['FHIR & healthcare data integration', 'Operational telemetry and automated alerting', 'Embedded analytical dashboards', 'Domain-specific machine learning models'],
    link: '/ai-healthcare',
  },
  {
    id: 'enterprise-platforms',
    icon: <ShieldCheck size={22} />,
    title: 'Enterprise Platforms',
    desc: 'Modern enterprise platforms, state e-Governance, and mission-critical administrative systems engineered for strict statutory mandates and large-scale public institutions.',
    features: [
      'High-throughput administrative workflows and stakeholder portals',
      'Role-based access control with cryptographic verification and audit logging',
      'CAG-compliant double-entry financial ledgers and statutory tracking',
      'Large-scale multi-department operational orchestration',
    ],
    link: '/enterprise-platforms',
  },
  {
    id: 'run-support',
    icon: <LifeBuoy size={22} />,
    title: 'Run & Support',
    desc: 'We stay on after go-live. Dedicated long-term engineering teams ensuring uptime, statutory upgrades, and continuous performance.',
    features: ['24/7 mission-critical uptime monitoring', 'Dedicated post-go-live engineering teams', 'Continuous security patching and audit readiness', 'Preventative maintenance and SLAs'],
  },
  {
    id: 'cloud',
    icon: <Server size={22} />,
    title: 'Cloud Infrastructure',
    desc: 'High-concurrency autoscaling infrastructure engineered for extreme traffic surges and high availability across AWS, Azure, and private cloud.',
    features: ['Multi-region resilient deployments', 'Auto-scaling for massive concurrency spikes', 'Disaster recovery and automated failover', 'Private datacenter & hybrid architectures'],
    link: '/cloud-services',
  },
  {
    id: 'mining-telemetry',
    icon: <Pickaxe size={22} />,
    title: 'Industrial & Mining Telemetry',
    desc: 'Hardware-integrated weighbridge capture, digital dispatch tracking, and real-time statutory logistics across production sites.',
    features: ['Tamper-proof weighbridge hardware integration', 'Real-time production & dispatch telemetry', 'Electronic transport passes with QR verification', 'Direct statutory compliance reporting'],
    link: '/mining',
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Capabilities</div>
          <h1 className="page-hero__title">What we do.</h1>
          <p className="page-hero__desc">
            Four core capabilities plus specialized infrastructure and industrial services backing every deployment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-page__grid">
            {SERVICES.map((s) => (
              <div key={s.id} id={s.id} className="services-page__card">
                <div className="services-page__card-icon">{s.icon}</div>
                <h3 className="services-page__card-title">{s.title}</h3>
                <p className="services-page__card-desc">{s.desc}</p>
                <ul className="services-page__features">
                  {s.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                {s.link && (
                  <Link to={s.link} className="btn btn--ghost" style={{ marginTop: 'auto' }}>
                    Learn more <ArrowRight size={14} className="btn-arrow" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 className="section-title">Discuss your architecture</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Speak directly with our engineering team about your systems, data, and infrastructure.
          </p>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Talk to us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
