<template>
  <div class="not-found-container">
    <div class="not-found-content animate-fade-in">
      <h1 class="not-found-title animate-bounce-in">404</h1>
      <h2 class="not-found-subtitle animate-fade-in-up">Page Not Found</h2>
      <p class="not-found-description animate-fade-in-up">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="not-found-actions animate-fade-in-up">
        <router-link to="/" class="btn btn-primary">
          Return to Home
        </router-link>
        <router-link to="/contact" class="btn btn-secondary">
          Contact Us
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
  mounted() {
    // Set page title
    document.title = 'Page Not Found - Studio 402';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Return to Studio 402 homepage to explore our mobile game development projects.');
    }
  }
}
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
  background: var(--gradient-primary);
  text-align: center;
}

.not-found-content {
  max-width: 600px;
  color: white;
}

.not-found-title {
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 700;
  margin: 0 0 var(--spacing-md) 0;
  line-height: 1;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.not-found-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  margin: 0 0 var(--spacing-md) 0;
  opacity: 0.9;
}

.not-found-description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  margin: 0 0 var(--spacing-xl) 0;
  opacity: 0.8;
}

.not-found-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 140px;
  min-height: 48px;
}

.btn-primary {
  background: white;
  color: var(--color-primary);
  border: 2px solid white;
}

.btn-primary:hover {
  background: transparent;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .not-found-container {
    padding: var(--spacing-lg);
  }
  
  .not-found-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
}

/* Animation classes - these should match your existing animation system */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-bounce-in {
  animation: bounceIn 1s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes fadeInUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
