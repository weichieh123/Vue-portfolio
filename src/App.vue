<template>
  <div class="app">
    <Header />
    <div class="section">
      <Home />
      <About />
      <WorksVue />
    </div>
  </div>
</template>

<script setup>
import Header from './components/layout/Header.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import WorksVue from './views/works/works-vue/WorksVue.vue';
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
      min-height: calc(100vh - #{$navHeight});
      // scroll-snap-align: start;
      @include size_M {
        min-height: fit-content;
      }
    }
  }
}
</style>
