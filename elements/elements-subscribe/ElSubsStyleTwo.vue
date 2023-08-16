<template>
  <div class="newsletter-demo-wrapper pt-110 pb-120 grey-bg-4">
    <div class="container">
        <div class="row">
            <div class="col-xxl-12">
                <div class="tp-section-wrapper-3 mb-50 text-center">
                  <span class="tp-section-subtitle-3">Modern & Clean Design</span>
                  <h3 class="tp-section-title-3">Newsletter Modern Style</h3>
                </div>
            </div>
          </div>
    </div>
    <div class="newsletter__area newsletter__area-2 newsletter-demo">
        <div class="newsletter__wrapper newsletter__wrapper-2">
            <div class="newsletter__close">
              <button type="button" class="newsletter__close-btn newsletter__close-btn-2 newsletter-close-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                     
              </button>
            </div>
            <div class="newsletter__thumb newsletter__thumb-2 include-bg" 
             :style="{ backgroundImage: `url(${bg})` }">
           </div>
            <h3 class="newsletter__title-2">Subscribe <br>Our newsletters</h3>
            <p>The city and town name generator uses.</p>

            <form>
              <div class="newsletter__input newsletter__input-2 d-sm-flex align-items-center">
                  <input type="email" placeholder="Email address">
                  <button type="button">Subscribe</button>
              </div>
              <div class="newsletter__agree newsletter__agree-2 d-flex align-items-start mb-35">
                  <input class="e-check-input" type="checkbox" id="h-agree">
                  <label class="e-check-label" for="h-agree">I agree to the 
                    <nuxt-link href="/policy">Privacy Policy.</nuxt-link>
                  </label>
              </div>
            </form>
        </div>
      </div>
  </div>
</template>

<script>
import bg from '~/assets/img/newsletter/newsletter-2.jpg';

  export default {
    data () {
      return {bg}
    }
  }
</script>

