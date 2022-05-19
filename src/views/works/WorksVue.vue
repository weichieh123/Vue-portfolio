<template>
  <Work id="works-vue" class="works-vue" :title="'Vue'" :works="works" :path="'Vue/'" />
</template>

<script setup>
import works from '@/store/works/worksVue';
import Work from '@/components/layout/Works.vue';
</script>

<style lang="scss" scoped>
</style>
