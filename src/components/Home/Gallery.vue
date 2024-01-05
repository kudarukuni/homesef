<template>
  <section class="gallery__wrapper">
    <h2 class="title" style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif">Homesef Security Systems Image
      Gallery</h2>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="photo-1"></swiper-slide>
      <swiper-slide class="photo-2"></swiper-slide>
      <swiper-slide class="photo-3"></swiper-slide>
      <swiper-slide class="photo-4"></swiper-slide>
      <swiper-slide class="photo-5"></swiper-slide>
      <swiper-slide class="photo-6"></swiper-slide>
      <swiper-slide class="photo-7"></swiper-slide>
      <swiper-slide class="photo-8"></swiper-slide>
      <swiper-slide class="photo-9"></swiper-slide>
      <swiper-slide class="photo-10"></swiper-slide>
      <swiper-slide class="photo-11"></swiper-slide>
      <swiper-slide class="photo-12"></swiper-slide>
      <swiper-slide class="photo-13"></swiper-slide>
      <swiper-slide class="photo-14"></swiper-slide>
      <swiper-slide class="photo-15"></swiper-slide>
      <swiper-slide class="photo-16"></swiper-slide>
      <swiper-slide class="photo-17"></swiper-slide>
      <swiper-slide class="photo-18"></swiper-slide>
      <swiper-slide class="photo-19"></swiper-slide>
      <swiper-slide class="photo-20"></swiper-slide>
      <swiper-slide class="photo-21"></swiper-slide>
      <swiper-slide class="photo-22"></swiper-slide>
      <swiper-slide class="photo-23"></swiper-slide>
      <swiper-slide class="photo-24"></swiper-slide>
      <swiper-slide class="photo-25"></swiper-slide>
      <swiper-slide class="photo-26"></swiper-slide>
      <swiper-slide class="photo-27"></swiper-slide>
      <swiper-slide class="photo-28"></swiper-slide>
      <swiper-slide class="photo-29"></swiper-slide>
      <swiper-slide class="photo-30"></swiper-slide>
      <swiper-slide class="photo-31"></swiper-slide>
      <swiper-slide class="photo-32"></swiper-slide>
      <swiper-slide class="photo-33"></swiper-slide>
      <swiper-slide class="photo-34"></swiper-slide>
      <swiper-slide class="photo-35"></swiper-slide>
      <swiper-slide class="photo-36"></swiper-slide>
      <swiper-slide class="photo-37"></swiper-slide>
      <swiper-slide class="photo-38"></swiper-slide>
      <swiper-slide class="photo-39"></swiper-slide>
      <swiper-slide class="photo-40"></swiper-slide>
      <swiper-slide class="photo-41"></swiper-slide>
      <swiper-slide class="photo-42"></swiper-slide>
      <swiper-slide class="photo-43"></swiper-slide>
      <swiper-slide class="photo-44"></swiper-slide>
      <swiper-slide class="photo-45"></swiper-slide>
      <swiper-slide class="photo-46"></swiper-slide>
      <swiper-slide class="photo-47"></swiper-slide>
      <swiper-slide class="photo-48"></swiper-slide>
      <swiper-slide class="photo-49"></swiper-slide>
      <swiper-slide class="photo-50"></swiper-slide>
      <swiper-slide class="photo-51"></swiper-slide>
      <swiper-slide class="photo-52"></swiper-slide>
      <swiper-slide class="photo-53"></swiper-slide>
      <swiper-slide class="photo-54"></swiper-slide>
      <swiper-slide class="photo-55"></swiper-slide>
      <swiper-slide class="photo-56"></swiper-slide>
      <swiper-slide class="photo-57"></swiper-slide>
      <swiper-slide class="photo-58"></swiper-slide>
      <swiper-slide class="photo-59"></swiper-slide>
      <swiper-slide class="photo-60"></swiper-slide>
      <swiper-slide class="photo-61"></swiper-slide>
      <swiper-slide class="photo-62"></swiper-slide>
      <swiper-slide class="photo-63"></swiper-slide>
      <swiper-slide class="photo-64"></swiper-slide>
      <swiper-slide class="photo-65"></swiper-slide>
      <swiper-slide class="photo-66"></swiper-slide>
      <swiper-slide class="photo-67"></swiper-slide>
      <swiper-slide class="photo-68"></swiper-slide>
      <swiper-slide class="photo-69"></swiper-slide>
      <swiper-slide class="photo-70"></swiper-slide>
      <swiper-slide class="photo-71"></swiper-slide>
      <swiper-slide class="photo-72"></swiper-slide>
      <swiper-slide class="photo-73"></swiper-slide>
      <swiper-slide class="photo-74"></swiper-slide>
      <swiper-slide class="photo-75"></swiper-slide>
      <swiper-slide class="photo-76"></swiper-slide>
      <swiper-slide class="photo-82"></swiper-slide>
      <swiper-slide class="photo-78"></swiper-slide>
      <swiper-slide class="photo-79"></swiper-slide>
      <swiper-slide class="photo-80"></swiper-slide>
      <swiper-slide class="photo-81"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="mobile-gallery">
      <mobile-gallery></mobile-gallery>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import MobileGallery from "@/components/Home/MobileGallery";
