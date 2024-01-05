<template>
  <section class="products__wrapper">
    <div class="title__container">
      <h2 class="title" id="equipment">Sale of Hi-Tech Security Systems</h2>
      <p class="description"><strong>Homesef Hi-Tech Security Systems are succesfully installed in more than a thousand
          domestic and
          business premises around the country and are indispensible in the field as well as in places where there is a
          shortage or there is no electricity at all!</strong></p>
    </div>
    <div class="products__block">

      <div class="card__first">
        <div class="product-card__first">
          <div class="product-logotype"><img src="@/assets/icons/logo.png"></div>
          <h2 class="product-title">
            <font color="#0A4DAA">GSM & Image Capture Reporting <br>System HATS-2024</font>
          </h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Rated Power: </span>7.5V</p>
            <p><span style="font-weight: normal">Rated Current: </span>2А</p>
            <p><span style="font-weight: normal">
                <font color="#fef9f4">Broad</font>band Repo<font color="#fef9f4">rting</font>:
              </span>3<font color="#fef9f4">V</font>
            </p>
            <p><span style="font-weight: normal">On Duration: </span>100%</p>
            <p><span style="font-weight: normal">Processor Size: </span>Single C<font color="#fef9f4">ore</font>
            </p>
            <p><span style="font-weight: normal">WiFi Module: </span>Activated</p>
            <p><span style="font-weight: normal">Power Source: </span>Solar & DC Power</p>
          </div>
          <div class="button4" @click="feedbackForm">
            <span>Find Out The Cost</span>
          </div>
        </div>
      </div>

      <div class="card__two">
        <div class="product-card__two">
          <div class="product-logotype"><img src="@/assets/icons/logo.png"></div>
          <h2 class="product-title">
            <font color="white">Automatic Main Gate Opening <br>System MGOS-2024</font>
          </h2>
          <div class="product-value2">
            <p><span style="font-weight: normal">Rated Power: </span>7.5V</p>
            <p><span style="font-weight: normal">Rated Current: </span>2А</p>
            <p><span style="font-weight: normal">Broadband Reporting:</span>3V</p>
            <p><span style="font-weight: normal">On Duration: </span>100%</p>
            <p><span style="font-weight: normal">Processor Size: </span>Single Core</p>
            <p><span style="font-weight: normal">WiFi Module: </span>Activated</p>
            <p><span style="font-weight: normal">Power Source: </span>Solar & DC Power</p>
          </div>
          <div class="button3" @click="feedbackForm">
            <span>Find Out The Cost</span>
          </div>
        </div>
      </div>

      <div class="card__three">
        <div class="product-card__three">
          <div class="product-logotype"><img src="@/assets/icons/logo.png"></div>
          <h2 class="product-title">
            <font color="#d1c26c">Windows Touch Sensor Security System TSWS-2024</font>
          </h2>
          <div class="product-value3">
            <p><span style="font-weight: normal">Rated Power: </span>7.5V</p>
            <p><span style="font-weight: normal">Rated Current: </span>2А</p>
            <p><span style="font-weight: normal">Broadband Reporting:</span>3V</p>
            <p><span style="font-weight: normal">On Duration: </span>100%</p>
            <p><span style="font-weight: normal">Processor Size: </span>Single Core</p>
            <p><span style="font-weight: normal">WiFi Module: </span>Activated</p>
            <p><span style="font-weight: normal">Power Source: </span>Solar & DC Power</p>
          </div>
          <div class="button2" @click="feedbackForm">
            <span>Find Out The Cost</span>
          </div>
        </div>
      </div>

    </div>
    <div class="mobile-card">
      <equipment-mobile></equipment-mobile>
    </div>
  </section>
</template>

<script>
import EquipmentMobile from "@/components/Products/EquipmentMobile";
export default {
  name: "WeldingEquipment",
  components: { EquipmentMobile },
  methods: {
    feedbackForm() {
      var form = document.getElementById("feedback");
      form.style.display = (form.style.display == 'none') ? 'block' : 'none'
    }
  },
}
</script>

<style scoped>
.products__wrapper {
  padding: 100px 150px 0;
  transition-duration: 0.3s;
}

.title__container {
  text-align: center;
}

