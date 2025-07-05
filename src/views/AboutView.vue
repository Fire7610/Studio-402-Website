<template>
  <div class="about-view">
    <div class="container">
      <!-- Hero Section -->
      <div class="about-hero animate-fade-in">
        <h1 class="animate-fade-in-up">About Studio 402</h1>
        <p class="hero-subtitle animate-fade-in-up">The Story Behind the Studio</p>
      </div>

      <!-- Studio Story -->
      <section class="studio-story animate-fade-in">
        <div class="story-content">
          <h2 class="animate-slide-in-left">🏠 Our Origin Story</h2>
          <div class="story-text stagger-children">
            <p class="animate-fade-in-up">
              Studio 402 was born from a simple idea: what if college friends and roommates combined 
              their passion for gaming with their technical skills to create something amazing? 
              Our studio represents the unique bond between friends who decided to turn their shared 
              dreams into reality.
            </p>
            <p class="animate-fade-in-up">
              Named after our college apartment number, Studio 402 embodies the spirit of collaboration, 
              creativity, and friendship that started in those late-night coding sessions and gaming marathons. 
              What began as hobby projects has evolved into a dedicated game development studio focused on 
              creating engaging mobile experiences.
            </p>
            <p class="animate-fade-in-up">
              We believe that the best games come from passionate teams who understand both the technical 
              challenges and the joy of gaming. Our unique perspective as friends working together allows 
              us to create games that are both technically sound and genuinely fun.
            </p>
          </div>
        </div>
      </section>

      <!-- Mission & Values -->
      <section class="mission-values">
        <h2>🎯 Our Mission & Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🎮</div>
            <h3>Player-First Design</h3>
            <p>Every decision we make prioritizes the player experience. We create games that are intuitive, engaging, and genuinely enjoyable.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Friendship & Collaboration</h3>
            <p>Our foundation as friends drives our collaborative approach. We believe the best ideas come from open communication and mutual respect.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">⚡</div>
            <h3>Quality & Innovation</h3>
            <p>We're committed to delivering high-quality games with innovative features while maintaining proper legal compliance and technical excellence.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🚀</div>
            <h3>Continuous Growth</h3>
            <p>As an indie studio, we're always learning and evolving. We embrace new technologies and feedback to improve our craft.</p>
          </div>
        </div>
      </section>

      <!-- What We Do -->
      <section class="what-we-do">
        <div class="content-wrapper">
          <div class="text-content">
            <h2>🛠️ What We Specialize In</h2>
            <div class="specialties-list">
              <div class="specialty-item">
                <span class="specialty-icon">📱</span>
                <div class="specialty-text">
                  <h4>Mobile Game Development</h4>
                  <p>Unity-based mobile games optimized for Android platforms with smooth performance and engaging gameplay.</p>
                </div>
              </div>
              <div class="specialty-item">
                <span class="specialty-icon">🎨</span>
                <div class="specialty-text">
                  <h4>UI/UX Design</h4>
                  <p>User-centered design that prioritizes accessibility, visual appeal, and intuitive navigation.</p>
                </div>
              </div>
              <div class="specialty-item">
                <span class="specialty-icon">⚙️</span>
                <div class="specialty-text">
                  <h4>Technical Implementation</h4>
                  <p>Robust code architecture, performance optimization, and integration with modern development practices.</p>
                </div>
              </div>
              <div class="specialty-item">
                <span class="specialty-icon">📋</span>
                <div class="specialty-text">
                  <h4>Legal Compliance</h4>
                  <p>Proper legal documentation, privacy policies, and app store compliance for professional publishing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <h2>👥 The Studio 402 Team</h2>
        <div class="team-intro">
          <p>
            We're a close-knit team of college friends who transformed our shared passion for gaming 
            into a professional game development studio. Each member brings unique skills and perspectives 
            that contribute to our collaborative success.
          </p>
        </div>
        
        <div class="team-placeholder">
          <div class="placeholder-content">
            <div class="team-icon">👥</div>
            <h3>Meet the Team</h3>
            <p>Individual team member profiles coming soon!</p>
            <p class="placeholder-note">
              We're working on creating detailed profiles that showcase each team member's 
              contributions, skills, and role in making Studio 402 games come to life.
            </p>
          </div>
        </div>
      </section>

      <!-- Studio Culture -->
      <section class="studio-culture">
        <h2>🌟 Our Studio Culture</h2>
        <div class="culture-grid">
          <div class="culture-item">
            <h4>🎯 Focused Development</h4>
            <p>We believe in doing fewer things exceptionally well rather than spreading ourselves thin.</p>
          </div>
          <div class="culture-item">
            <h4>🔄 Iterative Improvement</h4>
            <p>We constantly refine our games based on feedback, testing, and our own gameplay experiences.</p>
          </div>
          <div class="culture-item">
            <h4>📚 Continuous Learning</h4>
            <p>As technology evolves, we stay current with new tools, techniques, and industry best practices.</p>
          </div>
          <div class="culture-item">
            <h4>🎮 Gamers at Heart</h4>
            <p>We're not just developers—we're passionate gamers who understand what makes games truly engaging.</p>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="about-cta">
        <div class="cta-content">
          <h2>Ready to Connect?</h2>
          <p>We'd love to hear from fellow gamers, developers, or anyone interested in our journey!</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary">
              <span>📞 Get In Touch</span>
            </router-link>
            <router-link to="/projects" class="btn-secondary">
              <span>🎮 See Our Work</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { animationManager } from '../utils/animations.js'

