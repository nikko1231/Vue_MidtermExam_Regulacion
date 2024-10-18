<template>
  <div>
    <ul v-if="products.length">
      <li v-for="(product, index) in products" :key="index">
        <div v-if="editIndex === index">
          <input v-model="editProduct.name" placeholder="Product Name" />
          <input
            v-model="editProduct.price"
            type="number"
            placeholder="Price"
          />
          <textarea
            v-model="editProduct.description"
            placeholder="Description"
          ></textarea>
          <button @click="saveProduct(index)">Save</button>
        </div>

        <div v-else>
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
          <p>{{ product.description }}</p>
          <button @click="editProductDetails(index)">Edit</button>
        </div>
      </li>
    </ul>
    <p v-else>No products available.</p>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data() {
    return {
      editIndex: null,
      editProduct: {},
    }
  },
  methods: {
    editProductDetails(index) {
      this.editIndex = index
      this.editProduct = { ...this.products[index] }
    },
    saveProduct(index) {
      this.$emit('update-product', { index, updatedProduct: this.editProduct })
      this.editIndex = null
    },
  },
}
</script>
