<template>
  <section class="cart-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form @submit.prevent="handleSubmit">
            <div class="table-content table-responsive">
              <div class="tp-continue-shopping">
                <p>
                  <nuxt-link href="/shop">
                    Continue Shopping 
                    <i class="fal fa-reply"></i>
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
                <div class="coupon-all">
                  <div class="coupon">
                    <input
                      id="coupon_code"
                      class="input-text"
                      name="coupon_code"
                      value=""
                      placeholder="Coupon code"
                      type="text"
                    />
                    <button
                      class="tp-btn tp-btn-black"
                      name="apply_coupon"
                      type="submit"
                    >
                      Apply coupon
                    </button>
                  </div>
                  <div class="coupon2">
                    <button
                      class="tp-btn tp-btn-black"
                      name="update_cart"
                      type="submit"
                    >
                      Update cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-md-5 mr-auto">
                <div class="cart-page-total">
                  <h2>Cart totals</h2>
                  <ul class="mb-20">
                    <li>Subtotal <span>$250.00</span></li>
                    <li>Total <span>$250.00</span></li>
                  </ul>
                  <nuxt-link class="tp-btn" href="/checkout">Proceed to checkout</nuxt-link>
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
  methods:{
    handleSubmit(){
      console.log('submit')
    }
  }
};
</script>
