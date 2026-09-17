import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'info@ekspertech.com';

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Get In Touch</div>
          <h1 className="page-hero__title">Contact</h1>
          <p className="page-hero__desc">
            Talk directly with our engineering and leadership team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="contact-email-card">
            <div className="contact-email-icon">
              <Mail size={30} />
            </div>

            <div className="contact-email-label">Email us directly</div>
            <a href={`mailto:${email}`} className="contact-email-address">
              {email}
            </a>

            <div className="contact-email-actions">
              <a href={`mailto:${email}`} className="btn btn--primary btn--lg">
                <span>Send Email</span>
                <ArrowUpRight size={18} />
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="btn btn--outline btn--lg"
              >
                {copied ? (
                  <>
                    <Check size={18} style={{ color: '#10b981' }} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
