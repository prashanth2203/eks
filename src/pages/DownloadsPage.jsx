import React from 'react';
import { Download, FileText, BookOpen, Film } from 'lucide-react';

const DOWNLOADS = [
  {
    category: 'Product Brochures',
    items: [
      { name: 'University e-Governance Suite (UMS)', type: 'PDF', size: '2.4 MB', icon: <FileText size={18} /> },
      { name: 'College Management System (CMS)', type: 'PDF', size: '1.8 MB', icon: <FileText size={18} /> },
      { name: 'K-12 School Management Suite', type: 'PDF', size: '1.5 MB', icon: <FileText size={18} /> },
    ],
  },
  {
    category: 'Technical Documentation',
    items: [
      { name: 'Platform Architecture Overview', type: 'PDF', size: '3.1 MB', icon: <BookOpen size={18} /> },
      { name: 'API Integration Guide', type: 'PDF', size: '1.2 MB', icon: <BookOpen size={18} /> },
      { name: 'Security & Compliance Whitepaper', type: 'PDF', size: '800 KB', icon: <BookOpen size={18} /> },
    ],
  },
  {
    category: 'Media',
    items: [
      { name: 'System Overview Video', type: 'MP4', size: '45 MB', icon: <Film size={18} /> },
      { name: 'Company Profile Presentation', type: 'PPTX', size: '8.2 MB', icon: <FileText size={18} /> },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Downloads</div>
          <h1 className="page-hero__title">Resources & documentation.</h1>
          <p className="page-hero__desc">
            Product brochures, technical documentation, and media resources.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          {DOWNLOADS.map((cat, i) => (
            <div key={i} style={{ marginBottom: i < DOWNLOADS.length - 1 ? 48 : 0 }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ember)', marginBottom: 16 }}>{cat.category}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cat.items.map((item, j) => (
                  <button
                    key={j}
                    type="button"
                    onClick={() => alert(`Download: ${item.name}`)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '16px 20px',
                      background: 'var(--stone-50)',
                      border: '1px solid transparent',
                      borderRadius: 'var(--r-md)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--stone-200)'; e.currentTarget.style.background = 'var(--white)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'var(--stone-50)'; }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 'var(--r-sm)', background: 'var(--white)', border: '1px solid var(--stone-200)', color: 'var(--ink-muted)', flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    <div style={{ flex: 1 }}>
                      <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)' }}>{item.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--ink-faint)' }}>{item.type} · {item.size}</span>
                    </div>
                    <Download size={16} style={{ color: 'var(--ink-muted)' }} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
