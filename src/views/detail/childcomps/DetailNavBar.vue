<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <img src="../../../assets/img/detail/goback.png" slot="left" @click="imgGoback">
      <div slot="center">
        <p>{{songName}}</p>
        <p>{{singer}}</p>
      </div>
      <img src="../../../assets/img/detail/share.png" slot="right">
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  props:{
    songName:String,
    singer:String,
  },
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

</style>