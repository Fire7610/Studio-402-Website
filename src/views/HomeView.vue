<template>
  <div class="home">
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress"></div>
    
    <!-- Hero Section -->
    <div class="hero-section animate-fade-in">
      <div class="hero-background parallax"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge animate-bounce-in">🎮 Independent Game Studio</div>
          <h1 class="animate-fade-in-up">Studio 402</h1>
          <p class="hero-subtitle animate-fade-in-up">Where College Friends Create Amazing Games</p>
          <p class="hero-description animate-fade-in-up">
            We're a passionate indie game development studio born from friendship and fueled by creativity. 
            Our team of college friends and roommates transforms innovative ideas into engaging mobile experiences.
          </p>
          <div class="hero-actions animate-fade-in-up stagger-children">
            <router-link to="/about" class="btn btn-primary btn-lg hover-lift">
              <span>🏠 Our Story</span>
            </router-link>
            <router-link to="/projects" class="btn btn-secondary btn-lg hover-lift">
              <span>🎯 Our Games</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Studio Highlights -->
    <div class="highlights-section animate-fade-in">
      <div class="container">
        <h2 class="section-title animate-fade-in-up">What Makes Us Special</h2>
        <div class="highlights-grid stagger-children">
          <div class="highlight-card card card-hover animate-scale-in">
            <div class="highlight-icon animate-bounce">🎮</div>
            <h3>Mobile Game Development</h3>
            <p>Specializing in Unity-based mobile games with native Android development expertise.</p>
          </div>
          <div class="highlight-card card card-hover animate-scale-in">
            <div class="highlight-icon animate-bounce">👥</div>
            <h3>Friends Building Together</h3>
            <p>Our unique bond as college friends creates a collaborative environment where creativity thrives.</p>
          </div>
          <div class="highlight-card card card-hover animate-scale-in">
            <div class="highlight-icon animate-bounce">🚀</div>
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
import { animationManager } from '../utils/animations.js'

export default {
  name: 'HomeView',
  mounted() {
    // Initialize animations when component is mounted
    this.$nextTick(() => {
      animationManager.init()
      
      // Add parallax effect
      this.setupParallax()
    })
  },
  beforeUnmount() {
    // Cleanup animations when component is unmounted
    animationManager.cleanup()
    
    // Remove scroll listeners
    window.removeEventListener('scroll', this.handleParallax)
  },
  methods: {
    setupParallax() {
      let ticking = false
      
      this.handleParallax = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrolled = window.pageYOffset
            const parallaxElements = document.querySelectorAll('.parallax')
            
            parallaxElements.forEach(element => {
              const rate = scrolled * -0.5
              element.style.transform = `translateY(${rate}px)`
            })
            
            ticking = false
          })
          ticking = true
        }
      }
      
      window.addEventListener('scroll', this.handleParallax, { passive: true })
    }
  },
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
  position: relative;
}

/* Enhanced Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);
  color: var(--text-white);
  padding: 8rem 0 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-bottom: var(--spacing-xl);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all var(--transition);
}

.hero-badge:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.3);
}

.hero-section h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: var(--spacing-lg);
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
}

.hero-description {
  font-size: var(--font-size-lg);
  line-height: 1.6;
  margin-bottom: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

/* Section Styles */
.section-title {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  font-size: var(--font-size-4xl);
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Enhanced Highlights Section */
.highlights-section {
  padding: var(--spacing-3xl) 0;
  background: var(--bg-light);
  position: relative;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
}

.highlight-card {
  background: var(--bg-card);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}

.highlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(66, 153, 225, 0.1), transparent);
  transition: left var(--transition-slow);
}

.highlight-card:hover::before {
  left: 100%;
}

.highlight-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-xl);
  border-color: var(--secondary-color);
}

.highlight-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-lg);
  display: inline-block;
  transition: transform var(--transition);
}

.highlight-card:hover .highlight-icon {
  transform: scale(1.2) rotate(5deg);
}

