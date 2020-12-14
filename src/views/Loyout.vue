<template>
  <div class="layout">
    <navbar />
    <div class="wrapper clearfix main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <Footer>
      footer1
    </Footer>
  </div>
</template>

<script>
    import Navbar from "./Navbar"
    import Footer from "./Footer"

    export default {
        components: {Footer, Navbar}
    }
</script>

<style scoped lang="scss">
  .layout {
  }

  .main {
    min-height: calc(100vh - 174px);
  }
</style>
