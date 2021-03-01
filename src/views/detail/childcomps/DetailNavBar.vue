<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <img src="../../../assets/img/detail/goback.png" slot="left" @click="imgGoback">
      <div slot="center">
        <span>歌曲</span>
        <span>歌词</span>
      </div>
      <img src="../../../assets/img/detail/share.png" slot="right">
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",

  data() {
    return {
    }
  },
  components:{
    NavBar
  },
  methods:{
    imgGoback() {
      this.$router.push('/find')
    }
  },
}
</script>

<style scoped>
  .detail-nav-bar span{
    height: 5px;
    margin-top: -2px;
    padding: 5px;
  }

</style>