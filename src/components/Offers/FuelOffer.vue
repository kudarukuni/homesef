<template>
  <section class="offers__wrapper">
    <center>
      <div class="background-gradient">
        <div class="offers__container">
          <h2 class="title">Installing an intergrated greenhouse monitoring system for your plants
          </h2>
          <h4 class="title2">Solar Powered Water Pump, Water Tank and Stand</h4>
          <p class="description"><br><br>
            <font color="silver"><strong><b>New update from our company!</b></strong></font>
          </p>
          <div>
            <a href="https://vm.tiktok.com/ZM6DeC1cm/" class="play-button" target="_blank">
              <img src="@/assets/icons/play-icon.svg">
              <span>Watch The Video</span>
            </a>
          </div>
        </div>
      </div>
    </center>
  </section>
</template>

<script>
export default {
  name: "FuelOffer"
}
</script>

<style scoped>
.offers__wrapper {
  margin: 150px auto;
  width: 60%;
  transition-duration: 0.3s;
}

.background-gradient {
  background: linear-gradient(0deg, rgb(137, 228, 165) 0%, rgba(47, 134, 244, 1) 60%);
  transition: transform .3s;
}

.offers__container {
  padding: 70px;
  background: url(../../assets/images/offers/demo6.png);
  background-size: cover;
  background-position: center;
}

.background-gradient:hover {
  transform: scale(1.02);
  transition: transform .3s;
}

.title {
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  font-weight: bld;
  color: #fef9f4;
  font-size: 36px;
  width: 100%;
  margin: 0 0 20px;
}

.title2 {
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  color: #fef9f4;
  font-size: 20px;
  width: 100%;
  margin: 0 0 20px;
}

.description {
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  color: #fef9f4;
  font-size: 20px;
  margin: 0;
}

.play-button {
  display: flex;
  align-items: center;
  width: max-content;
  margin-top: 40px;
  padding: 15px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  text-decoration: none;
  background: transparent;
  border: 3px solid #fef9f4;
  transition-duration: 0.3s;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.play-button>img {
  width: 50px;
  margin-right: 15px;
}

.play-button>span {
  color: #ffffff;
  font-weight: normal;
}

.play-button:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: rgba(245, 245, 245, 0.11);
}

@media only screen and (max-width : 1750px) {
  .offers__wrapper {
    margin: 100px auto;
    width: 70%;
  }

  .play-button {
    font-size: 14px;
    padding: 15px 30px;
  }

  .play-button>img {
    width: 40px;
  }

  .description {
    font-size: 16px;
  }

  .title {
    font-size: 32px;
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

@media only screen and (max-width : 800px) {
  .title {
    width: 70%;
    font-size: 26px;
  }
}

@media only screen and (max-width : 600px) {
  .title {
    width: 80%;
  }
}

@media only screen and (max-width : 533px) {
  .offers__wrapper {
    margin: 70px auto;
  }

  .title {
    width: 90%;
  }
}
</style>