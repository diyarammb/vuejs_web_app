<template>
  <section :class="`subscribe__area p-relative z-index-1 ${el_style?'pb-140':''}`">
    <div v-if="!el_style" class="subscribe__bg"></div>
    <div class="container">
      <div class="subscribe__inner-14">
        <div class="row gx-0 align-items-center">
          <div class="col-xl-5 col-lg-5">
            <h3 class="subscribe__title-14">Join our Newsletter</h3>
          </div>
          <div class="col-xl-7 col-lg-7">
            <div class="subscribe__form-14">
              <form>
                <input type="email" placeholder="Your Email (required)" />
                <button type="submit">Subscribe Me</button>
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
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
};
</script>
