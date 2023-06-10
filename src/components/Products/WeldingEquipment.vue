<template>
  <section class="products__wrapper">
    <div class="title__container">
      <h2 class="title" id="equipment">Sale of Surveillance Camera Systems</h2>
      <p class="description">Homesef Surveillance Camera Systems are succesfully installed in more than 130 domestic and business premises around the country and are indispensible in the field as well as in places where there is a shortage or there is no electricity at all!</p>
    </div>
    <div class="products__block">

      <div class="card__first">
        <div class="product-card__first">
          <div class="product-logotype"><img src="@/assets/icons/logo.png"></div>
          <h2 class="product-title">GSM & Image Capture Reporting <br>System HATS-2023</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Rated Power: </span>7.5V</p>
            <p><span style="font-weight: normal">Rated Current: </span>2А</p>
            <p><span style="font-weight: normal">Broadband Reporting: </span>3V</p>
            <p><span style="font-weight: normal">On Duration: </span>100%</p>
            <p><span style="font-weight: normal">Processor Size: </span>Single Core</p>
            <p><span style="font-weight: normal">WiFi Module: </span>Activated</p>
            <p><span style="font-weight: normal">Power Source: </span>Solar & DC Power</p>
          </div>
          <div class="button" @click="feedbackForm">
            <span>Find Out The Cost</span>
          </div>
        </div>
      </div>

      <div class="card__two">
        <div class="product-card__two">
          <div class="product-logotype"><img src="@/assets/icons/logo.png"></div>
          <h2 class="product-title">Diesel single-station welding <br>unit Denyo DAW-180SS</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Rated Power: </span>7.5V</p>
            <p><span style="font-weight: normal">Rated Current: </span>2А</p>
            <p><span style="font-weight: normal">Broadband Reporting: </span>3V</p>
            <p><span style="font-weight: normal">On Duration: </span>100%</p>
            <p><span style="font-weight: normal">Processor Size: </span>Single Core</p>
            <p><span style="font-weight: normal">WiFi Module: </span>Activated</p>
            <p><span style="font-weight: normal">Power Source: </span>Solar & DC Power</p>
          </div>
          <div class="button" @click="feedbackForm">
            <span>Find Out The Cost</span>
          </div>
        </div>
      </div>

      <div class="card__three">
        <div class="product-card__three">
          <div class="product-logotype"><img src="@/assets/icons/logo.png"></div>
          <h2 class="product-title">Diesel single-station welding <br>unit Denyo DAW-180SS</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Rated Power: </span>7.5V</p>
            <p><span style="font-weight: normal">Rated Current: </span>2А</p>
            <p><span style="font-weight: normal">Broadband Reporting: </span>3V</p>
            <p><span style="font-weight: normal">On Duration: </span>100%</p>
            <p><span style="font-weight: normal">Processor Size: </span>Single Core</p>
            <p><span style="font-weight: normal">WiFi Module: </span>Activated</p>
            <p><span style="font-weight: normal">Power Source: </span>Solar & DC Power</p>
          </div>
          <div class="button" @click="feedbackForm">
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
        components: {EquipmentMobile},
        methods: {
            feedbackForm(){
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
  }
  .description {
    width: 60%;
    margin: auto;
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
    background: linear-gradient(0deg, rgba(2,139,154,1) 0%, rgba(0,178,201,1) 100%);
    transition: transform .3s;
  }
  .card__two {
    background: linear-gradient(0deg, rgba(127,128,129,1) 0%, rgba(170,174,177,1) 100%);
    transition: transform .3s;
  }
  .card__three {
    background: linear-gradient(0deg, rgba(12,72,144,1) 0%, rgba(55,119,214,1) 100%);
    transition: transform .3s;
  }
  .card__first:hover, .card__two:hover, .card__three:hover  {
    transform: scale(1.02);
    transition: transform .3s;
  }
  .product-card__first, .product-card__two, .product-card__three {
    width: 100%;
    box-sizing: border-box;
    padding: 50px;
  }
  .product-card__first {
    background: url(../../assets/images/products/DAW-180SS.webp);
    background-size: cover;
    background-position: center;
  }
  .product-card__two {
    background: url(../../assets/images/products/DLW-400LSW.webp);
    background-size: cover;
    background-position: center;
  }
  .product-card__three {
    background: url(../../assets/images/products/DCW-480ESW.webp);
    background-size: cover;
    background-position: center;
  }
  .product-logotype {
    width: 170px
  }
  .product-title {
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
  }
  .product-value {
    color: #ffffff;
  }
  .button {
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
    border: 3px solid #ffffff;
    color: #ffffff;
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
    .product-card__first, .product-card__two, .product-card__three {
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
    .title, .description {
      width: 100%;
    }
  }
  @media only screen and (max-width : 600px) {
    .products__wrapper {
      padding: 50px 30px 0;
    }
  }
</style>