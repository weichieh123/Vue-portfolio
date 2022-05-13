<template>
  <div id="works-vue" class="works-vue">
    <h2>Works</h2>
    <div class="scroll-section" v-dragscroll="true">
      <div class="wrap">
        <div class="card">
          <h4 class="title"><a href="#">Bus Route App</a></h4>
          <div class="left">
            <div class="icons">
              <el-icon><Platform /></el-icon>
              <el-icon><Iphone /></el-icon>
            </div>
            <div class="tags">
              <span># Vue3</span>
              <span># Open API</span>
              <span># Axios</span>
              <span># Leaflet</span>
            </div>
          </div>
          <div class="right">
            <img :src="desktop" alt="" />
          </div>
          <div class="content">
            <span>使用Vue3架構，串接Open API，實現公車路線查詢之功能。</span>
          </div>
        </div>
        <div class="card">2</div>
        <div class="card">3</div>
        <div class="card">4</div>
        <div class="card">5</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import works from '../../../store/works/vue/worksvue';
// import mockup from '../../../assets/Works/Covid19TestApp_iPhone7 (2).png';
import desktop from '../../../assets/Works/Vue/Vue-BusApp-desktop.png';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/works-vue.scss';
</style>
