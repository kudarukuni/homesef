<template>
  <section class="offers__wrapper">
    <div class="offers__container">
      <h2 class="title">Connect With Us</h2>
      <p class="description">For more information on the sale or rental of Homesef Security Systems, please leave your
        contact details and we will contact you!
      </p>
      <form class="service-form">
        <div class="data-input">
          <input name="Имя" type="text" placeholder="Name" required>
        </div>
        <div class="data-input">
          <masked-input name="Телефон" mask="\+\263 11 1111 111" type="text" placeholder="Cellphone"
            required></masked-input>
        </div>
        <div class="send-button">
          <input type="submit" id="my-form-button" value="Connect">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import MaskedInput from 'vue-masked-input'
export default {
  name: "ContactOffer",
  components: {
    MaskedInput
  },
}
</script>

<style scoped>
.offers__wrapper {
  margin: 150px auto 0;
  width: 60%;
  transition-duration: 0.3s;
}

.offers__container {
  padding: 70px;
  background: url(../../assets/images/offers/callback-background.webp);
  background-size: cover;
  background-position: center;
  transition: transform .3s;
}

.offers__container:hover {
  transform: scale(1.02);
  transition: transform .3s;
}

.title {
  font-weight: bold;
  color: #ffffff;
  font-size: 32px;
  margin: 0 0 20px;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.description {
  width: 60%;
  color: #c4c4c4;
  margin: 0;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.service-form {
  margin-top: 40px;
  display: flex;
  align-items: center;
}

.data-input>input {
  width: 300px;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-right: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  font-family: HelveticaNeueCyr;
  border-radius: 5px;
  border: 1px solid #b1b1b1;
  background-color: transparent;
}

.data-input>input:focus {
  outline: none;
  border: 2px solid #d1c26c;
}

.send-button>input {
  padding: 20px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #0A4DAA;
  font-size: 18px;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  transition-duration: 0.3s;
}

.send-button>input:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: #d1c26c;
}

@media only screen and (max-width : 1750px) {
  .offers__wrapper {
    margin: 100px auto;
    width: 70%;
  }

  .title {
    font-size: 32px;
  }

  .data-input>input {
    height: 50px;
    font-size: 14px;
  }

  .send-button>input {
    font-size: 14px;
  }
}

@media only screen and (max-width : 1280px) {
  .data-input>input {
    width: 250px;
  }
}

@media only screen and (max-width : 1024px) {
  .title {
    font-size: 26px;
  }

  .offers__wrapper {
    width: 100%;
  }

  .offers__container {
    padding: 50px;
  }
}

@media only screen and (max-width : 800px) {
  .service-form {
    display: block;
  }

  .data-input>input {
    margin-bottom: 30px;
  }

  .description {
    width: 75%;
  }
}

@media only screen and (max-width : 600px) {
  .description {
    width: 100%;
  }
}

@media only screen and (max-width : 533px) {
  .offers__wrapper {
    margin: 70px auto;
  }

  .offers__container {
    background-position: right;
  }

  .description {
    color: #ffffff;
  }
}
</style>