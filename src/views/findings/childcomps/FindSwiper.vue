<template>
  <div class="block">
    <el-carousel height="134px">
      <el-carousel-item v-for="(item,id) in banners" :key="id">
        <h3 class="small">
          <img :src=item.pic @click="getBannerMusic(id)">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: "FindSwiper",
  props:{
    banners:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      url:'',
      musicCover:'',
      songIds:0,
      songName:'',
      singer:''
    }
  },
  computed:{

  },
  components:{
  },
  methods:{
    getBannerMusic(songId) {
      if(this.banners[songId].song !== null){
          this.songIds = this.banners[songId].song.id;
          this.$bus.$emit('sendSongIds',this.songIds)
      }
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;

  }


  /deep/ .el-carousel__button{
    display: block;
    opacity: .48;
    width: 9px;
    height: 2px;
    background-color: #FFF;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: .3s;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  h3 img{
    width: 100%;
    height: 100%;
  }
</style>