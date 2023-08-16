<template>
  <common-breadcrumb
    title="Have a look to our testimonials"
     
  />
  <!-- <home-testimonial :el_style="true" /> -->
   
  <!-- <lawyer-testimonial /> -->
  <!-- <photographer-testimonial :el_style="true" />   -->
   <!-- <freelancer-testimonial :el_style="true" />   -->
   <!-- <div class="tp-separator"></div> -->
   
  <!-- <personal-port-testimonial/> -->
  <!-- <agency-testimonial/>  -->
   <!-- <creative-testimonial/> -->
  <start-up-testimonial/>  
  <div class="tp-separator"></div> 
   
  <!-- <architecture-testimonial/> -->
    <!-- <politician-testimonial :el_style="true"/> -->
  <about-me-testimonial/>
  <!-- <div class="tp-separator"></div>   -->
    <!-- <services-three-testimonial/>  -->
    <!-- <pricing-testimonial/>   -->
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import AboutMeTestimonial from '~~/components/testimonials/AboutMeTestimonial.vue';
import AgencyTestimonial from '~~/components/testimonials/AgencyTestimonial.vue';
import ArchitectureTestimonial from '~~/components/testimonials/ArchitectureTestimonial.vue';
import CreativeTestimonial from '~~/components/testimonials/CreativeTestimonial.vue';
import FreelancerTestimonial from "~~/components/testimonials/FreelancerTestimonial.vue";
import HomeTestimonial from "~~/components/testimonials/HomeTestimonial.vue";
import LawyerTestimonial from "~~/components/testimonials/LawyerTestimonial.vue";
import PersonalPortTestimonial from '~~/components/testimonials/PersonalPortTestimonial.vue';
import PhotographerTestimonial from "~~/components/testimonials/PhotographerTestimonial.vue";
import PoliticianTestimonial from '~~/components/testimonials/PoliticianTestimonial.vue';
import PricingTestimonial from '~~/components/testimonials/PricingTestimonial.vue';
import ServicesThreeTestimonial from '~~/components/testimonials/ServicesThreeTestimonial.vue';
import StartUpTestimonial from '~~/components/testimonials/StartUpTestimonial.vue';

export default {
  components: {
    CommonBreadcrumb,
    HomeTestimonial,
    LawyerTestimonial,
    PhotographerTestimonial,
    FreelancerTestimonial,
    PersonalPortTestimonial,
    AgencyTestimonial,
    CreativeTestimonial,
    StartUpTestimonial,
    ArchitectureTestimonial,
    PoliticianTestimonial,
    AboutMeTestimonial,
    ServicesThreeTestimonial,
    PricingTestimonial,
  },
};
</script>
