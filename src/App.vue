<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <router-view name="footer"></router-view>
    <feedback></feedback>
  </div>
</template>

<script>

import Feedback from "@/components/Feedback";
export default {
  name: 'App',
  components: {
      Feedback
  },
  computed: {
      defaultViewKey: function() {
          return this.$route.name;
      }
  }
}
</script>

<style>
  html, body {
    height: 100%;
  }
  body {
    margin: initial;
    font-family: HelveticaNeueCyr;
    font-size: 16px;
    font-weight: 500;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    /*background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgb(229, 229, 229) 70%, rgba(241,241,241,1) 100%);*/
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Heavy.ttf');
    font-weight: 600;
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Bold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Medium.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: HelveticaNeueCyr;
    src: url('./assets/HelveticaNeueCyr-Roman.ttf');
    font-weight: 500;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
    width: -webkit-fill-available;
  }
  @media only screen and (max-width : 1750px) {
    body {
      font-size: 14px;
    }
  }
</style>
