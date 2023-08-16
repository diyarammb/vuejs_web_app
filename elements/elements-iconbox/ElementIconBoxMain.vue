<template>
  <common-breadcrumb title="Have a look to our Icon Box" subtitle="Elements" />
  <home-services :el_style="true" />
  <div class="tp-separator"></div>
  <el-bg-img-style />
  <div class="tp-separator"></div>
  <freelancer-awards :el_style="true" />
  <div class="tp-separator"></div>
  <personal-port-services :el_style="true" />
  <div class="tp-separator"></div>
  <el-bg-clr-box/>
  <el-clr-icon-box/>
  <el-list-icon-box/>
  <div class="tp-separator"></div>
  <el-icon-box-style-three/>
  <start-up-counter :el_style="true"/>
  <el-icon-box-style-four/>
  <div class="tp-separator"></div>
  <shop-features/>
  <el-icon-box-style-five/>
  <el-animated-border-style/>
  <el-icon-box-style-six/>
  <el-icon-box-style-seven/>
  <box-shadow-style/>
  <div class="tp-separator"></div>
  <simple-grid-style/>
  <div class="tp-separator"></div>
  <box-shadow-with-border/>
  <list-grid-style/>
  <contact-icon-box/>
  <div class="tp-separator"></div>
  <contact-icon-box-two/>
</template>

<script>
import FreelancerAwards from "~~/components/awards/FreelancerAwards.vue";
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import StartUpCounter from '~~/components/counters/StartUpCounter.vue';
import HomeServices from "~~/components/services/HomeServices.vue";
import PersonalPortServices from "~~/components/services/PersonalPortServices.vue";
import ShopFeatures from '~~/components/shop/ShopFeatures.vue';
import BoxShadowStyle from './BoxShadowStyle.vue';
import BoxShadowWithBorder from './BoxShadowWithBorder.vue';
import ContactIconBox from './ContactIconBox.vue';
import ContactIconBoxTwo from './ContactIconBoxTwo.vue';
import ElAnimatedBorderStyle from './ElAnimatedBorderStyle.vue';
import ElBgClrBox from './ElBgClrBox.vue';
import ElBgImgStyle from "./ElBgImgStyle.vue";
import ElClrIconBox from './ElClrIconBox.vue';
import ElIconBoxStyleFive from './ElIconBoxStyleFive.vue';
import ElIconBoxStyleFour from './ElIconBoxStyleFour.vue';
import ElIconBoxStyleSeven from './ElIconBoxStyleSeven.vue';
import ElIconBoxStyleSix from './ElIconBoxStyleSix.vue';
import ElIconBoxStyleThree from './ElIconBoxStyleThree.vue';
import ElListIconBox from './ElListIconBox.vue';
import ListGridStyle from './ListGridStyle.vue';
import SimpleGridStyle from './SimpleGridStyle.vue';

export default {
  components: {
    CommonBreadcrumb,
    HomeServices,
    ElBgImgStyle,
    FreelancerAwards,
    PersonalPortServices,
    ElIconBoxStyleFour,
    ElBgClrBox,
    ElClrIconBox,
    ElListIconBox,
    ElIconBoxStyleThree,
    StartUpCounter,
    ShopFeatures,
    ElIconBoxStyleFive,
    ElAnimatedBorderStyle,
    ElIconBoxStyleSix,
    ElIconBoxStyleSeven,
    BoxShadowStyle,
    SimpleGridStyle,
    BoxShadowWithBorder,
    ListGridStyle,
    ContactIconBox,
    ContactIconBoxTwo,
  },
};
</script>
    