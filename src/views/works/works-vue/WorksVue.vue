<template>
  <div id="works-vue" class="works-vue">
  </div>
</template>

<script setup>
// import works from '../../../store/works/vue/worksvue';
// import mockup from '../../../assets/Works/Covid19TestApp_iPhone7 (2).png';

</script>

<style lang="scss" scoped>
.works-vue {
  width: 100vw;
  height: calc(100vh - #{$navHeight});
  background-color: #89b6a8;
  :deep(.el-timeline) {
    &-item__timestamp {
      color: #fff;
      font-size: 1rem;
    }
    .el-card {
      width: 400px;
      &__body {
        display: flex;
        flex-wrap: wrap;
      }
      .left {
        width: fit-content;
      }
      .right {
        padding: 1rem 2rem;
      }
    }
  }
}
</style>
