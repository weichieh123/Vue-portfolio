<template>
  <div class="works" v-dragscroll="{ target: '.scroll-section' , active: !isMobile }">
    <h2>{{ title }}</h2>
    <div class="scroll-section" >
      <!-- :v-dragscroll="!isMobile" -->
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
            <div class="tags">
              <span v-for="(tag, i) in work.tags" :key="'tag' + i"
                ># {{ tag }}</span
              >
            </div>
            <small class="content-mobile">{{ work.content }}</small>
          </div>
          <div class="right">
            <img
              :src="require('@/assets/Works/' + path + work.img)"
              :alt="work.img"
            />
            <div v-if="work.rwd" class="mobile">
              <img
                :src="require('@/assets/Works/' + path + work.mobileImg)"
                alt=""
              />
            </div>
          </div>
          <div class="content" :class="{ isLong: work.isLong }">
            <span>{{ work.content }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, toRefs } from 'vue';

const props = defineProps({
  title: {
    type: String,
  },
  works: {
    type: Array,
  },
  path: {
    type: String,
  },
});

const { title, works, path } = toRefs(props);

const isMobile = computed(() => {
  const ifIsMobile = window.matchMedia('only screen and (max-width: 768px)');
  console.log('mobile??', ifIsMobile.matches);
  return ifIsMobile.matches;
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/works.scss';
</style>
