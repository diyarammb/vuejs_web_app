<template>
  <section :class="`award__area ${el_style?'pt-110 pb-90':'pt-145 pb-160'}`">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div v-if="!el_style" class="section__title-wrapper-2 text-center mb-60">
            <span class="section__title-pre-2">My Awards</span>
            <h3 class="section__title-2">My Awards</h3>
            <p>At vero eos censes aut reiciendis voluptatibus maiores.</p>
          </div>
          <div v-if="el_style" class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">
              Minimal &amp; Clean Design
            </span>
            <h3 class="tp-section-title-3">Bordered Icon Box 2</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item,i) in award_data" :key="i" class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
          <div
            class="award__item white-bg p-relative mb-30 transition-3"
            data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
          >
            <div class="award__icon">
              <span v-html="item.icon"></span>
            </div>
            <div class="award__content">
              <h3 class="award__title">
                <nuxt-link href="/portfolio-details-list">
                  {{item.title}}
                </nuxt-link>
              </h3>
              <p>{{item.subtitle}}</p>

              <div class="award__btn">
                <nuxt-link
                  href="/portfolio-details-list"
                  class="tp-btn-border-green"
                  >
                  View Project
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
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      award_data: [
        {
          delay: "130",
          icon:`<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14.1431 19.8501V22.5801" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.64307 27.0001H20.6431V25.7001C20.6431 24.2701 19.4731 23.1001 18.0431 23.1001H10.2431C8.81307 23.1001 7.64307 24.2701 7.64307 25.7001V27.0001V27.0001Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
                  <path d="M6.34277 27H21.9428" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.9481 19.2C8.91714 19.2 4.84814 15.131 4.84814 10.1V6.2C4.84814 3.327 7.17514 1 10.0481 1H17.8481C20.7211 1 23.0481 3.327 23.0481 6.2V10.1C23.0481 15.131 18.9791 19.2 13.9481 19.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.459 13.5447C4.484 13.2327 3.626 12.6607 2.95 11.9847C1.78 10.6847 1 9.12469 1 7.30469C1 5.48469 2.43 4.05469 4.25 4.05469H5.095C4.835 4.65269 4.705 5.31569 4.705 6.00469V9.90469C4.705 11.2047 4.978 12.4267 5.459 13.5447Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.437 13.5447C23.412 13.2327 24.27 12.6607 24.946 11.9847C26.116 10.6847 26.896 9.12469 26.896 7.30469C26.896 5.48469 25.466 4.05469 23.646 4.05469H22.801C23.061 4.65269 23.191 5.31569 23.191 6.00469V9.90469C23.191 11.2047 22.918 12.4267 22.437 13.5447Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>`,
          title: "Dribbble design of the week",
          subtitle: "Cartier / 2022",
        },
        {
          delay: "150",
          icon:`<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M11.005 19.2104H4C2.35 19.2104 1 20.5368 1 22.1579V31.0004H11.005V19.2104Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.9947 13.3154H13.9897C12.3397 13.3154 10.9897 14.6418 10.9897 16.2629V31.0004H20.9947V16.2629C20.9947 14.6418 19.6597 13.3154 17.9947 13.3154Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.0001 23.6313H20.9951V31.0001H31.0001V26.5788C31.0001 24.9577 29.6501 23.6313 28.0001 23.6313Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.7799 1.62821L17.5748 3.19038C17.6798 3.41144 17.9649 3.61776 18.2049 3.64724L19.6448 3.88304C20.5598 4.03042 20.7848 4.69358 20.1248 5.32729L18.9998 6.4326C18.8048 6.62419 18.6998 6.9779 18.7598 7.22844L19.0748 8.5843C19.3298 9.66014 18.7448 10.0728 17.7848 9.51277L16.4349 8.73169C16.1949 8.58431 15.7899 8.58431 15.5499 8.73169L14.1999 9.51277C13.2399 10.0728 12.6549 9.66014 12.9099 8.5843L13.2249 7.22844C13.2849 6.9779 13.1799 6.60945 12.9849 6.4326L11.8749 5.34204C11.2149 4.69359 11.4249 4.04513 12.3549 3.89775L13.7949 3.66199C14.0349 3.61778 14.3199 3.41146 14.4249 3.20513L15.2199 1.64292C15.6549 0.788145 16.3449 0.788176 16.7799 1.62821Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`,
          title: "Awwwards site of the day",
          subtitle: "Cartier / 2022",
        },
        {
          delay: "170",
          icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M20.2011 23.0768H7.99034C7.44475 23.0768 6.83421 22.6481 6.65235 22.1285L1.27442 7.08589C0.508002 4.92953 1.40432 4.26703 3.24893 5.59202L8.31509 9.21628C9.15945 9.80084 10.1207 9.50207 10.4845 8.55378L12.7707 2.46139C13.4982 0.512869 14.7063 0.512869 15.4337 2.46139L17.72 8.55378C18.0837 9.50207 19.045 9.80084 19.8763 9.21628L24.6307 5.82585C26.6572 4.37095 27.6315 5.11139 26.8001 7.46261L21.5521 22.1545C21.3572 22.6481 20.7467 23.0768 20.2011 23.0768Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.95117 27H21.2404" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.8481 16.6079H17.3432" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> `,
          title: "Envato market of the week",
          subtitle: "Cartier / 2022",
        },
        {
          delay: "190",
          icon: `<svg width="27" height="30" viewBox="0 0 27 30" fill="none">
                    <path d="M15 1L1 17.8H13.6L12.2 29L26.2 12.2H13.6L15 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> `,
          title: "Dribbble design of the day",
          subtitle: "Cartier / 2022",
        },
      ],
    };
  },
};
</script>
