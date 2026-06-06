import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  const roles = ['Full Stack Developer', 'IoT Builder', 'Software Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Visual background layers */}
      <div className="bg-grid"></div>
      <div className="glow-orb orb-cyan animate-float" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="glow-orb orb-purple" style={{ bottom: '10%', right: '-15%' }}></div>

      <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
        {/* Info Left */}
        <div className="animate-fade-in" style={{ zIndex: 2 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '30px',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              color: 'rgb(var(--accent-cyan))',
              fontSize: '0.9rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              marginBottom: '20px',
            }}
          >
            <Code size={14} />
            <span>Open To Opportunities</span>
          </div>

          <h1
            style={{
              fontSize: '3.8rem',
              lineHeight: '1.15',
              marginBottom: '16px',
              color: 'var(--text-primary)',
            }}
            className="hero-title"
          >
            Hi, I'm <br />
            <span className="text-gradient">Hasan Abdullazade</span>
          </h1>

          <div
            style={{
              fontSize: '1.8rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              height: '45px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '8px' }}>I build</span>
            <span className="typing-container" style={{ color: 'rgb(var(--accent-cyan))' }}>
              {currentText}
            </span>
          </div>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              marginBottom: '40px',
            }}
          >
            I am a Full Stack Developer based in Baku, specializing in building high-performance web systems at Horecarentable and exploring hardware integrations with C++, C#, and IoT devices.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a
              href="#projects"
              style={{
                textDecoration: 'none',
                background: 'rgb(var(--accent-cyan))',
                color: 'var(--bg-primary)',
                padding: '14px 28px',
                borderRadius: '30px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)',
                transition: 'all 0.3s ease',
              }}
              className="cta-primary"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.03)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-glass)',
                padding: '14px 28px',
                borderRadius: '30px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                e.target.style.borderColor = 'var(--border-glass)';
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>CONNECT:</span>
            <a
              href="https://github.com/hasanhttps"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgb(var(--accent-cyan))')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hesen-abdullazade-b71408245/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgb(var(--accent-purple))')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/hasanhttps/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgb(var(--accent-green))')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Profile Avatar Right */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }} className="hero-avatar-container">
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              padding: '6px',
              background: 'linear-gradient(135deg, rgb(var(--accent-cyan)), rgb(var(--accent-purple)), rgb(var(--accent-green)))',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.2)',
            }}
            className="avatar-glow-ring"
          >
            <img
              src="https://avatars.githubusercontent.com/u/107070957?v=4"
              alt="Hasan Abdullazade Profile Photo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '4px solid var(--bg-primary)',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-avatar-container {
            order: -1;
            margin-bottom: 20px;
          }
          .hero-title {
            font-size: 3rem !important;
          }
          .typing-container {
            margin: 0 auto;
          }
          .cta-primary {
            justify-content: center;
          }
          div[style*="display: flex; gap: 16px; flex-wrap: wrap"] {
            justify-content: center;
          }
          div[style*="display: flex; gap: 20px; align-items: center"] {
            justify-content: center;
          }
        }
        @media (max-width: 576px) {
          .avatar-glow-ring {
            width: 250px !important;
            height: 250px !important;
          }
          .hero-title {
            font-size: 2.4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
