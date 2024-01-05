<template>
  <section class="about__wrapper" id="about">
    <div class="about__container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="certificate-dealer"></swiper-slide>
        <swiper-slide class="certificate-partner"></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="about-information">
        <h2 class="title">About Company</h2>
        <p class="description">Homesef Security Systems has been a prominent and official supplier for all domestic
          Security Systems for over 5 years now!</p>
        <div class="information">
          <p>The company sells and services repairs for your Homesef Security Systems aswell as the sale of original spare
            parts and consumables, the necessary stock of which is constantly maintained in stock.</p>
          <p><wbr>Homesef Security Systems service centers are equipped with mordern equipment for diagnostics and repair of your domestic Security Systems. Our employees are trainned by manufacturers and constantly improve their skills. Homesef Security Systems means strict quality standards in everything  and  constant support for our customers. Homesef Security Systems today is a comprehensive assistance to our customers in any matters relating to all domestic Securit Systems.
          </p>
          <p><wbr>We fabricate skylights, sunroof in virtually any size and can accommodate a wide range of configurations, including single slope, pyramids, segmented radius pyramids, hip end, glass roofs, Gabled and more. Our skylight systems can attach to virtually any structure/material and are suited for both residential and commercial applications without size or design limitations. These are CUSTOM made structures!
          </p>
          <p><wbr>Retractable sunroof from that's is  dynamic sun protection system that allows sunlight and natural light through to your living and working environment whilst keeping out the blinding glare and hothouse effect.
          </p>
        </div>
        <div class="send-button" @click="feedbackForm">
          <span>Get Quotation For Equipment</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: "AboutCompany",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
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
.about__wrapper {
  margin-top: 150px;
  padding: 0 150px;
  box-sizing: border-box;
  transition-duration: 0.3s;
}

.about__container {
  display: flex;
  align-content: center;
  justify-content: center;
}

.swiper {
  width: 700px;
  height: 922px;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 0;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: 0;
}

.certificate-dealer {
  background: url(../../assets/images/certificates/1.png);
  background-size: cover;
  background-position: center;
}

.certificate-partner {
  background: url(../../assets/images/certificates/1.png);
  background-size: cover;
  background-position: center;
}

.about-information {
  width: 50%;
  margin: auto 0 auto 100px;
}

.title {
  font-size: 32px;
  color: #2a2b30;
  font-weight: bold;
  margin-top: 0;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.description {
  font-size: 20px;
  font-weight: normal;
  color: #515151;
  width: 80%;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.information {
  color: #515151;
  width: 80%;
  font-family: 'Gill Sans', Arial, Helvetica, sans-serif;
}

.send-button {
  width: max-content;
  margin-top: 50px;
  padding: 25px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  background-color: #0A4DAA;
  font-weight: normal;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  transition-duration: 0.3s;
}

.send-button:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: #d1c26c;
}

@media only screen and (max-width : 1750px) {
  .about__wrapper {
    margin-top: 100px;
    padding: 0 100px;
  }

  .swiper {
    width: 600px;
    height: 822px;
  }

  .description {
    font-size: 18px;
  }

  .send-button {
    font-size: 14px;
    padding: 20px 30px;
  }
}

@media only screen and (max-width : 1366px) {
  .swiper {
    width: 500px;
    height: 722px;
  }

  .about__wrapper {
    padding: 0 50px;
  }
}

@media only screen and (max-width : 1024px) {
  .about__container {
    display: block;
  }

  .about-information {
    width: 100%;
    margin: 50px 0 0;
    text-align: center;
  }

  .title {
    font-size: 26px;
  }

  .description {
    font-size: 16px;
    width: 50%;
    margin: auto;
  }

  .information {
    margin: auto;
    width: 60%;
  }

  .send-button {
    margin: 50px auto 0;
  }
}

@media only screen and (max-width : 800px) {

  .description,
  .information {
    width: 100%;
  }
}

@media only screen and (max-width : 533px) {
  .about__wrapper {
    margin-top: 70px;
  }

  .swiper {
    width: 400px;
    height: 522px;
  }
}

@media only screen and (max-width : 450px) {
  .swiper {
    width: 100%;
    height: 500px;
  }
}
</style>