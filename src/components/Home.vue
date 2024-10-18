<template>
  <div class="home-container">
    <div class="background-img">
      <!-- <img src="@/assets/background.jpg" alt="Background" /> -->
    </div>

    <div class="info">
      <h1>Welcome</h1>
      <p>Name: Nikko Regulacion</p>
      <p>Program: BSIT-3</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
  color: #333;
}

.background-img img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
}

.info {
  margin-top: 20px;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

p {
  font-size: 1.2em;
  color: #34495e;
}
</style>
