<template>
  <section class="slider__area slider__height-6 p-relative box-plr-6-245 d-flex align-items-center fix">
    <div class="slider__shape">
      <img class="slider__shape-9" src="~/assets/img/slider/6/shape/slider-shape-1.png" alt="slider-shape">
      <img class="slider__shape-10" src="~/assets/img/slider/6/shape/slider-shape-2.png" alt="slider-shape">
      <img class="slider__shape-11" src="~/assets/img/slider/6/shape/slider-shape-3.png" alt="slider-shape">
      <img class="slider__shape-12" src="~/assets/img/slider/6/shape/slider-shape-4.png" alt="slider-shape">
      <img class="slider__shape-13" src="~/assets/img/slider/6/shape/slider-shape-5.png" alt="slider-shape">
      <img class="slider__shape-14" src="~/assets/img/slider/6/shape/slider-shape-6.png" alt="slider-shape">
      <img class="slider__shape-15" src="~/assets/img/slider/6/shape/slider-shape-7.png" alt="slider-shape">
      <img class="slider__shape-16" src="~/assets/img/slider/6/shape/slider-shape-8.png" alt="slider-shape">
      <img class="slider__shape-17" src="~/assets/img/slider/6/shape/slider-shape-9.png" alt="slider-shape">
      <img class="slider__shape-18" src="~/assets/img/slider/6/shape/slider-shape-10.png" alt="slider-shape">
    </div>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-xxl-5 col-xl-6 col-lg-6">
          <div class="slider__content-6">
            <span class="slider__title-pre-6">WELCOME TO STARTUP.</span>
            <h3 class="slider__title-6">We Build Good Startups.</h3>
            <p>Elementum ipsum donec usodales porttitor mauris augue fermentum sagittis elementum.</p>

            <div class="slider__btn-6">
              <nuxt-link href="/contact" class="tp-btn-border-5 tp-link-btn-3">
                Get Started
                <span>
                  <i class="fa-regular fa-arrow-right"></i>
                </span>
              </nuxt-link>
            </div>

            <div class="slider__user">
              <ul>
                <li>
                  <a href="#">
                    <img src="~/assets/img/slider/6/user/slider-user-1.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="~/assets/img/slider/6/user/slider-user-2.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="~/assets/img/slider/6/user/slider-user-3.jpg" alt="">
                  </a>
                </li>
              </ul>
              <p>Connect <br>More People</p>
            </div>
          </div>
        </div>
        <div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
          <div class="slider__thumb-wrapper-6 mb-10 pl-40 pr-30">
            <div class="slider__thumb-6 pl-20 one">
              <mouse-move cls="layer" dataDepth=".2" :imgSrc="hero_img_1"/>
            </div>
            <div class="slider__thumb-6 two">
              <mouse-move cls="layer" dataDepth=".3" :imgSrc="hero_img_2"/>
            </div>
            <div class="slider__thumb-6 three">
              <mouse-move cls="layer" dataDepth=".4" :imgSrc="hero_img_3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import hero_img_1 from '~/assets/img/slider/6/slider-1.jpg';
import hero_img_2 from '~/assets/img/slider/6/slider-2.jpg';
import hero_img_3 from '~/assets/img/slider/6/slider-3.jpg';

export default {
  data () {
    return {
      hero_img_1,
      hero_img_2,
      hero_img_3,
    }
  }
}
</script>

