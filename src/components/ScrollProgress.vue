<template>
  <div class="scroll-progress-wrapper">
    <div class="scroll-progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollProgress',
  data() {
    return {
      progress: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateProgress, { passive: true })
    this.updateProgress()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateProgress)
  },
  methods: {
    updateProgress() {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      this.progress = Math.min((scrollTop / docHeight) * 100, 100)
    }
  }
}
</script>

<style scoped>
.scroll-progress-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  z-index: var(--z-tooltip);
  pointer-events: none;
}

.scroll-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
  transition: width var(--transition-fast);
  border-radius: 0 2px 2px 0;
}

[data-theme="dark"] .scroll-progress-wrapper {
  background: rgba(255, 255, 255, 0.1);
}
</style>
