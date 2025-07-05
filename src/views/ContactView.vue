<template>
  <div class="contact-view">
    <div class="container">
      <div class="content-wrapper">
        <h1>Contact Studio 402</h1>
        <p class="coming-soon">Contact form will be added in Version 0.3.0</p>
        <div class="placeholder-content">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! This page will feature a contact form and our contact information.</p>
          
          <div class="contact-preview">
            <h3>Contact Information:</h3>
            <div class="contact-info">
              <p><strong>Studio:</strong> Studio 402</p>
              <p><strong>Website:</strong> studio402.com</p>
              <p><strong>Team:</strong> College friends and roommates</p>
              <p><strong>Current Project:</strong> Production.inc</p>
            </div>
            
            <h3>Contact Form (Coming Soon):</h3>
            <div class="form-preview">
              <div class="form-field">
                <label>Name *</label>
                <input type="text" placeholder="Your name" disabled>
              </div>
              <div class="form-field">
                <label>Email *</label>
                <input type="email" placeholder="Your email" disabled>
              </div>
              <div class="form-field">
                <label>Subject *</label>
                <input type="text" placeholder="Subject" disabled>
              </div>
              <div class="form-field">
                <label>Message *</label>
                <textarea placeholder="Your message" disabled></textarea>
              </div>
              <button class="btn-primary" disabled>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.contact-view {
  padding: 2rem 0;
  min-height: 60vh;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-align: center;
}

.coming-soon {
  text-align: center;
  color: var(--secondary-color);
  font-style: italic;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.placeholder-content {
  background-color: var(--bg-light);
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid var(--secondary-color);
}

.placeholder-content h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.placeholder-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--text-color);
}

.contact-preview {
  margin-top: 1.5rem;
}

.contact-preview h3 {
  color: var(--primary-color);
  margin: 1.5rem 0 1rem 0;
  font-size: 1.1rem;
}

.contact-info {
  background-color: var(--bg-color);
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.form-preview {
  background-color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 6px;
  opacity: 0.7;
}

.form-field {
  margin-bottom: 1rem;
}

.form-field label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: #f9f9f9;
}

.form-field textarea {
  height: 100px;
  resize: vertical;
}

.btn-primary {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
</style>
