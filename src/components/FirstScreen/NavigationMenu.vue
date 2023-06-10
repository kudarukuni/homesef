<template>
  <div class="nav__wrapper">
    <div class="logotype"><img src="@/assets/icons/logo.png"></div>
    <nav class="nav-links">
      <li class="link" v-scroll-to="{el:'#equipment'}">Equipment</li>
      <li class="link" v-scroll-to="{el:'#service', offset: -150}">Service</li>
      <li class="link" v-scroll-to="{el:'#rent'}">Rent</li>
      <li class="link" v-scroll-to="{el:'#about'}">About</li>
      <li class="link" id="last-link" v-scroll-to="{el:'#contacts'}">Contact Us</li>
    </nav>
    <div>
      <a href="tel:+263782516263" class="phone-links">
        <img src="@/assets/icons/phone-icon.svg">
        <span>+263 78 2516 263</span>
      </a>
    </div>
    <div class="burger-menu">
      <burger-menu></burger-menu>
    </div>
  </div>
</template>

<script>
    import BurgerMenu from "@/components/BurgerMenu";
    export default {
        name: "NavigationMenu",
        components: {BurgerMenu},
    }
</script>

<style scoped>
.nav__wrapper {
  display: flex;
  align-items: center;
}
.logotype {
  width: 300px;
}
.nav-links {
  display: flex;
  align-items: center;
  margin: auto;
}
.link {
  color: #ffffff;
  margin-right: 60px;
  padding-bottom: 5px;
  font-size: 18px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.link:after, .phone-links > span:after {
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
.link:hover:after, .phone-links > span:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
#last-link {
  margin-right: 0;
}
.phone-links {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}
.phone-links > img {
  width: 50px;
  margin-right: 20px;
  transition-duration: 0.3s;
}
.phone-links > span {
  color: #ffffff;
  font-size: 20px;
  font-weight: normal;
  padding-bottom: 5px;
  position: relative;
}
.burger-menu {
  display: none;
}
@media only screen and (max-width : 1750px) {
  .link {
    font-size: 14px;
  }
  .phone-links > span {
    font-size: 18px;
  }
  .phone-links > img {
    width: 40px;
  }
  .logotype {
    width: 250px;
  }
}
@media only screen and (max-width : 1280px) {
  .link {
    margin-right: 40px;
  }
}
@media only screen and (max-width : 1200px) {
  .nav-links, .phone-links {
    display: none;
  }
  .burger-menu {
    display: block;
  }
}
@media only screen and (max-width : 450px) {
  .logotype {
    width: 200px;
  }
}
</style>