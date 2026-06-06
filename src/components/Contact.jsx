import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const emailAddress = 'hasanabdullazad@gmail.com'; // Placeholder, easily editable

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="bg-grid"></div>
      <div className="glow-orb orb-cyan" style={{ top: '20%', left: '-10%' }}></div>

      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
            Have a project in mind, want to collaborate, or just want to say hi? Drop a message!
          </p>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #00f0ff, #bd00ff)',
              margin: '16px auto 0 auto',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '48px', alignItems: 'stretch' }} className="contact-grid">
          {/* Contact Details Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                Contact Information
              </h3>
              
              {/* Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Email Card */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(0, 240, 255, 0.05)',
                      border: '1px solid rgba(0, 240, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgb(var(--accent-cyan))',
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>EMAIL ME</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{emailAddress}</span>
                      <button
                        onClick={handleCopy}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: copied ? 'rgb(var(--accent-green))' : 'var(--text-muted)',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '4px',
                          borderRadius: '4px',
                          transition: 'all 0.3s ease',
                        }}
                        title="Copy to Clipboard"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(57, 255, 20, 0.05)',
                      border: '1px solid rgba(57, 255, 20, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgb(var(--accent-green))',
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>LOCATION</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Riga, Latvia</div>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(189, 0, 255, 0.05)',
                      border: '1px solid rgba(189, 0, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgb(var(--accent-purple))',
                    }}
                  >
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>LINKEDIN PROFILE</div>
                    <a
                      href="https://www.linkedin.com/in/hesen-abdullazade-b71408245/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.target.style.color = 'rgb(var(--accent-purple))')}
                      onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                    >
                      hesen-abdullazade-b71408245
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Right */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: '24px' }}>
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="form-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-glass)',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                    }}
                    className="input-focus-cyan"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-glass)',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                    }}
                    className="input-focus-cyan"
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="subject" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-glass)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                  }}
                  className="input-focus-cyan"
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-glass)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                    resize: 'none',
                  }}
                  className="input-focus-cyan"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  background: 'rgb(var(--accent-cyan))',
                  color: 'var(--bg-primary)',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(0, 240, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  marginTop: '10px',
                }}
                className="submit-btn"
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : status === 'success' ? (
                  <span style={{ color: '#00aa50', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={18} /> Message Sent Successfully!
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: stretch;
        }
        .input-focus-cyan:focus {
          border-color: rgba(var(--accent-cyan), 0.5) !important;
          box-shadow: 0 0 10px rgba(var(--accent-cyan), 0.15);
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 240, 255, 0.4);
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
