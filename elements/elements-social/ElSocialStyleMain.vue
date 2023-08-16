<template>
  <common-breadcrumb
    title="Have a look to our socials"
    subtitle="Elements"
  />
  <!-- social style start -->
  <div class="tp-social-icon pt-90 pb-90">
    <div class="container">
        <div class="row">
          <div class="col-xxl-12">
              <div class="tp-section-wrapper-3 mb-60 text-center">
                <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
                <h3 class="tp-section-title-3">Social Icon Style</h3>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social black-bg-5 text-center pt-50 pb-50 mb-30">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social-4 text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-green">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social-3 black-bg-5 text-center pt-50 pb-50 mb-30">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social-2 text-center pt-50 pb-50 mb-30">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social-9 text-center pt-50 pb-50 d-block mb-30" data-bg-color="footer-bg-grey">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social-5 text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-black">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social-6 text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-black-2">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__style-green text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-green-dark" >
                <div class="footer__social">
                  <social/>
                </div>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social-8 text-center pt-50 pb-50 black-bg-5 mb-30">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__social-10 text-center pt-50 pb-50 mb-30" data-bg-color="footer-bg-black-4">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="subscribe__social khaki-bg text-center pt-50 pb-50 mb-30">
                <social/>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="postbox__share text-center pt-50 pb-50 grey-bg-4 mb-30">
                <social/>
              </div>
          </div>
        </div>
    </div>
  </div>
  <!-- social style end -->
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import Social from '~~/components/social/Social.vue';

export default {
  components: { CommonBreadcrumb, Social },
};
</script>
