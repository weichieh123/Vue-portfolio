<template>
    <Work
        id="works-layout" class="works-layout" :title="'Layout'" :works="works" :path="'Layout/'"
     />
</template>

<script setup>
import works from '@/store/works/worksLayout';
import Work from '@/components/layout/Works.vue';
</script>
