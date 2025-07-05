<template>
  <div class="terms-view">
    <div class="container">
      <div class="content-wrapper">
        <header class="page-header animate-fade-in">
          <h1 class="animate-fade-in-up">Terms and Conditions</h1>
          <p class="last-updated animate-fade-in-up">Last updated: July 5, 2025</p>
        </header>

        <div class="legal-content">
          <section class="terms-section animate-fade-in">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using Studio 402's website (studio402.com) and our applications, including Production.inc, 
              you agree to be bound by these Terms and Conditions and all applicable laws and regulations. 
              If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>2. About Studio 402</h2>
            <p>
              Studio 402 is a creative game development studio composed of college friends and roommates. 
              We specialize in developing mobile games and useful applications for the college community and beyond.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of Studio 402's materials for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul class="stagger-children">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on our platforms</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>4. Game and Application Services</h2>
            <p>
              Our games and applications, including Production.inc, are provided "as is" for entertainment and utility purposes. 
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>5. User Accounts and Conduct</h2>
            <p>
              When creating an account with our services, you agree to provide accurate information and maintain the security of your account. 
              You are responsible for all activities that occur under your account.
            </p>
            <p>Prohibited conduct includes:</p>
            <ul>
              <li>Cheating, exploiting, or using unauthorized software</li>
              <li>Harassment or abuse of other users</li>
              <li>Sharing inappropriate content</li>
              <li>Attempting to hack or compromise our systems</li>
            </ul>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>6. Privacy and Data</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, 
              to understand our practices.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>7. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our games and applications are owned by Studio 402 and are protected by 
              international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>8. Disclaimers</h2>
            <p>
              The materials on Studio 402's platforms are provided on an 'as is' basis. Studio 402 makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>9. Limitations</h2>
            <p>
              In no event shall Studio 402 or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on Studio 402's platforms, even if Studio 402 or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>10. Revisions and Errata</h2>
            <p>
              The materials appearing on Studio 402's platforms could include technical, typographical, or photographic errors. 
              Studio 402 does not warrant that any of the materials on its platforms are accurate, complete, or current. 
              Studio 402 may make changes to the materials contained on its platforms at any time without notice.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>11. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable laws, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section class="terms-section animate-fade-in">
            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us through our 
              <router-link to="/contact">Contact page</router-link> or our <router-link to="/support">Support page</router-link>.
            </p>
          </section>
        </div>

        <div class="legal-footer">
          <p><strong>Studio 402</strong> | Game Development Studio | College Friends & Roommates</p>
          <p>Website: studio402.com | Current Project: Production.inc</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsView',
  metaInfo: {
    title: 'Terms and Conditions - Studio 402',
    meta: [
      { name: 'description', content: 'Terms and Conditions for Studio 402 game development studio and our applications including Production.inc mobile game.' },
      { name: 'keywords', content: 'Studio 402, terms and conditions, game development, Production.inc, mobile games, legal' }
    ]
  }
}
</script>

<style scoped>
.terms-view {
  padding: 2rem 0;
  min-height: 80vh;
  background-color: var(--bg-color);
}

.content-wrapper {
  max-width: 900px;
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

.last-updated {
  color: var(--text-light);
  font-style: italic;
  font-size: 1rem;
}

.legal-content {
  line-height: 1.7;
}

.terms-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--secondary-color);
}

.terms-section h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.terms-section p {
  margin-bottom: 1rem;
  color: var(--text-color);
  text-align: justify;
}

.terms-section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.terms-section li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.terms-section a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
}

.terms-section a:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

.legal-footer {
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  border-radius: 8px;
}

.legal-footer p {
  margin: 0.5rem 0;
  opacity: 0.9;
}

/* Mobile styles */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .terms-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .terms-section h2 {
    font-size: 1.2rem;
  }
  
  .terms-section p {
    text-align: left;
  }
}
</style>
