<template>
  <section
    :class="`pricing__area p-relative z-index-1 black-bg-5 ${
      el_style ? 'pt-110 pb-120' : 'pt-80 pb-120'
    }`"
  >
    <div class="pricing__shape">
      <img
        class="pricing__shape-1"
        src="~/assets/img/price/price-shape-1.png"
        alt=""
      />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-6 col-xl-6">
          <div class="section__title-wrapper-3 text-center mb-60">
            <span class="section__title-pre-3 has-center"
              >03 . PROFESSIONAL</span
            >
            <h3 class="section__title-3 has-gradient">
              Simple, transparent <span> Pricing.</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, i) in pricing_data"
          :key="i"
          class="col-lg-12 col-md-6"
        >
          <div
            class="pricing__item mb-20"
            data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
          >
            <div class="row align-items-center">
              <div class="col-xxl-3 col-xl-3 col-lg-3">
                <div class="pricing__content text-center text-lg-start">
                  <div class="pricing__category">
                    <span class="{category_class}">{{ item.category }}</span>
                  </div>
                  <h3 class="pricing__title">
                    ${{ item.price }}
                    <span class="pricing-currency"> USD</span>
                  </h3>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  class="pricing__feature d-lg-flex align-items-center justify-content-between"
                >
                  <div
                    v-for="(f, i) in item.features"
                    :key="i"
                    :class="`pricing__feature-${f.position}`"
                  >
                    <ul>
                      <li
                        v-for="(l, i) in f.lists"
                        :key="i"
                        :class="`${l.denied ? 'has-denied' : ''}`"
                      >
                        {{ l.list }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-3 col-lg-3">
                <div class="pricing__btn text-center text-lg-end">
                  <nuxt-link href="/contact-2" class="tp-btn-border-3">
                    Choose Plan
                  </nuxt-link>
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
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pricing_data: [
        {
          category: "Basic",
          category_class: "",
          price: "169",
          delay: "130",
          features: [
            {
              position: "left",
              lists: [
                { denied: false, list: "1-4 persons" },
                { denied: false, list: "24 hours turnaround" },
              ],
            },
            {
              position: "right",
              lists: [
                { denied: true, list: "Photo shoot session" },
                { denied: true, list: "All photos delivered on usb" },
              ],
            },
          ],
        },
        {
          category: "Standard",
          category_class: "standard",
          price: "253",
          delay: "150",
          features: [
            {
              position: "left",
              lists: [
                { denied: false, list: "1-4 persons" },
                { denied: false, list: "24 hours turnaround" },
              ],
            },
            {
              position: "right",
              lists: [
                { denied: false, list: "Photo shoot session" },
                { denied: true, list: "All photos delivered on usb" },
              ],
            },
          ],
        },
        {
          category: "Premium",
          category_class: "premium",
          price: "364",
          delay: "170",
          features: [
            {
              position: "left",
              lists: [
                { denied: false, list: "1-4 persons" },
                { denied: false, list: "24 hours turnaround" },
              ],
            },
            {
              position: "right",
              lists: [
                { denied: false, list: "Photo shoot session" },
                { denied: false, list: "All photos delivered on usb" },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
