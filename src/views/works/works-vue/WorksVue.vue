<template>
  <div id="works-vue" class="works-vue">
    <h2>Works</h2>
    <div class="scroll-section" v-dragscroll="true">
      <div class="wrap">
        <div class="card" v-for="(work, i) in works" :key="i">
          <h4 class="title">
            <a :href="work.link">{{ work.title }}</a>
          </h4>
          <div class="left">
            <div class="icons">
              <el-icon><Platform /></el-icon>
              <el-icon v-if="work.rwd"><Iphone /></el-icon>
            </div>
            <div class="tags" v-for="(tag, i) in work.tags" :key="'tag' + i">
              <span># {{ tag }}</span>
            </div>
          </div>
          <div class="right">
            <img
              :src="require('@/assets/Works/Vue/' + work.img)"
              :alt="work.img"
            />
            <div v-if="work.rwd" class="mobile">
              <img
                :src="require('@/assets/Works/Vue/' + work.mobileImg)"
                alt=""
              />
            </div>
          </div>
          <div class="content">
            <span>{{ work.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import works from '@/store/works/vue/worksvue';
// import mockup from '../../../assets/Works/Covid19TestApp_iPhone7 (2).png';
// import desktop from '@/assets/Works/Vue/Vue-BusApp-desktop.png';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/works-vue.scss';
</style>
