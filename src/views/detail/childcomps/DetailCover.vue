<template>
  <div class="detail-cover">
    <img :src="songPic">
    <div class="songName">{{songName}}</div>
    <div class="singer">{{singer}}</div>
  </div>
</template>

<script>
export default {
  name: "DetailCover",
  props:{
    songPic:String,
    songName:String,
    singer:String,
  },
}
</script>

<style scoped>
  .detail-cover{
    width: 82%;
    height: 60%;
    margin:20% 10%;
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
    font-size: 24px;
  }
</style>