<template>
  <div class="music-comment">
    <nav-bar>
      <img src="../../assets/img/detail/goback.png" slot="left" @click="goback">
      <div slot="center">评论</div>
    </nav-bar>
    <div class="detail-comments">
      <ul>
        <li v-for="(item,index) in comments" :key="index">
          <img :src="item.userImg">
          <span class="user-text">{{item.userName}}</span>
          <div class="user-comment">{{item.userComments}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import {handleMusicComments} from "@/network/comment";

export default {
  name: "Comment",
  components:{
    NavBar
  },
  data() {
    return {
      comments:[]
    }
  },
  created() {
    const id  = this.$route.params.songIds;
    handleMusicComments(id).then(res=>{
      for(let i=0;i<res.data.comments.length;i++){
        let comment = {};
        comment.userImg = res.data.comments[i].user.avatarUrl;
        comment.userName = res.data.comments[i].user.nickname;
        comment.userComments = res.data.comments[i].content;
        this.comments.push(comment)
      }

      console.log(this.comments)
    }).catch(err=>{
      console.log(err)
    })
  },
  mounted() {

  },
  methods:{
    goback() {
      this.$router.push('/detail/'+this.$route.params.songIds)
    }
  }

}
</script>

<style scoped>
  .detail-comments{
    display: flex;
    align-items: center;
    width: 100%;
    height: 80%;
  }
  ul{
    list-style-type: none;
    padding: 2px;
  }
  .detail-comments li img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  li{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 20px;
    position: relative;
  }

  .user-comment,.user-text{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #475669;
  }

  .user-text{
    position: absolute;
    left: 20%;
    top:32px;
    color: lightcoral;
    font-size: 14px;
  }
</style>