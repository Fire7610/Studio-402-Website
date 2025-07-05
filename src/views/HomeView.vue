<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">🎮 Independent Game Studio</div>
          <h1>Studio 402</h1>
          <p class="hero-subtitle">Where College Friends Create Amazing Games</p>
          <p class="hero-description">
            We're a passionate indie game development studio born from friendship and fueled by creativity. 
            Our team of college friends and roommates transforms innovative ideas into engaging mobile experiences.
          </p>
          <div class="hero-actions">
            <router-link to="/about" class="btn-primary">
              <span>🏠 Our Story</span>
            </router-link>
            <router-link to="/projects" class="btn-secondary">
              <span>🎯 Our Games</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Studio Highlights -->
    <div class="highlights-section">
      <div class="container">
        <h2>What Makes Us Special</h2>
        <div class="highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon">🎮</div>
            <h3>Mobile Game Development</h3>
            <p>Specializing in Unity-based mobile games with native Android development expertise.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">👥</div>
            <h3>Friends Building Together</h3>
            <p>Our unique bond as college friends creates a collaborative environment where creativity thrives.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🚀</div>
            <h3>Innovation & Quality</h3>
            <p>Every project meets high standards with proper legal compliance and exceptional user experience.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Project Showcase -->
    <div class="current-project-section">
      <div class="container">
        <div class="project-showcase">
          <div class="project-info">
            <div class="project-badge">🔥 Coming Soon</div>
            <h2>Production.inc</h2>
            <p class="project-description">
              Our flagship mobile game that's about to change the indie gaming landscape. 
              Production.inc combines strategy, creativity, and engaging gameplay mechanics 
              designed specifically for mobile platforms.
            </p>
            <div class="project-features">
              <div class="feature-item">
                <span class="feature-icon">📱</span>
                <span>Mobile-First Design</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎨</span>
                <span>Stunning Graphics</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">⚡</span>
                <span>Smooth Performance</span>
              </div>
            </div>
            <div class="project-status">
              <span class="status-badge">🛠️ In Development</span>
              <span class="status-text">Expected Launch: 2025</span>
            </div>
          </div>
          <div class="project-visual">
            <div class="project-placeholder">
              <div class="placeholder-content">
                <div class="game-icon">🎮</div>
                <h3>Production.inc</h3>
                <p>Game Preview</p>
                <small>Screenshots coming soon</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Join Our Journey?</h2>
          <p>Follow Studio 402 as we bring Production.inc to life and create the next generation of mobile games.</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary">
              <span>📞 Get In Touch</span>
            </router-link>
            <router-link to="/about" class="btn-outline">
              <span>📖 Learn More</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  metaInfo: {
    title: 'Studio 402 - Independent Game Development Studio',
    meta: [
      { name: 'description', content: 'Studio 402 is an independent game development studio made up of college friends creating innovative mobile games. Currently developing Production.inc - coming 2025.' },
      { name: 'keywords', content: 'Studio 402, indie game development, mobile games, Production.inc, Unity games, college friends, game studio' },
      { property: 'og:title', content: 'Studio 402 - Independent Game Development Studio' },
      { property: 'og:description', content: 'College friends creating amazing mobile games. Currently developing Production.inc - our flagship mobile game coming 2025.' },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Studio 402 - Independent Game Development Studio' },
      { property: 'twitter:description', content: 'College friends creating amazing mobile games. Currently developing Production.inc.' }
    ]
  }
}
</script>

<style scoped>
.home {
  padding: 0;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
}

.hero-content h1 {
  color: white;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary,
.btn-outline {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  border: 2px solid transparent;
}

.btn-primary {
  background: white;
  color: var(--primary-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background: var(--bg-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-outline:hover {
  background: var(--primary-color);
  color: white;
}

/* Highlights Section */
.highlights-section {
  padding: 5rem 0;
  background: var(--bg-light);
}

.highlights-section h2 {
  text-align: center;
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.highlight-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.highlight-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.highlight-card h3 {
  color: var(--primary-color);
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.highlight-card p {
  color: var(--text-color);
  line-height: 1.6;
}

/* Current Project Section */
.current-project-section {
  padding: 5rem 0;
  background: white;
}

.project-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.project-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent-color), #ff6b6b);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.project-showcase h2 {
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.project-description {
  color: var(--text-color);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.project-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-color);
  font-weight: 500;
}

.feature-icon {
  font-size: 1.2rem;
}

.project-status {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.status-badge {
  background: var(--secondary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.status-text {
  color: var(--text-light);
  font-size: 0.9rem;
}

.project-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-placeholder {
  width: 300px;
  height: 400px;
  background: linear-gradient(135deg, var(--bg-light) 0%, var(--border-color) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 3px solid var(--border-color);
}

.placeholder-content {
  text-align: center;
  color: var(--text-light);
}

.game-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.placeholder-content h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.placeholder-content p {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.placeholder-content small {
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Call to Action Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-section .btn-primary {
  background: white;
  color: var(--primary-color);
}

.cta-section .btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-section .btn-outline:hover {
  background: white;
  color: var(--primary-color);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary,
  .btn-outline {
    width: 100%;
    max-width: 300px;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .project-showcase {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .project-placeholder {
    width: 250px;
    height: 300px;
  }
  
  .highlights-section h2,
  .project-showcase h2,
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>