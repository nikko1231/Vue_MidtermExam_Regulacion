<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  color: #333;
}

nav {
  background: linear-gradient(135deg, #4a90e2, #9013fe);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

nav a {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 10px 15px;
  border-radius: 4px;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: #4a90e2;
  transform: scale(1.05);
}

nav:hover {
  background: linear-gradient(135deg, #5a7fda, #ab2fe5);
}
</style>
