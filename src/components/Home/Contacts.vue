<template>
  <section class="contacts__wrapper" id="contacts">
    <div class="contacts__container">
      <div class="contacts-information">
        <h2 class="title">Get In Touch</h2>
        <div class="contacts">
          <a class="contact-links" href="tel:+263782516263">
            <img src="@/assets/icons/phone-icon.svg">
            <span>+263 78 2516 263</span>
          </a>
          <a class="contact-links" href="mailto:krukuni@gmail.com">
            <img src="@/assets/icons/email-icon.svg">
            <span>krukuni@gmail.com</span>
          </a>
          <p class="address">
            <span>Address: </span>
            <a class="address-link" href="https://goo.gl/maps/Avi2X2VSKuLVSCi37" target="_blank">7 Arlington Rd Hatfield Harare Zimbabwe</a>
          </p>
          <p class="address">
          <span>Address: </span>
            <a class="address-link" href="https://goo.gl/maps/Avi2X2VSKuLVSCi37" target="_blank">7 Arlington Rd Hatfield Harare Zimbabwe</a>
          </p>
          <p class="address">
            <span>Working Hours: </span> 09:00 to 18:00
          </p>
          <a class="contact-links" href="https://www.instagram.com/hss/" target="_blank">
            <img src="@/assets/icons/inst-icon.svg">
            <span>Homesef Security Sytems</span>
          </a>
        </div>
      </div>
      <div class="map"><iframe src="Working Hours: </span> 09:00 to 18:00" frameborder="0"></iframe></div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
.contacts__wrapper {
  margin-top: 150px;
  padding: 100px 200px;
  box-sizing: border-box;
  background-color: #2a2b30;
  border-bottom: 2px solid #b1b1b1;
  transition-duration: 0.3s;
}
.contacts__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 0;
}
.address {
  color: #c4c4c4;
  margin-top: 40px;
}
.address > span {
  font-size: 20px;
  color: #ffffff;
  font-weight: normal;
}
.address-link {
  color: #c4c4c4;
  text-decoration: none;
  padding-bottom: 5px;
  position: relative;
}
.contact-links {
  display: flex;
  align-items: center;
  text-decoration: none;
  width: max-content;
  cursor: pointer;
  margin-top: 40px;
}
.contact-links > img {
  width: 50px;
  margin-right: 20px;
}
.contact-links > span {
  color: #ffffff;
  font-size: 20px;
  font-weight: normal;
  padding-bottom: 5px;
  position: relative;
}
.contact-links > span:after, .address-link:after {
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
.contact-links > span:hover:after, .address-link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.map {
  margin-left: auto;
}
.map > iframe {
  width: 780px;
  height: 615px;
}
@media only screen and (max-width : 1750px) {
  .contacts__wrapper {
    margin-top: 100px;
    padding: 100px 150px;
  }
  .contact-links > span {
    font-size: 18px;
  }
  .contact-links > img {
    width: 40px;
  }
  .address > span {
    font-size: 16px;
  }
  .map > iframe {
    width: 680px;
    height: 515px;
  }
}
@media only screen and (max-width : 1366px) {
  .contacts__wrapper {
    padding: 100px;
  }
  .map > iframe {
    width: 580px;
    height: 515px;
  }
}
@media only screen and (max-width : 1024px) {
  .title {
    font-size: 26px;
  }
  .contacts__wrapper {
    padding: 50px;
  }
  .map > iframe {
    width: 400px;
    height: 515px;
  }
}
@media only screen and (max-width : 800px) {
  .contacts__container {
    display: block;
  }
  .contacts-information {
    text-align: center;
  }
  .contact-links {
    margin: 40px auto 0;
  }
  .map {
    margin-top: 50px;
  }
  .map > iframe {
    width: 100%;
    height: 415px;
  }
}
</style>