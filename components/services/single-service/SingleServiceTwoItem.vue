<template>
  <div class="services__item-14 mb-30">
    <div class="services__thumb-14 transition-3 include-bg"
    :style="{ backgroundImage: `url(${bg})` }">
    </div>
    <div class="services__content-14">
      <h3 class="services__title-14">
        <nuxt-link href="/service-details">{{title}}</nuxt-link>
      </h3>
      <p>We are a creative company that focuses on establishing long <br> term relationships with
        customers.</p>
      <div class="services__btn-14">
        <nuxt-link href="/service-details" class="tp-link-btn">
          Learn More
          <span>
            <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M0.999999 4.19897H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    bg:String,
    title:String
  }
}
</script>
