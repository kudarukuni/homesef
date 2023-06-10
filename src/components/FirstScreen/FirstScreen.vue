<template>
  <div class="firstscreen__wrapper">
    <div class="firstscreen__container">
      <div class="firm-logotype"><!--<img src="@/assets/icons/logo.png">--></div>
      <h1 class="title">Sale, Rental and Service Repair All Domestic Security Systems</h1>
      <p class="description">Sale of original spare parts and consumables, which are always in stock!</p>
      <div>
        <a href="https://www.youtube.com" class="play-button" target="_blank">
          <img src="@/assets/icons/play-icon.svg">
          <span>Watch Video</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FirstScreen"
    }
</script>

<style scoped>
.firstscreen__wrapper {
  display: flex;
  align-items: center;
  height: 100%;
}
.firm-logotype {
  width: 30%;
}
.title {
  width: 60%;
  font-size: 45px;
  color: #ffffff;
  margin-bottom: 0;
}
.description {
  color: #ffffff;
  font-size: 20px;
}
.play-button {
  display: flex;
  align-items: center;
  width: max-content;
  margin-top: 60px;
  padding: 15px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  background-color: #e10c19;
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
  background-color: #cd0c19;
}
@media only screen and (max-width : 1750px) {
  .title {
    font-size: 35px;
  }
  .description {
    font-size: 16px;
  }
  .play-button {
    font-size: 16px;
    padding: 15px 30px;
  }
  .play-button > img {
    width: 40px;
  }
}
@media only screen and (max-width : 1680px) {
  .firm-logotype {
    width: 40%;
  }
}
@media only screen and (max-width : 1366px) {
  .firm-logotype {
    width: 30%;
  }
}
@media only screen and (max-width : 1024px) {
  .firm-logotype {
    width: 40%;
    margin: auto;
  }
  .title {
    font-size: 30px;
    text-align: center;
    margin: 20px auto 20px;
    width: 80%;
  }
  .description {
    font-size: 16px;
    text-align: center;
  }
  .play-button {
    margin: 50px auto 0;
  }
}
@media only screen and (max-width : 800px) {
  .firm-logotype {
    width: 50%;
  }
  .title {
    width: 100%;
  }
}
@media only screen and (max-width : 600px) {
  .firm-logotype {
    width: 70%;
  }
  .description {
    font-size: 18px;
  }
  .firstscreen__wrapper {
    margin-top: 70px;
  }
  #clear {
    display: none;
  }
}
@media only screen and (max-width : 533px) {
  .firm-logotype {
    width: 80%;
  }
}
</style>