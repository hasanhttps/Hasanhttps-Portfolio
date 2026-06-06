import React, { useState } from 'react';
import { ExternalLink, Github, Code, Globe, Shield, Terminal } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Country-Hub',
      desc: 'An interactive centralized hub providing geographic data profiles, population indicators, currencies, maps, and detailed charts for countries worldwide.',
      tech: ['TypeScript', 'React', 'Vite', 'REST API'],
      category: 'fullstack',
      github: 'https://github.com/hasanhttps/Country-Hub',
      glowClass: 'glow-cyan',
      icon: <Globe size={20} style={{ color: '#00f0ff' }} />,
    },
    {
      title: 'NodeMCU-ChatGPT-Bot',
      desc: 'A smart IoT integration connecting ESP8266/NodeMCU microcontrollers with OpenAI API endpoints to create a physical voice/text assistant powered by ChatGPT.',
      tech: ['C++', 'Arduino', 'ESP8266', 'OpenAI API'],
      category: 'iot',
      github: 'https://github.com/hasanhttps/NodeMCU-ChatGPT-Bot',
      glowClass: 'glow-green',
      icon: <Code size={20} style={{ color: '#39ff14' }} />,
    },
    {
      title: 'Battleship',
      desc: 'A classic naval combat strategy game designed for terminal play, featuring a smart, calculated AI opponent with search-and-destroy targeting algorithms.',
      tech: ['C', 'Algorithms', 'CLI Game', 'AI logic'],
      category: 'games',
      github: 'https://github.com/hasanhttps/Battleship',
      glowClass: 'glow-green',
      icon: <Shield size={20} style={{ color: '#39ff14' }} />,
    },
    {
      title: 'Create-Sat-Exam',
      desc: 'A complete desktop/web platform utilizing C# to facilitate SAT exam generation, template management, answer keys compilations, and grading dashboards.',
      tech: ['C#', '.NET', 'Database', 'File Processing'],
      category: 'fullstack',
      github: 'https://github.com/hasanhttps/Create-Sat-Exam',
      glowClass: 'glow-purple',
      icon: <Terminal size={20} style={{ color: '#bd00ff' }} />,
    },
    {
      title: 'Reel-Jet-2',
      desc: 'An optimized Windows application designed to automate social video rendering pipelines, scheduler operations, and file storage handling.',
      tech: ['C#', 'WPF', '.NET Core', 'Video APIs'],
      category: 'games',
      github: 'https://github.com/hasanhttps/Reel-Jet-2',
      glowClass: 'glow-purple',
      icon: <Code size={20} style={{ color: '#bd00ff' }} />,
    },
    {
      title: 'Quiz Engine',
      desc: 'An object-oriented C++ quiz simulator supporting customizable multi-format question templates, countdown timers, and final scoring telemetry.',
      tech: ['C++', 'OOP', 'Data Structures', 'File I/O'],
      category: 'games',
      github: 'https://github.com/hasanhttps/Quiz',
      glowClass: 'glow-green',
      icon: <Terminal size={20} style={{ color: '#39ff14' }} />,
    },
  ];

  const filters = [
    { label: 'All Projects', id: 'all' },
    { label: 'Full-Stack', id: 'fullstack' },
    { label: 'IoT & C++', id: 'iot' },
    { label: 'Apps & Games', id: 'games' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="glow-orb orb-purple" style={{ top: '10%', right: '10%' }}></div>
      <div className="glow-orb orb-cyan" style={{ bottom: '20%', left: '-10%' }}></div>

      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 16px auto' }}>
            A curated showcase of applications highlighting frontend interfaces, robust backends, and low-level hardware programs.
          </p>
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

        {/* Filters Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`glass-card ${project.glowClass}`}
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                {/* Header Icon & Links */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}
                >
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
                    {project.icon}
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  {project.desc}
                </p>
              </div>

              {/* Footer Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((t, tIndex) => (
                  <span
                    key={tIndex}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
