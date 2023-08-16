<template>
  <section class="cta__area z-index-1 p-relative fix">
    <div class="cta__shape">
      <img class="cta__shape-1" src="~/assets/img/cta/cta-shape-1.png" alt="">
      <img class="cta__shape-2" src="~/assets/img/cta/cta-shape-2.png" alt="">
      <img class="cta__shape-3" src="~/assets/img/cta/cta-shape-3.png" alt="">
      <img class="cta__shape-4" src="~/assets/img/cta/cta-shape-4.png" alt="">
      <img class="cta__shape-5" src="~/assets/img/cta/cta-shape-5.png" alt="">
      <img class="cta__shape-6" src="~/assets/img/cta/cta-man.png" alt="">
    </div>
    <div class="container">
      <div class="cta__inner">
        <div class="row align-items-center">
          <div class="col-xxl-5 col-xl-5 col-lg-6">
            <div class="cta__content">
              <h3 class="cta__title">Subscribe <br> to my Newsletter</h3>
            </div>
          </div>
          <div class="col-xxl-7 col-xl-7 col-lg-6">
            <div class="cta__form p-relative z-index-1">
              <form @submit.prevent="handleSubmit">
                <div class="cta__input">
                  <input type="email" placeholder="Your email here..." v-model="formValue">
                  <button type="submit" class="tp-btn-green">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      formValue:''
    }
  },
  methods:{
    handleSubmit(){
      console.log(this.formValue);
    }
  }
}
</script>

