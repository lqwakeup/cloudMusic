<template>
  <div id="detail">
    <detail-nav-bar :songName="songName" :songIds="songIds"
                    :singer="singer"></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childcomps/DetailNavBar";

import {handleMusicDetail} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar
  },
  data() {
    return{
      songIds:0,
      songName:'',
      singer:''
    }
  },
  created() {
    this.songIds = this.$route.params.songIds;
    handleMusicDetail(this.songIds).then(res=>{
      this.songName = res.data.songs[0].al.name;
      this.singer = res.data.songs[0].ar[0].name;
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
  #detail{
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    background-color: #f6f6f6;

    overflow-y: hidden;
  }
</style>