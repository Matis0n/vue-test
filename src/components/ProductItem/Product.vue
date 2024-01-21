<script setup>
import {ref, computed} from "vue";

import products from "../../assets/product-data/products.js"
import ProductItem from "@/components/ProductItem/ProductItem.vue";

const findProduct = ref('');
const filterProducts = computed(() => {
  return products.filter(product => {
    return product.title.toLowerCase().includes(findProduct.value.toLowerCase());
  });
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-item">
      <h1>Все продукты</h1>
      <input placeholder="Введите продукт..." v-model="findProduct">
    </div>
    <ProductItem :productsData="filterProducts"/>
  </div>
</template>

<style scoped>

.wrapper-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.wrapper-item input {
  border: 1px solid #155738;
  border-radius: 15px;
  width: 300px;
  height: 30px;
  padding: 7px 20px;
}

@media screen and (max-width: 760px) {
  .wrapper-item {
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 545px) {
  .wrapper-item input {
    width: 200px;
    height: 30px;
  }
}

</style>
