<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div class="tar-bar-item-text"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods:{
    itemClick() {
      this.$router.push(this.path)
      // console.log(this.$route)
    }
  }

}
</script>

<style scoped>
  .tar-bar-item{
    flex:1;
    margin-top: 4px;
  }

  .tar-bar-item-text{
    margin-bottom: 4px;
  }
</style>