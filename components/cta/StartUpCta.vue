<template>
  <section
    :class="`cta__area ${
      style_2 ? 'cta__style-3' : ''
    } p-relative z-index-1 pt-115 pb-60 ${
      style_2 ? 'grey-bg-7' : 'green-light-bg-4'
    }`"
  >
    <div class="cta__shape">
      <img
        class="cta__shape-17"
        src="~/assets/img/cta/7/cta-shape-1.png"
        alt="cta__shape"
      />
      <img
        class="cta__shape-18"
        src="~/assets/img/cta/7/cta-shape-2.png"
        alt="cta__shape"
      />
      <img
        class="cta__shape-19"
        src="~/assets/img/cta/7/cta-shape-3.png"
        alt="cta__shape"
      />
      <img
        class="cta__shape-20"
        src="~/assets/img/cta/7/cta-shape-4.png"
        alt="cta__shape"
      />
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xxl-6 col-lg-6">
          <div class="cta__wrapper-7">
            <div class="section__title-wrapper-7 mb-60">
              <!-- <span class="section__title-pre-7">Start Your Free Trial</span> -->
              <h3 v-if="!style_2" class="section__title-7">
                Ready to kick off <br />
                your
                <span class="section__title-7-highlight">
                  startup
                  <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                      fill="#2CAE76"
                    />
                  </svg>
                </span>
                journey?
              </h3>
              <h3 v-if="style_2" class="section__title-7">
                Take your business to the next level.
              </h3>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-lg-6">
          <div
            class="cta__btn-wrapper-7 d-sm-flex align-items-center justify-content-lg-end mb-40"
          >
            
            <nuxt-link href="/help" class="tp-cta-btn-yellow mb-20">
              Get Free Quotes <i class="fa-light fa-arrow-up-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
