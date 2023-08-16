<template>
  <portfolio-details-breadcrumb />
  <details-area />
  <portfolio-navigation />
  <portfolio-comment-area />
</template>

<script>
import DetailsArea from "./DetailsArea.vue";
import PortfolioNavigation from "../classic-details/PortfolioNavigation.vue";
import PortfolioCommentArea from "../classic-details/PortfolioCommentArea.vue";
import PortfolioDetailsBreadcrumb from "~~/components/breadcrumb/PortfolioDetailsBreadcrumb.vue";

export default {
  components: {
    PortfolioDetailsBreadcrumb,
    DetailsArea,
    PortfolioNavigation,
    PortfolioCommentArea,
  },
};
</script>
