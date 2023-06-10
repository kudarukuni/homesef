<template>
  <header class="header__container" id="up">
    <navigation-menu></navigation-menu>
    <first-screen></first-screen>
  </header>
</template>

<script>
    import NavigationMenu from "@/components/FirstScreen/NavigationMenu";
    import FirstScreen from "@/components/FirstScreen/FirstScreen";
    export default {
        name: "Header",
        components: {FirstScreen, NavigationMenu}
    }
</script>

<style scoped>
.header__container {
  width: 100%;
  height: 100vh;
  padding: 100px 150px;
  box-sizing: border-box;
  background: url(../assets/images/gallery/2.jpeg);
  background-size: cover;
  background-position: center;
  transition-duration: 0.3s;
}
@media only screen and (max-width : 1750px) {
  .header__container {
    padding: 70px 100px;
  }
}
@media only screen and (max-width : 1366px) {
  .header__container {
    padding: 70px;
  }
}
@media only screen and (max-width : 533px) {
  .header__container {
    padding: 70px 40px;
    height: auto;
  }
}
</style>