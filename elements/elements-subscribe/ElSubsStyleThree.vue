<template>
  <div class="newsletter-demo-wrapper pt-110 pb-120 grey-bg-4">
    <div class="container">
        <div class="row">
            <div class="col-xxl-12">
                <div class="tp-section-wrapper-3 mb-50 text-center">
                  <span class="tp-section-subtitle-3">Modern & Clean Design</span>
                  <h3 class="tp-section-title-3">Newsletter Ecommerce Style</h3>
                </div>
            </div>
          </div>
    </div>
    <div class="newsletter__area newsletter__area-3 newsletter-demo">
        <div class="newsletter__wrapper newsletter__wrapper-3">
            <div class="newsletter__close newsletter__close-3">
              <button type="button" class="newsletter__close-btn newsletter__close-btn-3 newsletter-close-btn">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                     
              </button>
            </div>
            <div class="newsletter__thumb newsletter__thumb-3 include-bg" 
              :style="{ backgroundImage: `url(${bg})` }">
            </div>
            <span class="newsletter__title-pre">Harry Discount</span>
            <h3 class="newsletter__title-3">Get 16% off</h3>
            <p>Subscribe now and receive a discount on <br> your first order</p>

            <form action="#">
              <div class="newsletter__input newsletter__input-2 newsletter__input-3">
                  <input type="email" placeholder="Your email address">
                  <button type="button">Submit 
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.4 1H13.6C14.37 1 15 1.63 15 2.4V10.8C15 11.57 14.37 12.2 13.6 12.2H2.4C1.63 12.2 1 11.57 1 10.8V2.4C1 1.63 1.63 1 2.4 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 2.39999L8 7.29999L1 2.39999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
              </div>
            </form>
            <div class="newsletter__proposal">
              <p><nuxt-link href="/register">Signup</nuxt-link> for Exclusive Updates</p>
            </div>
            <div class="newsletter__social">
              <social/>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import bg from '~/assets/img/newsletter/newsletter-3.jpg';
import Social from '~~/components/social/Social.vue';

  export default {
  components: { Social },
    data () {
      return {bg}
    }
  }
</script>
