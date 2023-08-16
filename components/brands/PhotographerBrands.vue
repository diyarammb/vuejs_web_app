<template>
  <section
    :class="`brand__area black-bg-5 ${
      el_style ? 'pt-110 pb-120' : 'pt-70 pb-140'
    }`"
  >
    <div class="container">
      <div v-if="el_style" class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper-3 mb-60 text-center">
            <span class="section__title-pre-3 has-center">
              Black Styled
            </span>
            <h3 class="section__title-3 has-gradient">
              Client <span>Logos</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row gx-0">
        <div
          v-for="(brand, i) in brand_data"
          :key="i"
          class="col-lg-3 col-md-4 col-sm-6"
        >
          <div class="brand__item-3 text-center">
            <span class="brand__tooltip">Visit Harry</span>
            <img :src="brand" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import brand_1 from "~/assets/img/brand/3/brand-1.png";
import brand_2 from "~/assets/img/brand/3/brand-2.png";
import brand_3 from "~/assets/img/brand/3/brand-3.png";
import brand_4 from "~/assets/img/brand/3/brand-4.png";
import brand_5 from "~/assets/img/brand/3/brand-5.png";
import brand_6 from "~/assets/img/brand/3/brand-6.png";
import brand_7 from "~/assets/img/brand/3/brand-7.png";
import brand_8 from "~/assets/img/brand/3/brand-8.png";

export default {
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      brand_data: [
        brand_1,
        brand_2,
        brand_3,
        brand_4,
        brand_5,
        brand_6,
        brand_7,
        brand_8,
      ],
    };
  },
};
</script>
