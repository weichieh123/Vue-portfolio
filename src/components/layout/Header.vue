<template>
  <div class="header">
    <div class="logo">
      <el-icon><video-camera-filled /></el-icon>
      <span> Weichieh</span>
    </div>
    <div class="sidemenu">
      <button
        class="sidemenu__btn"
        @click="isOpen = !isOpen"
        :class="{ active: isOpen }"
      >
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
    </div>
    <nav :class="{ active: isOpen }">
      <div class="sidemenu__wrap">
        <ul class="sidemenu__list">
          <!-- v-scroll-to="'#home'" -->
          <!-- v-scroll-to="'#about'" -->
          <!-- v-scroll-to="'#works-vue'" -->
          <li class="sidemenu__item" @click="isOpen = false"><a href="#home" >Home</a> </li>
          <li class="sidemenu__item" @click="isOpen = false"><a href="#about" >About</a></li>
          <li class="sidemenu__item" @click="isOpen = false"><a href="#works-vue" >Works</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/header.scss';
</style>
