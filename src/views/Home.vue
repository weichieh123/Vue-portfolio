<template>
  <div id="home" class="home">
    <div class="block text-center" m="t-4">
      <div class="pic left">
        <img :src="require(`../assets/photo-left.jpg`)" alt="" />
      </div>
      <div class="pic right">
        <img
          :src="require(`../assets/photo-right.jpg`)"
          alt=""
        />
      </div>
      <div class="title">
        <h1>Huang, W.C.</h1>
        <span>Front-end Developer</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/home.scss';
</style>
