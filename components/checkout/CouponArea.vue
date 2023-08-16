<template>
  <section class="coupon-area pt-120 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="coupon-accordion">
            <!-- ACCORDION START -->
            <h3>
              Returning customer?
              <span @click="handleCheckoutLogin" id="showlogin">Click here to login</span>
            </h3>
            <div v-if="checkoutLogin" id="checkout-login" class="coupon-content">
              <div class="coupon-info">
                <p class="coupon-text">
                  Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                  sed est sit amet ipsum luctus.
                </p>
                <form @submit.prevent="handleSubmit">
                  <p class="form-row-first">
                    <label>Username or email <span class="required">*</span></label>
                    <input type="text" v-model="formValue.name_or_email" />
                  </p>
                  <p class="form-row-last">
                    <label>Password <span class="required">*</span></label>
                    <input type="text" v-model="formValue.password" />
                  </p>
                  <p class="form-row">
                    <button class="tp-btn" type="submit">Login</button>
                    <label>
                      <input type="checkbox" v-model="formValue.isChecked" />
                      Remember me
                    </label>
                  </p>
                  <p class="lost-password">
                    <nuxt-link href="/forgot">Lost your password?</nuxt-link>
                  </p>
                </form>
              </div>
            </div>
            <!-- ACCORDION END -->
          </div>
        </div>
        <div class="col-md-6">
          <div class="coupon-accordion">
            <!-- ACCORDION START -->
            <h3>
              Have a coupon?
              <span @click="handleCheckoutCoupon" id="showcoupon">Click here to enter your code</span>
            </h3>
            <div v-if="checkoutCoupon" id="checkout_coupon" class="coupon-checkout-content">
              <div class="coupon-info">
                <form @submit.prevent="handleCouponSubmit">
                  <p class="checkout-coupon">
                    <input v-model="couponVal" type="text" placeholder="Coupon Code" />
                    <button class="tp-btn" type="submit">Apply Coupon</button>
                  </p>
                </form>
              </div>
            </div>
            <!-- ACCORDION END -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      checkoutLogin:false,
      checkoutCoupon:false,
      formValue: {
        name_or_email: "",
        password: "",
        isChecked: false,
      },
      couponVal:''
    }
  },
  methods:{
    handleCheckoutLogin () {
      this.checkoutLogin = !this.checkoutLogin
    },
    handleCheckoutCoupon () {
      this.checkoutCoupon = !this.checkoutCoupon
    },
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    },
    handleCouponSubmit() {
      console.log(this.couponVal);
      this.couponVal = '';
    },
  }
};
</script>
