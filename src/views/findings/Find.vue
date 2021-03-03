<template>
  <div id="find">
    <nav-bar class="find-nav-bar">
      <img src="../../assets/img/find/select.png" slot="left"  @click="drawer = true">
      <div slot="center" class="find-center">
        <router-link to="/search">
          <el-input placeholder="请输入搜索内容"></el-input>
        </router-link>
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

import {handleBanner} from "@/network/find";


export default {
  name: "find",
  data() {
    return {
      searchMsg: '',
      drawer: false,
      banners:[],
    }
  },
  components:{
    NavBar,
    FindSwiper
  },
  methods:{


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

  .find-nav-bar{
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
  }
</style>
