<template>
  <section class="portfolio__area pb-75 pt-110 p-relative fix">
    <div class="portfolio__shape">
      <img
        class="portfolio__shape-20"
        src="~/assets/img/portfolio/masonary/shape/circle-1.png"
        alt=""
      />
      <img
        class="portfolio__shape-21"
        src="~/assets/img/portfolio/masonary/shape/polygon-green.png"
        alt=""
      />
      <img
        class="portfolio__shape-22"
        src="~/assets/img/portfolio/masonary/shape/polygon-pink.png"
        alt=""
      />
      <img
        class="portfolio__shape-23"
        src="~/assets/img/portfolio/masonary/shape/polygon-yellow.png"
        alt=""
      />
    </div>
    <div class="container-fluid tp-gx-20">
      <div class="row">
        <div class="col-xl-12">
          <div class="portfolio__section-title-wrapper text-center mb-90">
            <span class="portfolio__section-title-pre"
              >CHECK OUT OUR LATEST WORK</span
            >
            <h3 class="portfolio__section-title">Portfolio Masonry</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="portfolio__masonary-btn text-center mb-40">
            <div class="masonary-menu filter-button-group">
              <button
                v-for="(cate, i) in categories"
                :key="i"
                @click="handleCategoryItem(cate)"
                :class="`${cate === activeCategory ? 'active' : ''}`"
              >
                {{ cate }}

                <span>
                  {{
                    cate === "All"
                      ? portfolio_data.length
                      : portfolio_data.filter((item) => item.category === cate)
                          .length
                  }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row tp-gx-20 grid tp-portfolio-load-more pl-10 pr-10">

        <masonry-wall
          :items="portfolio_items?.slice(0, perView)"
          :gap="20"
        >
          <template #default="{ item }">
              <masonry-single-item :item="item"/>
          </template>
        </masonry-wall>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="portfolio__load-more text-center">
            <button
              v-if="perView < portfolio_items.length"
              @click="handleLoadMore()"
              id="tp-load-more"
              type="button"
              class="tp-load-more-btn load-more mt-30 mb-50"
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
import img_1 from "~/assets/img/portfolio/masonary/portfolio-masonary-1.jpg";
import img_2 from "~/assets/img/portfolio/masonary/portfolio-masonary-2.jpg";
import img_3 from "~/assets/img/portfolio/masonary/portfolio-masonary-3.jpg";
import img_4 from "~/assets/img/portfolio/masonary/portfolio-masonary-4.jpg";
import img_5 from "~/assets/img/portfolio/masonary/portfolio-masonary-5.jpg";
import img_6 from "~/assets/img/portfolio/masonary/portfolio-masonary-6.jpg";
import img_7 from "~/assets/img/portfolio/masonary/portfolio-masonary-7.jpg";
import img_8 from "~/assets/img/portfolio/masonary/portfolio-masonary-8.jpg";
import img_9 from "~/assets/img/portfolio/masonary/portfolio-masonary-9.jpg";
import img_10 from "~/assets/img/portfolio/masonary/portfolio-masonary-10.jpg";
import img_11 from "~/assets/img/portfolio/masonary/portfolio-masonary-11.jpg";
import img_12 from "~/assets/img/portfolio/masonary/portfolio-masonary-12.jpg";
import MasonrySingleItem from './MasonrySingleItem.vue';

export default {
  components: { MasonrySingleItem },
  data() {
    return {
      perView: 8,
      categories: [],
      activeCategory: "All",
      portfolio_items: [],
      portfolio_data: [
        // APPS
        {
          id: "1",
          img: img_1,
          title: "Magazine Cover",
          category: "Apps",
        },
        {
          id: "2",
          img: img_2,
          title: "Logo Mockups",
          category: "Apps",
        },
        {
          id: "3",
          img: img_3,
          title: "Pattern Inspired",
          category: "Apps",
        },
        // BRANDING
        {
          id: "4",
          img: img_8,
          title: "Product Design",
          category: "Branding",
        },
        {
          id: "5",
          img: img_5,
          title: "Branding Design",
          category: "Branding",
        },
        //  Creative
        {
          id: "6",
          img: img_6,
          title: "Original Coffee",
          category: "Creative",
          video: true,
          video_id: "1gyTUHP6ne8",
        },
        {
          id: "7",
          img: img_7,
          title: "Visual Identity",
          category: "Creative",
        },
        {
          id: "8",
          img: img_4,
          title: "UX Web Design",
          category: "Creative",
          video: true,
          video_id: "ty8Y0hCJIYw",
        },
        {
          id: "9",
          img: img_9,
          title: "Magazine Cover",
          category: "Creative",
        },
        // Packaging
        {
          id: "10",
          img: img_10,
          title: "Visual Identity",
          category: "Packaging",
        },
        {
          id: "11",
          img: img_11,
          title: "UX Web Design",
          category: "Packaging",
          video: true,
          video_id: "Xm2VKy2a6aQ",
        },
        // Mockup
        {
          id: "12",
          img: img_12,
          title: "Magazine Cover",
          category: "Mockup",
        },
      ],
    };
  },
  methods: {
    handleCategoryItem(value) {
      this.activeCategory = value;
      this.perView = 8;
      if (value === "All") {
        this.portfolio_items = this.portfolio_data;
      } else {
        this.portfolio_items = this.portfolio_data.filter(
          (item) => item.category === value
        );
      }
    },
    // handleLoadMore
    handleLoadMore() {
      this.perView = this.perView + 4;
    },
  },
  created() {
    this.categories = [
      "All",
      ...new Set(this.portfolio_data.map((item) => item.category)),
    ];
    this.portfolio_items = this.portfolio_data;
  },
};
</script>
