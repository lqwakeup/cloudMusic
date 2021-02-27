<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-content></tab-bar-content>
    </tab-bar>
  </div>

</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarContent from "@/components/content/TabBarContent";
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarContent
  }
}
</script>

<style>

</style>
