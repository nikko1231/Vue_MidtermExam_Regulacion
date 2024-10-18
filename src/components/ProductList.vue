<template>
  <div>
    <h2 class="title">Product List</h2>
    <ul class="product-list">
      <li
        v-for="(product, index) in products"
        :key="index"
        class="product-item"
      >
        <div v-if="editIndex === index" class="edit-mode">
          <input
            v-model="editableProduct.name"
            placeholder="Product Name"
            class="input-field"
          />
          <input
            type="number"
            v-model="editableProduct.price"
            placeholder="Product Price"
            class="input-field"
          />
          <input
            v-model="editableProduct.description"
            placeholder="Product Description"
            class="input-field"
          />
          <button @click="saveProduct(index)" class="save-button">Save</button>
          <button @click="cancelEdit" class="cancel-button">Cancel</button>
        </div>
        <div v-else class="product-info">
          <span>{{ product.name }} - </span>
          <span>{{ product.price }} - </span>
          <span>{{ product.description }}</span>
          <button @click="editProduct(index, product)" class="edit-button">
            Edit
          </button>
        </div>
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
  data() {
    return {
      editIndex: null,
      editableProduct: {
        name: '',
        price: '',
        description: '',
      },
    }
  },
  methods: {
    editProduct(index, product) {
      this.editIndex = index
      this.editableProduct = { ...product }
    },
    saveProduct(index) {
      this.$emit('update-product', { index, product: this.editableProduct })
      this.editIndex = null
      this.editableProduct = { name: '', price: '', description: '' }
    },
    cancelEdit() {
      this.editIndex = null
      this.editableProduct = { name: '', price: '', description: '' }
    },
  },
}
</script>

<style scoped>
.title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.product-list {
  list-style: none;
  padding: 0;
}

.product-item {
  padding: 15px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edit-button,
.save-button,
.cancel-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.edit-button:hover,
.save-button:hover {
  background-color: #0056b3;
}

.cancel-button {
  background-color: #dc3545;
}

.cancel-button:hover {
  background-color: #c82333;
}

.input-field {
  padding: 8px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
