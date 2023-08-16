<template>
  <section class="slider__area box-plr-5-245 slider__height-5 d-flex align-items-center p-relative z-index-1 fix">
    <div class="slider__shape">
      <img class="slider__shape-5" src="~/assets/img/slider/5/shape/slider-shape-1.png" alt="shape">
      <img class="slider__shape-6" src="~/assets/img/slider/5/shape/slider-shape-2.png" alt="shape">
      <img class="slider__shape-7" src="~/assets/img/slider/5/shape/slider-shape-3.png" alt="shape">
      <img class="slider__shape-8" src="~/assets/img/slider/5/shape/slider-shape-4.png" alt="shape">
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="slider__content-5">
            <!-- <span class="slider__title-pre-5">Digital Experience</span> -->
            <h3 class="slider__title-5"> Why Are Yu Still Holding Yourself Back ?</h3>
            <p>Our Vision is to empower businesses with digital solutions.</p>

            <nuxt-link href="/about" class="tp-btn-blue-sm" style="background-color: #673c8b;;">Start  Project</nuxt-link>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="slider__thumb-5 text-end scene-2">
            <div class="slider-thumb-5 one" style="width:50px!important">
              <!-- <mouse-move cls="slider__thumb-5-1 layer" dataDepth=".2" :imgSrc="slider_img_1"/> -->
            </div>
            <div class="slider-thumb-5 two " style="margin-left: -100px;" >
              <mouse-move cls="slider__thumb-5-2 layer" dataDepth=".3" :imgSrc="slider_img_1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slider_img_1 from '~/assets/img/slider/5/home.png';
import slider_img_2 from '~/assets/img/slider/5/slider-img-2.png';
import MouseMove from '../mouse-move/MouseMove.vue';

export default {
  components:{MouseMove},
  data () {
    return {
      slider_img_1,
      slider_img_2
    }
  }
}
</script>

