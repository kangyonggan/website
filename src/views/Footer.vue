<template>
  <div class="footer clearfix">
    <div
      class="wrapper"
      style="color: #989898; font-size: 13px;position: relative;"
    >
      <span>©2020-{{ new Date().getFullYear() }}</span>
      <span>版权所有：和君纵达数据科技有限公司</span>
      <span>备案号：苏ICP备15006832号</span>
      <span>企业邮箱：market@hjzddata.com</span>
      <img src="../assets/qrcode.png">
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss">
  .footer {
    height: 60px;
    line-height: 60px;
    background: #2c2c2c;
    color: #fff;

    span {
      margin-right: 20px;
    }

    img {
      position: absolute;
      right: 20px;
      bottom: 0;
      height: 75px;
    }
  }
</style>
