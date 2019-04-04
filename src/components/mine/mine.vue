<template>
  <div>
    <mt-header title="我的">
      <mt-button slot="right"></mt-button>
    </mt-header>
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '../store/ProductListOne.vue'
import ProductListTwo from '../store/ProductListTwo.vue'
export default {
  name: 'mine',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  }
}
</script>

<style scoped>

</style>
