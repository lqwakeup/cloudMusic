<template>
  <swiper>
    <swiper-item v-for="(item,id) in banners" :key="id">
      <img :src=item.pic @click="getBannerMusic(id)">
    </swiper-item>
  </swiper>
</template>

<script>

import {Swiper, SwiperItem} from '@/components/common/swiper'
import {handleMusicUrl} from "@/network/find";

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
      url:''
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    getBannerMusic(songId) {
      if(this.banners[songId].song !== null){
        handleMusicUrl(this.banners[songId].song.id).then(res=>{
          this.url = res.data.data[0].url;
          this.$bus.$emit('sendUrl',this.url)
        }).catch(err=>{
          console.log(err)
        })
      }else{
        console.log('not songs')
      }

    }
  }
}
</script>

<style scoped>

</style>