<template>
  <div class="projects">
    <h1>Our Projects</h1>
    <p>Discover our creative projects and portfolio.</p>
    <p>Projects showcase coming in Version 0.4.0</p>
    <div class="upcoming-project">
      <h3>Upcoming: Production.inc</h3>
      <p>Stay tuned for our latest project!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView'
}
</script>

<style scoped>
.projects {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  margin: 0.5rem 0;
  color: #666;
}

.upcoming-project {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.upcoming-project h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
</style>