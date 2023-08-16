<template>
  <portfolio-area />
  <slider-port-items />  
  <portfolio-images /> 
  <portfolio-comment-area/>
</template>

<script>
import PortfolioArea from "./PortfolioArea.vue"; 
import SliderPortItems from "./SliderPortItems.vue";
import AgencyCounter from "~~/components/counters/AgencyCounter.vue";
import PortfolioImages from "./PortfolioImages.vue";
import PortfolioNavigation from "./PortfolioNavigation.vue";
import PortfolioCommentArea from './PortfolioCommentArea.vue';

export default {
  components: {
    PortfolioArea,
    SliderPortItems, 
    AgencyCounter,
    PortfolioImages,
    PortfolioNavigation,
    PortfolioCommentArea,
  },
};
</script>
