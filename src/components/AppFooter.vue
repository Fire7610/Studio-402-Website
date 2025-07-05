<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Studio Info -->
        <div class="footer-section">
          <h3>Studio 402</h3>
          <p>A creative studio composed of college friends and roommates, bringing innovative projects to life.</p>
          <div class="footer-social">
            <!-- Social links will be added in future versions -->
            <span class="coming-soon">Social links coming soon</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="footer-section">
          <h4>Legal</h4>
          <ul class="footer-links">
            <li><router-link to="/terms">Terms & Conditions</router-link></li>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/support">Support</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4>Contact</h4>
          <p>Domain: <strong>studio402.com</strong></p>
          <p>For inquiries, visit our <router-link to="/contact">Contact page</router-link></p>
          <p class="project-note">
            <small>Currently working on: <strong>Production.inc</strong></small>
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2025 Studio 402. All rights reserved.</p>
          <p class="footer-meta">
            Built with Vue.js | Summer 2025 | Version 0.2.0
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: var(--text-white);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0 2rem;
}

.footer-section h3 {
  color: var(--text-white);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.footer-section h4 {
  color: var(--text-white);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--text-white);
  opacity: 0.9;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--text-white);
  opacity: 0.8;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--text-white);
  opacity: 1;
  transform: translateX(2px);
}

.footer-social {
  margin-top: 1rem;
}

.coming-soon {
  color: var(--text-white);
  opacity: 0.6;
  font-size: 0.9rem;
  font-style: italic;
}

.project-note {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: var(--bg-light);
  border-radius: 4px;
  border-left: 3px solid var(--secondary-color);
  opacity: 0.2;
}

.project-note small {
  color: var(--text-white);
  opacity: 0.9;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  opacity: 0.3;
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  margin: 0;
  color: var(--text-white);
  opacity: 0.8;
}

.footer-meta {
  font-size: 0.9rem;
  color: var(--text-white);
  opacity: 0.6;
}

/* Mobile styles */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 0 1.5rem;
  }

  .footer-section {
    text-align: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
