import React, { useState } from 'react';
import { Calendar, Briefcase, GraduationCap, Award, FileText, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('timeline');

  const experienceEducation = [
    {
      type: 'experience',
      title: 'Full Stack Developer',
      org: 'Horecarentable',
      location: 'Baku, Azerbaijan (Remote / Hybrid)',
      date: '2024 - Present',
      details: [
        'Architected modern user interfaces and responsive web management panels using React and Node.js.',
        'Engineered communication protocols to integrate web services with hardware automations (waiter robots, smart cash registers, self-service kiosks).',
        'Optimized system latency and query performance across Microsoft SQL Server, MongoDB, and MySQL databases.',
        'Collaborated on cloud deployment flows using Docker containers and Azure cloud services.',
      ],
    },
    {
      type: 'education',
      title: 'Software & Systems Development',
      org: 'Step IT Academy',
      location: 'Baku, Azerbaijan',
      date: '2022 - 2024',
      gpa: 'GPA: 95.8 / 100',
      details: [
        'Mastered object-oriented programming (OOP), memory management, and structural design in C++ and C.',
        'Developed desktop and utility software in C# (.NET Core) and Java.',
        'Studied relational database normalization, transaction isolation, and secure user authorization using JWT.',
      ],
    },
    {
      type: 'education',
      title: 'Secondary Education (High School)',
      org: 'Türk Dünyası Atatürk Lisesi',
      location: 'Baku, Azerbaijan',
      date: '2018 - 2022',
      gpa: 'GPA: 4.88 / 5.00',
      details: [
        'Specialized in advanced mathematical analysis, physics, and foundational computer sciences.',
        'Graduated with an Honor Diploma for academic excellence.',
      ],
    },
  ];

  const certificates = [
    {
      title: 'Step IT Academy Professional Diploma',
      issuer: 'Step IT Academy',
      date: '2024',
      credentialId: 'SITA-SD-2024-4091',
      skills: ['C++', 'C#', 'Java', 'Python', 'Databases', 'Web Technologies'],
    },
    {
      title: 'Full-Stack Web Development Certification',
      issuer: 'Step IT Academy / Horecarentable Tech',
      date: '2023',
      credentialId: 'FSWD-99432',
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'API Security'],
    },
    {
      title: 'IoT & Microcontrollers Automation Credential',
      issuer: 'Step IT Academy Hardware Lab',
      date: '2023',
      credentialId: 'IOT-MC-8812',
      skills: ['C++', 'Arduino', 'ESP8266/NodeMCU', 'Serial I/O', 'IoT APIs'],
    },
    {
      title: 'Algorithms & OOP in C++ / C# Certification',
      issuer: 'Step IT Academy',
      date: '2022',
      credentialId: 'ALG-OOP-3294',
      skills: ['Object-Oriented Design', 'Memory Optimization', 'Data Structures'],
    },
  ];

  return (
    <section id="timeline" className="section-padding" style={{ position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="bg-grid"></div>
      <div className="glow-orb orb-purple" style={{ bottom: '-15%', right: '10%' }}></div>

      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            My <span className="text-gradient">Journey</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 16px auto' }}>
            A detailed record of my professional experience, academic training, and certifications.
          </p>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #bd00ff, #39ff14)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        {/* Section Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          <button
            onClick={() => setActiveTab('timeline')}
            className={`filter-btn ${activeTab === 'timeline' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Briefcase size={16} />
            <span>Career & Education</span>
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`filter-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Award size={16} />
            <span>Certificates</span>
          </button>
        </div>

        {/* Career Path Content */}
        {activeTab === 'timeline' && (
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {experienceEducation.map((item, index) => (
              <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-line"></div>
                
                <div className="glass-card" style={{ padding: '24px' }}>
                  {/* Card Header info */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '14px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {item.type === 'experience' ? (
                          <Briefcase size={18} style={{ color: 'rgb(var(--accent-cyan))' }} />
                        ) : (
                          <GraduationCap size={18} style={{ color: 'rgb(var(--accent-green))' }} />
                        )}
                        <span>{item.title}</span>
                      </h3>
                      <div style={{ fontSize: '0.95rem', color: 'rgb(var(--accent-cyan))', fontWeight: 500, marginTop: '4px' }}>
                        {item.org} &bull; <span style={{ color: 'var(--text-muted)' }}>{item.location}</span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 12px',
                          borderRadius: '30px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--border-glass)',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </span>
                      {item.gpa && (
                        <span
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: 'rgb(var(--accent-green))',
                            background: 'rgba(57, 255, 20, 0.08)',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            border: '1px solid rgba(57, 255, 20, 0.15)',
                          }}
                        >
                          {item.gpa}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet details */}
                  <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.details.map((detail, dIndex) => (
                      <li key={dIndex} style={{ display: 'flex', gap: '8px', alignItems: 'start', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'rgb(var(--accent-cyan))', marginTop: '4px' }}>&bull;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates Grid Content */}
        {activeTab === 'certificates' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
            }}
            className="certificates-grid"
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="glass-card glow-cyan animate-fade-in"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
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
                      <FileText size={20} style={{ color: 'rgb(var(--accent-cyan))' }} />
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>{cert.date}</span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Issuer: <span style={{ color: 'rgb(var(--accent-cyan))', fontWeight: 500 }}>{cert.issuer}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
                    ID: {cert.credentialId}
                  </div>
                </div>

                {/* Skills tags certified */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cert.skills.map((s, sIndex) => (
                    <span
                      key={sIndex}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        background: 'rgba(255, 255, 255, 0.01)',
                        border: '1px solid rgba(255, 255, 255, 0.04)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <CheckCircle2 size={10} style={{ color: 'rgb(var(--accent-green))' }} />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .certificates-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
