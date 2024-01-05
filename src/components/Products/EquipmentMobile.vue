<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="card__first">
        <div class="product-card__first">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
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
    </swiper-slide>
    <swiper-slide>
      <div class="card__two">
        <div class="product-card__two">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
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
    </swiper-slide>
    <swiper-slide>
      <div class="card__three">
        <div class="product-card__three">
          <div class="product-logotype"><img src="@/assets/icons/denyo.svg"></div>
          <h2 class="product-title">GSM & Image Capture Reporting <br>System HATS-2023</h2>
          <div class="product-value">
            <p><span style="font-weight: normal">Rated Power: </span>7.5V</p>
            <p><span style="font-weight: normal">Rated Current: </span>2А</p>
            <p><span style="font-weight: normal">Broadband Reporting: </span>3V</p>
            <p><span style="font-weight: normal">On Duration: </span>100%</p>
            <p><span style="font-weight: normal">Processor Size: </span>Single Core</p>
            <p><span style="font-weight: normal">WiFi Module: </span>Activated</p>
            <p><span style="font-weight: normal">Power Source: </span>Solar & DC Power</p>
            <p><span style="font-weight: normal">Генератор: </span>15кВа</p>
          </div>
          <div class="button" @click="feedbackForm">Find Out The Cost</div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "EquipmentMobile",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  },
  methods: {
    feedbackForm() {
      var form = document.getElementById("feedback");
      form.style.display = (form.style.display == 'none') ? 'block' : 'none'
    }
  },
}
</script>

<style scoped>
.swiper-container {
  margin-top: 50px;
}

.swiper-slide {
  width: max-content;
}

.swiper-slide:nth-child(2n) {
  width: max-content;
}

.swiper-slide:nth-child(3n) {
  width: max-content;
}

.card__first {
  background: linear-gradient(0deg, rgba(2, 139, 154, 1) 0%, rgba(0, 178, 201, 1) 100%);
}

.card__two {
  background: linear-gradient(0deg, rgba(127, 128, 129, 1) 0%, rgba(170, 174, 177, 1) 100%);
}

.card__three {
  background: linear-gradient(0deg, rgba(12, 72, 144, 1) 0%, rgba(55, 119, 214, 1) 100%);
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
  background: url(../../assets/images/products/DCW-480ESW.webp);
  background-size: cover;
  background-position: center;
}

.product-logotype {
  width: 170px
}

.product-title {
  font-weight: bold;
  font-size: 18px;
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
  font-size: 14px;
  padding: 20px 30px;
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

@media only screen and (max-width : 533px) {
  .swiper-slide {
    width: 100%;
  }

  .swiper-slide:nth-child(2n) {
    width: 100%;
  }

  .swiper-slide:nth-child(3n) {
    width: 100%;
  }

  .product-card__first,
  .product-card__two,
  .product-card__three {
    padding: 40px;
  }
}</style>