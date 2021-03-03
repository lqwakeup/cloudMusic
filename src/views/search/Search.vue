<template>
  <div class="search-music">
    <nav-bar>
      <img slot="left" src="../../assets/img/detail/goback.png" @click="back">
      <div slot="center" class="find-center">
          <el-input v-model="searchMsg" placeholder="请输入搜索内容"
                    @keydown.enter.native="getMusic"></el-input>
      </div>
      <img src="../../assets/img/find/listen.png" slot="right">
    </nav-bar>
    <ul>
      <li v-for="(item,index) in musicMessages" :key="index" @click="changeMusic(index)">
        <div>{{item.name}}</div>
        <div>{{item.singer}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import {handleSearchMusic} from "@/network/search";

export default {
  name: "Search",
  components:{
    NavBar,
  },
  data() {
    return {
      searchMsg: '',
      musicMessages:[]
    }
  },
  methods:{
    getMusic() {
      console.log('hello')
      handleSearchMusic(this.searchMsg).then(res=>{
        for(let i =0;i<res.data.result.songs.length;i++){
          let msg = [];
          msg.id = res.data.result.songs[i].privilege.id;
          msg.name = res.data.result.songs[i].name;
          msg.singer = res.data.result.songs[i].ar[0].name;
          this.musicMessages.push(msg);
        }
      }).catch(err=>{
        console.log(err)
      })
    },

    changeMusic(index) {
      console.log(index)
      let songIds = this.musicMessages[index].id
      console.log(songIds)
      this.$bus.$emit('changeSongInd',songIds);
    },

    back() {
      this.$router.push('/find')
    }
  }
}
</script>

<style scoped>
  /deep/ .el-input__inner{
    border-radius: 20px;
    height: 34px;
  }

  ul{
    list-style-type: none;
    padding: 2px;
  }

  li{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 20px;

    position: relative;
  }

  li:nth-child(1){
    margin-top: 40px;
  }

  li:last-child{
    margin-bottom: 90px;
  }







</style>