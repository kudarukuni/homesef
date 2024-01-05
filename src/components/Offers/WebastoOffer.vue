<template>
  <section class="offers__wrapper">
    <div class="background-gradient">
      <div class="offers__container">
        <center>
          <p class="description" style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif;">We have experience<font
              color="black">d
              developers and</font> programmers that can a<font color="black">djust these security</font> devices to suit
            y<font color="black">our needs.</font>
          </p>
          <p class="description" style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif;">For example your want
            <font color="black">your garage door to</font> open itself and your car <font color="black">to reverse itself
              out</font> of your
            garage autonom<font color="black">ously! All
              from your</font>
            smartph<font color="black">one!</font>
          </p>
        </center>
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
  height: 300px;
  transition-duration: 0.3s;
}

.background-gradient {
  box-sizing: border-box;
  background: linear-gradient(90deg, rgb(163, 139, 98) 0%, #d1c26c 50%);
}

.offers__container {
  padding: 70px;
  height: 350px;
  background: url(../../assets/images/offers/demo5.png);
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
  font-size: 20px;
  color: #fef9f4;
  width: 50%;
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

  .title,
  .description {
    width: 100%;
  }
}

@media only screen and (max-width : 533px) {
  .offers__wrapper {
    margin: 70px auto 0;
  }
}
</style>