<template>
  <common-breadcrumb
    title="Have a look to our form styles"
    subtitle="Elements"
  />
  <lawyer-contact :el_style="true" />
  <div class="tp-separator"></div>
  <personal-port-contact :el_style="true" />
  <div class="contact__area grey-bg-18 pt-60 pb-120">
    <div class="container">
      <vertical-slider-item-five :el_style="true" />
    </div>
  </div>
  <contact-form-area />
  <portfolio-comment-area/>
  <contact-form-area :el_style="true" />
  <help-center-contact/>
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import LawyerContact from "~~/components/contact/LawyerContact.vue";
import PersonalPortContact from "~~/components/contact/PersonalPortContact.vue";
import HelpCenterContact from '~~/components/help-center/HelpCenterContact.vue';
import VerticalSliderItemFive from "~~/components/home-verticle/VerticalSliderItemFive.vue";
import PortfolioCommentArea from '~~/components/portfolio-details/classic-details/PortfolioCommentArea.vue';
import ContactFormArea from "./ContactFormArea.vue";

export default {
  components: {
    CommonBreadcrumb,
    LawyerContact,
    PersonalPortContact,
    VerticalSliderItemFive,
    ContactFormArea,
    PortfolioCommentArea,
    HelpCenterContact,
  },
};
</script>
