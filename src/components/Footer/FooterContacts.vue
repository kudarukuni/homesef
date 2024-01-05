<template>
  <div class="footer-contacts__wrapper">
    <div>
      <a class="contact-links" href="tel:+263715395168"
        style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif;">+263 71 539 5168</a>
    </div>
    <p class="address">
      <a class="address-link" href="https://goo.gl/maps/Avi2X2VSKuLVSCi37" target="_blank"
        style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif;">No. 1 Ely Greencroft, Along
        Lomagundi Rd <br>Harare, Zimbabwe</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterContacts"
}
</script>

<style scoped>
.footer-contacts__wrapper {
  margin-left: auto;
}

.block-title {
  color: #ffffff;
  font-weight: normal;
  font-size: 20px;
}

.contact-links {
  display: flex;
  align-items: center;
  text-decoration: none;
  width: max-content;
  cursor: pointer;
  margin-top: 20px;
  color: #b1b1b1;
  font-size: 20px;
  font-weight: normal;
  padding-bottom: 5px;
  position: relative;
}

.contact-links:after,
.address-link:after {
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

.contact-links:hover:after,
.address-link:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.address {
  color: #c4c4c4;
  margin-top: 20px;
}

.address-link {
  color: #c4c4c4;
  text-decoration: none;
  padding-bottom: 5px;
  position: relative;
}

@media only screen and (max-width : 1750px) {
  .block-title {
    font-size: 18px;
  }

  .contact-links {
    font-size: 16px;
  }
}

@media only screen and (max-width : 1024px) {
  .footer-contacts__wrapper {
    display: none;
  }
}
</style>