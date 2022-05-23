<template>
  <div id="home" class="home">
    <div class="block text-center" m="t-4">
      <el-carousel trigger="click" indicator-position="none">
        <el-carousel-item v-for="photo in 16" :key="photo">
          <img
            :src="require(`../assets/Photography/photo (${photo}).jpg`)"
            alt=""
          />
        </el-carousel-item>
      </el-carousel>
      <div class="title">
      <VueWriter :array="['a Front-end Developer']" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/home.scss';
</style>