export default {
  name: "Gallery",
  components: {
    MobileGallery,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        autoplay: {
          delay: 3500,
        },
        disableOnInteraction: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.photo-1,
.photo-2,
.photo-3,
.photo-4,
.photo-5,
.photo-6,
.photo-7,
.photo-8,
.photo-9,
.photo-10,
.photo-11,
.photo-12,
.photo-13,
.photo-14,
.photo-15,
.photo-16,
.photo-17,
.photo-18,
.photo-19,
.photo-20,
.photo-21,
.photo-22,
.photo-23,
.photo-24,
.photo-25,
.photo-26,
.photo-27,
.photo-28,
.photo-29,
.photo-30,
.photo-31,
.photo-32,
.photo-33,
.photo-34,
.photo-35,
.photo-36,
.photo-37,
.photo-38,
.photo-39,
.photo-40,
.photo-41,
.photo-42,
.photo-43,
.photo-44,
.photo-45,
.photo-46,
.photo-47,
.photo-48,
.photo-49,
.photo-50,
.photo-51,
.photo-52,
.photo-53,
.photo-54,
.photo-55,
.photo-56,
.photo-57,
.photo-58,
.photo-59,
.photo-60,
.photo-61,
.photo-62,
.photo-63,
.photo-64,
.photo-65,
.photo-66,
.photo-67,
.photo-68,
.photo-69,
.photo-70,
.photo-71,
.photo-72,
.photo-73,
.photo-74,
.photo-75,
.photo-76,
.photo-78,
.photo-79,
.photo-80,
.photo-81,
.photo-82,
.photo-83 {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
}

.photo-1 {
  background-image: url(../../assets/images/gallery/21.jpeg);
}

.photo-2 {
  background-image: url(../../assets/images/gallery/2.jpeg);
}

.photo-3 {
  background-image: url(../../assets/images/gallery/22.jpeg);
}

.photo-4 {
  background-image: url(../../assets/images/gallery/4.jpeg);
}

.photo-5 {
  background-image: url(../../assets/images/gallery/5.jpeg);
}

.photo-6 {
  background-image: url(../../assets/images/gallery/6.jpeg);
}

.photo-7 {
  background-image: url(../../assets/images/gallery/7.jpeg);
}

.photo-8 {
  background-image: url(../../assets/images/gallery/23.jpeg);
}

.photo-9 {
  background-image: url(../../assets/images/gallery/9.jpeg);
}

.photo-10 {
  background-image: url(../../assets/images/gallery/10.jpeg);
}

.photo-11 {
  background-image: url(../../assets/images/gallery/11.jpeg);
}

.photo-12 {
  background-image: url(../../assets/images/gallery/12.jpeg);
}

.photo-13 {
  background-image: url(../../assets/images/gallery/24.jpeg);
}

.photo-14 {
  background-image: url(../../assets/images/gallery/14.jpeg);
}

.photo-15 {
  background-image: url(../../assets/images/gallery/15.jpeg);
}

.photo-16 {
  background-image: url(../../assets/images/gallery/16.jpeg);
}

.photo-17 {
  background-image: url(../../assets/images/gallery/17.jpeg);
}

.photo-18 {
  background-image: url(../../assets/images/gallery/18.jpeg);
}

.photo-19 {
  background-image: url(../../assets/images/gallery/19.jpeg);
}

.photo-20 {
  background-image: url(../../assets/images/gallery/20.jpeg);
}

.photo-21 {
  background-image: url(../../assets/images/gallery/21.jpeg);
}

.photo-22 {
  background-image: url(../../assets/images/gallery/22.jpeg);
}

.photo-23 {
  background-image: url(../../assets/images/gallery/23.jpeg);
}

.photo-24 {
  background-image: url(../../assets/images/gallery/24.jpeg);
}

.photo-25 {
  background-image: url(../../assets/images/gallery/25.jpeg);
}

.photo-26 {
  background-image: url(../../assets/images/gallery/26.jpeg);
}

.photo-27 {
  backgrund-image: url(../../assets/images/gallery/27.jpeg);
}

.photo-28 {
  background-image: url(../../assets/images/gallery/28.jpeg);
}

.photo-29 {
  background-image: url(../../assets/images/gallery/29.jpeg);
}

.photo-30 {
  background-image: url(../../assets/images/gallery/30.jpeg);
}

.photo-31 {
  background-image: url(../../assets/images/gallery/31.jpeg);
}

.photo-32 {
  background-image: url(../../assets/images/gallery/32.jpeg);
}

.photo-33 {
  background-image: url(../../assets/images/gallery/33.jpeg);
}

.photo-34 {
  background-image: url(../../assets/images/gallery/34.jpeg);
}

.photo-35 {
  background-image: url(../../assets/images/gallery/35.jpeg);
}

.photo-36 {
  background-image: url(../../assets/images/gallery/36.jpeg);
}

.photo-37 {
  background-image: url(../../assets/images/gallery/37.jpeg);
}

.photo-38 {
  background-image: url(../../assets/images/gallery/38.jpeg);
}

.photo-39 {
  background-image: url(../../assets/images/gallery/39.jpeg);
}

.photo-40 {
  background-image: url(../../assets/images/gallery/40.jpeg);
}

.photo-41 {
  background-image: url(../../assets/images/gallery/41.jpeg);
}

.photo-42 {
  background-image: url(../../assets/images/gallery/42.jpeg);
}

.photo-43 {
  background-image: url(../../assets/images/gallery/43.jpeg);
}

.photo-44 {
  background-image: url(../../assets/images/gallery/44.jpeg);
}

.photo-45 {
  background-image: url(../../assets/images/gallery/45.jpeg);
}

.photo-46 {
  background-image: url(../../assets/images/gallery/46.jpeg);
}

.photo-47 {
  background-image: url(../../assets/images/gallery/47.jpeg);
}

.photo-48 {
  background-image: url(../../assets/images/gallery/48.jpeg);
}

.photo-49 {
  background-image: url(../../assets/images/gallery/49.jpeg);
}

.photo-50 {
  background-image: url(../../assets/images/gallery/50.jpeg);
}

.photo-51 {
  background-image: url(../../assets/images/gallery/51.jpeg);
}

.photo-52 {
  background-image: url(../../assets/images/gallery/52.jpeg);
}

.photo-53 {
  background-image: url(../../assets/images/gallery/53.jpeg);
}

.photo-54 {
  background-image: url(../../assets/images/gallery/54.jpeg);
}

.photo-55 {
  background-image: url(../../assets/images/gallery/55.jpeg);
}

.photo-56 {
  background-image: url(../../assets/images/gallery/56.jpeg);
}

.photo-57 {
  background-image: url(../../assets/images/gallery/57.jpeg);
}

.photo-58 {
  background-image: url(../../assets/images/gallery/58.jpeg);
}

.photo-59 {
  background-image: url(../../assets/images/gallery/59.jpeg);
}

.photo-60 {
  background-image: url(../../assets/images/gallery/60.jpeg);
}

.photo-61 {
  background-image: url(../../assets/images/gallery/61.jpeg);
}

.photo-62 {
  background-image: url(../../assets/images/gallery/62.jpeg);
}

.photo-63 {
  background-image: url(../../assets/images/gallery/63.jpeg);
}

.photo-64 {
  background-image: url(../../assets/images/gallery/64.jpeg);
}

.photo-65 {
  background-image: url(../../assets/images/gallery/65.jpeg);
}

.photo-66 {
  background-image: url(../../assets/images/gallery/66.jpeg);
}

.photo-67 {
  background-image: url(../../assets/images/gallery/67.jpeg);
}

.photo-68 {
  background-image: url(../../assets/images/gallery/68.jpeg);
}

.photo-69 {
  background-image: url(../../assets/images/gallery/69.jpeg);
}

.photo-70 {
  background-image: url(../../assets/images/gallery/70.jpeg);
}

.photo-71 {
  background-image: url(../../assets/images/gallery/71.jpeg);
}

.photo-72 {
  background-image: url(../../assets/images/gallery/72.jpeg);
}

.photo-73 {
  background-image: url(../../assets/images/gallery/73.jpeg);
}

.photo-74 {
  background-image: url(../../assets/images/gallery/74.jpeg);
}

.photo-75 {
  background-image: url(../../assets/images/gallery/75.jpeg);
}

.photo-76 {
  background-image: url(../../assets/images/gallery/76.jpeg);
}

.photo-78 {
  background-image: url(../../assets/images/gallery/78.jpeg);
}

.photo-79 {
  background-image: url(../../assets/images/gallery/79.jpeg);
}

.photo-80 {
  background-image: url(../../assets/images/gallery/80.jpeg);
}

.photo-81 {
  background-image: url(../../assets/images/gallery/81.jpeg);
}

.photo-82 {
  background-image: url(../../assets/images/gallery/82.jpeg);
}

.photo-83 {
  background-image: url(../../assets/images/gallery/83.jpeg);
}

@media only screen and (max-width : 600px) {

  .photo-1,
  .photo-2,
  .photo-3,
  .photo-4,
  .photo-5,
  .photo-6,
  .photo-7,
  .photo-8,
  .photo-9 {
    height: 400px
  }
}
</style>

<style scoped>
.gallery__wrapper {
  margin-top: 100px;
}

.title {
  box-sizing: border-box;
  margin-bottom: 50px;
  font-size: 32px;
  color: #2a2b30;
  font-weight: bold;
  text-align: center;
}

.photo-1,
.photo-2,
.photo-3 {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
}

.photo-1 {
  background-image: url(../../assets/images/gallery/21.jpeg);
}

.photo-2 {
  background-image: url(../../assets/images/gallery/2.jpeg);
}

.photo-3 {
  background-image: url(../../assets/images/gallery/22.jpeg);
}

.mobile-gallery {
  display: none;
}

@media only screen and (max-width : 1750px) {

  .photo-1,
  .photo-2,
  .photo-3,
  .photo-4,
  .photo-5,
  .photo-6,
  .photo-7,
  .photo-8,
  .photo-9 {
    height: 400px
  }
}

@media only screen and (max-width : 1024px) {
  .title {
    font-size: 26px;
  }

  .photo-1,
  .photo-2,
  .photo-3,
  .photo-4,
  .photo-5,
  .photo-6,
  .photo-7,
  .photo-8,
  .photo-9 {
    height: 300px
  }
}

@media only screen and (max-width : 800px) {

  .photo-1,
  .photo-2,
  .photo-3,
  .photo-4,
  .photo-5,
  .photo-6,
  .photo-7,
  .photo-8,
  .photo-9 {
    height: 250px
  }
}

@media only screen and (max-width : 600px) {
  .swiper {
    display: none;
  }

  .mobile-gallery {
    display: block;
  }
}
</style>