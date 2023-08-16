<template>
  <section
    :class="`pricing__area ${
      style_2 ? 'pt-110 pb-120' : el_style ? 'pt-130 pb-120' : 'pt-130'
    } p-relative z-index-1`"
  >
    <div v-if="!hide_shape" class="pricing__shape">
      <img
        class="pricing__shape-6"
        src="~/assets/img/price/7/price-shape-1.png"
        alt="pricing__shape"
      />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div :class="`col-xl-7 col-lg-8 ${style_2 ? 'col-md-10' : ''}`">
          <div
            v-if="!style_2"
            class="section__title-wrapper-7 text-center mb-60"
          >
            <span class="section__title-pre-7">Our Pricing</span>
            <h3 class="section__title-7">
              Simple
              <span class="section__title-7-highlight">
                pricing
                <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              solutions for everyone.
            </h3>
          </div>
          <div v-if="style_2" class="tp-section-wrapper-2 mb-65 text-center">
            <span class="tp-section-subtitle-2">PRICING PAGE</span>
            <h3 class="tp-section-title-2 font-70">
              Pricing built to suits teams of all sizes.
            </h3>
          </div>
        </div>
      </div>
      <div
        :class="`pricing__table ${style_2 ? 'pricing__style-2' : ''} white-bg`"
      >
        <div class="pricing__table-wrapper">
          <!-- pricng header -->
          <div class="pricing__header grey-bg-13">
            <div class="row gx-0">
              <div class="col-xl-4 col-4">
                <div class="pricing__header-content">
                  <h3 class="pricing__header-title">Contact Us!</h3>
                  <nuxt-link href="/contact" class="tp-btn-11">Get Started</nuxt-link>
                  <img
                    v-if="!style_2"
                    class="pricing-header-shape"
                    src="~/assets/img/price/7/price-icon-1.png"
                    alt="pricing-header-shape"
                  />
                  <img
                    v-if="style_2"
                    class="pricing-header-shape"
                    src="~/assets/img/price/7/price-icon-2.png"
                    alt="pricing-header-shape"
                  />
                </div>
              </div>
              <div class="col-xl-8 col-8">
                <div
                  class="pricing__header-top-wrapper d-flex align-items-center"
                >
                  <!-- pricing heading one -->
                  <pricing-header tag="Silver Plan" price="94" />
                  <pricing-header :best="true" tag="Advanced" price="59" />
                  <pricing-header tag="Enterprise" price="79" />
                </div>
              </div>
            </div>
          </div>

          <!-- pricing features item wrapper -->
          <div class="pricing__feature-item-wrapper">
            <!-- pricing features item -->
            <pricing-item
              title="Unlimited project"
              info_1='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
              info_2='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
              info_3='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
            />
            <!-- pricing features item -->
            <pricing-item
              title="Free Google Analysis"
              info_1="$6/Year"
              info_2='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
              info_3='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
            />
            <!-- pricing features item -->
            <pricing-item
              title="Lifetime support & SEO Experts"
              info_1='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
              info_2='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
              info_3='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
            />
            <!-- pricing features item -->
            <pricing-item
              title="Data Security & Backup"
              info_1="100 GB"
              info_2="1TB"
              info_3="Unlimited"
            />
            <!-- pricing features item -->
            <pricing-item
              title="Auto Lifetime Upgrade"
              info_1='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
              info_2='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
              info_3='<span>
                          <svg
                            width="11"
                            height="9"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>'
            />

            <!-- pricing button -->
            <div class="pricing__footer">
              <div class="row gx-0">
                <div class="col-xl-4 col-4">
                  <div class="pricing__footer-content"></div>
                </div>
                <div class="col-xl-8 col-8">
                  <div class="pricing__btn-wrapper-7 d-flex align-items-center">
                    <div class="pricing__btn-7 text-center">
                      <nuxt-link href="/contact" class="tp-btnr-border-2"
                        >Choose Plan
                      </nuxt-link>
                    </div>
                    <div class="pricing__btn-7 price-active text-center">
                      <nuxt-link href="/contact" class="tp-btnr-border-2"
                        >Choose Plan
                      </nuxt-link>
                    </div>
                    <div class="pricing__btn-7 text-center">
                      <nuxt-link href="/contact" class="tp-btnr-border-2"
                        >Choose Plan
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PricingHeader from "./PricingHeader.vue";
import PricingItem from "./PricingItem.vue";

export default {
  components: { PricingHeader, PricingItem },
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
    el_style: {
      type: Boolean,
      default: false,
    },
    hide_shape: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
