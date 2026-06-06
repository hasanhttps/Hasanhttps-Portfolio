import React from 'react';
import { ShieldCheck, Cpu, Code2, Globe, MapPin, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'GitHub Repositories', value: '135+', icon: <Code2 size={20} className="text-gradient-cyan" /> },
    { label: 'Followers on GitHub', value: '18', icon: <Award size={20} className="text-gradient-purple" /> },
    { label: 'Base Location', value: 'Riga, LAT', icon: <MapPin size={20} className="text-gradient-green" /> },
    { label: 'Current Association', value: 'Horecarentable', icon: <Cpu size={20} className="text-gradient-cyan" /> },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="glow-orb orb-purple animate-float" style={{ top: '30%', left: '-20%' }}></div>

      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #00f0ff, #bd00ff)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'start' }} className="about-grid">
          {/* Text Left */}
          <div>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
              Engineering Web & Hardware Integrations
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '20px' }}>
              I am a Full Stack Software Engineer based in Baku, Azerbaijan, with a passion for designing end-to-end applications that bridge the gap between software efficiency and hardware capability.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '20px' }}>
              At <strong style={{ color: 'var(--text-primary)' }}>Horecarentable</strong> (part of Novayira OÜ group), I build full-stack interfaces, server APIs, and system layers. My work aids in digitalizing processes within the HORECA sector—ranging from digital self-service kiosks to coordinating waiter robot workflows and automated cash drawer registers.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '28px' }}>
              My software foundations were structured during my time at <strong style={{ color: 'var(--text-primary)' }}>Step IT Academy</strong>, where I developed advanced knowledge of system languages like C++, C#, Java, and Python alongside modern web libraries and frameworks.
            </p>

            {/* Core Values / Principles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <ShieldCheck size={20} style={{ color: 'rgb(var(--accent-cyan))' }} />
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>High-Performance, responsive UI systems in React & Next.js</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Cpu size={20} style={{ color: 'rgb(var(--accent-purple))' }} />
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>Reliable hardware integrations using C++ & C# (IoT & NodeMCU)</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Globe size={20} style={{ color: 'rgb(var(--accent-green))' }} />
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>Modern scalable REST APIs, Docker systems, and database queries</span>
              </div>
            </div>
          </div>

          {/* Stats Grid Right */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '30px 20px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 576px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
