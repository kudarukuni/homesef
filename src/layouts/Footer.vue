<template>
  <footer class="footer__wrapper">
    <div class="footer__container__main">
      <div class="logo-container">
        <div class="logotype"><img src="@/assets/icons/logo.png"></div>
        <div class="up-button"><img src="@/assets/icons/arrow-up.svg" v-scroll-to="{el:'#up'}"></div>
      </div>
      <footer-contacts></footer-contacts>
      <footer-navigation></footer-navigation>
      <footer-callback></footer-callback>
    </div>
    <div class="privacy__container">
      <div class="copyright">Designed & Developed by Kuda Rukuni, Copyright © 2023</div>
      <router-link class="privacy-policy" :to="{ name: 'privacy'}" target="_blank">Privacy Policy</router-link>
    </div>
  </footer>
</template>

<script>
    import FooterContacts from "@/components/Footer/FooterContacts";
    import FooterNavigation from "@/components/Footer/FooterNavigation";
    import FooterCallback from "@/components/Footer/FooterCallback";
    export default {
        name: "Footer",
        components: {
            FooterCallback,
            FooterNavigation,
            FooterContacts
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style scoped>
.footer__wrapper {
  background-color: #2a2b30;
}
.footer__container__main  {
  display: flex;
  padding: 100px 150px;
  box-sizing: border-box;
  border-bottom: 1px solid #b1b1b1;
  transition-duration: 0.3s;
}
.logotype {
  width: 300px;
}
.up-button > img {
  margin-top: 60px;
  width: 70px;
  cursor: pointer;
  border-radius: 50px;
  transition-duration: 0.3s;
}
.up-button > img:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: rgba(245, 245, 245, 0.11);
}
.privacy__container {
  display: flex;
  align-items: center;
  padding: 40px 150px;
  box-sizing: border-box;
  transition-duration: 0.3s;
}
.copyright {
  color: #ffffff;
}
.privacy-policy {
  margin-left: auto;
  color: #b1b1b1;
  padding-bottom: 5px;
  position: relative;
  cursor: pointer;
  outline: none;
  text-decoration: none;
}
.privacy-policy:after {
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
.privacy-policy:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
@media only screen and (max-width : 1750px) {
  .footer__container__main  {
    padding: 100px 100px;
  }
  .privacy__container {
    padding: 40px 100px;
  }
  .logotype {
    width: 250px;
  }
  .up-button > img {
    margin-top: 50px;
    width: 60px;
  }
}
@media only screen and (max-width : 1366px) {
  .footer__container__main {
    padding: 100px 50px;
  }
  .privacy__container {
    padding: 40px 50px;
  }
}
@media only screen and (max-width : 600px) {
  .privacy__container {
    display: block;
    text-align: center;
  }
  .copyright {
    margin-bottom: 30px;
  }
}
@media only screen and (max-width : 533px) {
  .footer__container__main {
    padding: 70px 50px;
    display: block;
  }
  .logo-container {
    display: flex;
  }
  .up-button > img {
    margin-top: 0;
    margin-left: 100px;
    width: 45px;
  }
}
</style>