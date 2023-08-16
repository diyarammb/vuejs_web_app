<template>
  <section :class="`brand__area grey-bg-7 ${el_style?'pt-110 pb-70':''}`">
    <div class="container">
      <div v-if="!el_style" class="row">
        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-7">
          <div class="brand__info-2 mb-45">
            <p>Trusted by 6,000+ Companies Support <span>Sponsor.</span></p>
          </div>
        </div>
      </div>
      <div v-if="el_style" class="row">
        <div class="col-xxl-12">
            <div class="tp-section-wrapper-3 mb-60 text-center">
              <span class="tp-section-subtitle-3">Modern & Clean Design</span>
              <h3 class="tp-section-title-3">Brand Grid Style</h3>
            </div>
        </div>
      </div>
      <div
        class="brand__item-wrapper-6 d-flex flex-wrap justify-content-between">
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-1.png" alt="brand" />
        </div>
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-2.png" alt="brand" />
        </div>
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-3.png" alt="brand" />
        </div>
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-4.png" alt="brand" />
        </div>
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-5.png" alt="brand" />
        </div>
      </div>
      <div
        class="brand__item-wrapper-6 d-flex flex-wrap justify-content-between">
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-6.png" alt="brand" />
        </div>
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-7.png" alt="brand" />
        </div>
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-8.png" alt="brand" />
        </div>
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-9.png" alt="brand" />
        </div>
        <div class="brand__item-6">
          <img src="~/assets/img/brand/6/brand-10.png" alt="brand" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
};
</script>
