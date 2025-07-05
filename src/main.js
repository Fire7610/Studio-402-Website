import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { animationManager, themeManager } from './utils/animations.js'

const app = createApp(App)

app.use(router)

// Initialize theme manager
themeManager.init()

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  animationManager.init()
})

// Re-initialize animations on route changes
router.afterEach(() => {
  // Small delay to ensure DOM is updated
  setTimeout(() => {
    animationManager.init()
  }, 100)
})

app.mount('#app')