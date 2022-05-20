<template>
  <Work
    id="works-react"
    class="works-react"
    :title="'React'"
    :works="works"
    :path="'React/'"
  />
</template>

<script setup>
import works from '@/store/works/worksReact';
import Work from '@/components/layout/Works.vue';
</script>
