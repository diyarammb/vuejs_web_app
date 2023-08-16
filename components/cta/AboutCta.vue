<template>
  <section :class="`cta__area cta__style-2 p-relative z-index-1 ${el_style?'pb-120 pt-120':''}`">
    <div v-if="!el_style" class="cta__half-bg"></div>
    <div class="container">
      <div class="cta__inner-5" data-bg-color="#001F3F	">
        <div
          class="cta__shape-bg include-bg"
          :style="{ backgroundImage: `url(${bg})` }"
        ></div>
        <div class="row align-items-center">
          <div class="col-xxl-8 col-xl-8 col-lg-8">
            <div class="cta__content-5">
              <span>Get to meet Your Next Agency</span>

              <h3 class="cta__title-5">
                Let’s talk about your next business challenge
              </h3>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4">
            <div class="cta__btn-5 text-lg-end">
              <nuxt-link href="/contact" class="tp-btn-orange-2">Get in Touch</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/cta/5/cta-bg.png';

export default {
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
  data () {
    return {
      bg,
    }
  }
};
</script>
