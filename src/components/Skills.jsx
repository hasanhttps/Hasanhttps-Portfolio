import React from 'react';
import { Layers, Database, Code, Cpu, Cloud, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={20} style={{ color: 'rgb(var(--accent-green))' }} />,
      glowClass: 'glow-green',
      skills: ['C++', 'C#', 'TypeScript', 'JavaScript', 'C', 'Java', 'Python', 'HTML5 / CSS3'],
    },
    {
      title: 'Frontend Frameworks',
      icon: <Layers size={20} style={{ color: 'rgb(var(--accent-cyan))' }} />,
      glowClass: 'glow-cyan',
      skills: ['React', 'Next.js', 'Redux', 'Context API', 'Vite', 'Three.js / GSAP', 'TailwindCSS', 'SASS / CSS Modules', 'Material UI / Bootstrap'],
    },
    {
      title: 'Backend & APIs',
      icon: <Terminal size={20} style={{ color: 'rgb(var(--accent-purple))' }} />,
      glowClass: 'glow-purple',
      skills: ['Node.js', 'Express.js', '.NET Core', 'RESTful APIs', 'JWT Auth', 'Axios', 'Swagger / Postman', 'Nodemon'],
    },
    {
      title: 'Databases & OS',
      icon: <Database size={20} style={{ color: 'rgb(var(--accent-purple))' }} />,
      glowClass: 'glow-purple',
      skills: ['MongoDB', 'Microsoft SQL Server', 'MySQL', 'SQLite', 'Linux / Bash'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={20} style={{ color: 'rgb(var(--accent-cyan))' }} />,
      glowClass: 'glow-cyan',
      skills: ['Docker', 'Kubernetes', 'Microsoft Azure', 'Google Cloud', 'Cloudflare', 'Vercel / Netlify', 'Git / GitHub', 'GitLab'],
    },
    {
      title: 'Hardware & IoT',
      icon: <Cpu size={20} style={{ color: 'rgb(var(--accent-green))' }} />,
      glowClass: 'glow-green',
      skills: ['Arduino', 'NodeMCU', 'ESP8266', 'IoT Integrations', 'Serial Communication'],
    },
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="bg-grid"></div>
      <div className="glow-orb orb-cyan" style={{ bottom: '-10%', left: '20%' }}></div>

      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 16px auto' }}>
            A comprehensive overview of programming languages, tools, and hardware environments I work with.
          </p>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #39ff14, #00f0ff, #bd00ff)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="skills-grid"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card ${category.glowClass}`}
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.target.style.color = 'var(--text-primary)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                      e.target.style.color = 'var(--text-secondary)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
