<template>
    <div>
      <mt-header title="商品详情">
        <mt-button v-on:click="$router.back()" slot="left" icon="back"></mt-button>
      </mt-header>
      <div>
        <van-card
          num="2"
          tag="标签"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          :thumb="imageURL"
          origin-price="10.00"
        >
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>
      </div>
    </div>
</template>

<script>
export default {
  name: 'goods-details'
}
</script>
