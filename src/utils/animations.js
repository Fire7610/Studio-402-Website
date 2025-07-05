// Animation utility for handling scroll-triggered animations
export class AnimationManager {
  constructor() {
    this.observer = null
    this.isInitialized = false
  }

  init() {
    if (this.isInitialized) {
      this.cleanup()
    }

    // Wait for DOM to be ready
    requestAnimationFrame(() => {
      this.setupObserver()
      this.initializeVisibleElements()
      this.isInitialized = true
    })
  }

  setupObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.triggerAnimation(entry.target)
        }
      })
    }, observerOptions)

    // Find and observe all animation elements
    const elementsToAnimate = document.querySelectorAll([
      '.animate-on-scroll',
      '.animate-fade-in',
      '.animate-fade-in-up',
      '.animate-fade-in-down',
      '.animate-slide-in-left',
      '.animate-slide-in-right',
      '.animate-scale-in'
    ].join(', '))

    elementsToAnimate.forEach(el => {
      // Reset animation state
      this.resetElement(el)
      this.observer.observe(el)
    })
  }

  resetElement(element) {
    element.classList.remove('in-view', 'animated')
    // Ensure element starts in hidden state
    if (!element.style.visibility) {
      element.style.visibility = 'visible'
    }
  }

  triggerAnimation(element) {
    element.classList.add('in-view', 'animated')
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
      '.animate-scale-in'
    ].join(', '))

    elementsToAnimate.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(() => {
          this.triggerAnimation(el)
        }, 100)
      }
    })
  }

  cleanup() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
    this.isInitialized = false
  }

  // Manual trigger for fallback
  triggerAllAnimations() {
    const elements = document.querySelectorAll([
      '.animate-on-scroll',
      '.animate-fade-in',
      '.animate-fade-in-up',
      '.animate-fade-in-down',
      '.animate-slide-in-left',
      '.animate-slide-in-right',
      '.animate-scale-in'
    ].join(', '))

    elements.forEach((element, index) => {
      setTimeout(() => {
        this.triggerAnimation(element)
      }, index * 100)
    })
  }

  // Add debug information for development
  debug() {
    console.log('Animation Manager Status:', {
      isInitialized: this.isInitialized,
      hasObserver: !!this.observer,
      elementsFound: document.querySelectorAll([
        '.animate-on-scroll',
        '.animate-fade-in',
        '.animate-fade-in-up',
        '.animate-fade-in-down',
        '.animate-slide-in-left',
        '.animate-slide-in-right',
        '.animate-scale-in'
      ].join(', ')).length,
      animatedElements: document.querySelectorAll('.in-view').length
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
      '.animate-scale-in'
    ].join(', '))

    elements.forEach(el => {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.classList.add('in-view', 'animated')
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