.title {
  font-size: 32px;
  color: #333333;
  font-weight: bold;
  margin-top: 0;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.description {
  width: 60%;
  margin: auto;
  /*color: #0a4daa;*/
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  color: #737373;
}

.products__block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  margin-top: 50px;
  transition-duration: 0.3s;
}

.card__first {
  transition: transform .3s;
  background: linear-gradient(0deg, rgba(127, 128, 129, 1) 0%, rgba(209, 194, 108) 100%);
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.card__two {
  background: linear-gradient(0deg, rgba(127, 128, 129, 1) 0%, rgb(222, 233, 242) 100%);
  transition: transform .3s;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.card__three {
  background: linear-gradient(0deg, rgba(12, 72, 144, 1) 0%, rgb(218, 229, 246) 100%);
  transition: transform .3s;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.card__first:hover,
.card__two:hover,
.card__three:hover {
  transform: scale(1.02);
  transition: transform .3s;
}

.product-card__first,
.product-card__two,
.product-card__three {
  width: 100%;
  box-sizing: border-box;
  padding: 50px;
}

.product-card__first {
  background: url(../../assets/images/products/demo.png);
  background-size: cover;
  background-position: center;
}

.product-card__two {
  background: url(../../assets/images/products/demo2.png);
  background-size: cover;
  background-position: center;
}

.product-card__three {
  background: url(../../assets/images/products/demo3.png);
  background-size: cover;
  background-position: center;
}

.product-logotype {
  width: 150px
}

.product-title2 {
  font-weight: bold;
  font-size: 20px;
  color: white;
}

.product-title3 {
  font-weight: bold;
  font-size: 20px;
  color: #d1c26c;
}

.product-title {
  font-weight: bold;
  font-size: 20px;
  color: rgb(51, 51, 51);
}

.product-value3 {
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  color: #d1c26c;
}

.product-value2 {
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  color: rgb(254, 221, 100);
}

.product-value {
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  color: rgb(51, 51, 51);
}

.product-value3 {
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
  color: rgb(51, 51, 51);
}

.button4 {
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 5px;
  font-size: 18px;
  padding: 25px 40px;
  box-sizing: border-box;
  margin: 50px auto 0;
  text-decoration: none;
  background: transparent;
  border: 3px solid rgb(10, 77, 170);
  color: rgb(10, 77, 170);
  font-weight: normal;
  transition-duration: 0.3s;
  cursor: pointer;
}

.button2 {
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 5px;
  font-size: 18px;
  padding: 25px 40px;
  box-sizing: border-box;
  margin: 50px auto 0;
  text-decoration: none;
  background: transparent;
  border: 3px solid #d1c26c;
  color: #d1c26c;
  font-weight: normal;
  transition-duration: 0.3s;
  cursor: pointer;
}

.button3 {
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 5px;
  font-size: 18px;
  padding: 25px 40px;
  box-sizing: border-box;
  margin: 50px auto 0;
  text-decoration: none;
  background: transparent;
  border: 3px solid white;
  color: white;
  font-weight: normal;
  transition-duration: 0.3s;
  cursor: pointer;
}

.button:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: rgba(245, 245, 245, 0.11);
}

.mobile-card {
  display: none;
}

@media only screen and (max-width : 1750px) {
  .products__wrapper {
    padding: 70px 100px 0;
  }

  .products__block {
    grid-column-gap: 40px;
  }

  .product-card__first,
  .product-card__two,
  .product-card__three {
    padding: 40px;
  }

  .product-title {
    font-size: 16px;
  }

  .button {
    font-size: 14px;
    padding: 20px 30px;
  }
}

@media only screen and (max-width : 1366px) {
  .products__wrapper {
    padding: 70px 50px 0;
  }

  .description {
    width: 70%;
  }
}

@media only screen and (max-width : 1280px) {
  .products__wrapper {
    padding: 70px 20px 0;
  }

  .products__block {
    grid-column-gap: 20px;
  }
}

@media only screen and (max-width : 1024px) {
  .products__wrapper {
    padding: 50px 50px 0;
  }

  .products__block {
    display: none;
  }

  .mobile-card {
    display: block;
  }

  .title {
    font-size: 26px;
  }
}

@media only screen and (max-width : 800px) {

  .title,
  .description {
    width: 100%;
  }
}

@media only screen and (max-width : 600px) {
  .products__wrapper {
    padding: 50px 30px 0;
  }
}
</style>