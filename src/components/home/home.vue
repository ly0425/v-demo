<template>
  <div>
    <mt-header title="首页">
      <mt-button slot="right"></mt-button>
    </mt-header>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <router-link to="/goodsDetails">
          <img v-lazy="image" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
      left-icon="volume-o"
    />
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男"
      :thumb="imageURL"
      origin-price="10.00"
    >
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>

  </div>
</template>
<script>
export default {
  data () {
    return {
      images: [
        'https://cdn.pixabay.com/photo/2015/04/21/16/43/spring-733507_1280.jpg',
        'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg',
        'http://pic.nipic.com/2008-02-21/2008221193244277_2.jpg',
        'http://pic14.nipic.com/20110512/256915_172633143172_2.jpg'
      ],
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    }
  },
  i18n: {
    'zh-CN': {
      title: '2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男'
    }
  },
  methods: {
  }
}
</script>
