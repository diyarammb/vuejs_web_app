<template >
  <section 
    class="breadcrumb__area breadcrumb__style-7   p-relative z-index-1   pt-180 pb-100"
    style="background-color: #673c8b!important;"
    >
    <div
      class="breadcrumb__bg-shape include-bg"
      :style="{ backgroundImage: `url(${bg})` }"
     ></div>
    <div class="breadcrumb__shape">
      <img
        class="breadcrumb__shape-1"
        src="~/assets/img/breadcrumb/breadcrumb-dot-1.png"
        alt="shape"
      />
      <img
        class="breadcrumb__shape-2"
        src="~/assets/img/breadcrumb/breadcrumb-dot-2.png"
        alt="shape"
      />
    </div>
    <div class="container">
      <div class="row justify-content-center" >
        <div class="col-xxl-7 col-xl-8 col-lg-9">
          <div
            class="breadcrumb__content breadcrumb__content-2 p-relative z-index-1 text-center"
          >
            <h3 class="breadcrumb__title">{{title}}</h3>
            <div class="breadcrumb__list">
              <!-- <span><NuxtLink href="/">Home</NuxtLink></span> -->
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
import bg from '~/assets/img/breadcrumb/breadcrumb-shape-1.png';

export default {
  props:{
    title:String,
    subtitle:String,
  },
  data () {
    return {bg}
  }
};
</script>
