<template>
  <div>
    <mt-header title="首页">
      <router-link to="/video" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <img src= "../../assets/logo.png" v-on:click="imgUrl" />
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    imgUrl() {
      console.log(111)
    }
  }
}
</script>
