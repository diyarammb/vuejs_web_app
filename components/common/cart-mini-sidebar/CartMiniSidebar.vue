<template>
  <div :class="`cartmini__area ${utils.isCartMiniOpen ? 'cartmini-opened' : ''}`">
    <div class="cartmini__wrapper d-flex justify-content-between flex-column">
      <div class="cartmini__top-wrapper">
        <div class="cartmini__top p-relative">
          <div class="cartmini__title">
            <h4>Shopping cart</h4>
          </div>
          <div class="cartmini__close">
            <button
             @click="utils.closeCartMini()"
              type="button"
              class="cartmini__close-btn cartmini-close-btn"
            >
              <i class="fal fa-times"></i>
            </button>
          </div>
        </div>
        <div class="cartmini__widget">
          <div class="cartmini__widget-item">
            <div class="cartmini__thumb">
              <nuxt-link href="/product-details">
                <img src="~/assets/img/product/product-1.jpg" alt="" />
              </nuxt-link>
            </div>
            <div class="cartmini__content">
              <h5><nuxt-link href="/product-details">Level Bolt Smart Lock</nuxt-link></h5>
              <div class="cartmini__price-wrapper">
                <span class="cartmini__price">$46.00</span>
                <span class="cartmini__quantity">x2</span>
              </div>
            </div>
            <button class="cartmini__del"><i class="fal fa-times"></i></button>
          </div>
          <div class="cartmini__widget-item">
            <div class="cartmini__thumb">
              <nuxt-link href="/product-details">
                <img src="~/assets/img/product/product-2.jpg" alt="" />
              </nuxt-link>
            </div>
            <div class="cartmini__content">
              <h5><nuxt-link href="/product-details">Trademil for younger</nuxt-link></h5>
              <div class="cartmini__price-wrapper">
                <span class="cartmini__price">$78.00</span>
                <span class="cartmini__quantity">x1</span>
              </div>
            </div>
            <button class="cartmini__del"><i class="fal fa-times"></i></button>
          </div>
          <div class="cartmini__widget-item">
            <div class="cartmini__thumb">
              <nuxt-link href="/product-details">
                <img src="~/assets/img/product/product-3.jpg" alt="" />
              </nuxt-link>
            </div>
            <div class="cartmini__content">
              <h5><nuxt-link href="/product-details">ViewSonic VP2756-2K</nuxt-link></h5>
              <div class="cartmini__price-wrapper">
                <span class="cartmini__price">$98.00</span>
                <span class="cartmini__quantity">x3</span>
              </div>
            </div>
            <button class="cartmini__del"><i class="fal fa-times"></i></button>
          </div>
        </div>
        <!-- if no item in cart -->
        <div class="cartmini__empty text-center d-none">
          <img src="~/assets/img/product/cartmini/empty-cart.png" alt="" />
          <p>Your Cart is empty</p>
          <nuxt-link href="/shop" class="tp-btn">Go to Shop</nuxt-link>
        </div>
      </div>
      <div class="cartmini__checkout">
        <div class="cartmini__checkout-title mb-30">
          <h4>Subtotal:</h4>
          <span>$113.00</span>
        </div>
        <div class="cartmini__checkout-btn">
          <nuxt-link href="/cart" class="tp-btn mb-10 w-100">
            <span></span> view cart
          </nuxt-link>
          <nuxt-link href="/checkout" class="tp-btn-border w-100">
            <span></span> checkout
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>

  <!-- body overlay start -->
  <div @click="utils.closeCartMini()" :class="`body-overlay ${utils.isCartMiniOpen ? 'opened' : ''}`"></div>
  <!-- body overlay end -->
</template>

<script>
import { useUtilsStore } from '~~/store/utils';

export default {
  data () {
    return {
      isOpen:false,
    }
  },
  methods:{},
  setup () {
    const utils = useUtilsStore();
    return {utils}
  }
};
</script>
