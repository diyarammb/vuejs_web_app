<template>
  <div class="portfolio__grid-item mb-20">
    <div
      class="portfolio__grid-thumb w-img fix tp-img-reveal tp-img-reveal-item"
      data-fx="24"
      data-meta-tag="Creative"
      data-title="Visual Identity"
    >
      <nuxt-link href="/portfolio-details-list">
        <img :src="item.img" alt="" /> 
      </nuxt-link>
    </div>
    <div class="portfolio__grid-content">
      <h3 class="portfolio__grid-title">
        <nuxt-link href="/portfolio-details">{{ item.title }}</nuxt-link>
      </h3>
      <div class="portfolio__grid-bottom">
        <div class="portfolio__grid-category">
          <span>
            <a href="#">{{ item.category }}</a>
          </span>
        </div>
        <div class="portfolio__grid-show-project">
          <nuxt-link href="/portfolio-details" class="portfolio-link-btn">
            Show project
            <span>
              <svg
                width="26"
                height="9"
                viewBox="0 0 26 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6934 1L25 4.20003L21.6934 7.4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M0.999999 4.19897H25"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
  },
};
</script>
