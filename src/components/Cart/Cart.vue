<script setup>
import allow_img from "../../assets/img/arrow-left-line.svg";
import CartItem from "@/components/Cart/CartItem.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const closeCart = () => {
  store.commit('closeCart');
};

const cartItem = store.state.cartItem;

const totalPrice = computed(() => {
  return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<template>
  <div class="wrapper"></div>
  <div class="cart-product_item">
    <div class="cart-product_content">
      <img :src="allow_img" alt="allow_img" @click="closeCart">
      <h1>Корзина</h1>
    </div>
    <div class="cart-scroll">
      <div v-if="cartItem.length === 0">
        <p>Корзина пуста</p>
      </div>
      <CartItem v-for="item in cartItem" :key="item.id" :product="item" />
    </div>
    <div class="cart-footer">
      <span>Итого:</span>
      <p>{{ totalPrice }}</p>
      <button class="cart-footer_btn">Перейти к оформлению</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  z-index: 10;
  opacity: 70%;
}
.cart-scroll{
  overflow: scroll;
  height: calc(100vh - 230px);
  overflow-x:hidden;

}

.cart-product_item {
  background: #ffffff;
  width: 20%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
  padding: 10px;

}

.cart-product_content {
  display: flex;
  gap: 50px;
  border-bottom: 1px solid #155738;
}

.cart-product_content img {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.cart-product_content img:active {
  transform: translateX(-5px);

}
.cart-footer{
  display: flex;
  gap: 100px;
  padding: 25px 10px;
  align-items: center;
  background: #49de97;
  bottom: 0;
  left: 0;
  width: 100%;
  position: absolute;
}

.cart-footer span{
  color:#155738;
  font-size: 25px;
}
.cart-footer p{
  color:#155738;
  font-weight:700;
  font-size: 25px;
}
.cart-footer_btn{
  border: none;
  border-radius:10px;
  color: white;
  background: #155738;
  height: 30px;
}
.cart-footer_btn:hover{
  background: white;
  color: #155738;
}

@media only screen and (max-width: 2048px) {
  .cart-product_item {
    width: 30%;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1512px) {
  .cart-product_item {
    width: 40%;
  }
}

@media only screen and (min-width: 981px) and (max-width: 1200px)  {
  .cart-product_item {
    width: 50%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 980px) {
  .cart-product_item {
    width: 55%;
  }
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
  .cart-product_item {
    width: 100%;
  }
  .cart-product_content{
    justify-content: center;
  }
  .cart-footer{
    flex-direction: column;
    gap: 5px;
  }
}

</style>