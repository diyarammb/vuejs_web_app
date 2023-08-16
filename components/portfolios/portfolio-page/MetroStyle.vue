<template>
  <section class="portfolio__area pb-90 pt-110 p-relative fix">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="portfolio__section-title-wrapper text-center mb-130">
            <span class="portfolio__section-title-pre"
              >CHECK OUT OUR LATEST WORK</span
            >
            <h3 class="portfolio__section-title">Portfolio Sticky Metro</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12 tp-load-item-count">
          <single-metro-style
            v-for="(item, i) in metro_data?.slice(0, perView)"
            :key="i"
            :item="item"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="portfolio__load-more text-center">
            <button
              v-if="perView < metro_data.length"
              @click="handleLoadMore()"
              id="tp-load-more"
              type="button"
              class="tp-load-more-btn load-more mt-40 mb-50"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.5C1 4.36 4.33 1 8.5 1C13.5025 1 16 5.17 16 5.17M16 5.17V1.42M16 5.17H12.67"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9175 8.5C15.9175 12.64 12.5575 16 8.4175 16C4.2775 16 1.75 11.83 1.75 11.83M1.75 11.83H5.14M1.75 11.83V15.58"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Load more Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img_1 from "~/assets/img/portfolio/metro/portfolio-metro-1.jpg";
import img_2 from "~/assets/img/portfolio/metro/portfolio-metro-2.jpg";
import img_3 from "~/assets/img/portfolio/metro/portfolio-metro-3.jpg";
import img_4 from "~/assets/img/portfolio/metro/portfolio-metro-4.jpg";
import img_5 from "~/assets/img/portfolio/metro/portfolio-metro-5.jpg";
import SingleMetroStyle from "./SingleMetroStyle.vue";

export default {
  components: { SingleMetroStyle },
  data() {
    return {
      perView: 3,
      metro_data: [
        {
          img: img_1,
          category: "Original",
          title: "Original Coffee",
          subtitle:
            "Success needs hard work. Don’t listen to these ‘get rich quick’ schemes you need to build,..!",
          video: true,
          video_id: "1gyTUHP6ne8",
        },
        {
          img: img_2,
          category: "Branding",
          title: "Branding Design",
          subtitle:
            "Success needs hard work. Don’t listen to these ‘get rich quick",
        },
        {
          img: img_3,
          category: "Mockup",
          title: "Magazine Cover",
          subtitle:
            "Success needs hard work. Don’t listen to these ‘get rich quick",
        },
        {
          img: img_4,
          category: "Branding",
          title: "The Same Creation",
          subtitle: "Pink pastel business card paper mockups.",
          video: true,
          video_id: "Xm2VKy2a6aQ",
        },
        {
          img: img_5,
          category: "Creative",
          title: "Hancraft Art of paint",
          subtitle: "Pink pastel business card paper mockups.",
        },
      ],
    };
  },
  methods: {
    // handleLoadMore
    handleLoadMore() {
      this.perView = this.perView + 1;
    },
  },
};
</script>
