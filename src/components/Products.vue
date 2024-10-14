<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - {{ product.price }} - {{ product.description }}
        <button @click="editProduct(index)">Edit</button>
      </li>
    </ul>
    <p v-if="products.length === 0">No products available.</p>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editProduct(index) {
      this.$emit('edit-product', index)
    },
  },
}
</script>

<style scoped></style>
