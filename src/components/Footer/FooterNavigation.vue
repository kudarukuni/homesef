<template>
  <div class="footer-navigation__wrapper">
    <nav class="nav-links">
      <li class="link" v-scroll-to="{el:'#equipment'}">Equipment</li>
      <li class="link" v-scroll-to="{el:'#service', offset: -150}">Service</li>
      <li class="link" v-scroll-to="{el:'#rent'}">Rent</li>
      <li class="link" v-scroll-to="{el:'#about'}">About</li>
      <li class="link" v-scroll-to="{el:'#contacts'}">Contacts</li>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "FooterNavigation"
    }
</script>

<style scoped>
.footer-navigation__wrapper {
  margin-left: auto;
}
.block-title {
  color: #ffffff;
  font-weight: normal;
  font-size: 20px;
}
.link {
  width: max-content;
  margin-top: 20px;
  padding-bottom: 5px;
  list-style-type: none;
  position: relative;
  color: #b1b1b1;
  cursor: pointer;
}
.link:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #e76c1e;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.link:hover:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
@media only screen and (max-width : 1750px) {
  .block-title {
    font-size: 18px;
  }
}
@media only screen and (max-width : 800px) {
  .footer-navigation__wrapper {
    display: none;
  }
}
</style>