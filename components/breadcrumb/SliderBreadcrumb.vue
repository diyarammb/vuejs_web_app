<template>
  <section class="blog__breadcrumb">
    <div class="blog__breadcrumb-slider p-relative">

      <swiper class="blog__breadcrumb-slider-active swiper-container" 
      :loop="true" 
      :slidesPerView="1" 
      :effect="'fade'"
      :modules="modules" 
      :spaceBetween="0" 
      :pagination="{
            el: '.blog-slider-dot-breadcrumb',
            clickable: true,
          }"
        >

        <swiper-slide v-for="(item) in slider_data" :key="item.id">
          <div
            class="blog__breadcrumb-item blog__breadcrumb-height blog__breadcrumb-overlay include-bg d-flex align-items-end"
            :style="{ backgroundImage: `url(${item.bg})` }">
            <div class="container">
              <div class="col-xxl-8 col-xl-8 col-lg-10">
                <div class="blog__breadcrumb-thumb"></div>
                <div class="blog__breadcrumb-content">
                  <div class="blog__breadcrumb-tag">
                    <a href="#">{{item.tag}}</a>
                  </div>
                  <h3 class="blog__breadcrumb-title">
                    <nuxt-link href="/blog-details">{{item.title}}</nuxt-link>
                  </h3>

                  <div class="blog__breadcrumb-meta">
                    <span>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg> {{item.date}}
                    </span>
                    <span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>{{item.comment}}
                    </span>
                    <span>
                      <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>{{item.watch}}
                    </span>
                  </div>
                  <div class="blog__breadcrumb-btn">
                    <nuxt-link href="/blog-details" class="tp-btn-border-2">Continue Reading</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="blog-slider-dot-breadcrumb tp-swiper-dot"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Pagination } from 'swiper';
// internal
import bg_1 from '~/assets/img/blog/breadcrumb/blog-breadcrumb-slider-1.jpg';
import bg_2 from '~/assets/img/blog/breadcrumb/blog-breadcrumb-slider-2.jpg';
import bg_3 from '~/assets/img/blog/breadcrumb/blog-breadcrumb-slider-3.jpg';
import bg_4 from '~/assets/img/blog/breadcrumb/blog-breadcrumb-slider-4.jpg';

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      slider_data: [
        {
          id: 1,
          bg: bg_1,
          tag: 'Business',
          title: 'Investment Trend Monitor: Top Trends in 2023',
          date: 'October 24, 2022',
          comment: '35',
          watch: '234,5k'
        },
        {
          id: 2,
          bg: bg_2,
          tag: 'Creative',
          title: 'Things Your Boss Needs To Know Agency Industry.',
          date: 'October 26, 2022',
          comment: '40',
          watch: '180,2k'
        },
        {
          id: 3,
          bg: bg_3,
          tag: 'Agency',
          title: 'The Reasons Why We Love The Agency Industry.',
          date: 'November 15, 2022',
          comment: '25',
          watch: '150,3k'
        },
        {
          id: 4,
          bg: bg_4,
          tag: 'Latest',
          title: 'Here What Industry Insiders Say About Agency.',
          date: 'December 10, 2022',
          comment: '22',
          watch: '118,6k'
        },
      ]
    }
  },
  setup() {
    return {
      modules: [EffectFade, Pagination]
    }
  }
}
</script>
