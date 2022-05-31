<template>
  <div class="header" :class="{ active: isOpen }">
    <div class="logo" :class="{ active: isOpen }">
      <el-icon><video-camera-filled /></el-icon>
      <span> Weichieh</span>
    </div>
    <div class="sidemenu">
      <button
        class="sidemenu__btn"
        @click="toggleIsOpen"
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
          <li class="sidemenu__item" @click="toggleIsOpen"><a :class="{ active: isOpen }" href="#home" >Home</a> </li>
          <li class="sidemenu__item" @click="toggleIsOpen"><a :class="{ active: isOpen }" href="#about" >About</a></li>
          <li class="sidemenu__item">
            <a :class="{ active: isOpen }" href="#">Works</a>
            <ul>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-layout" @click="toggleIsOpen">- Layout</a></li>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-vue" @click="toggleIsOpen">- Vue</a></li>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-react" @click="toggleIsOpen">- React</a></li>
              </ul>
            </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const isOpen = computed(() => store.getters.getIsOpen);
const toggleIsOpen = () => {
  store.dispatch('toggleIsOpen');
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/header.scss';
</style>
