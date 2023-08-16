<template>
  <section class="services__area pt-115 pb-105 black-bg-12">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-8 text-center mb-60">
            <span class="section__title-pre-8">Our Services</span>
            <h3 class="section__title-8">
              Our featured
              <span class="section__title-highlight-8"
                >services
                <svg
                  width="206"
                  height="24"
                  viewBox="0 0 206 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="wow"
                    d="M3 20.7505C47.375 13.8755 135.812 -15.4995 203 20.7505"
                    stroke="#FF5A1B"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, i) in service_data"
          :key="i"
          class="col-lg-6 col-md-6"
        >
          <arch-single-service :item="item"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ser_icon_1 from "~/assets/img/icon/services/8/services-1.svg";
import ser_icon_2 from "~/assets/img/icon/services/8/services-2.svg";
import ser_icon_3 from "~/assets/img/icon/services/8/services-3.svg";
import ser_icon_4 from "~/assets/img/icon/services/8/services-4.svg";
import ArchSingleService from './single-service/ArchSingleService.vue';

export default {
  components: { ArchSingleService },
  data() {
    return {
      service_data: [
        {
          icon: ser_icon_1,
          title: "Planning",
          subtitle:
            "There are many variations of passages of lorem Ipsum available.!",
          project: "350",
        },
        {
          icon: ser_icon_2,
          title: "Architecture",
          subtitle:
            "There are many variations of passages of lorem Ipsum available.!",
          project: "120",
        },
        {
          icon: ser_icon_3,
          title: "Design",
          subtitle:
            "There are many variations of passages of lorem Ipsum available.!",
          project: "240",
        },
        {
          icon: ser_icon_4,
          title: "Products",
          subtitle:
            "There are many variations of passages of lorem Ipsum available.!",
          project: "220",
        },
      ],
    };
  },
};
</script>