.highlight-card h3 {
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
  font-size: var(--font-size-xl);
}

.highlight-card p {
  color: var(--text-light);
  line-height: 1.6;
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
  padding: var(--spacing-3xl) 0;
  background: var(--bg-color);
}

.project-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.project-info h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-description {
  font-size: var(--font-size-lg);
  line-height: 1.7;
  margin-bottom: var(--spacing-xl);
  color: var(--text-light);
}

.project-features {
  list-style: none;
  margin-bottom: var(--spacing-xl);
}

.project-features li {
  padding: var(--spacing-sm) 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-lg);
  transition: all var(--transition);
}

.project-features li:hover {
  transform: translateX(8px);
  color: var(--secondary-color);
}

.project-features li::before {
  content: '✓';
  color: var(--success-color);
  font-weight: bold;
  font-size: var(--font-size-xl);
}

.project-status {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.status-badge {
  background: linear-gradient(135deg, var(--warning-color), #f6ad55);
  color: var(--text-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--font-size-sm);
  animation: pulse 2s infinite;
}

.status-text {
  color: var(--text-light);
  font-weight: 500;
}

.project-visual {
  position: relative;
}

.project-placeholder {
  background: linear-gradient(135deg, var(--bg-light), var(--bg-lighter));
  border: 2px dashed var(--border-color);
  border-radius: var(--radius-xl);
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}

.project-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(66, 153, 225, 0.1), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.project-placeholder:hover {
  transform: scale(1.02);
  border-color: var(--secondary-color);
  box-shadow: var(--shadow-lg);
}

.placeholder-content {
  text-align: center;
  z-index: 1;
  position: relative;
}

.game-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.placeholder-content h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
}

.placeholder-content p {
  color: var(--text-light);
  margin-bottom: var(--spacing-sm);
}

.placeholder-content small {
  color: var(--text-lighter);
  font-style: italic;
}

/* Call to Action Section */
.cta-section {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: var(--text-white);
  padding: var(--spacing-3xl) 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  font-weight: 800;
}

.cta-section p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2xl);
  opacity: 0.9;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .project-showcase {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .project-visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 6rem 0 4rem;
    min-height: 80vh;
  }
  
  .hero-section h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-xl);
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .section-title {
    font-size: var(--font-size-3xl);
  }
  
  .project-info h2 {
    font-size: var(--font-size-3xl);
  }
  
  .cta-section h2 {
    font-size: var(--font-size-3xl);
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 4rem 0 3rem;
  }
  
  .hero-badge {
    font-size: var(--font-size-xs);
    padding: var(--spacing-xs) var(--spacing-md);
  }
  
  .hero-description,
  .project-description,
  .cta-section p {
    font-size: var(--font-size-base);
  }
  
  .highlight-card {
    padding: var(--spacing-xl);
  }
  
  .highlight-icon {
    font-size: 2.5rem;
  }
}

/* Dark theme adjustments */
[data-theme="dark"] .hero-section {
  background: linear-gradient(135deg, #0f1419 0%, #1a202c 50%, #2d3748 100%);
}

[data-theme="dark"] .highlights-section {
  background: var(--bg-color);
}

[data-theme="dark"] .project-placeholder {
  background: linear-gradient(135deg, var(--bg-light), var(--bg-lighter));
  border-color: var(--border-dark);
}

/* Print styles */
@media print {
  .scroll-progress,
  .hero-background {
    display: none !important;
  }
  
  .hero-section {
    background: none !important;
    color: var(--text-color) !important;
    padding: 2rem 0 !important;
  }
  
  .hero-badge {
    background: var(--bg-light) !important;
    color: var(--text-color) !important;
  }
  
  .cta-section {
    background: none !important;
    color: var(--text-color) !important;
  }
  
  .highlight-card,
  .project-placeholder {
    box-shadow: none !important;
    border: 1px solid var(--border-color) !important;
  }
}
</style>