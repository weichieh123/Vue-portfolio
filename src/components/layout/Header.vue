<template>
  <div class="header" :class="{ active: isOpen }">
    <div class="logo" :class="{ active: isOpen }">
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
          <li class="sidemenu__item" @click="isOpen = false"><a :class="{ active: isOpen }" href="#home" >Home</a> </li>
          <li class="sidemenu__item" @click="isOpen = false"><a :class="{ active: isOpen }" href="#about" >About</a></li>
          <li class="sidemenu__item">
            <a :class="{ active: isOpen }" href="#">Works</a>
            <ul>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-layout" @click="isOpen = false">- Layout</a></li>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-vue" @click="isOpen = false">- Vue</a></li>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-react" @click="isOpen = false">- React</a></li>
              </ul>
            </li>
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
