<template>
  <section class="product__related-area pb-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper-13 mb-35">
            <h3 class="section__title-13">Related Products</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="product__related-slider">
            <div class="row">
              <div
                v-for="(item, i) in productData.slice(0, 4)"
                :key="i"
                class="col-lg-3 col-md-6"
              >
                <single-product :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productData from "~~/mixins/productData";
import SingleProduct from "../shop/SingleProduct.vue";

export default {
  components: { SingleProduct },
  mixins: [productData],
};
</script>
