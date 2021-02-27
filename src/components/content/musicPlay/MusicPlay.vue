<template>
  <div class="music-play">
    <audio :src="url" autoplay controls loop></audio>
  </div>
</template>

<script>
export default {
  name: "MusicPlay",
  data() {
    return {
      url:''
    }
  },
  mounted() {
    this.$bus.$on('sendUrl',data=>{
      this.url = data;
    })
  }
}
</script>

<style scoped>
  .music-play{
    width: 100%;
    background-color: #f1f3f4;
    position: fixed;
    bottom: 56px;
    left: 0;
    right: 0;
  }
  audio{
    width: 100%;
    height: 50px;
    border-radius: 0;

  }
</style>