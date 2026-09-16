import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-card"
        style={{ maxWidth: '800px', backgroundColor: '#000', overflow: 'hidden', borderRadius: '12px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', top: '12px', right: '12px' }}
          onClick={onClose}
          aria-label="Close Video"
        >
          <X size={20} />
        </button>
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
          <video
            controls
            autoPlay
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: '#000',
            }}
          >
            <source src="/video/QVentures_Video_Presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
