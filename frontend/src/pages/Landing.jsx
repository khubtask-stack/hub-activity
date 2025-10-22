import React from 'react';
import './landing.css';
import khubLogo from '../assets/khub-logo.png'; // added import
// ...existing code...
export default function Landing() {
    return (
        <div className="landing-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background"></div>

                <div className="hero-content">
                    <div className="hero-grid">
                        {/* Text Content */}
                        <div className="hero-text">
                            <div className="hero-badge">
                                <span>🚀 Innovation Starts Here</span>
                            </div>

                            <h1 className="hero-title">
                                Welcome, This is
                                <span className="hero-gradient-text">Durga Bhavani Gunnam</span>
                            </h1>

                            <p className="hero-description">
                                Discover, build, and showcase groundbreaking ideas. Join a community of innovators shaping the future.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="hero-image-wrapper">
                            <div className="hero-image-glow"></div>
                            <div className="hero-image-card">
                                <div className="hero-image-content">
                                    {/* replaced emoji with khub logo */}
                                    <img src={khubLogo} alt="K-Hub logo" className="hero-logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Navigation Cards */}
            <section className="nav-section">
                <div className="nav-header">
                    <h2>Explore Our Platforms</h2>
                    <p>Choose your path to innovation</p>
                </div>

                <div className="nav-cards">
                    {/* K-Hub Card */}
                    <a href="/khub" className="nav-card card-blue">
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <div className="card-icon icon-blue">
                                <span>🧠</span>
                            </div>
                            <h3>K-Hub</h3>
                            <p>Access curated knowledge resources and learning materials to fuel your innovation journey.</p>
                            <div className="card-link">
                                Explore <span>→</span>
                            </div>
                        </div>
                    </a>

                    {/* Project Nest Card */}
                    <a href="/project-nest" className="nav-card card-purple">
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <div className="card-icon icon-purple">
                                <span>🏗️</span>
                            </div>
                            <h3>Project Nest</h3>
                            <p>Build and showcase your innovative projects in a collaborative environment.</p>
                            <div className="card-link">
                                Start Building <span>→</span>
                            </div>
                        </div>
                    </a>

                    {/* Hackathons Card */}
                    <a href="/hackathons" className="nav-card card-orange">
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <div className="card-icon icon-orange">
                                <span>🏆</span>
                            </div>
                            <h3>Hackathons</h3>
                            <p>Compete, collaborate, and create solutions to real-world challenges.</p>
                            <div className="card-link">
                                Join Events <span>→</span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>


        </div>
    );
}