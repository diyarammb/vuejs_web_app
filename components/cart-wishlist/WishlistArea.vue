<template>
  <section class="cart-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="#">
            <div class="table-content table-responsive">
              <div class="tp-continue-shopping">
                <p>
                  <nuxt-link href="/shop">
                    Continue Shopping <i class="fal fa-reply"></i>
                  </nuxt-link>
                </p>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th class="product-thumbnail">Images</th>
                    <th class="cart-product-name">Product</th>
                    <th class="product-price">Unit Price</th>
                    <th class="product-quantity">Quantity</th>
                    <th class="product-subtotal">Total</th>
                    <th class="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <single-cart-item
                    :img="cart_img_1"
                    title="Level Bolt Smart Lock"
                    price="130.00"
                  />
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="tp-wishlist-btn mt-50">
                  <nuxt-link href="/cart" class="tp-btn tp-btn-black">Go to Cart</nuxt-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleCartItem from "./SingleCartItem.vue";
import cart_img_1 from "~/assets/img/product/product-1.jpg";

export default {
  components: { SingleCartItem },
  data() {
    return { cart_img_1 };
  },
};
</script>
