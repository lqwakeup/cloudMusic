<template>
  <div id="tab-bar-content">
    <tab-bar-item path="/find">
      <img slot="item-icon" src="../../../assets/img/find.png">
      <img slot="item-active" src="../../../assets/img/find1.png">
      <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/play">
      <img slot="item-icon" src="../../../assets/img/play1.png">
      <img slot="item-active" src="../../../assets/img/play.png">
      <div slot="item-text">播客</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../../../assets/img/my.png">
      <img slot="item-active" src="../../../assets/img/my1.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    <tab-bar-item path="/song">
      <img slot="item-icon" src="../../../assets/img/song1.png">
      <img slot="item-active" src="../../../assets/img/song.png">
      <div slot="item-text">k歌</div>
    </tab-bar-item>
    <tab-bar-item path="/yuncun">
      <img slot="item-icon" src="../../../assets/img/yuncun1.png">
      <img slot="item-active" src="../../../assets/img/yuncun.png">
      <div slot="item-text">云村</div>
    </tab-bar-item>
  </div>
</template>

<script>

import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "TabBarContent",
  components:{
    TabBarItem,
  }
}
</script>

<style scoped>
  #tab-bar-content{
    display: flex;
    flex-wrap: wrap;
    background-color: #f6f6f6;
    text-align: center;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
  }

  #tab-bar-content img{
    width: 35%;
    height: 35%;
  }

  #tab-bar-content div{
    font-size: 13px;
  }
</style>