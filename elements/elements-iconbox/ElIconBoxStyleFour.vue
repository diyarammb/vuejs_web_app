<template>
  <section class="services__area p-relative z-index-1 pt-110 pb-60">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Icon Box Style 4</h3>
          </div>
        </div>
      </div>
      <div class="services__item-wrapper-7">
        <div class="row">
          <div
            v-for="item in service_data"
            :key="item.id"
            class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
          >
            <div
              class="services__item-7 text-center mb-60"
              data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
            >
              <div class="services__icon-7">
                <span v-html="item.icon"> </span>
              </div>
              <div class="services__content-7">
                <h3 class="services__title-7">
                  <nuxt-link href="/service-details">{{ item.title }}</nuxt-link>
                </h3>
                <p>{{ item.subtitle }}</p>

                <div class="services__btn-7">
                  <nuxt-link href="/service-details" class="tp-link-btn-3">
                    Learn More
                    <span>
                      <i class="fa-regular fa-arrow-right"></i>
                    </span>
                  </nuxt-link>
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
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  data() {
    return {
      service_data: [
        {
          id: 1,
          delay: "130",
          icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M20.1296 23.0769H7.96432C7.42077 23.0769 6.8125 22.6483 6.63132 22.1287L1.2734 7.08594C0.509833 4.92955 1.40282 4.26705 3.24056 5.59206L8.28787 9.21634C9.12909 9.8009 10.0868 9.50212 10.4492 8.55384L12.7269 2.4614C13.4517 0.512865 14.6552 0.512865 15.38 2.4614L17.6578 8.55384C18.0201 9.50212 18.9778 9.8009 19.8061 9.21634L24.5428 5.82588C26.5617 4.37097 27.5324 5.11142 26.7041 7.46265L21.4756 22.1546C21.2815 22.6483 20.6732 23.0769 20.1296 23.0769Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.5" d="M6.92871 26.9995H21.1647" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.5" d="M10.8105 16.6074H17.2815" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
          title: "Beautiful Pages",
          subtitle:
            "Understand the business model of your product. Know your customers, value propositions.",
        },
        {
          id: 2,
          delay: "150",
          icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path opacity="0.4" d="M23.1002 8.8C25.2541 8.8 27.0002 7.05391 27.0002 4.9C27.0002 2.74609 25.2541 1 23.1002 1C20.9463 1 19.2002 2.74609 19.2002 4.9C19.2002 7.05391 20.9463 8.8 23.1002 8.8Z" stroke="#04121F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M7.5 15.3003H14" stroke="#04121F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M7.5 20.5H19.2" stroke="#04121F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.6 1H10.1C3.6 1 1 3.6 1 10.1V17.9C1 24.4 3.6 27 10.1 27H17.9C24.4 27 27 24.4 27 17.9V11.4" stroke="#04121F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
          title: "Easy Invoicing",
          subtitle:
            "Understand the business model of your product. Know your customers, value propositions.",
        },
        {
          id: 3,
          delay: "170",
          icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M11.4 4.25V21.8C11.4 23.204 10.828 24.491 9.91798 25.427L9.86601 25.479C9.74901 25.596 9.61901 25.713 9.50201 25.804C9.11201 26.142 8.66998 26.402 8.21498 26.584C8.07198 26.649 7.929 26.701 7.786 26.753C7.279 26.922 6.733 27 6.2 27C5.849 27 5.49802 26.961 5.16002 26.896C4.99102 26.857 4.822 26.818 4.653 26.766C4.445 26.701 4.25001 26.636 4.05501 26.545C4.05501 26.532 4.055 26.532 4.042 26.545C3.678 26.363 3.32701 26.155 3.00201 25.908L2.989 25.895C2.82 25.765 2.66402 25.635 2.52102 25.479C2.37802 25.323 2.235 25.167 2.092 24.998C1.845 24.673 1.63701 24.322 1.45501 23.958C1.46801 23.945 1.46801 23.945 1.45501 23.945C1.45501 23.945 1.455 23.932 1.442 23.919C1.364 23.737 1.29899 23.542 1.23399 23.347C1.18199 23.178 1.14298 23.009 1.10398 22.84C1.03898 22.502 1 22.151 1 21.8V4.25C1 2.3 2.3 1 4.25 1H8.15C10.1 1 11.4 2.3 11.4 4.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.5" d="M27.0002 19.8501V23.7501C27.0002 25.7001 25.7002 27.0001 23.7502 27.0001H6.2002C6.7332 27.0001 7.2792 26.9221 7.7862 26.7531C7.9292 26.7011 8.07218 26.6491 8.21518 26.5841C8.67018 26.4021 9.11221 26.1421 9.50221 25.8041C9.61921 25.7131 9.74921 25.5961 9.86621 25.4791L9.91818 25.4271L18.7582 16.6001H23.7502C25.7002 16.6001 27.0002 17.9001 27.0002 19.8501Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.65338 26.7662C3.87338 26.5322 3.1324 26.1032 2.5214 25.4792C1.8974 24.8682 1.46838 24.1272 1.23438 23.3472C1.74137 24.9722 3.02838 26.2592 4.65338 26.7662Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.281 13.077L18.758 16.6L9.91797 25.427C10.828 24.491 11.4 23.204 11.4 21.8V9.24204L14.923 5.71905C16.301 4.34105 18.147 4.34105 19.525 5.71905L22.281 8.47504C23.659 9.85304 23.659 11.699 22.281 13.077Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M6.19941 23.1C6.91738 23.1 7.49941 22.518 7.49941 21.8C7.49941 21.082 6.91738 20.5 6.19941 20.5C5.48144 20.5 4.89941 21.082 4.89941 21.8C4.89941 22.518 5.48144 23.1 6.19941 23.1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
          title: "CMS & Style Guide",
          subtitle:
            "Understand the business model of your product. Know your customers, value propositions.",
        },
      ],
    };
  },
};
</script>
