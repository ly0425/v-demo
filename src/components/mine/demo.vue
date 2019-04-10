<template>
  <div>
    <mt-header title="小练习">
      <mt-button v-on:click="$router.back()" slot="left" icon="back"></mt-button>
    </mt-header>
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '../store/ProductListOne.vue'
import ProductListTwo from '../store/ProductListTwo.vue'
export default {
  name: 'demo',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  }
}
</script>
