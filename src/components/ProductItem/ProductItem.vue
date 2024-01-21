<script setup>
import { useStore } from 'vuex';
import { defineProps} from 'vue';

const store = useStore();
const props = defineProps(['productsData']);

const addToCart = (product) => {
  store.commit('addToCart', product);
};

</script>

<template>
  <div class="wrapper">
    <div class="product-item" v-for="product in props.productsData" :key="product.id">
      <img class="product-item_content" :src="product.image01" alt="product">
      <h2>{{ product.title }}</h2>
      <p>Цена: <span>{{ product.price }}Р</span></p>
      <button  class="add_button_cart" @click="addToCart(product)"><span> Добавить в корзину</span></button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 7px 20px;
}

.product-item {
  width: auto;
  background: #6fc09e;
  border: 1px solid #155738;
  border-radius: 20px;
  padding: 7px 20px;
}

.product-item_content {
  width: 200px;
  height: 200px;
  border: 1px solid #328a62;
  border-radius: 20px;
  display: block;
  margin: 0 auto;
}

p, h2 {
  text-align: center;
}

h2 {
  font-size: 18px
}

p span {
  color: #093823;
  font-weight: 700;
}

.add_button_cart {
  background: #328a62;
  height: 50px;
  display: block;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid #155738;
}

.add_button_cart span {
  color: #fff;
}

.add_button_cart:hover {
  background: #093823;
  cursor: pointer;
}

@media screen and (max-width: 1224px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width : 768px){
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>
