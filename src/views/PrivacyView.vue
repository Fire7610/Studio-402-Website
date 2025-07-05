<template>
  <div class="privacy-view">
    <div class="container">
      <div class="content-wrapper">
        <h1>Privacy Policy</h1>
        <p class="coming-soon">Privacy policy content will be added in Version 0.3.0</p>
        <div class="placeholder-content">
          <h2>Studio 402 Privacy Policy</h2>
          <p>This page will contain our comprehensive privacy policy covering how we collect, use, and protect user data.</p>
          <p>Required for Google Play Store publishing of Production.inc and other applications.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyView'
}
</script>

<style scoped>
.privacy-view {
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
</style>
