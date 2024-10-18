<template>
  <div class="container">
    <h2 class="title">Add New Product</h2>
    <form @submit.prevent="addProduct" class="product-form">
      <input
        v-model="newProduct.name"
        placeholder="Product Name"
        class="input-field"
      />
      <input
        type="number"
        v-model="newProduct.price"
        placeholder="Product Price"
        class="input-field"
      />
      <input
        v-model="newProduct.description"
        placeholder="Product Description"
        class="input-field"
      />
      <button type="submit" class="add-button">Add Product</button>
    </form>

    <ProductList :products="products" @update-product="updateProduct" />
  </div>
</template>

<script>
import ProductList from './ProductList.vue'

export default {
  components: {
    ProductList,
  },
  data() {
    return {
      products: [],
      newProduct: {
        name: '',
        price: '',
        description: '',
      },
    }
  },
  created() {
    this.loadProducts()
  },
  methods: {
    loadProducts() {
      const storedProducts = localStorage.getItem('products')
      if (storedProducts) {
        this.products = JSON.parse(storedProducts)
      }
    },
    saveProducts() {
      localStorage.setItem('products', JSON.stringify(this.products))
    },
    addProduct() {
      if (
        this.newProduct.name &&
        this.newProduct.price &&
        this.newProduct.description
      ) {
        this.products.push({ ...this.newProduct })
        this.newProduct.name = ''
        this.newProduct.price = ''
        this.newProduct.description = ''
        this.saveProducts()
      }
    },
    updateProduct({ index, product }) {
      this.products.splice(index, 1, product)
      this.saveProducts()
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #333;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.input-field {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.add-button {
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #218838;
}

.product-list {
  list-style: none;
  padding: 0;
}
</style>
