<template>
  <section class="offers__wrapper">
    <div class="background-gradient">
      <div class="offers__container">
        <div class="firm-logotype"><img src="@/assets/icons/webasto-logo.svg"></div>
        <p class="title">Our company providess a service for the installation of precooler Webasto and Binar</p>
        <p class="description">We have experience of ALTRAN equipment recommend for our customers that want to use the service.</p>
        <p class="description">The pre-heater will extend the life of the equipment in harsh climatic conditions!</p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "WebastoOffer"
    }
</script>

<style scoped>
  .offers__wrapper {
    margin: 150px auto 0;
    width: 60%;
    transition-duration: 0.3s;
  }
  .background-gradient {
    box-sizing: border-box;
    background: linear-gradient(90deg, rgba(109,106,101,1) 0%, rgba(175,170,166,1) 50%);
  }
  .offers__container {
    padding: 70px;
    background: url(../../assets/images/offers/webasto-background.webp);
    background-size: cover;
    background-position: center;
  }
  .firm-logotype {
    width: 25%;
  }
  .title {
    color: #ffffff;
    font-size: 20px;
    font-weight: normal;
    width: 60%;
  }
  .description {
    color: #ffffff;
    width: 55%;
  }
  @media only screen and (max-width : 1750px) {
    .offers__wrapper {
      margin: 100px auto 0;
      width: 70%;
    }
    .title {
      font-size: 16px;
    }
  }
  @media only screen and (max-width : 1024px) {
    .offers__wrapper {
      width: 100%;
    }
    .offers__container {
      padding: 50px;
    }
  }
  @media only screen and (max-width : 600px) {
    .firm-logotype {
      width: 35%;
    }
    .title, .description {
      width: 100%;
    }
  }
  @media only screen and (max-width : 533px) {
    .offers__wrapper {
      margin: 70px auto 0;
    }
  }
</style>