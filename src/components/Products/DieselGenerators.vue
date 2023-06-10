<template>
  <section class="products__wrapper">
    <div class="title__container">
      <h2 class="title">Sale Of Diesel Generators</h2>
      <p class="description">Convinient operation. The control panel contains all the necessary sensors, indicators for process control. Stable start at low temperatures is ensured by a powerful battery, which is important for the Russian climate!</p>
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

      <div class="card__three">
        <div class="product-card__three">
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
          <div class="button" @click="feedbackForm">Find Out The Cost</div>
        </div>
      </div>
    </div>
    <div class="mobile-card">
      <generators-mobile></generators-mobile>
    </div>
  </section>
</template>

<script>
    import GeneratorsMobile from "@/components/Products/GeneratorsMobile";
    export default {
        name: "DieselGenerators",
        components: {GeneratorsMobile},
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
  }
  .card__first {
    background: linear-gradient(0deg, rgba(54,89,152,1) 0%, rgba(56,103,182,1) 100%);
    transition: transform .3s;
  }
  .card__two {
    background: linear-gradient(0deg, rgba(11,124,129,1) 0%, rgba(72,168,175,1) 100%);
    transition: transform .3s;
  }
  .card__three {
    background: linear-gradient(0deg, rgba(75,64,66,1) 0%, rgba(126,118,121,1) 100%);
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
    background: url(../../assets/images/products/DCA-15LSX.webp);
    background-size: cover;
    background-position: center;
  }
  .product-card__two {
    background: url(../../assets/images/products/DCA-25ESK.webp);
    background-size: cover;
    background-position: center;
  }
  .product-card__three {
    background: url(../../assets/images/products/DCA-150ESK.webp);
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
    .description {
      width: 70%;
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