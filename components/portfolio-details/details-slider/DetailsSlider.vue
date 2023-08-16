<template>
  <portfolio-content />
  <details-port-slider />
  <portfolio-navigation />
  <portfolio-comment-area />
</template>

<script>
import DetailsPortSlider from "./DetailsPortSlider.vue";
import PortfolioContent from "./PortfolioContent.vue";
import PortfolioNavigation from "../classic-details/PortfolioNavigation.vue";
import PortfolioCommentArea from "../classic-details/PortfolioCommentArea.vue";

export default {
  components: {
    PortfolioContent,
    DetailsPortSlider,
    PortfolioCommentArea,
    PortfolioNavigation,
  },
};
</script>
