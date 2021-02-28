<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-content></tab-bar-content>
    </tab-bar>
    <music-play></music-play>
  </div>

</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarContent from "@/components/content/tabControl/TabBarContent";


import MusicPlay from "@/components/content/musicPlay/MusicPlay";
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarContent,
    MusicPlay
  }
}
</script>

<style>

</style>
