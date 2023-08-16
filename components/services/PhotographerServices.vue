<template>
  <div
    :class="`services__area p-relative z-index-1 black-bg-5 ${
      el_style ? 'pt-110 pb-150' : 'pt-50 pb-120'
    }`"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-3 mb-65">
            <span class="section__title-pre-3">04 . Services</span>
            <h3 class="section__title-3 has-gradient">
              Create the Magical<span> Memories!.</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
          <div
            class="services__wrapper-3"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <div class="services__list pl-100">
              <div
                v-for="list in services_lists"
                :key="list.id"
                @click="handleServiceActive(list.id)"
                :class="`services__list-item services-item-link ${
                  serviceActive === `services-img-${list.id}` ? 'active' : ''
                }`"
                :rel="serviceActive"
              >
                <h3 class="services__list-title">
                  <span class="services-tab-link-btn">
                    <i class="fa-regular fa-angle-right"></i>
                  </span>
                  <button type="button">{{ list.title }}</button>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
          <div
            class="services__tab-wrapper"
            data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"
          >
            <div class="services__tab-content pl-65 pr-35">
              <img
                class="services__shape-3"
                src="~/assets/img/services/3/services-shape-1.png"
                alt="shape"
              />
              <div id="services-item-thumb" :class="serviceActive">
                <img
                  class="services__list-thumb services-img-1"
                  src="~/assets/img/services/3/services-1.jpg"
                  alt="services-img"
                />
                <img
                  class="services__list-thumb services-img-2"
                  src="~/assets/img/services/3/services-2.jpg"
                  alt="services-img"
                />
                <img
                  class="services__list-thumb services-img-3"
                  src="~/assets/img/services/3/services-3.jpg"
                  alt=""
                />
                <img
                  class="services__list-thumb services-img-4"
                  src="~/assets/img/services/3/services-4.jpg"
                  alt="services-img"
                />
                <img
                  class="services__list-thumb services-img-5"
                  src="~/assets/img/services/3/services-5.jpg"
                  alt="services-img"
                />
                <img
                  class="services__list-thumb services-img-6"
                  src="~/assets/img/services/3/services-6.jpg"
                  alt="services-img"
                />
                <img
                  class="services__list-thumb services-img-7"
                  src="~/assets/img/services/3/services-7.jpg"
                  alt="services-img"
                />
                <img
                  class="services__list-thumb services-img-8"
                  src="~/assets/img/services/3/services-8.jpg"
                  alt="services-img"
                />
              </div>
              <div class="services__tab-logo">
                <img
                  class="services__tab-logo-thumb"
                  src="~/assets/img/services/3/services-logo.png"
                  alt="services-logo"
                />
                <img
                  class="services__tab-logo-icon"
                  src="~/assets/img/services/3/services-logo-icon.png"
                  alt="services-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      serviceActive: "services-img-3",
      services_lists: [
        { id: 1, title: "Event Shoot" },
        { id: 2, title: "Product Shoot" },
        { id: 3, title: "Wedding Shoot" },
        { id: 4, title: "Corporate Shoot" },
        { id: 5, title: "Pet Shoot" },
        { id: 6, title: "Advertisement shoot" },
        { id: 7, title: "Model Shoot" },
        { id: 8, title: "View all Type" },
      ],
    };
  },
  methods: {
    handleServiceActive(id) {
      this.serviceActive = `services-img-${id}`;
    },
  },
};
</script>
