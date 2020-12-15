<template>
  <div class="navbar">
    <div class="wrapper">
      <router-link to="/">
        <img
          src="../assets/logo.png"
          width="160"
          style="margin-top: 10px;float: left;"
        >
      </router-link>

      <ul class="nav-list">
        <li
          v-for="nav in navList"
          :key="nav.code"
        >
          <router-link
            :to="nav.code"
            :class="isActive(nav.code) ? 'active' : ''"
          >
            {{ nav.value }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                currentUrl: '/',
                navList: [
                    {
                        code: '/',
                        value: '首页'
                    },
                    {
                        code: '/article',
                        value: '公司介绍'
                    },
                    {
                        code: '/novel',
                        value: '公司业务'
                    },
                    {
                        code: '/album',
                        value: '新闻中心'
                    },
                    {
                        code: '/video',
                        value: '人力资源'
                    },
                    {
                        code: '/tools',
                        value: '专业服务'
                    },
                    {
                        code: '/about',
                        value: '关于我们'
                    }]
            }
        },
        methods: {
            isActive: function (url) {
                if (url === '/') {
                    return this.currentUrl === '/';
                }
                return this.currentUrl.startsWith(url);
            }
        },
        mounted() {
            this.currentUrl = this.$route.path;
        },
        watch: {
            '$route'(newRoute) {
                this.currentUrl = newRoute.path;
            }
        }
    }
</script>

<style scoped lang="scss">
  .navbar {
    height: 70px;
    line-height: 70px;
    background: #fff;

    .nav-list {
      float: left;
      list-style: none;
      margin-top: 0;
      margin-left: 30px;

      li {
        float: left;
        height: 70px;
        line-height: 70px;
        text-align: center;
        margin-right: 10px;

        a {
          color: #333;
          text-decoration: none;
          padding: 10px 20px;
        }

        a.active {
          background: #0069cb;
          color: #fff;
        }
      }
    }
  }
</style>
