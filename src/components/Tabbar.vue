<template>
  <div>
    <div class="page-wrap">
      <router-view/>
    </div>
    <div class="page-tabbar">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home" v-bind:class="{'is-selected' : 'home' === activeUrl}">
          <router-link to="/home">
            <div class="icon iconfont icon-home"></div>
            首页
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="find" v-bind:class="{'is-selected' : 'find' === activeUrl}">
          <router-link to="/find">
            <div class="icon iconfont icon-faxian"></div>
            发现
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="mine" v-bind:class="{'is-selected' : 'mine' === activeUrl}">
          <router-link to="/mine">
            <div class="icon iconfont icon-wode"></div>
            我的
          </router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page-tabbar',
  data () {
    return {
      selected: '0',
      activeUrl: ''
    }
  },
  mounted () {
    this.selected = this.$route.name
  }
}
</script>
