<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: #f6f6f6;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 9;
  }

  .left{
    width: 60px;
    margin-top: 11px;
  }

  .right{
    width: 60px;
    margin-top: 8px;
  }

  .center{
    flex: 1;
  }

</style>