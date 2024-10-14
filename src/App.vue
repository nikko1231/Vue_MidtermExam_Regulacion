<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav>
      <!-- Use router-link to navigate between routes -->
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
nav {
  background-color: aquamarine;
  padding: 10px;
}

nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
  background-color: azure;
  color: black;
}
nav:hover {
  background-color: gray;
}
</style>
