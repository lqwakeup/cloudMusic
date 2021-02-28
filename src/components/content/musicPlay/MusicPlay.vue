<template>
  <div class="music-play" v-if="isShow">
    <div class="detail-link">
      <router-link :to="'/detail/'+songIds">
        <img :src="musicCover" :class="{imgState:playState}">
      </router-link>
    </div>
    <audio :src="url" autoplay controls @play="onPlay" @pause="onPause" controlsList="nodownload"></audio>
  </div>
</template>

<script>
export default {
  name: "MusicPlay",
  data() {
    return {
      url:"http://m8.music.126.net/20210228122737/2ba82477d726091e82377c5888339634/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2841378497/5910/da6a/46e5/b896ae0a84f84fb3ad5494ce1361851f.mp3",
      musicCover:"https://p2.music.126.net/0el5yaTEo3KjeJjL3ZXxmg==/109951165054951989.jpg",
      playState:false,
      isShow: false,
      songIds:0
    }
  },
  mounted() {
    this.$bus.$on('sendUrl',data=>{
      this.url = data;
      this.isShow = true;
    });

    this.$bus.$on('sendPicUrl',data=>{
      this.musicCover = data;
    });

    this.$bus.$on('sendSongIds',data=>{
      this.songIds = data;
    })
  },
  methods:{
    onPlay() {
      this.playState = true;
    },
    onPause() {
      this.playState = false;
    }
  }
}
</script>

<style scoped>
  .music-play{
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #f1f3f4;
    position: fixed;
    bottom: 56px;
    left: 0;
    right: 0;
  }
  .detail-link{
    width: 15%;
    height: 45px;

  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin: 4px 5px 0 3px;
  }
  .music-play audio{
    width: 100%;
    height: 50px;
    margin-left: 10px;
  }

  /* 定义动画 */
  @keyframes turn{
    0%{
      transform: rotate(0deg);
    }
    25%{
      transform: rotate(90deg);
    }
    50%{
      transform: rotate(180deg);
    }
    75%{
      transform: rotate(270deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  .imgState{
    animation: turn 20s linear infinite;
  }


</style>