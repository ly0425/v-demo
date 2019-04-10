<template>
  <div>
    <mt-header title="我的">
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div>
      <router-link to="/mine/demo">
        <mt-button>demo测试</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine'
}
</script>
