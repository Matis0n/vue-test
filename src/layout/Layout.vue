<script setup>
import Header from "@/components/Header/Header.vue";
import Product from "@/components/ProductItem/Product.vue";
</script>

<template>
  <div class="wrapper">
    <Header/>
    <Product/>
  </div>
</template>


<style scoped>
.wrapper {
  margin: 30px auto;
  width: 80%;
  background-color: white;
  border-radius: 15px;

}
</style>
