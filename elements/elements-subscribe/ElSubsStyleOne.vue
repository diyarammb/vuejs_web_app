<template>
 <div class="newsletter-demo-wrapper pt-110 pb-120 grey-bg-4">
  <div class="container">
      <div class="row">
          <div class="col-xxl-12">
              <div class="tp-section-wrapper-3 mb-50 text-center">
                <span class="tp-section-subtitle-3">Modern & Clean Design</span>
                <h3 class="tp-section-title-3">Newsletter Classic Style</h3>
              </div>
          </div>
        </div>
  </div>
    <div class="newsletter__area newsletter-demo ">
      <div class="newsletter__wrapper">
          <div class="newsletter__close">
            <button type="button" class="newsletter__close-btn newsletter-close-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                     
            </button>
          </div>
          <div class="newsletter__thumb include-bg" 
           :style="{ backgroundImage: `url(${bg})`}">
          </div>
          <h3 class="newsletter__title">Keep up with our daily and weekly newsletters</h3>

          <form @submit.prevent="handleSubmit">
            <div class="newsletter__input">
                <input type="email" placeholder="Email address">
                <button type="submit">Sign Up</button>
            </div>
            <div class="newsletter__agree d-flex align-items-start mb-35">
                <input class="e-check-input" type="checkbox" id="n-agree">
                <label class="e-check-label" for="n-agree">The city and town name generator uses a database of over five million names across more countries</label>
            </div>
            <div class="newsletter__option">
                <p>Please, don’t ask me again</p>
            </div>
          </form>
      </div>
    </div>
</div>
</template>

<script>
import bg from '~/assets/img/newsletter/newsletter-1.jpg';

  export default {
    data () {
      return {bg}
    },
    methods:{
      handleSubmit () {
        console.log('submit')
      }
    }
  }
</script>
