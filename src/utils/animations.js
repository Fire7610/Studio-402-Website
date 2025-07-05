// Enhanced Animation Manager for Studio 402 Website
export class AnimationManager {
  constructor() {
    this.observer = null
    this.isInitialized = false
    this.animatedElements = new Set()
    this.staggerDelay = 100 // ms
  }

  init() {
    if (this.isInitialized) {
      this.cleanup()
    }

    // Wait for DOM to be ready
    requestAnimationFrame(() => {
      this.setupObserver()
      this.initializeVisibleElements()
      this.setupScrollAnimations()
      this.setupHoverAnimations()
      this.isInitialized = true
    })
  }

  setupObserver() {
    // Enhanced observer with better thresholds
    const observerOptions = {
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      rootMargin: '0px 0px -50px 0px'
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          // Stagger animations for multiple elements
          const delay = this.animatedElements.has(entry.target) ? 0 : index * this.staggerDelay
          setTimeout(() => {
            this.triggerAnimation(entry.target)
          }, delay)
        } else if (entry.intersectionRatio === 0 && entry.target.classList.contains('animate-repeat')) {
          // Reset repeatable animations
          this.resetElement(entry.target)
        }
      })
    }, observerOptions)

    // Enhanced selector for animation elements
    const elementsToAnimate = document.querySelectorAll([
      '.animate-on-scroll',
      '.animate-fade-in',
      '.animate-fade-in-up',
      '.animate-fade-in-down',
      '.animate-slide-in-left',
      '.animate-slide-in-right',
      '.animate-scale-in',
      '.animate-rotate-in',
      '.animate-bounce-in',
      '.animate-flip-in',
      '.animate-zoom-in',
      '.stagger-children > *'
    ].join(', '))

    elementsToAnimate.forEach(el => {
      // Reset animation state
      this.resetElement(el)
      this.observer.observe(el)
    })
  }

  setupScrollAnimations() {
    // Add scroll-based parallax and reveal animations
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.updateParallaxElements()
          this.updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
  }

  setupHoverAnimations() {
    // Enhanced hover animations with better performance
    const hoverElements = document.querySelectorAll('.hover-lift, .hover-scale, .hover-glow')
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('hover-active')
      })
      
      element.addEventListener('mouseleave', () => {
        element.classList.remove('hover-active')
      })
    })
  }

  updateParallaxElements() {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll('.parallax')
    
    parallaxElements.forEach(element => {
      const rate = scrolled * -0.5
      element.style.transform = `translateY(${rate}px)`
    })
  }

  updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress')
    if (scrollProgress) {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      scrollProgress.style.width = `${scrollPercent}%`
    }
  }

  resetElement(element) {
    element.classList.remove('visible', 'animated')
    this.animatedElements.delete(element)
  }

  triggerAnimation(element) {
    if (this.animatedElements.has(element)) return
    
    element.classList.add('visible', 'animated')
    this.animatedElements.add(element)
    
    // Add completion callback
    element.addEventListener('animationend', () => {
      element.classList.add('animation-complete')
    }, { once: true })
  }

  initializeVisibleElements() {
    // Trigger immediate animation for elements already in view
    const elementsToAnimate = document.querySelectorAll([
      '.animate-on-scroll',
      '.animate-fade-in',
      '.animate-fade-in-up',
      '.animate-fade-in-down',
      '.animate-slide-in-left',
      '.animate-slide-in-right',
      '.animate-scale-in',
      '.animate-rotate-in',
      '.animate-bounce-in',
      '.animate-flip-in',
      '.animate-zoom-in'
    ].join(', '))

    elementsToAnimate.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(() => {
          this.triggerAnimation(el)
        }, Math.random() * 200 + 100) // Random delay for natural feel
      }
    })
  }

  cleanup() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
    this.animatedElements.clear()
    this.isInitialized = false
  }

  // Enhanced manual trigger with stagger support
  triggerAllAnimations() {
    const elements = document.querySelectorAll([
      '.animate-on-scroll',
      '.animate-fade-in',
      '.animate-fade-in-up',
      '.animate-fade-in-down',
      '.animate-slide-in-left',
      '.animate-slide-in-right',
      '.animate-scale-in',
      '.animate-rotate-in',
      '.animate-bounce-in',
      '.animate-flip-in',
      '.animate-zoom-in'
    ].join(', '))

    elements.forEach((element, index) => {
      setTimeout(() => {
        this.triggerAnimation(element)
      }, index * this.staggerDelay)
    })
  }

  // Stagger animations for child elements
  staggerChildren(parent, delay = 100) {
    const children = parent.children
    Array.from(children).forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('visible', 'animated')
      }, index * delay)
    })
  }

  // Add debug information for development
  debug() {
    console.log('Enhanced Animation Manager Status:', {
      isInitialized: this.isInitialized,
      hasObserver: !!this.observer,
      elementsFound: document.querySelectorAll([
        '.animate-on-scroll',
        '.animate-fade-in',
        '.animate-fade-in-up',
        '.animate-fade-in-down',
        '.animate-slide-in-left',
        '.animate-slide-in-right',
        '.animate-scale-in',
        '.animate-rotate-in',
        '.animate-bounce-in',
        '.animate-flip-in',
        '.animate-zoom-in'
      ].join(', ')).length,
      animatedElements: this.animatedElements.size,
      visibleElements: document.querySelectorAll('.visible').length
    })
  }

  // Force all animations to show (emergency fallback)
  forceShowAll() {
    const elements = document.querySelectorAll([
      '.animate-on-scroll',
      '.animate-fade-in',
      '.animate-fade-in-up',
      '.animate-fade-in-down',
      '.animate-slide-in-left',
      '.animate-slide-in-right',
      '.animate-scale-in',
      '.animate-rotate-in',
      '.animate-bounce-in',
      '.animate-flip-in',
      '.animate-zoom-in'
    ].join(', '))

    elements.forEach(el => {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.classList.add('visible', 'animated', 'animation-complete')
    })
  }
}

