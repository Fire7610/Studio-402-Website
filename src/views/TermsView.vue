<template>
  <div class="terms-view">
    <div class="container">
      <div class="content-wrapper">
        <h1>Terms and Conditions</h1>
        <p class="coming-soon">Legal content will be added in Version 0.3.0</p>
        <div class="placeholder-content">
          <h2>Studio 402 Terms and Conditions</h2>
          <p>This page will contain the official terms and conditions for Studio 402 and our projects, including Production.inc.</p>
          <p>Essential for Google Play Store compliance.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsView'
}
</script>

<style scoped>
.terms-view {
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
