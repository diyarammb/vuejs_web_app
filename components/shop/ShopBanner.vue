<template>
  <section class="banner__area">
    <div class="container">
      <div class="banner__inner include-bg"
      :style="{ backgroundImage: `url(${bg})` }">
        <div class="row">
          <div class="col-xl-5 col-lg-6 col-md-8">
            <div class="banner__content">
              <span>Apple iPhone 12 Pro</span>
              <h3 class="banner__title">
                <nuxt-link href="/product-details">The wait is on: iphon 12 max pro</nuxt-link>
              </h3>
              <p>Last call for up to <span>32%</span> off! </p>

              <div class="banner__btn">
                <nuxt-link href="/product-details" class="tp-btn">
                  Buy Now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/banner/banner-1.jpg';

export default {
  data () {
    return {
      bg,
    }
  }
}
</script>
