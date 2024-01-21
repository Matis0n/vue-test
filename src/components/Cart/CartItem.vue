<script setup>
import close from "../../assets/img/close.svg";

import { useStore } from "vuex";
import { defineProps, computed } from "vue";

const props = defineProps(['product']);

const store = useStore();

const incrementProduct = () => {
  store.commit('incrementQuantity', props.product.id);
};

const decrementProduct = () => {
  store.commit('decrementQuantity', props.product.id);
};

const quantity = computed(() => {
  const product = store.state.cartItem.find(item => item.id === props.product.id);
  return product ? product.quantity : 0;
});

const totalPriceCount = computed(() => {
  const product = store.state.cartItem.find(item => item.id === props.product.id);
  return product ? product.price * product.quantity : 0;
});

const removeCartProduct = () => {
  store.commit('removeCart', props.product.id);
};

</script>

<template>
  <div class="cart-wrapper">
    <div class="cart-item">
      <div class="cart-category">
        <img class="cart-img" :src="props.product.image01" alt="img">
        <div class="cart-price_title">
          <h3>{{ props.product.title }}</h3>
          <p>Цена: {{ totalPriceCount }}</p>
        </div>
      </div>
      <img class="cart-img_close" @click = "removeCartProduct" :src="close" alt="close"/>
    </div>
    <div class="cart-iteration_item">
      <p @click="decrementProduct">-</p>
      <p>{{ quantity }}x</p>
      <p @click="incrementProduct">+</p>
    </div>
  </div>
</template>

<style scoped>

.cart-wrapper {
  border: 1px solid #155738;
  margin: 20px auto;
  border-radius: 20px;
  width: 420px;
  background: #96dabc;

}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;

}

.cart-category {
  display: flex;
}

.cart-price_title {
  line-height: 10px;
  padding: 0 10px;

}

.cart-img_close{
  cursor: pointer;
  transition: transform 0.2s ease;
}

.cart-img_close:active{
  transform: translateY(5px);
}

.cart-price-title h3 {
  color: #155738;
}

.cart-price-title p {
  font-size: 18px;
}

.cart-img {
  width: 100px;
  height: 100px;
  border: 1px solid #155738;
  border-radius: 10px;
}

.cart-iteration_item {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.cart-iteration_item p {
  background: #328a62;
  border-radius: 50%;
  padding: 10px;
  width: 20px;
  text-align: center;
  font-size: 16px;
  transition: transform 0.2s ease;
  cursor: pointer;
}
.cart-iteration_item p:active{
  transform: translateY(5px);
}
</style>