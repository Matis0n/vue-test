<script setup >

import logo from "../../assets/img/logo.jpg";
import cart_icon from "../../assets/img/shopping-cart-line.svg";
import Cart from "@/components/Cart/Cart.vue";

import {computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();
const CartOpen = computed(() => store.state.isCartOpen);
const cartCount = computed(() => store.state.cartCount);

const toggleCart = () => {
  store.commit('toggleCart');
};

</script>

<template>
  <header class="header">
    <img class="header-logo" :src="logo" alt="logo">
    <div class="header-cart_container">
      <img class="cart-icon" :src="cart_icon" alt="cart" @click="toggleCart">
      <div class="header-cart_count"><span>{{cartCount}}</span></div>
    </div>
    <Cart v-if="CartOpen"/>
  </header>
</template>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #328a62;
  padding: 0 25px;
  align-items: center;

}

.header-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 7px 10px;
}

.header-cart_container {
  position: relative;
}

.cart-icon:hover {
  cursor: pointer;
}

.header-cart_count {
  position: absolute;
  top: -13px;
  right: -10px;
  background-color: red;
  color: white;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  padding: 3px 3px;
  font-size: 14px;
}

.header-cart_count span{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
