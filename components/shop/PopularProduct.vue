<template>
  <section class="product__popular-area pb-20">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="section__title-wrapper-13 mb-35">
            <h3 class="section__title-13">Popular Products</h3>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="product__tab tp-tab mb-35">
            <ul
              class="nav nav-tabs justify-content-md-end"
              id="productTab"
              role="tablist"
            >
              <li
                v-for="(tab, i) in tabs"
                :key="i"
                class="nav-item"
                @click="handleTabProduct(tab)"
              >
                <button
                  :class="`nav-link ${activeTab === tab ? 'active' : ''}`"
                  id="top-tab"
                  type="button"
                >
                  {{ tab }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="product__tab-wrapper">
        <div class="row">
          <div
            v-for="(item, i) in product_items"
            :key="i"
            class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
          >
            <single-product :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productData from "~~/mixins/productData";
import SingleProduct from "./SingleProduct.vue";

export default {
  components: { SingleProduct },
  mixins: [productData],
  data() {
    return {
      tabs: ["Top Rated", "Best Selling", "Latest Products"],
      activeTab: "Top Rated",
      product_items: [],
    };
  },
  methods: {
    handleTabProduct(value) {
      this.activeTab = value;
      if (value === "Top Rated") {
        this.product_items = this.productData.filter((item) => item.topRated);
      }
      if (value === "Best Selling") {
        this.product_items = this.productData.filter(
          (item) => item.bestSelling
        );
      }
      if (value === "Latest Products") {
        this.product_items = this.productData.filter(
          (item) => item.latestProduct
        );
      }
    },
  },
  created() {
    this.product_items = this.productData.filter((item) => item.topRated);
  },
};
</script>
