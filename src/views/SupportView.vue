<template>
  <div class="support-view">
    <div class="container">
      <div class="content-wrapper">
        <h1>Support</h1>
        <p class="coming-soon">Support content will be added in Version 0.3.0</p>
        <div class="placeholder-content">
          <h2>Studio 402 Support</h2>
          <p>This page will provide support information for all Studio 402 projects and services.</p>
          <p>Including support for Production.inc and future applications.</p>
          <div class="support-preview">
            <h3>Support Categories (Coming Soon):</h3>
            <ul>
              <li>Technical Support</li>
              <li>Account Issues</li>
              <li>General Inquiries</li>
              <li>Bug Reports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportView'
}
</script>

<style scoped>
.support-view {
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

.support-preview {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: var(--bg-color);
  border-radius: 6px;
}

.support-preview h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.support-preview ul {
  margin-left: 1.5rem;
}

.support-preview li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}
</style>
