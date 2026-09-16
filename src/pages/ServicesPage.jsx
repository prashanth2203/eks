import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Server, Brain, Layers, ShieldCheck, Smartphone, BarChart3, MonitorSmartphone, Pickaxe } from 'lucide-react';
import './ServicesPage.css';

const SERVICES = [
  {
    id: 'sw-int-mig',
    icon: <Layers size={22} />,
    title: 'Software Integration & Data Migration',
    desc: 'Seamless migration of decades-old legacy records, deduplication of student databases, and creation of reliable real-time API pipelines between institutional systems.',
    features: ['Legacy data cleansing & deduplication', 'REST/SOAP API gateway integration', 'Automated data validation pipelines', 'Zero-downtime migration protocols'],
  },
  {
    id: 'cloud',
    icon: <Server size={22} />,
    title: 'Cloud Infrastructure & Server Setup',
    desc: 'High-concurrency autoscaling infrastructure engineered for massive admission and result-day traffic spikes.',
    features: ['AWS & Azure cloud deployments', 'Auto-scaling for 50,000+ concurrent users', 'On-premise to cloud migration', 'Disaster recovery & backup'],
    link: '/cloud-services',
  },
  {
    id: 'temper_proof',
    icon: <ShieldCheck size={22} />,
    title: 'Tamper-Proof Certificates',
    desc: 'Cryptographically signed physical and digital degrees with encrypted QR codes for instantaneous worldwide employer verification.',
    features: ['SHA-256 digital signatures', 'Instant QR-code verification', 'Anti-counterfeiting holograms', 'DigiLocker & NAD integration'],
  },
  {
    id: 'mobility',
    icon: <Smartphone size={22} />,
    title: 'Mobile Apps & Kiosk Systems',
    desc: 'Purpose-built mobile applications for students, parents, and administrators. Self-service kiosk deployment for campus operations.',
    features: ['Student & parent mobile portals', 'Self-service campus kiosks', 'Biometric integration', 'Push notifications & alerts'],
  },
  {
    id: 'analytics',
    icon: <BarChart3 size={22} />,
    title: 'Business Analytics & Reporting',
    desc: 'Comprehensive analytical dashboards for institutional leadership — enrollment trends, examination analytics, financial summaries, and compliance reports.',
    features: ['Real-time enrollment dashboards', 'Examination performance analytics', 'Financial health monitoring', 'Custom MIS report builder'],
  },
  {
    id: 'web',
    icon: <MonitorSmartphone size={22} />,
    title: 'Web Design & Maintenance',
    desc: 'Professional institutional website design, development, hosting, and ongoing maintenance with responsive, modern interfaces.',
    features: ['Responsive institutional websites', 'CMS & content management', 'SSL & security hardening', '24/7 uptime monitoring'],
    link: '/web-services',
  },
];

export default function ServicesPage() {
  const location = useLocation();

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Services</div>
          <h1 className="page-hero__title">Technical services beyond campus software.</h1>
          <p className="page-hero__desc">
            Specialized, high-reliability infrastructure and engineering services backing every Eksper deployment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-page__grid">
            {SERVICES.map((s, i) => (
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
          <h2 className="section-title">Need a custom solution?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Our enterprise architects can design a tailored deployment for your institution's specific requirements.
          </p>
          <Link to="/enquiry" className="btn btn--primary btn--lg">
            Schedule Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