export default {
  name: 'AboutView',
  mounted() {
    this.$nextTick(() => {
      animationManager.init()
    })
  },
  metaInfo: {
    title: 'About Us - Studio 402',
    meta: [
      { name: 'description', content: 'Learn about Studio 402, an independent game development studio made up of college friends creating innovative mobile games. Our story, mission, and team culture.' },
      { name: 'keywords', content: 'Studio 402, about us, indie game studio, college friends, game developers, team, mission, values, mobile games' },
      { property: 'og:title', content: 'About Studio 402 - Independent Game Development Studio' },
      { property: 'og:description', content: 'Meet the college friends behind Studio 402, creating innovative mobile games with passion and friendship at our core.' },
      { property: 'og:type', content: 'website' }
    ]
  }
}
</script>

<style scoped>
.about-view {
  padding: 2rem 0;
  min-height: 80vh;
  background-color: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* About Hero */
.about-hero {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.about-hero h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 500;
}

/* Studio Story */
.studio-story {
  padding: 3rem 0;
  background: var(--bg-card);
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.story-content {
  padding: 2rem;
}

.studio-story h2 {
  color: var(--primary-color);
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
}

.story-text p {
  color: var(--text-color);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
}

/* Mission & Values */
.mission-values {
  padding: 3rem 0;
  margin-bottom: 3rem;
}

.mission-values h2 {
  color: var(--primary-color);
  font-size: 2.2rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  background: var(--bg-card);
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid var(--secondary-color);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.value-card h3 {
  color: var(--primary-color);
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.value-card p {
  color: var(--text-color);
  line-height: 1.6;
}

/* What We Do */
.what-we-do {
  padding: 3rem 0;
  background: var(--bg-light);
  border-radius: 12px;
  margin-bottom: 3rem;
}

.content-wrapper {
  padding: 2rem;
}

.what-we-do h2 {
  color: var(--primary-color);
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 700;
}

.specialties-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.specialty-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.specialty-item:hover {
  transform: translateX(10px);
}

.specialty-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.specialty-text h4 {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.specialty-text p {
  color: var(--text-color);
  line-height: 1.6;
}

/* Team Section */
.team-section {
  padding: 3rem 0;
  margin-bottom: 3rem;
  text-align: center;
}

.team-section h2 {
  color: var(--primary-color);
  font-size: 2.2rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

.team-intro {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.team-intro p {
  color: var(--text-color);
  font-size: 1.1rem;
  line-height: 1.7;
}

.team-placeholder {
  background: var(--bg-card);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px dashed var(--border-color);
}

.placeholder-content {
  color: var(--text-light);
}

.team-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.placeholder-content h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.placeholder-content p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.placeholder-note {
  font-style: italic;
  font-size: 0.95rem;
  max-width: 500px;
  margin: 0 auto;
}

/* Studio Culture */
.studio-culture {
  padding: 3rem 0;
  background: var(--bg-card);
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.studio-culture h2 {
  color: var(--primary-color);
  font-size: 2.2rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  padding: 0 2rem;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.culture-item {
  padding: 1.5rem;
  background: var(--bg-light);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.culture-item:hover {
  transform: translateY(-3px);
}

.culture-item h4 {
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.culture-item p {
  color: var(--text-color);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* About CTA */
.about-cta {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  color: white;
  text-align: center;
  border-radius: 12px;
}

.cta-content h2 {
  color: white;
  font-size: 2.2rem;
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
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-primary {
  background: var(--bg-card);
  color: var(--primary-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background: var(--bg-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-white);
  border: 2px solid var(--border-color);
  opacity: 0.9;
}

.btn-secondary:hover {
  background: var(--bg-light);
  border-color: var(--secondary-color);
  transform: translateY(-2px);
  opacity: 1;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .studio-story,
  .content-wrapper,
  .studio-culture {
    padding: 1.5rem;
  }
  
  .story-content {
    padding: 1rem;
  }
  
  .mission-values h2,
  .what-we-do h2,
  .team-section h2,
  .studio-culture h2,
  .cta-content h2 {
    font-size: 1.8rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .specialty-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .culture-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
  
  .story-text p {
    text-align: left;
  }
}
</style>