<template>
  <port-details-breadcrumb-two/>
  <portfolio-video-area/>
  <portfolio-video-img-box/>
  <heading-style/>
  <features-area/>
  <details-port-slider spacing="130" />
  <portfolio-navigation />
  <portfolio-comment-area />
</template>

<script>
import PortfolioCommentArea from "../classic-details/PortfolioCommentArea.vue";
import PortfolioDetailsBreadcrumb from "~~/components/breadcrumb/PortfolioDetailsBreadcrumb.vue";
import PortDetailsBreadcrumbTwo from '~~/components/breadcrumb/PortDetailsBreadcrumbTwo.vue';
import PortfolioVideoArea from './PortfolioVideoArea.vue';
import PortfolioVideoImgBox from './PortfolioVideoImgBox.vue';
import HeadingStyle from './HeadingStyle.vue';
import FeaturesArea from './FeaturesArea.vue';
import DetailsPortSlider from '../details-slider/DetailsPortSlider.vue';

export default {
  components: {
    PortfolioDetailsBreadcrumb,
    PortfolioCommentArea,
    PortDetailsBreadcrumbTwo,
    PortfolioVideoArea,
    PortfolioVideoImgBox,
    HeadingStyle,
    FeaturesArea,
    DetailsPortSlider,
  },
};
</script>
