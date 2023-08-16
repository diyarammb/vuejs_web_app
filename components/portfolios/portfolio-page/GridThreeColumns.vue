<template>
  <section class="portfolio__area pt-60 pb-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="portfolio__masonary-btn-2 text-center mb-50">
            <div class="masonary-menu filter-button-group">
              <button
                v-for="(cate, i) in categories"
                :key="i"
                @click="handleCategoryItem(cate)"
                :class="`${cate === activeCategory ? 'active' : ''}`"
              >
                {{ cate }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row gx-2 grid">
        <div v-for="(item, i) in portfolio_items"
          :key="i" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1">
          <div
            class="portfolio__item mb-8 fix transition-3"
          >
            <div
              class="portfolio__thumb include-bg"
              :style="{ backgroundImage: `url(${item.img})`}"
            ></div>
            <div class="portfolio__content">
              <div class="portfolio__tag">
                <span><a href="#">{{item.tag}}</a></span>
              </div>
              <h3 class="portfolio__title">
                <nuxt-link href="/portfolio-details">
                  {{item.title}}
                </nuxt-link>
              </h3>
            </div>
            <div class="portfolio__text">
              <p>
                {{item.desc}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img_1 from "~/assets/img/portfolio/portfolio-1.jpg";
import img_2 from "~/assets/img/portfolio/portfolio-2.jpg";
import img_3 from "~/assets/img/portfolio/portfolio-3.jpg";
import img_4 from "~/assets/img/portfolio/portfolio-7.jpg";
import img_5 from "~/assets/img/portfolio/portfolio-6.jpg";
import img_6 from "~/assets/img/portfolio/portfolio-8.jpg";

export default {
  components: {},
  data() {
    return {
      categories: [],
      activeCategory: "All",
      portfolio_items: [],
      portfolio_data: [
        {
          id: 1,
          img: img_1,
          tag: "Business Consulting",
          title: "12 best blogs to follow about food design",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Case Studies",
        },
        {
          id: 2,
          img: img_2,
          tag: "Lost Saints",
          title: "Purpose-driven employers succeed",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Client Stories",
        },
        {
          id: 3,
          img: img_3,
          tag: "UI wireframe",
          title: "The 4 most effective incentives",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Inspiration",
        },
        {
          id: 4,
          img: img_4,
          tag: "Creativity",
          title: "Industrial Chemicals Manufacture Study",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Case Studies",
        },
        {
          id: 5,
          img: img_5,
          tag: "Business",
          title: "Case Study – Direct Sales Retailer",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Digital",
        },
        {
          id: 6,
          img: img_6,
          tag: "Client Stories",
          title: "Business Academy Consulting Client",
          desc: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
          category: "Inspiration",
        },
      ],
    };
  },
  methods: {
    handleCategoryItem(value) {
      this.activeCategory = value;
      if (value === "All") {
        this.portfolio_items = this.portfolio_data;
      } else {
        this.portfolio_items = this.portfolio_data.filter(
          (item) => item.category === value
        );
      }
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
