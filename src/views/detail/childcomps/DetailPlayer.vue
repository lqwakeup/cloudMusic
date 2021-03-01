<template>
  <div class="detail-player">
    <div class="block">
      <el-slider v-model="value1" :format-tooltip="formatTooltip" :max="duration"></el-slider>
    </div>
    <div class="music-time">
      <span>{{standardCurrentTime}}/</span>
      <span>{{standardDuration}}</span>

    </div>
    <div class="slider-bottom">
      <img src="../../../assets/img/detail/last.png">
      <img v-if="isPlaying" src="../../../assets/img/detail/onPlay.png" @click="playing">
      <img v-else src="../../../assets/img/detail/onPause.png" @click="pasuing">
      <img src="../../../assets/img/detail/next.png">
    </div>
    <div class="slider-list">
      <img src="../../../assets/img/playlist.png">
    </div>

  </div>
</template>

<script>


export default {
  name: "DetailPlayer",
  props:{
    songUrl:String,
  },
  data() {
    return {
      currentTime:0,
      duration:0,
      value1: 0,
      isPlaying:true,
      standardCurrentTime:'',
      standardDuration:''
    }
  },
  created() {
    this.$bus.$on('sendCurrentTime',data=>{
      this.currentTime = data;
      this.value1 = data
    });

    this.$bus.$on('sendDuration',data=>{
      this.duration = data;
    })
  },

  methods: {

    formatTooltip(val) {
      return val / 100;
    },
    playing() {
      this.isPlaying = false;
      let audio = document.querySelector('audio')
      audio.pause();
    },
    pasuing() {
      this.isPlaying = true;
      let audio = document.querySelector('audio')
      audio.play();
    },

  },



}
</script>

<style scoped>
  .slider-bottom{
    position: relative;
  }

  .slider-bottom img{
    padding: 10px;
  }

  .slider-bottom img:nth-child(1){
    position: absolute;
    left: 28%;
  }
  .slider-bottom img:nth-child(2){
    width: 40px;
    margin-top: -6px;
    position: absolute;
    left: 40%;
  }
  .slider-bottom img:nth-child(3){
    position: absolute;
    left: 55%;
  }

  .slider-list{
    margin-left: 80%;
    margin-top: 3%;
  }

  /deep/ .el-slider__bar {
    height: 2px;
    background-color:  #ff6666;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    position: absolute;
  }

  /deep/ .el-slider__runway {
    width: 90%;
    height: 2px;
    margin: -20px 20px;
    background-color: #99a9bf;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
  }

  /deep/ .el-slider__button {
    width: 5px;
    height: 5px;
    border: 2px solid  #ff6666;
    background-color:  #ff6666;
    border-radius: 50%;
    transition: .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /deep/ .el-slider__button-wrapper {
    height: 33px;
    width: 36px;
    z-index: 1001;
    top: -15px;
    transform: translateX(-50%);
    background-color: transparent;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: normal;
  }
</style>