<template>
  <div class="works">
    <h2>{{ title }}</h2>
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
            <div class="tags">
              <span v-for="(tag, i) in work.tags" :key="'tag' + i"># {{ tag }}</span>
            </div>
          </div>
          <div class="right">
            <img
              :src="require('@/assets/Works/'+ path + work.img)"
              :alt="work.img"
            />
            <div v-if="work.rwd" class="mobile">
              <img
                :src="require('@/assets/Works/'+ path + work.mobileImg)"
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
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  title: {
    type: String,
  },
  works: {
    type: String,
  },
  path: {
    type: String,
  },
});

const { title, works, path } = toRefs(props);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/works.scss';
</style>
