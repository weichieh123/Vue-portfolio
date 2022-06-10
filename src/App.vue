<template>
  <div class="app">
    <Header />
    <div id="section" class="section" @click="closeMenu">
      <Home />
      <About />
      <WorksLayout />
      <WorksVue />
      <WorksReact />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import Header from './components/layout/Header.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import WorksLayout from './views/works/WorksLayout.vue';
import WorksVue from './views/works/WorksVue.vue';
import WorksReact from './views/works/WorksReact.vue';

const store = useStore();
const closeMenu = () => {
  store.dispatch('closeMenu');
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
}
.app {
  overflow: hidden; //scroll options
  height: 100vh;
  font-family: 'Montserrat', sans-serif;

  .section {
    position: relative;
    height: calc(100vh - #{$navHeight});
    top: $navHeight;
    scroll-behavior: smooth;

    overflow-y: scroll; //scroll options
    scrollbar-width: none; //for firefox
    &::-webkit-scrollbar {
      display: none;
    }

    // scroll-snap-type:  y mandatory;
    > * {
      /* section裡面的所有元件 */
      width: 100vw;
      overflow-x: hidden;
      // min-height: calc(100vh - #{$navHeight});
      // scroll-snap-align: start;
    }
  }
}
</style>
