<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <!-- Logo/Brand -->
          <div class="brand">
            <router-link to="/" class="brand-link">
              <h2>Studio 402</h2>
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <ul class="nav-menu" :class="{ active: mobileMenuOpen }">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeMobileMenu">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click="closeMobileMenu">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link" @click="closeMobileMenu">Projects</router-link>
            </li>
            <li class="nav-item dropdown">
              <span class="nav-link dropdown-toggle">Legal</span>
              <ul class="dropdown-menu">
                <li><router-link to="/terms" class="dropdown-link" @click="closeMobileMenu">Terms & Conditions</router-link></li>
                <li><router-link to="/privacy" class="dropdown-link" @click="closeMobileMenu">Privacy Policy</router-link></li>
                <li><router-link to="/support" class="dropdown-link" @click="closeMobileMenu">Support</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" @click="closeMobileMenu">Contact</router-link>
            </li>
          </ul>

          <!-- Mobile Menu Toggle -->
          <div class="mobile-menu-toggle" @click="toggleMobileMenu">
            <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
            <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
            <span class="hamburger-line" :class="{ active: mobileMenuOpen }"></span>
          </div>

          <!-- Theme Toggle Button -->
          <button 
            class="theme-toggle-btn" 
            @click="toggleTheme"
            :title="`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`"
            aria-label="Toggle theme"
          >
            <span class="theme-icon">{{ currentTheme === 'light' ? '🌙' : '☀️' }}</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { themeManager } from '../utils/animations.js'

export default {
  name: 'AppHeader',
  data() {
    return {
      mobileMenuOpen: false,
      currentTheme: 'light'
    }
  },
  mounted() {
    // Initialize theme state
    this.currentTheme = themeManager.getCurrentTheme()
    
    // Listen for theme changes
    window.addEventListener('themeChange', this.handleThemeChange)
  },
  beforeUnmount() {
    window.removeEventListener('themeChange', this.handleThemeChange)
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      
      // Prevent body scroll when mobile menu is open
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
      document.body.style.overflow = ''
    },
    toggleTheme() {
      themeManager.toggle()
    },
    handleThemeChange(event) {
      this.currentTheme = event.detail.theme
    }
  }
}
</script>

<style scoped>
.header {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: var(--z-dropdown);
  transition: all var(--transition);
}

.navbar {
  padding: 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  gap: var(--spacing-lg);
}

.brand {
  flex-shrink: 0;
}

.brand-link {
  text-decoration: none;
  color: var(--text-color);
  transition: all var(--transition);
}

.brand-link:hover {
  transform: scale(1.02);
}

.brand h2 {
  margin: 0;
  font-size: var(--font-size-2xl);
  font-weight: 800;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--spacing-xl);
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius);
  transition: all var(--transition);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(66, 153, 225, 0.1), transparent);
  transition: left var(--transition);
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--secondary-color);
  background: rgba(66, 153, 225, 0.1);
  transform: translateY(-1px);
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, var(--secondary-color), var(--secondary-light));
  color: var(--text-white);
  box-shadow: var(--shadow-sm);
}

/* Enhanced Dropdown styles */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  position: relative;
}

.dropdown-toggle::after {
  content: '▼';
  font-size: 0.7rem;
  margin-left: var(--spacing-sm);
  transition: transform var(--transition);
}

.dropdown:hover .dropdown-toggle::after {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + var(--spacing-sm));
  left: 0;
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) 0;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px) scale(0.95);
  transition: all var(--transition);
  list-style: none;
  margin: 0;
  z-index: var(--z-dropdown);
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.dropdown-link {
  display: block;
  color: var(--text-color);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  transition: all var(--transition);
  border-radius: var(--radius-sm);
  margin: 0 var(--spacing-sm);
}

.dropdown-link:hover {
  background: var(--bg-light);
  color: var(--secondary-color);
  transform: translateX(4px);
}

/* Theme Toggle Button */
.theme-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: var(--bg-light);
  border: 2px solid var(--border-color);
  cursor: pointer;
  transition: all var(--transition);
  font-size: var(--font-size-lg);
  margin-left: var(--spacing-md);
}

.theme-toggle-btn:hover {
  transform: scale(1.1) rotate(15deg);
  box-shadow: var(--shadow-md);
  border-color: var(--secondary-color);
}

.theme-icon {
  transition: transform var(--transition);
}

.theme-toggle-btn:hover .theme-icon {
  transform: scale(1.2);
}

/* Enhanced Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 28px;
  height: 22px;
  justify-content: space-between;
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: all var(--transition);
}

.mobile-menu-toggle:hover {
  background: var(--bg-light);
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: var(--text-color);
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  background: var(--secondary-color);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
  background: var(--secondary-color);
}

/* Enhanced Mobile styles */
@media (max-width: 768px) {
  .nav-content {
    position: relative;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .theme-toggle-btn {
    width: 36px;
    height: 36px;
    font-size: var(--font-size-base);
    margin-left: var(--spacing-sm);
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--bg-card);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-2xl);
    transform: translateX(-100%);
    transition: transform var(--transition-slow);
    z-index: calc(var(--z-modal) - 1);
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-item {
    opacity: 0;
    transform: translateY(20px);
    transition: all var(--transition-slow);
  }

  .nav-menu.active .nav-item {
    opacity: 1;
    transform: translateY(0);
  }

  .nav-menu.active .nav-item:nth-child(1) { transition-delay: 0.1s; }
  .nav-menu.active .nav-item:nth-child(2) { transition-delay: 0.2s; }
  .nav-menu.active .nav-item:nth-child(3) { transition-delay: 0.3s; }
  .nav-menu.active .nav-item:nth-child(4) { transition-delay: 0.4s; }
  .nav-menu.active .nav-item:nth-child(5) { transition-delay: 0.5s; }

  .nav-link {
    font-size: var(--font-size-xl);
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-lg);
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    background: transparent;
    box-shadow: none;
    border: none;
    margin-top: var(--spacing-md);
  }

  .dropdown-link {
    font-size: var(--font-size-lg);
    text-align: center;
    margin: var(--spacing-xs) 0;
  }
}

@media (max-width: 480px) {
  .brand h2 {
    font-size: var(--font-size-xl);
  }
  
  .nav-content {
    padding: var(--spacing-sm) 0;
  }
  
  .theme-toggle-btn {
    width: 32px;
    height: 32px;
    font-size: var(--font-size-sm);
  }
}

/* Scroll-based header styling */
.header.scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-bottom-color: var(--border-light);
}

[data-theme="dark"] .header.scrolled {
  background: rgba(26, 32, 44, 0.9);
}

/* Focus styles for accessibility */
.nav-link:focus,
.dropdown-link:focus,
.theme-toggle-btn:focus,
.mobile-menu-toggle:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .nav-link,
  .dropdown-link {
    border: 1px solid transparent;
  }
  
  .nav-link:hover,
  .nav-link:focus,
  .dropdown-link:hover,
  .dropdown-link:focus {
    border-color: var(--secondary-color);
    background: var(--bg-color);
  }
}
</style>
