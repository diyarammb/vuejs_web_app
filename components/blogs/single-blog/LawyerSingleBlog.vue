<template>
  <div class="row">
    <div class="col-lg-5 col-md-5 col-sm-6">
      <div class="blog__thumb-4 m-img">
        <nuxt-link href="/blog-details">
          <img :src="blog.img" alt="" />
        </nuxt-link>
      </div>
    </div>
    <div class="col-lg-7 col-md-7 col-sm-6">
      <div class="blog__content-4">
        <div class="blog__tag-4">
          <a href="#">{{ blog.tag }}</a>
        </div>
        <h3 class="blog__title-4">
          <nuxt-link href="/blog-details">{{ blog.title }}</nuxt-link>
        </h3>
        <p>{{ blog.sm_text }}</p>

        <div class="blog__author d-flex align-items-center mb-30">
          <div class="blog__author-thumb">
            <a href="#">
              <img :src="blog.author_img" alt="" />
            </a>
          </div>
          <div class="blog__author-content">
            <h3 class="blog__author-title">
              <a href="#">{{ blog.author_name }}</a>
            </h3>
          </div>
        </div>

        <div class="blog__meta-4 d-flex align-items-center justify-content-between">
          <span>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.33325 1V3" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.66675 1V3" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1.33374 5.72656H12.6671" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M13 5.33285V10.9995C13 12.9995 12 14.3328 9.66667 14.3328H4.33333C2 14.3328 1 12.9995 1 10.9995V5.33285C1 3.33285 2 1.99951 4.33333 1.99951H9.66667C12 1.99951 13 3.33285 13 5.33285Z"
                stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M9.46297 8.79964H9.46896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M9.46297 10.8001H9.46896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M6.99691 8.79964H7.0029" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M6.99691 10.8001H7.0029" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M4.52938 8.79964H4.53537" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M4.52938 10.8001H4.53537" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            {{ blog.date }}
          </span>
          <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5291 11.381L12.8021 13.5929C12.8721 14.1739 12.2491 14.5799 11.7521 14.2789L8.81916 12.5359C8.49716 12.5359 8.18217 12.515 7.87417 12.473C8.39216 11.864 8.70016 11.0939 8.70016 10.2609C8.70016 8.27295 6.97817 6.66299 4.85018 6.66299C4.03818 6.66299 3.28919 6.89397 2.66619 7.29997C2.64519 7.12497 2.63818 6.94997 2.63818 6.76797C2.63818 3.58298 5.40317 1 8.81916 1C12.2351 1 15.0001 3.58298 15.0001 6.76797C15.0001 8.65796 14.0271 10.331 12.5291 11.381Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M8.69997 10.261C8.69997 11.094 8.39197 11.8641 7.87397 12.4731C7.18098 13.313 6.08198 13.852 4.84998 13.852L3.02299 14.937C2.71499 15.126 2.32299 14.867 2.36499 14.51L2.53999 13.131C1.602 12.4801 1 11.437 1 10.261C1 9.02904 1.658 7.94406 2.666 7.30006C3.28899 6.89407 4.03799 6.66309 4.84998 6.66309C6.97797 6.66309 8.69997 8.27305 8.69997 10.261Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ blog.comment }} Comments
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    blog:{}
  }
}
</script>

