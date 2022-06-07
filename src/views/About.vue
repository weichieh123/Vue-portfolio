<template>
  <div id="about" class="about">
    <h2>About</h2>
    <div class="wrap">
      <div class="intro">
        <p>
          我是黃薇倢(Huang
          Wei-Chieh)，於2021年轉職前端網頁工程師，主攻Vue與React框架，目前多使用Vue
          3。
        </p>
      </div>
      <div class="experience">
        <h5>Experience</h5>
        <el-timeline>
          <el-timeline-item timestamp="2012/9 - 2016/6" placement="top">
            國立清華大學電機工程學系<br />攝影社社長(2015年)
          </el-timeline-item>
          <el-timeline-item timestamp="2017/12 - 2020/11" placement="top">
            電子工程師
          </el-timeline-item>
          <el-timeline-item timestamp="2021/2 - 2021/7" placement="top">
            資策會 - 前端就業養成班
          </el-timeline-item>
          <el-timeline-item timestamp="2021/8 - Now" placement="top">
            前端工程師(React、Vue)
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="avatar">
        <img :src="require(`../assets/About/avatar.png`)" alt="" />
      </div>
      <div class="contact">
        <div class="icon-btn mail">
          <a href="weicheihhuang@gapp.nthu.edu.tw"
            ><el-icon class="email"><Message /></el-icon
          ></a>
        </div>
        <div class="icon-btn github">
          <a href="https://github.com/weichieh123">
            <img
              :src="require(`../assets/About/GitHub.png`)"
              alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/about.scss';
</style>
