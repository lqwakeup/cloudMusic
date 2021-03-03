<template>
  <div class="detail-cover">
    <img :src="songPic">
    <div class="songName">{{songName}}</div>
    <div class="singer">{{singer}}</div>
    <div class="pinglun">
      <router-link :to="'/comment/'+songIds">
        <img src="../../../assets/img/detail/pinglun.png">
      </router-link>
      <span>{{musicTotal}}</span>
    </div>
  </div>
</template>

<script>
import {handleMusicPinglun} from "../../../network/detail";
export default {
  name: "DetailCover",
  props:{
    songPic:String,
    songName:String,
    singer:String,
    songIds:String
  },
  data() {
    return {
      songId:'',
      total:0,
      musicTotal:''
    }
  },
  mounted() {
    this.songId = this.$route.params.songIds;
    handleMusicPinglun(this.songId).then(res=>{
      this.total = res.data.total;
      this.musicTotal = this.total.toString();
      if(this.total>999){
        this.musicTotal = '999+'
      }
      if(this.total>10000){
        this.musicTotal = '1w+'
      }
      if(this.total>100000){
        this.musicTotal = '10w+'
      }

    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
  .detail-cover{
    width: 82%;
    height: 60%;
    margin:20% 10%;
    position: relative;
  }

  .pinglun {
    width: 10%;
    height: 10%;
    margin-left: 80%;
    position: absolute;
    bottom: 1px;
  }
  .pinglun span{
    font-family: Arial;
    font-size: 12px;
    position: absolute;
    top:-7%;
    left: 51%;
    z-index: 3;
  }
  .detail-cover img{
    width: 100%;
    height: 80%;
    border-radius: 10%;
  }

  .detail-cover div{
    margin-top: 10px;
    color: #475669;
    font-family: Arial Bahnschrift;
  }

  .detail-cover .songName{
    font-size: 20px;
    width: 80%;
  }
</style>