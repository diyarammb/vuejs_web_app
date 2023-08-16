<template>
  <section class="cta__area pt-50 pb-50 p-relative include-bg jarallax"
  :style="{ backgroundImage: `url(${bg})` }">
    <div class="container">
      <div class="cta__inner-13 white-bg">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-6">
            <div class="cta__content-13">
              <h3 class="cta__title-13">Subscribe for <br>Latest Trends & Offers</h3>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="cta__form-13">
              <form action="#">
                <div class="cta__input-13">
                  <input type="email" placeholder="Enter Your Email">
                  <button type="submit" class="tp-btn">Subscribe</button>
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
import bg from '~/assets/img/cta/13/cta-bg-1.jpg';

export default {
  data () {
    return {bg}
  }
}
</script>