// Create a global instance
export const globalAnimationManager = new AnimationManager()

// Vue mixin for components
export const animationMixin = {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        globalAnimationManager.init()
      }, 100)
    })
  },
  beforeUnmount() {
    globalAnimationManager.cleanup()
  }
}

// Enhanced animation utilities
export const animationUtils = {
  // Easing functions for custom animations
  easing: {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - (--t) * t * t * t,
    easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
    easeInQuint: t => t * t * t * t * t,
    easeOutQuint: t => 1 + (--t) * t * t * t * t,
    easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
  },

  // Custom animation with easing
  animate(element, properties, duration = 300, easing = 'easeOutQuad') {
    const startTime = performance.now()
    const startValues = {}
    const targetValues = {}
    
    // Parse properties and get starting values
    for (const prop in properties) {
      if (prop === 'transform') {
        startValues[prop] = element.style.transform || ''
        targetValues[prop] = properties[prop]
      } else {
        startValues[prop] = parseFloat(getComputedStyle(element)[prop]) || 0
        targetValues[prop] = properties[prop]
      }
    }
    
    const easingFunction = this.easing[easing] || this.easing.easeOutQuad
    
    const animateStep = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easingFunction(progress)
      
      // Apply animated values
      for (const prop in properties) {
        if (prop === 'transform') {
          element.style[prop] = targetValues[prop]
        } else {
          const currentValue = startValues[prop] + (targetValues[prop] - startValues[prop]) * easedProgress
          element.style[prop] = currentValue + (prop === 'opacity' ? '' : 'px')
        }
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateStep)
      } else {
        // Animation complete
        element.dispatchEvent(new CustomEvent('animationComplete', { detail: { element, properties } }))
      }
    }
    
    requestAnimationFrame(animateStep)
  },

  // Counter animation
  animateCounter(element, start, end, duration = 1000, easing = 'easeOutQuad') {
    const startTime = performance.now()
    const easingFunction = this.easing[easing] || this.easing.easeOutQuad
    
    const animateStep = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easingFunction(progress)
      
      const currentValue = Math.round(start + (end - start) * easedProgress)
      element.textContent = currentValue.toLocaleString()
      
      if (progress < 1) {
        requestAnimationFrame(animateStep)
      }
    }
    
    requestAnimationFrame(animateStep)
  },

  // Typewriter effect
  typewriter(element, text, speed = 50) {
    element.textContent = ''
    let i = 0
    
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(type, speed)
      } else {
        element.dispatchEvent(new CustomEvent('typewriterComplete'))
      }
    }
    
    type()
  },

  // Morphing animation between two states
  morph(element, fromProps, toProps, duration = 300) {
    this.animate(element, fromProps, 0) // Set initial state
    setTimeout(() => {
      this.animate(element, toProps, duration)
    }, 10)
  }
}

// Theme Manager for Dark/Light Mode
export class ThemeManager {
  constructor() {
    this.currentTheme = 'light'
    this.init()
  }

  init() {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('studio402-theme')
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    
    this.currentTheme = savedTheme || systemPreference
    this.applyTheme(this.currentTheme)
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('studio402-theme')) {
        this.setTheme(e.matches ? 'dark' : 'light')
      }
    })
  }

  setTheme(theme) {
    this.currentTheme = theme
    this.applyTheme(theme)
    localStorage.setItem('studio402-theme', theme)
    
    // Dispatch custom event for theme change
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }))
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    
    // Update theme toggle button if it exists
    const themeToggle = document.querySelector('.theme-toggle')
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`)
      themeToggle.innerHTML = theme === 'light' ? '🌙' : '☀️'
    }
  }

  toggle() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light'
    this.setTheme(newTheme)
  }

  getCurrentTheme() {
    return this.currentTheme
  }
}

// Performance monitoring for animations
export class AnimationPerformanceMonitor {
  constructor() {
    this.metrics = {
      frameDrops: 0,
      averageFPS: 0,
      totalFrames: 0,
      animationStartTime: 0
    }
  }

  startMonitoring() {
    this.metrics.animationStartTime = performance.now()
    this.monitorFrame()
  }

  monitorFrame() {
    const currentTime = performance.now()
    const fps = 1000 / (currentTime - this.lastFrameTime || currentTime)
    
    this.metrics.totalFrames++
    this.metrics.averageFPS = (this.metrics.averageFPS * (this.metrics.totalFrames - 1) + fps) / this.metrics.totalFrames
    
    if (fps < 30) {
      this.metrics.frameDrops++
    }
    
    this.lastFrameTime = currentTime
    
    if (this.monitoring) {
      requestAnimationFrame(() => this.monitorFrame())
    }
  }

  getMetrics() {
    return { ...this.metrics }
  }

  shouldReduceAnimations() {
    return this.metrics.frameDrops > 10 || this.metrics.averageFPS < 30
  }
}

// Initialize managers
export const animationManager = new AnimationManager()
export const themeManager = new ThemeManager()
export const performanceMonitor = new AnimationPerformanceMonitor()

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      animationManager.init()
    })
  } else {
    animationManager.init()
  }
}
