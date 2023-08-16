<template>
  <section
    class="breadcrumb__area pt-130 pb-115 breadcrumb__style-10 black-bg p-relative z-index-1"
  >
    <div
      class="breadcrumb__bg-4 breadcrumb__bg-overlay m-img include-bg"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="breadcrumb__content text-center">
            <h3 class="breadcrumb__title">{{title}}</h3>
            <div class="breadcrumb__list">
              <span><a href="#">Home</a></span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>{{subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/blog/breadcrumb/blog-breadcrumb-slider-3.jpg';

export default {
  data () {
    return {bg}
  },
  props:{
    title:String,
    subtitle:String,
  }
};
</script>
