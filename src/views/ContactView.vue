<template>
  <div class="contact-view">
    <div class="container">
      <div class="content-wrapper">
        <header class="page-header">
          <h1>Contact Studio 402</h1>
          <p class="subtitle">Get in touch with our game development team</p>
        </header>

        <div class="contact-content">
          <!-- Contact Information -->
          <section class="contact-info-section">
            <h2>Contact Information</h2>
            <div class="info-grid">
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
          <section class="contact-form-section">
            <h2>Send Us a Message</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required
                    :class="{ 'error': errors.name }"
                  >
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>
                
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required
                    :class="{ 'error': errors.email }"
                  >
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="category">Category *</label>
                <select 
                  id="category" 
                  v-model="form.category" 
                  required
                  :class="{ 'error': errors.category }"
                >
                  <option value="">Select a category</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="business">Business/Partnership</option>
                  <option value="feedback">Game Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="other">Other</option>
                </select>
                <span v-if="errors.category" class="error-message">{{ errors.category }}</span>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  :class="{ 'error': errors.subject }"
                >
                <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="6"
                  :class="{ 'error': errors.message }"
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>
              
              <div class="form-group">
                <label class="checkbox-label">
                  <input 
                    type="checkbox" 
                    v-model="form.newsletter"
                  >
                  Subscribe to updates about Studio 402 games and releases
                </label>
              </div>
              
              <button 
                type="submit" 
                class="submit-button"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
            
            <!-- Success/Error Messages -->
            <div v-if="submitStatus === 'success'" class="status-message success">
              <h3>✅ Message Sent Successfully!</h3>
              <p>Thank you for contacting Studio 402. We'll get back to you as soon as possible.</p>
            </div>
            
            <div v-if="submitStatus === 'error'" class="status-message error">
              <h3>❌ Message Failed to Send</h3>
              <p>Sorry, there was an error sending your message. Please try again or contact us directly.</p>
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
  data() {
    return {
      form: {
        name: '',
        email: '',
        category: '',
        subject: '',
        message: '',
        newsletter: false
      },
      errors: {},
      isSubmitting: false,
      submitStatus: null // 'success', 'error', or null
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required'
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
      }
      
      if (!this.form.category) {
        this.errors.category = 'Please select a category'
      }
      
      if (!this.form.subject.trim()) {
        this.errors.subject = 'Subject is required'
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters long'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    
    async submitForm() {
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      this.submitStatus = null
      
      try {
        // Simulate form submission (in real implementation, this would send to a server)
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // For now, we'll just show success message
        // In a real implementation, you would send this to your backend
        console.log('Form submitted:', this.form)
        
        this.submitStatus = 'success'
        this.resetForm()
        
      } catch (error) {
        this.submitStatus = 'error'
        console.error('Form submission error:', error)
      } finally {
        this.isSubmitting = false
      }
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        category: '',
        subject: '',
        message: '',
        newsletter: false
      }
      this.errors = {}
    }
  },
  metaInfo: {
    title: 'Contact Us - Studio 402',
    meta: [
      { name: 'description', content: 'Contact Studio 402 game development studio. Get in touch about our games, report bugs, or inquire about partnerships.' },
      { name: 'keywords', content: 'Studio 402, contact, game development, Production.inc, support, partnerships, indie games' }
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

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: var(--accent-color);
}

.error-message {
  color: var(--accent-color);
  font-size: 0.9rem;
  margin-top: 0.25rem;
  display: block;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
}

.checkbox-label input {
  width: auto;
  margin-right: 0.5rem;
}

.submit-button {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--primary-color);
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.status-message {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 6px;
  text-align: center;
}

.status-message.success {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.status-message.error {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.status-message h3 {
  margin-bottom: 0.5rem;
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
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .info-grid,
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>
