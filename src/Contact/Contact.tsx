import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ width: '100vw', maxWidth: '100%', margin: 0, padding: '3rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: '#007AFF', fontSize: '2.3rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '1px', textAlign: 'center', fontFamily: 'JetBrains Mono, Fira Code, monospace' }}>Get In Touch</h2>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', justifyContent: 'center' }}>
        <a href="https://linkedin.com/in/shlokthakkar" target="_blank" rel="noopener noreferrer" style={{ color: '#007AFF', fontSize: '2rem' }}>
          <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#007AFF" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://github.com/shlokthakkar" target="_blank" rel="noopener noreferrer" style={{ color: '#007AFF', fontSize: '2rem' }}>
          <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#007AFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="mailto:shlokat2@illinois.edu" style={{ color: '#34a853', fontSize: '2rem' }}>
          <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#34a853" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l8 6.99 8-6.99V20H4z"/></svg>
        </a>
      </div>
      <a href="/ShlokResume.pdf" download style={{ fontSize: '1.25rem', padding: '1.2rem 2.2rem', borderRadius: '16px', background: 'linear-gradient(135deg, #007AFF 0%, #0056CC 100%)', color: '#fff', fontWeight: 700, boxShadow: '0 6px 24px rgba(0, 122, 255, 0.18)', margin: '1.2rem 0 2rem 0', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', transition: 'background 0.2s, box-shadow 0.2s' }}>
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
        <span>Download Resume (PDF)</span>
      </a>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 700, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '2rem 1.5rem', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.13)', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1, marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={{ display: 'block', color: '#007AFF', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.98rem' }}>Name *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required style={{ width: '100%', padding: '0.75rem 1rem', background: '#161b22', border: '1px solid #21262d', borderRadius: 12, color: '#e2e8f0', fontSize: '1rem' }} />
          </div>
          <div style={{ flex: 1, marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{ display: 'block', color: '#007AFF', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.98rem' }}>Email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required style={{ width: '100%', padding: '0.75rem 1rem', background: '#161b22', border: '1px solid #21262d', borderRadius: 12, color: '#e2e8f0', fontSize: '1rem' }} />
          </div>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="subject" style={{ display: 'block', color: '#007AFF', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.98rem' }}>Subject *</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" required style={{ width: '100%', padding: '0.75rem 1rem', background: '#161b22', border: '1px solid #21262d', borderRadius: 12, color: '#e2e8f0', fontSize: '1rem' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="message" style={{ display: 'block', color: '#007AFF', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.98rem' }}>Message *</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} placeholder="Tell me more about your inquiry..." required style={{ width: '100%', padding: '0.75rem 1rem', background: '#161b22', border: '1px solid #21262d', borderRadius: 12, color: '#e2e8f0', fontSize: '1rem', resize: 'vertical', minHeight: 120 }} />
        </div>
        <button type="submit" disabled={isSubmitting} style={{ background: 'linear-gradient(135deg, #007AFF 0%, #0056CC 100%)', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: 12, fontWeight: 600, cursor: 'pointer', fontSize: '1.1rem', width: '100%', marginTop: '0.5rem', transition: 'background 0.2s, box-shadow 0.2s' }}>
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <svg style={{ marginLeft: 8, verticalAlign: 'middle' }} width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact; 