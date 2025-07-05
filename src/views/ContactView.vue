<template>
  <div class="contact-view">
    <div class="container">
      <div class="content-wrapper">
        <header class="page-header animate-fade-in">
          <h1 class="animate-fade-in-up">Contact Studio 402</h1>
          <p class="subtitle animate-fade-in-up">Get in touch with our game development team</p>
        </header>

        <div class="contact-content">
          <!-- Contact Information -->
          <section class="contact-info-section animate-fade-in">
            <h2 class="animate-fade-in-up">Contact Information</h2>
            <div class="info-grid stagger-children">
              <div class="info-card">
                <h3>🎮 Studio 402</h3>
                <p>Independent game development studio</p>
                <p>Composed of college friends and roommates</p>
                <p>Website: <strong>studio402.com</strong></p>
              </div>
              
              <div class="info-card">
                <h3>📱 Current Projects</h3>
                <p><strong>Production.inc</strong> - Mobile game in development</p>
                <p>Future applications for college students</p>
                <p>Useful tools and utilities</p>
              </div>
              
              <div class="info-card">
                <h3>🎯 Specializations</h3>
                <p>Mobile game development</p>
                <p>Unity & native Android development</p>
                <p>UI/UX design for games</p>
              </div>
            </div>
          </section>

          <!-- Contact Form -->
          <section class="contact-form-section animate-fade-in">
            <h2 class="animate-fade-in-up">Send Us a Message</h2>
            <div class="form-instructions animate-fade-in-up">
              <p>📝 <strong>How to contact us:</strong> We use Google Forms for secure message handling. Click the button below to open our contact form in a new tab, or use the embedded form below.</p>
              
              <div class="form-actions">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdEXAMPLE_FORM_ID/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="external-form-button"
                >
                  📱 Open Contact Form in New Tab
                </a>
              </div>
            </div>

            <!-- Embedded Google Form -->
            <div class="embedded-form-container animate-fade-in">
              <div class="form-placeholder">
                <h3>🚧 Contact Form Setup</h3>
                <p><strong>Studio 402 Team:</strong> To complete the contact form setup, please:</p>
                <ol class="stagger-children">
                  <li>Create a Google Form at <a href="https://forms.google.com" target="_blank">forms.google.com</a></li>
                  <li>Include fields for: Name, Email, Category (dropdown), Subject, Message, Newsletter signup</li>
                  <li>Get the form's embed code or shareable link</li>
                  <li>Replace the placeholder URL in this component with your actual form URL</li>
                  <li>For embedding: Use the iframe embed code provided by Google Forms</li>
                </ol>
                
                <div class="temp-contact-info animate-fade-in">
                  <h4>🎯 Recommended Form Fields:</h4>
                  <ul class="stagger-children">
                    <li><strong>Name</strong> (Short answer, required)</li>
                    <li><strong>Email</strong> (Short answer, required, email validation)</li>
                    <li><strong>Category</strong> (Dropdown: General Inquiry, Technical Support, Business/Partnership, Game Feedback, Bug Report, Other)</li>
                    <li><strong>Subject</strong> (Short answer, required)</li>
                    <li><strong>Message</strong> (Paragraph, required)</li>
                    <li><strong>Newsletter</strong> (Checkbox: "Subscribe to Studio 402 updates")</li>
                  </ul>
                </div>

                <!-- Example of how the embedded form will look -->
                <div class="form-preview animate-fade-in">
                  <p><strong>📄 Form Preview:</strong> Once set up, your Google Form will appear here as an embedded iframe, allowing visitors to submit messages directly from your website.</p>
                  
                  <!-- Uncomment and replace with actual Google Form embed when ready -->
                  <!--
                  <iframe 
                    src="https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform?embedded=true" 
                    width="100%" 
                    height="800" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">
                    Loading contact form...
                  </iframe>
                  -->
                </div>
              </div>
            </div>
          </section>

          <!-- Alternative Contact Methods -->
          <section class="alternative-contact">
            <h2>Other Ways to Reach Us</h2>
            <div class="contact-methods">
              <div class="method-card">
                <h3>📧 Direct Email</h3>
                <p>For urgent matters or if the form doesn't work</p>
                <p><strong>Coming Soon</strong> - Email address will be added</p>
              </div>
              
              <div class="method-card">
                <h3>🐛 Bug Reports</h3>
                <p>Found a bug in our games? Use the form above with category "Bug Report"</p>
                <p>Include device info and steps to reproduce</p>
              </div>
              
              <div class="method-card">
                <h3>💼 Business Inquiries</h3>
                <p>Partnership opportunities, press inquiries, or collaborations</p>
                <p>Use the form above with category "Business/Partnership"</p>
              </div>
            </div>
          </section>
        </div>

        <div class="contact-footer">
          <p><strong>Studio 402</strong> | College Friends Making Games</p>
          <p>We read every message and appreciate your feedback and support!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  metaInfo: {
    title: 'Contact Us - Studio 402',
    meta: [
      { name: 'description', content: 'Contact Studio 402 game development studio. Get in touch about our games, report bugs, or inquire about partnerships using our secure contact form.' },
      { name: 'keywords', content: 'Studio 402, contact, game development, Production.inc, support, partnerships, indie games, contact form' }
    ]
  }
}
</script>

<style scoped>
.contact-view {
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

.contact-content {
  line-height: 1.6;
}

.contact-info-section,
.contact-form-section,
.alternative-contact {
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--secondary-color);
}

.contact-info-section h2,
.contact-form-section h2,
.alternative-contact h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.info-card p {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.contact-form {
  background-color: var(--bg-color);
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-instructions {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid var(--secondary-color);
  margin-bottom: 1.5rem;
}

.form-instructions p {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.external-form-button {
  display: inline-block;
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  text-align: center;
}

.external-form-button:hover {
  background-color: var(--primary-color);
  text-decoration: none;
  color: white;
}

.embedded-form-container {
  background-color: var(--bg-color);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-placeholder {
  padding: 2rem;
  text-align: left;
}

.form-placeholder h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.form-placeholder p {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.form-placeholder ol,
.form-placeholder ul {
  color: var(--text-color);
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.form-placeholder li {
  margin-bottom: 0.5rem;
}

.form-placeholder a {
  color: var(--secondary-color);
  text-decoration: none;
}

.form-placeholder a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.temp-contact-info {
  background-color: var(--bg-light);
  padding: 1.5rem;
  border-radius: 6px;
  margin: 1.5rem 0;
  border-left: 4px solid var(--accent-color);
}

.temp-contact-info h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.form-preview {
  background-color: var(--bg-light);
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid var(--primary-color);
}

.form-preview p {
  font-style: italic;
  color: var(--text-light);
}

/* Styles for the actual embedded Google Form (when implemented) */
.embedded-form-container iframe {
  width: 100%;
  border: none;
  border-radius: 6px;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.method-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.method-card p {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.contact-footer {
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  border-radius: 8px;
}

.contact-footer p {
  margin: 0.5rem 0;
  opacity: 0.9;
}

/* Mobile styles */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .contact-info-section,
  .contact-form-section,
  .alternative-contact {
    padding: 1.5rem;
  }
  
  .form-instructions,
  .form-placeholder,
  .temp-contact-info,
  .form-preview {
    padding: 1.5rem;
  }
  
  .external-form-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .info-grid,
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>
