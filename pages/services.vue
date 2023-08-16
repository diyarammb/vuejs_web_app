<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <service-three-video/>
    <service-three-feature/>
    <service-three-about/>
    <services-three-service/>
     <services-three-testimonial/>  
    <!-- <agency-brands :spacing="true"/> -->
    
    
    <!-- <common-faq/> -->
    <start-up-cta :style_2="true"/> 
    <footer-six :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServiceThreeVideo from '~~/components/video-area/ServiceThreeVideo.vue';
import ServiceThreeFeature from '~~/components/features/ServiceThreeFeature.vue';
import ServiceThreeAbout from '~~/components/abouts/ServiceThreeAbout.vue';
import ServicesThreeService from '~~/components/services/ServicesThreeService.vue';
import ServicesThreeTestimonial from '~~/components/testimonials/ServicesThreeTestimonial.vue';
import AgencyBrands from '~~/components/brands/AgencyBrands.vue';
import CommonFaq from '~~/components/faqs/CommonFaq.vue';
import StartUpCta from '~~/components/cta/StartUpCta.vue';
import FooterSix from '~~/layouts/footers/FooterSix.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay} from 'swiper';
// internal
import brand_1 from "~/assets/img/brand/3/one.png";
import brand_2 from "~/assets/img/brand/3/react.png";
import brand_3 from "~/assets/img/brand/3/react.png";
import brand_4 from "~/assets/img/brand/3/two.svg";
import brand_5 from "~/assets/img/brand/5/brand-5.png";
import brand_6 from "~/assets/img/brand/5/brand-6.png";
import brand_7 from "~/assets/img/brand/5/brand-7.png";
import brand_8 from "~/assets/img/brand/5/brand-8.png";

export default {
  components: {
    Swiper, 
    SwiperSlide,
    HeaderOne,
    ServiceThreeVideo,
    ServiceThreeFeature,
    ServiceThreeAbout,
    ServicesThreeService,
    ServicesThreeTestimonial,
    AgencyBrands,
    CommonFaq,
    StartUpCta,
    FooterSix,
    BackToTop,
  }, props: {
    spacing: {
      type: Boolean,
      default: false,
    },
    style_2: {
      type: Boolean,
      default: false,
    },
    el_style: {
      type: Boolean,
      default: false,
    },
    square: {
      type: String,
      default: "",
    },
  },data() {
    return {
      brand_1_data: [
        { brand: brand_1 },
        { brand: brand_2 },
        { brand: brand_3 },
        { brand: brand_4 },
        { brand: brand_5 },
        { brand: brand_6 },
        { brand: brand_7 },
        { brand: brand_2 },
        { brand: brand_4 },
        { brand: brand_6 },
        { brand: brand_1 },
      ],
      brand_2_data: [
        { brand: brand_1 },
        { brand: brand_3 },
        { brand: brand_6 },
        { brand: brand_5 },
        { brand: brand_8 },
        { brand: brand_2 },
        { brand: brand_7 },
        { brand: brand_2 },
        { brand: brand_5 },
        { brand: brand_1 },
        { brand: brand_6 },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay],
    }
     
  },
  mounted() {},
};
</script>
