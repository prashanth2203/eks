import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  Server, 
  Brain, 
  ShieldCheck, 
  Layers,
  ChevronRight
} from 'lucide-react';
import VideoModal from '../components/VideoModal';
import './HomePage.css';

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: <Building2 size={20} />,
      tag: 'State e-Governance',
      title: 'State Universities & Public Governance',
      desc: 'Turnkey digital governance for public universities — state-wide admissions, confidential examinations, CBCS, and statutory-compliant finance platforms.',
      image: '/images/editorial/hero_campus.jpg',
      stats: [
        { value: '26,000+', label: 'Students governed' },
        { value: '76', label: 'PG departments' },
        { value: '120', label: 'Affiliated colleges' },
      ],
      features: [
        'State-wide online admissions & web counselling',
        'Central Records Branch (CRB) barcode logistics — 1-hour retrieval',
        'Complete university lifecycle: entrance to convocation',
        'Audit-ready double-entry finance with CAG compliance',
      ],
      link: '/solutions#e-governance',
      caseStudy: '/case-studies#uom',
    },
    {
      icon: <Stethoscope size={20} />,
      tag: 'Healthcare & AI',
      title: 'Medical Universities & Clinical AI',
      desc: 'High-security medical university administration, multi-phase NEET counselling engines, and AI-driven clinical research for precision diagnostics.',
      image: '/images/editorial/medical_institution.jpg',
      stats: [
        { value: '15,000+', label: 'Medical seats managed' },
        { value: '12', label: 'AI diagnostic models' },
        { value: '100%', label: 'Cryptographic degrees' },
      ],
      features: [
        'Medical admissions & merit ranking engine (MBBS, BDS, AYUSH)',
        'AI-driven radiology & pathology anomaly detection',
        'NLP for EHR extraction & clinical document indexing',
        'Tamper-proof medical degrees with QR verification',
      ],
      link: '/ai-healthcare',
      caseStudy: '/case-studies#mu',
    },
    {
      icon: <GraduationCap size={20} />,
      tag: 'Higher Education',
      title: 'Autonomous Colleges & Campus Networks',
      desc: 'Agile campus management for autonomous colleges, multi-branch school networks, smart-card campuses, and complete K-12 school ERP.',
      image: '/images/editorial/college_classroom.jpg',
      stats: [
        { value: '250+', label: 'Exam sessions' },
        { value: '50,000+', label: 'Smart cards issued' },
        { value: 'CBCS', label: 'Fully automated' },
      ],
      features: [
        'Choice Based Credit System with elective allocation',
        'Confidential exam grading with dummy number masking',
        'Smart card campus — RFID, turnstiles, fee gateways',
        'K-12 parent portal, SMS alerts, GPS bus telemetry',
      ],
      link: '/solutions#college',
      caseStudy: '/case-studies#ksv',
    },
  ];

  const services = [
    {
      icon: <Server size={20} />,
      title: 'Cloud Infrastructure',
      desc: 'High-concurrency autoscaling for peak admission and result days. AWS, Azure, and on-premise setups.',
      link: '/cloud-services',
    },
    {
      icon: <Brain size={20} />,
      title: 'AI Healthcare Lab',
      desc: 'Machine learning research for radiology anomaly detection and automated clinical record parsing.',
      link: '/ai-healthcare',
    },
    {
      icon: <Layers size={20} />,
      title: 'Data Migration',
      desc: 'Cleansing legacy databases, deduplicating records, and building reliable real-time API integrations.',
      link: '/services#sw-int-mig',
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Tamper-Proof Certificates',
      desc: 'Cryptographically signed degrees with encrypted QR codes for instant global employer verification.',
      link: '/services#temper_proof',
    },
  ];


  const clients = [
    { name: 'University of Mysore', logo: '/images/editorial/mysore_university.jpg' },
    { name: 'Mangalore University', logo: '/images/mangalore_university_logo.png' },
    { name: 'Telangana State ITI', logo: '/images/iti_logo.png' },
    { name: 'Dr. NTR University', logo: '/images/ntr-university-logo.jpg' },
    { name: 'GNITS Hyderabad', logo: '/images/gnits_logo.png' },
    { name: 'KSV University', logo: '/images/kadi-client.jpg' },
  ];

  const currentPillar = pillars[activePillar];

  return (
    <div className="home">
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero__layout">
            <div className="hero__content">
              <div className="hero__eyebrow">
                <span className="hero__dot" />
                Enterprise ERP & Infrastructure
              </div>

              <h1 className="hero__title">
                The digital foundation for India's leading enterprises.
              </h1>

              <p className="hero__desc">
                From state-wide educational e-governance to mining telemetry, healthcare AI, and robust e-commerce platforms—we engineer mission-critical software for every sector.
              </p>

              <div className="hero__actions">
                <Link to="/solutions" className="btn btn--primary btn--lg">
                  Explore Solutions
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Metric pills */}
              <div className="hero__metrics">
                <div className="hero__metric">
                  <span className="hero__metric-value">24+ Years</span>
                  <span className="hero__metric-label">Operational Excellence</span>
                </div>
                <div className="hero__metric-divider" />
                <div className="hero__metric">
                  <span className="hero__metric-value">50+</span>
                  <span className="hero__metric-label">Enterprise Modules</span>
                </div>
                <div className="hero__metric-divider" />
                <div className="hero__metric">
                  <span className="hero__metric-value">100%</span>
                  <span className="hero__metric-label">Statutory Compliant</span>
                </div>
              </div>
            </div>

            <div className="hero__visual-bento">
              {/* Top Left: Enterprise Dashboard */}
              <div className="bento-item bento-item--main">
                <img src="/images/editorial/platform_dashboard.jpg" alt="Enterprise Dashboard" />
                <div className="bento-label">
                  <div className="bento-label-dot" style={{ background: 'var(--ember)' }} />
                  <span>State e-Governance</span>
                </div>
              </div>

              {/* Top Right: University */}
              <div className="bento-item bento-item--vertical">
                <img src="/images/editorial/mysore_university.jpg" alt="University Campus" />
                <div className="bento-label">
                  <div className="bento-label-dot" style={{ background: '#3b82f6' }} />
                  <span>Higher Education</span>
                </div>
              </div>

              {/* Bottom: Medical/Healthcare */}
              <div className="bento-item bento-item--horizontal">
                <img src="/images/editorial/medical_institution.jpg" alt="Medical Research" />
                <div className="bento-label">
                  <div className="bento-label-dot" style={{ background: '#10b981' }} />
                  <span>Clinical AI & Healthcare</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client logos */}
          <div className="hero__logos" id="hero-logos" data-animate>
            <span className="hero__logos-label">Trusted by India's premier institutions</span>
            <div className="hero__logos-row">
              {clients.map((c, i) => (
                <div key={i} className="hero__logo-item">
                  <img src={c.logo} alt={c.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="section section--beige" id="pillars" data-animate>
        <div className="container">
          <div className="section-eyebrow">Specialized Platforms</div>
          <h2 className="section-title">Built for India's regulatory & campus scale</h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Three purpose-built suites designed around statutory compliance, not generic one-size-fits-all software.
          </p>

          {/* Pillar tabs */}
          <div className="pillars__tabs">
            {pillars.map((p, i) => (
              <button
                key={i}
                type="button"
                className={`pillars__tab ${activePillar === i ? 'pillars__tab--active' : ''}`}
                onClick={() => setActivePillar(i)}
              >
                <span className="pillars__tab-icon">{p.icon}</span>
                <div>
                  <span className="pillars__tab-title">{p.tag}</span>
                  <span className="pillars__tab-subtitle">{p.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active pillar detail */}
          <div className="pillars__detail" key={activePillar}>
            <div className="pillars__image-col">
              <div className="pillars__image-wrap">
                <img src={currentPillar.image} alt={currentPillar.title} className="pillars__photo" />
              </div>
              <div className="pillars__stats">
                {currentPillar.stats.map((s, i) => (
                  <div key={i} className="pillars__stat">
                    <span className="pillars__stat-value">{s.value}</span>
                    <span className="pillars__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pillars__info-col">
              <div className="chip chip--ember">{currentPillar.tag}</div>
              <h3 className="pillars__detail-title">{currentPillar.title}</h3>
              <p className="pillars__detail-desc">{currentPillar.desc}</p>

              <ul className="pillars__features">
                {currentPillar.features.map((f, i) => (
                  <li key={i} className="pillars__feature">
                    <CheckCircle2 size={16} className="pillars__check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pillars__actions">
                <Link to={currentPillar.link} className="btn btn--primary">
                  Explore Suite
                  <ArrowRight size={14} />
                </Link>
                <Link to={currentPillar.caseStudy} className="btn btn--ghost">
                  Read Case Study
                  <ArrowRight size={14} className="btn-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services-overview" data-animate>
        <div className="container">
          <div className="section-header--center">
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Engineering Capabilities</div>
            <h2 className="section-title">Beyond campus software</h2>
            <p className="section-subtitle" style={{ marginBottom: 56 }}>
              Specialized infrastructure services that back every deployment.
            </p>
          </div>

          <div className="services__grid">
            {services.map((s, i) => (
              <Link key={i} to={s.link} className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h4 className="service-card__title">{s.title}</h4>
                <p className="service-card__desc">{s.desc}</p>
                <span className="service-card__link">
                  Learn more <ArrowRight size={14} className="btn-arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ===== PLATFORM OVERVIEW ===== */}
      <section className="section" id="platform" data-animate>
        <div className="container">
          <div className="platform__layout">
            <div className="platform__text">
              <div className="section-eyebrow">Platform Architecture</div>
              <h2 className="section-title">One database.<br />Every campus function.</h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                A single centralized database architecture eliminates data silos, ensures real-time consistency, and simplifies compliance audits across every department.
              </p>

              <div className="platform__stack">
                <div className="platform__layer">
                  <span className="platform__layer-tag">Presentation</span>
                  <span className="platform__layer-desc">Device-independent responsive web & mobile portal</span>
                </div>
                <div className="platform__layer platform__layer--highlight">
                  <span className="platform__layer-tag">Logic & Services</span>
                  <span className="platform__layer-desc">Spring Framework, Groovy & Grails microservices</span>
                </div>
                <div className="platform__layer">
                  <span className="platform__layer-tag">Persistence</span>
                  <span className="platform__layer-desc">Hibernate ORM with role-based encryption & audit trail</span>
                </div>
              </div>

              <Link to="/solutions" className="btn btn--primary" style={{ marginTop: 32 }}>
                Technical Deep-Dive
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="platform__visual">
              <img 
                src="/images/editorial/platform_dashboard.jpg" 
                alt="Enterprise platform dashboard" 
                className="platform__image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
