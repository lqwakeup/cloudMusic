<template>
  <div class="music-play" v-if="isShow">
      <router-link :to="'/detail/'+songIds" class="routerLink">
        <div class="audio-img">
          <img :src="musicCover" :class="{imgState:playState}">
        </div>
        <div class="audio-left">
          <span>{{songName}}</span>
          <span class="singer">-{{singer}}</span>
        </div>
      </router-link>

    <audio :src="url" autoplay  @play="onPlay" @pause="onPause" @timeupdate="musicTime"></audio>

    <div class="audio-right">
      <img v-if="isPlaying" @click="playing" src="../../../assets/img/detail/onPlay.png">
      <img v-else @click="pasuing" src="../../../assets/img/detail/onPause.png">
      <img src="../../../assets/img/playlist.png">
    </div>
  </div>
</template>

<script>
import {handleMusicDetail} from "@/network/detail";
import {handleMusicCover, handleMusicUrl} from "@/network/find";

export default {
  name: "MusicPlay",
  data() {
    return {
      url:'',
      musicCover:'',
      playState:false,
      isShow: false,
      songIds:0,
      songName:'',
      singer:'',
      isPlaying:true,
      currentTime:0,
      duration:0
    }
  },

  created() {

    this.$bus.$on('sendSongIds',data=>{
      console.log(data)
      this.songIds = data;
      this.getMsg()
    });

    this.$bus.$on('changeSongInd',data=>{
      console.log(data)
      this.songIds = data;
      this.getMsg()
    });
  },

  updated() {
    handleMusicDetail(this.songIds).then(res=>{
      this.songName = res.data.songs[0].al.name;
      this.singer = res.data.songs[0].ar[0].name;
      this.isShow = true
      console.log(this.singer)
    }).catch(err=>{
      console.log(err)
    })

    handleMusicCover(this.songIds).then(res=>{
      this.musicCover = res.data.songs[0].al.picUrl;
    }).catch(err=>{
      console.log(err)
    });

    handleMusicUrl(this.songIds).then(res=>{
      this.url = res.data.data[0].url;
    }).catch(err=>{
      console.log(err)
    });
  },

  methods:{
    musicTime() {
      let audio = document.querySelector('audio')
      this.currentTime = audio.currentTime;
      this.duration = audio.duration;

      this.$bus.$emit('sendCurrentTime',this.currentTime);
      this.$bus.$emit('sendDuration', this.duration);
    },
    playing() {
      this.onPause();
      this.isPlaying = false;
      let audio = document.querySelector('audio')
      audio.pause();
    },
    pasuing() {
      this.onPlay();
      this.isPlaying = true;
      let audio = document.querySelector('audio')
      audio.play();
    },
    onPlay() {
      this.playState = true;
    },
    onPause() {
      this.playState = false;
    },

    getMsg() {
      handleMusicDetail(this.songIds).then(res=>{
        this.songName = res.data.songs[0].al.name;
        this.singer = res.data.songs[0].ar[0].name;
        this.isShow = true
        console.log(this.singer)
      }).catch(err=>{
        console.log(err)
      })

      handleMusicCover(this.songIds).then(res=>{
        this.musicCover = res.data.songs[0].al.picUrl;
      }).catch(err=>{
        console.log(err)
      });

      handleMusicUrl(this.songIds).then(res=>{
        this.url = res.data.data[0].url;
      }).catch(err=>{
        console.log(err)
      });
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
    bottom: 52px;
    left: 0;
    right: 0;
  }

  .routerLink{
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .routerLink img{
    width: 100%;
    border-radius: 50%;
  }

  .audio-img{
    width: 15%;
    margin-right: 10px;
  }

  .audio-left .singer{
    font-size: 14px;
    color: #99a9bf;
  }

  a {
    text-decoration: none;
  }

  .routerLink span{
    font-size: 16px;
    padding: 3px;
    color: black;
  }

  .audio-right{
    display: flex;
    flex-direction: row;
    width: 20%;
    position: relative;
  }

  .audio-right img:nth-child(1){
    position: absolute;
    right: 51px;
  }

  .audio-right img:nth-child(2){
    position: absolute;
    right: 5px;
  }
  .audio-right img{
    width: 40%;
    height: 60%;
    margin-top: 10px;
    padding: 3px;
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