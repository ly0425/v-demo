<template>
  <div>
    <mt-header title="首页">
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div class="page-swipe">
      <mt-swipe :auto="4000" class="swipe">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>
    </div>

  </div>
</template>
<style>
  .page-swipe {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
  }
  .swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
    line-height: 200px;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
    line-height: 200px;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
    line-height: 200px;
  }
</style>
<script>
export default {
  methods: {
  }
}
</script>
