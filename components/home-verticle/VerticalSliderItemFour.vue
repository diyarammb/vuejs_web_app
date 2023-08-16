<template>
  <div class="slider__bg-text">
    <h3>headphone</h3>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-9">
        <div class="subscribe__wrapper-11 pr-25">
          <p>
            Subscribe to <br />
            get updated news
          </p>
          <h3 class="subscribe__title-11">Subscribe Our Newsletter</h3>
          <form @submit.prevent="handleSubmit">
            <div class="subscribe__input-11">
              <input type="email" v-model="formValue" placeholder="Enter your mail here" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          <div class="subscribe__social">
            <social />
          </div>
        </div>
      </div>
      <div class="col-xxl-7 col-xl-6 col-lg-6 col-md-4 col-sm-3">
        <div class="subscribe__thumb text-end">
          <div class="subscribe__thumb-animation-1"></div>
          <div class="subscribe__thumb-animation-2"></div>
          <img src="~/assets/img/slider/11/slider-thumb-4.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Social from "../social/Social.vue";
export default {
  components:{Social},
  data () {
    return {
      formValue:''
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = '';
    },
  },
};
</script>

