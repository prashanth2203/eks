import React from 'react';

export default function ClientStripLogos() {
  return (
    <div className="client-strip">
      <div className="container">
        <div className="client-strip__track">
          {/* 1. NMDC */}
          <div className="client-strip__item" title="NMDC Limited">
            <svg viewBox="0 0 130 32" className="client-strip__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" />
              <path d="M16 5v22M5 16h22M9 9l14 14M9 23l14-14" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="5" fill="currentColor" />
              <text x="36" y="22" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="18" letterSpacing="0.08em" fill="currentColor">
                NMDC
              </text>
            </svg>
          </div>

          {/* 2. Greenko */}
          <div className="client-strip__item" title="Greenko Group">
            <svg viewBox="0 0 140 32" className="client-strip__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2.5" />
              <path d="M12 20c0-5 4-8 8-8 0 5-4 8-8 8z" fill="currentColor" />
              <text x="36" y="22" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.02em" fill="currentColor">
                greenko
              </text>
            </svg>
          </div>

          {/* 3. University of Mysore */}
          <div className="client-strip__item" title="University of Mysore">
            <div className="client-strip__uom">
              <img
                src="/images/Mysore_University_logo.png"
                alt="University of Mysore"
                className="client-strip__uom-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="client-strip__uom-text">University of Mysore</span>
            </div>
          </div>

          {/* 4. Interwell Health */}
          <div className="client-strip__item" title="Interwell Health">
            <svg viewBox="0 0 160 32" className="client-strip__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="20" cy="12" r="4" fill="currentColor" />
              <text x="32" y="21" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="15" letterSpacing="-0.01em" fill="currentColor">
                interwell <tspan fontWeight="400">health</tspan>
              </text>
            </svg>
          </div>

          {/* 5. Geisinger */}
          <div className="client-strip__item" title="Geisinger">
            <svg viewBox="0 0 130 32" className="client-strip__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="4" y="22" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.03em" fill="currentColor">
                Geisinger
              </text>
              <circle cx="114" cy="16" r="3" fill="currentColor" />
            </svg>
          </div>

          {/* 6. CVS Health */}
          <div className="client-strip__item" title="CVS Health">
            <svg viewBox="0 0 140 32" className="client-strip__svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 10l7 7-7 7"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="24" y="22" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.02em" fill="currentColor">
                CVS<tspan fontWeight="400" fontSize="15">Health</tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
