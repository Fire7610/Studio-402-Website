<template>
  <div class="support-view">
    <div class="container">
      <div class="content-wrapper">
        <header class="page-header animate-fade-in">
          <h1 class="animate-fade-in-up">Support Center</h1>
          <p class="subtitle animate-fade-in-up">Get help with Studio 402 games and applications</p>
        </header>

        <div class="support-content">
          <!-- Quick Help Section -->
          <section class="support-section animate-fade-in">
            <h2 class="animate-fade-in-up">🎮 Game Support</h2>
            <div class="support-grid stagger-children">
              <div class="support-card">
                <h3>Production.inc</h3>
                <p>Our flagship mobile game currently in development</p>
                <ul>
                  <li>Game mechanics and controls</li>
                  <li>Progress and achievements</li>
                  <li>Performance optimization</li>
                  <li>Bug reports and feedback</li>
                </ul>
              </div>
              
              <div class="support-card">
                <h3>Future Games</h3>
                <p>Support for upcoming Studio 402 game releases</p>
                <ul>
                  <li>Beta testing opportunities</li>
                  <li>Early access programs</li>
                  <li>Community feedback</li>
                  <li>Feature requests</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Technical Support -->
          <section class="support-section animate-fade-in">
            <h2 class="animate-fade-in-up">🔧 Technical Support</h2>
            <div class="faq-list stagger-children">
              <div class="faq-item">
                <h3>Installation Issues</h3>
                <p>
                  Having trouble installing our games? Make sure your device meets the minimum requirements 
                  and you have sufficient storage space. Try restarting your device and checking for system updates.
                </p>
              </div>
              
              <div class="faq-item">
                <h3>Performance Problems</h3>
                <p>
                  If you're experiencing lag or crashes, try closing other applications, clearing the game cache, 
                  or lowering the graphics settings if available. Contact us if issues persist.
                </p>
              </div>
              
              <div class="faq-item">
                <h3>Account and Progress</h3>
                <p>
                  Lost your game progress? We recommend connecting your account to cloud save services when available. 
                  Contact our support team with your device information for assistance.
                </p>
              </div>
              
              <div class="faq-item">
                <h3>Compatibility</h3>
                <p>
                  Our games are designed to work on modern mobile devices. Check the specific system requirements 
                  for each game in the app store listings.
                </p>
              </div>
            </div>
          </section>

          <!-- Contact Support -->
          <section class="support-section">
            <h2>📞 Contact Support</h2>
            <div class="contact-methods">
              <div class="contact-card">
                <h3>General Support</h3>
                <p>For general questions, bug reports, or feedback about our games and applications.</p>
                <router-link to="/contact" class="support-button">Contact Us</router-link>
              </div>
              
              <div class="contact-card">
                <h3>Technical Issues</h3>
                <p>Experiencing crashes, performance issues, or technical difficulties with our games.</p>
                <router-link to="/contact" class="support-button">Report Technical Issue</router-link>
              </div>
              
              <div class="contact-card">
                <h3>Business Inquiries</h3>
                <p>Partnership opportunities, press inquiries, or collaboration requests.</p>
                <router-link to="/contact" class="support-button">Business Contact</router-link>
              </div>
            </div>
          </section>

          <!-- System Requirements -->
          <section class="support-section animate-fade-in">
            <h2 class="animate-fade-in-up">📱 System Requirements</h2>
            <div class="requirements-grid stagger-children">
              <div class="requirements-card">
                <h3>Production.inc</h3>
                <div class="requirements-list">
                  <h4>Minimum Requirements:</h4>
                  <ul>
                    <li>Android 7.0 (API level 24) or higher</li>
                    <li>2GB RAM</li>
                    <li>1GB storage space</li>
                    <li>OpenGL ES 3.0 support</li>
                  </ul>
                  
                  <h4>Recommended:</h4>
                  <ul>
                    <li>Android 9.0 or higher</li>
                    <li>4GB RAM</li>
                    <li>2GB storage space</li>
                    <li>Stable internet connection</li>
                  </ul>
                </div>
              </div>
              
              <div class="requirements-card">
                <h3>Future Applications</h3>
                <p>System requirements for upcoming Studio 402 applications will be listed here as they become available.</p>
                <p>We aim to support a wide range of devices to ensure accessibility for all users.</p>
              </div>
            </div>
          </section>

          <!-- Developer Info -->
          <section class="support-section animate-fade-in">
            <h2 class="animate-fade-in-up">👥 About Our Support</h2>
            <div class="developer-info animate-fade-in-up">
              <p>
                Studio 402 is a small game development studio run by college friends and roommates. 
                We're passionate about creating great games and helpful applications, and we're committed to providing 
                excellent support for our users.
              </p>
              <p>
                As a small team, we may not be able to respond immediately to all inquiries, but we read every message 
                and do our best to help. Thank you for your patience and for supporting indie game development!
              </p>
            </div>
          </section>
        </div>

        <div class="support-footer">
          <p><strong>Studio 402 Support</strong> | Helping gamers since 2025</p>
          <p>Website: studio402.com | Current focus: Production.inc mobile game</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportView',
  metaInfo: {
    title: 'Support Center - Studio 402',
    meta: [
      { name: 'description', content: 'Get support for Studio 402 games and applications. Technical help, FAQs, and contact information for Production.inc and other games.' },
      { name: 'keywords', content: 'Studio 402, game support, technical help, Production.inc, mobile games, indie games, FAQ' }
    ]
  }
}
</script>

<style scoped>
.support-view {
  padding: 2rem 0;
  min-height: 80vh;
  background-color: var(--bg-color);
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--border-color);
}

.page-header h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
}

.support-content {
  line-height: 1.6;
}

.support-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--secondary-color);
}

.support-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.support-card {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.support-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.support-card p {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.support-card ul {
  padding-left: 1.5rem;
}

.support-card li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.faq-item p {
  color: var(--text-color);
  line-height: 1.6;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.contact-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.contact-card p {
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.support-button {
  display: inline-block;
  background-color: var(--secondary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.support-button:hover {
  background-color: var(--primary-color);
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.requirements-card {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.requirements-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.requirements-list h4 {
  color: var(--primary-color);
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
}

.requirements-list ul {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.requirements-list li {
  margin-bottom: 0.3rem;
  color: var(--text-color);
}

.developer-info {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.developer-info p {
  color: var(--text-color);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.support-footer {
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  border-radius: 8px;
}

.support-footer p {
  margin: 0.5rem 0;
  opacity: 0.9;
}

/* Mobile styles */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .support-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .support-grid,
  .contact-methods,
  .requirements-grid {
    grid-template-columns: 1fr;
  }
}
</style>
