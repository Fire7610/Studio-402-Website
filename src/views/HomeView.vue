<template>
  <div class="home">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Welcome to Studio 402</h1>
          <p class="hero-subtitle">A creative studio composed of college friends and roommates</p>
          <p class="hero-description">
            We bring innovative projects to life through collaboration, creativity, and friendship.
          </p>
          <div class="hero-actions">
            <router-link to="/about" class="btn-primary">Learn More About Us</router-link>
            <router-link to="/projects" class="btn-secondary">View Our Projects</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="container">
        <h2>What We Do</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Creative Projects</h3>
            <p>We develop innovative applications and creative solutions that make a difference.</p>
          </div>
          <div class="feature-card">
            <h3>Team Collaboration</h3>
            <p>Our strength comes from the unique bond of college friends working together.</p>
          </div>
          <div class="feature-card">
            <h3>Quality Focus</h3>
            <p>Every project meets high standards with proper legal compliance and user experience.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="current-project">
      <div class="container">
        <div class="project-highlight">
          <h2>Current Project</h2>
          <div class="project-card">
            <h3>Production.inc</h3>
            <p>Our upcoming application that we're excited to share with the world. Stay tuned for more details!</p>
            <p class="project-status">Status: In Development</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  padding: 0;
}

.hero-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-content h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background-color: white;
  color: var(--primary-color);
}

.btn-primary:hover {
  background-color: var(--bg-light);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background-color: white;
  color: var(--primary-color);
}

.features-section {
  padding: 4rem 0;
  background-color: var(--bg-light);
}

.features-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--primary-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: var(--text-color);
  line-height: 1.6;
}

.current-project {
  padding: 4rem 0;
  background-color: white;
}

.project-highlight {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.project-highlight h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.project-card {
  background-color: var(--bg-light);
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid var(--secondary-color);
}

.project-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.project-card p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--text-color);
}

.project-status {
  font-weight: 600;
  color: var(--secondary-color);
  font-size: 1.1rem;
}

/* Mobile styles */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 300px;
  }

  .features-section h2,
  .project-highlight h2 {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>