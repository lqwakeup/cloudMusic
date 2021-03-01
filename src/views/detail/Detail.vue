<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-cover :songPic="songPic" :songName="songName" :singer="singer" ></detail-cover>

    <detail-player :songUrl="songUrl"></detail-player>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childcomps/DetailNavBar";
import DetailCover from "@/views/detail/childcomps/DetailCover";
import DetailPlayer from "@/views/detail/childcomps/DetailPlayer";

import {handleMusicDetail,handleMusicUrl} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailCover,
    DetailPlayer
  },
  data() {
    return{
      songIds:0,
      songName:'',
      singer:'',
      songPic:'',
      songUrl:''
    }
  },
  created() {
    this.songIds = this.$route.params.songIds;
    handleMusicDetail(this.songIds).then(res=>{
      this.songName = res.data.songs[0].al.name;
      this.singer = res.data.songs[0].ar[0].name;
      this.songPic = res.data.songs[0].al.picUrl;
    }).catch(err=>{
      console.log(err)
    });

    handleMusicUrl(this.songIds).then(res=>{
      this.songUrl = res.data.data[0].url
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