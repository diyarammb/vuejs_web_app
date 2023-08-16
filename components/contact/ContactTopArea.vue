<template>
  <section class="tp-section-area p-relative z-index-1 tp-section-spacing">
    <div
      class="tp-section-bg include-bg"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="tp-section-wrapper-2 text-center">
            <span class="tp-section-subtitle-2 subtitle-mb-9">{{title}}</span>
            <h3 class="tp-section-title-2 font-70">
              {{subtitle}}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/contact/contact-bg.png';
export default {
  props:{
    title:String,
    subtitle:String,
  },
  data(){
    return {bg}
  }
};
</script>
