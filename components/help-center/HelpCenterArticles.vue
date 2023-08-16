<template>
  <section class="articles__area pt-100 pb-100">
    <div class="container">
      <div class="row grid">
        <div class="col-xl-4 col-lg-4">
          <div class="articles__item purple-bg p-relative z-index-1 mb-30 fix" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
            <div class="articles__thumb">
              <img src="~/assets/img/articles/article-img-1.png" alt="">
            </div>
            <div class="articles__content">
              <div class="articles__top d-flex align-items-center">
                <h3 class="articles__title">Themes</h3>
                <span class="articles__number">12 Articles</span>
              </div>
              <p>Everything about themes: built-in features, technical guides, and formatting options.</p>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="articles__item articles__item-sm purple-bg p-relative z-index-1 mb-30"
                data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
                <div class="articles__thumb">
                  <img class="has-opacity-6" src="~/assets/img/articles/article-img-2.png" alt="">
                </div>

                <div class="articles__content">
                  <div class="articles__top d-flex align-items-center">
                    <h3 class="articles__title">Services</h3>
                    <span class="articles__number">8 Articles</span>
                  </div>
                  <p>Frequently asked questions about all our services for Harry help center.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="articles__item articles__item-sm purple-bg p-relative z-index-1 mb-30" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000">
                <div class="articles__thumb">
                  <img class="has-opacity-6" src="~/assets/img/articles/article-img-3.png" alt="">
                </div>

                <div class="articles__content">
                  <div class="articles__top d-flex align-items-center">
                    <h3 class="articles__title">Extensions</h3>
                    <span class="articles__number">6 Articles</span>
                  </div>
                  <p>Everything about themes: built-in features, technical guides, and formatting options.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="articles__item articles__style-2 khaki-bg-2 p-relative z-index-1 mb-30"
                 data-sal="slide-up" data-sal-delay="190" data-sal-duration="1000">
                <div class="articles__icon">
                  <span>
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M5.82031 35.6994L35.6953 5.82007" stroke="currentColor" stroke-width="2"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path opacity="0.5" d="M23.7578 41.6992L26.7578 38.6992" stroke="currentColor" stroke-width="2"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path opacity="0.5" d="M30.4922 34.9723L36.4672 28.9973" stroke="currentColor" stroke-width="2"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M5.00317 21.5969L21.6032 4.99442C26.9032 -0.306352 29.5532 -0.331356 34.8032 4.91941L47.0782 17.1962C52.3282 22.447 52.3032 25.0974 47.0032 30.3981L30.4032 47.0006C25.1032 52.3014 22.4532 52.3264 17.2032 47.0756L4.92817 34.7988C-0.321825 29.548 -0.321825 26.9226 5.00317 21.5969Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1 51H51" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <div class="articles__content">
                  <div class="articles__top d-flex align-items-center">
                    <h3 class="articles__title">Extensions</h3>
                    <span class="articles__number">6 Articles</span>
                  </div>
                  <p>Everything about themes: built-in features, technical guides, and formatting options.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
}
</script>
