<template>
  <section class="portfolio__area pb-90 pt-20 p-relative fix">
    <div class="container-fluid tp-gx-20">
      <div class="row tp-gx-20">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Gallery Masonry</h3>
          </div>
        </div>
      </div>
      <div class="row tp-gx-20 grid">
        <masonry-wall :items="portfolio_data" :gap="20">
          <template #default="{ item }">
            <masonry-single-item :item="item" />
          </template>
        </masonry-wall>
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
import MasonrySingleItem from "~~/components/portfolios/portfolio-page/MasonrySingleItem.vue";

export default {
  components: { MasonrySingleItem },
  data() {
    return {
      portfolio_data: [
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
      ],
    };
  },
};
</script>
