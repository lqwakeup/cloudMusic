<template>
  <div id="find">
    <nav-bar>
      <img src="../../assets/img/find/select.png" slot="left"  @click="drawer = true">
      <div slot="center" class="find-center">
        <el-input v-model="searchMsg" placeholder="请输入搜索内容"
                  @keydown.enter.native="getMusic"></el-input>
      </div>
      <img src="../../assets/img/find/listen.png" slot="right">
    </nav-bar>

    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false"
        direction="ltr"
        size="80%">
      <span>一个抽屉，还没开始写</span>
    </el-drawer>

    <find-swiper :banners="banners"></find-swiper>


  </div>
</template>



<script>
import NavBar from "@/components/common/navbar/NavBar";

import FindSwiper from "@/views/findings/childcomps/FindSwiper";

import {handleSearchMusic,handleBanner} from "@/network/find";

export default {
  name: "find",
  data() {
    return {
      searchMsg: '',
      drawer: false,
      banners:[]
    }
  },
  components:{
    NavBar,
    FindSwiper
  },
  methods:{
    getMusic() {
      console.log('hello')
      handleSearchMusic(this.searchMsg).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },

    getBanners() {
      handleBanner(1).then(res=>{
        // console.log(res)
        this.banners = res.data.banners;
      }).catch(err=>{
        console.log(err)
      })
    },

  },

  created() {
    this.getBanners();
  }


}
</script>

<style scoped>
  #find{
    padding-top: 44px;
    height: 100vh;
  }
  .find-center >>> .el-input__inner{
    border-radius: 20px;
    height: 34px;
  }
</style>
