import React from 'react';
import './khub.css';
import khubImg from '../assets/khub.jpg';

export default function Khub() {
  return (
    <div className="khub-page">
      {/* Hero Section */}
      <section className="khub-hero">
        <div className="khub-hero-content">
          <div className="khub-badge">
            <span>🧠 Knowledge Hub</span>
          </div>
          <h1>K-Hub</h1>
          <p className="khub-subtitle">Empowering Innovation Through Knowledge</p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="khub-info">
        <div className="khub-container">
          <div className="khub-grid">
            <div className="khub-image-wrapper">
              <div className="khub-image-glow"></div>
              <img src={khubImg} alt="K-Hub" className="khub-image" />
            </div>
            
            <div className="khub-content">
              <h2>About K-Hub</h2>
              <p>
                K-Hub fosters innovation and research through student-led projects,
                mentorship, and technical workshops. We provide a collaborative
                environment where ideas transform into impactful solutions.
              </p>
              
              <div className="khub-features">
                <div className="feature-item">
                  <div className="feature-icon">📚</div>
                  <div>
                    <h3>Learning Resources</h3>
                    <p>Access curated materials and documentation</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <div>
                    <h3>Mentorship</h3>
                    <p>Connect with experienced professionals</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🛠️</div>
                  <div>
                    <h3>Workshops</h3>
                    <p>Hands-on technical training sessions</p>
                  </div>
                </div>
              </div>
              
              <div className="khub-links">
                <a href="/khub-projects" className="khub-link-primary">
                  Explore K-Hub Projects →
                </a>
                <a href="/khub-stats" className="khub-link-secondary">
                  View K-Hub Stats →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="khub-stats-section">
        <div className="khub-container">
          <h2 className="stats-title">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Workshops Conducted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}