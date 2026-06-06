import React from 'react';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '40px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="container footer-content"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* Logo Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={18} style={{ color: 'rgb(var(--accent-cyan))' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.1rem' }}>
            hasan<span style={{ color: 'rgb(var(--accent-cyan))' }}>https</span>
          </span>
        </div>

        {/* Text Center */}
        <div
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>&copy; {currentYear} Hasan Abdullazade. All rights reserved.</span>
        </div>

        {/* Build Tech Right */}
        <div
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>Built with</span>
          <Heart size={12} style={{ color: '#ff0055', fill: '#ff0055' }} />
          <span>using React & CSS</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column !important;
            text-align: center;
            align-items: center !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
}
