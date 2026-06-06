import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '12px 0' : '24px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 9, 19, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.4rem',
            fontWeight: 700,
          }}
        >
          <Terminal size={22} style={{ color: 'rgb(var(--accent-cyan))' }} />
          <span>hasan<span style={{ color: 'rgb(var(--accent-cyan))' }}>https</span></span>
        </a>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hide-mobile-flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'rgb(var(--accent-cyan))')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              textDecoration: 'none',
              background: 'transparent',
              color: 'rgb(var(--accent-cyan))',
              border: '1px solid rgb(var(--accent-cyan))',
              padding: '8px 20px',
              borderRadius: '30px',
              fontWeight: 600,
              fontSize: '0.9rem',
              boxShadow: '0 0 10px rgba(var(--accent-cyan), 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgb(var(--accent-cyan))';
              e.target.style.color = 'var(--bg-primary)';
              e.target.style.boxShadow = '0 0 15px rgba(var(--accent-cyan), 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'rgb(var(--accent-cyan))';
              e.target.style.boxShadow = '0 0 10px rgba(var(--accent-cyan), 0.1)';
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none',
          }}
          className="show-mobile-block"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(7, 9, 19, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                fontWeight: 500,
                padding: '8px 0',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            style={{
              textDecoration: 'none',
              background: 'rgb(var(--accent-cyan))',
              color: 'var(--bg-primary)',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* CSS injection for responsive display since we are using Vanilla CSS without media query library dependencies in React */}
      <style>{`
        .hide-mobile-flex {
          display: flex;
        }
        .show-mobile-block {
          display: none;
        }
        @media (max-width: 768px) {
          .hide-mobile-flex {
            display: none !important;
          }
          .show-mobile-block {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
