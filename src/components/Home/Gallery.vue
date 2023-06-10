<template>
  <section class="gallery__wrapper">
    <h2 class="title">Our Company Products</h2>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="photo-1"></swiper-slide>
      <swiper-slide class="photo-2"></swiper-slide>
      <swiper-slide class="photo-3"></swiper-slide>
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
.photo-1, .photo-2, .photo-3{
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
  .photo-1, .photo-2, .photo-3, .photo-4, .photo-5, .photo-6,
  .photo-7, .photo-8, .photo-9 {
    height: 400px
  }
}
@media only screen and (max-width : 1024px) {
  .title {
    font-size: 26px;
  }
  .photo-1, .photo-2, .photo-3, .photo-4, .photo-5, .photo-6,
  .photo-7, .photo-8, .photo-9 {
    height: 300px
  }
}
@media only screen and (max-width : 800px) {
  .photo-1, .photo-2, .photo-3, .photo-4, .photo-5, .photo-6,
  .photo-7, .photo-8, .photo-9 {
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