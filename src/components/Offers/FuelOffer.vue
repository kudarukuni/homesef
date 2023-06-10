<template>
  <section class="offers__wrapper">
    <div class="background-gradient">
      <div class="offers__container">
        <h2 class="title">Installing An Additional Live Streaming Camera Web Server System</h2>
        <p class="description">New update from our company!</p>
        <div>
          <a href="https://www.youtube.com" class="play-button" target="_blank">
            <img src="@/assets/icons/play-icon.svg">
            <span>Watch The Video</span>
          </a>
        </div>
      </div>
    </div>
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
    background: linear-gradient(0deg, rgba(36,123,234,1) 0%, rgba(47,134,244,1) 60%);
    transition: transform .3s;
  }
  .offers__container {
    padding: 70px;
    background: url(../../assets/images/offers/fuel-background.webp);
    background-size: cover;
    background-position: center;
  }
  .background-gradient:hover {
    transform: scale(1.02);
    transition: transform .3s;
  }
  .title {
    font-weight: bold;
    color: #ffffff;
    font-size: 36px;
    width: 60%;
    margin: 0 0 20px;
  }
  .description {
    color: #ffffff;
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
    border: 3px solid #ffffff;
    transition-duration: 0.3s;
  }
  .play-button > img {
    width: 50px;
    margin-right: 15px;
  }
  .play-button > span {
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
    .play-button > img {
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