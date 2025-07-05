<template>
  <div class="privacy-view">
    <div class="container">
      <div class="content-wrapper">
        <header class="page-header">
          <h1>Privacy Policy</h1>
          <p class="last-updated">Last updated: July 5, 2025</p>
        </header>

        <div class="legal-content">
          <section class="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              Studio 402 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website (studio402.com) and use our applications, 
              including our mobile game Production.inc.
            </p>
          </section>

          <section class="privacy-section">
            <h2>2. Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and email address (when contacting us or creating accounts)</li>
              <li>Game progress and achievements in our applications</li>
              <li>Device information and identifiers</li>
              <li>Usage data and analytics</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you use our services, we may automatically collect:</p>
            <ul>
              <li>Device type, operating system, and version</li>
              <li>IP address and general location information</li>
              <li>App usage statistics and performance data</li>
              <li>Crash reports and error logs</li>
            </ul>
          </section>

          <section class="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>To provide and maintain our games and applications</li>
              <li>To improve user experience and game functionality</li>
              <li>To respond to user inquiries and provide support</li>
              <li>To analyze usage patterns and optimize performance</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section class="privacy-section">
            <h2>4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
              <li><strong>Service providers:</strong> With trusted third-party services that help us operate our games (analytics, cloud storage)</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In the event of a merger or acquisition</li>
            </ul>
          </section>

          <section class="privacy-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              or electronic storage is 100% secure.
            </p>
          </section>

          <section class="privacy-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section class="privacy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from 
              children under 13. If we become aware that we have collected personal information from a child under 13, 
              we will take steps to remove that information.
            </p>
          </section>

          <section class="privacy-section">
            <h2>8. Third-Party Services</h2>
            <p>
              Our games and applications may contain links to third-party websites or integrate with third-party services. 
              We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section class="privacy-section">
            <h2>9. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
            </ul>
            <p>To exercise these rights, please contact us through our <router-link to="/contact">Contact page</router-link>.</p>
          </section>

          <section class="privacy-section">
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on computers located outside of your state, province, 
              country, or other governmental jurisdiction where data protection laws may differ.
            </p>
          </section>

          <section class="privacy-section">
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section class="privacy-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Through our <router-link to="/contact">Contact page</router-link></li>
              <li>Via our <router-link to="/support">Support page</router-link></li>
              <li>Website: studio402.com</li>
            </ul>
          </section>
        </div>

        <div class="legal-footer">
          <p><strong>Studio 402</strong> | Game Development Studio</p>
          <p>Committed to protecting your privacy while delivering great gaming experiences</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyView',
  metaInfo: {
    title: 'Privacy Policy - Studio 402',
    meta: [
      { name: 'description', content: 'Privacy Policy for Studio 402 game development studio. Learn how we protect your data in our games including Production.inc.' },
      { name: 'keywords', content: 'Studio 402, privacy policy, data protection, game development, Production.inc, mobile games' }
    ]
  }
}
</script>

<style scoped>
.privacy-view {
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

.privacy-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--secondary-color);
}

.privacy-section h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.privacy-section h3 {
  color: var(--primary-color);
  margin: 1.5rem 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.privacy-section p {
  margin-bottom: 1rem;
  color: var(--text-color);
  text-align: justify;
}

.privacy-section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.privacy-section li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.privacy-section a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
}

.privacy-section a:hover {
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
  
  .privacy-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.2rem;
  }
  
  .privacy-section p {
    text-align: left;
  }
}
</style>
