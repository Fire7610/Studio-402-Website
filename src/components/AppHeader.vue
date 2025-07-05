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
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  background-color: var(--bg-color);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  padding: 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.brand {
  flex-shrink: 0;
}

.brand-link {
  text-decoration: none;
  color: var(--primary-color);
}

.brand h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--secondary-color);
}

/* Dropdown styles */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  position: relative;
}

.dropdown-toggle::after {
  content: '▼';
  font-size: 0.7rem;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-toggle::after {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--bg-color);
  box-shadow: var(--shadow);
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  list-style: none;
  margin: 0;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.dropdown-link:hover {
  background-color: var(--bg-light);
  color: var(--secondary-color);
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 24px;
  height: 18px;
  justify-content: space-between;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile styles */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: var(--bg-color);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0;
    padding: 2rem 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-item {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
  }

  .nav-link {
    font-size: 1.1rem;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background-color: var(--bg-light);
    margin-top: 0.5rem;
  }

  .dropdown-toggle::after {
    display: none;
  }
}
</style>
