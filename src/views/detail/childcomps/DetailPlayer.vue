<template>
  <div class="detail-player">
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value1" :format-tooltip="formatTooltip" :max="duration"></el-slider>
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
    }
  },



}
</script>

<style scoped>

</style>