<template>
  <common-breadcrumb title="Have a look to our carousel" subtitle="Elements" />
  <about-gallery :el_style="true"/>
  <slider-with-dots/>
  <div class="tp-separator"></div>
  <carousel-grid-controls/>
  <carousel-with-controls/>
</template>

<script>
import AboutGallery from '~~/components/abouts/about-page-com/AboutGallery.vue';
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import CarouselGridControls from './CarouselGridControls.vue';
import CarouselWithControls from './CarouselWithControls.vue';
import SliderWithDots from './SliderWithDots.vue';

export default {
  components: {
    CommonBreadcrumb,
    AboutGallery,
    SliderWithDots,
    CarouselGridControls,
    CarouselWithControls,
  },
};
</script>
