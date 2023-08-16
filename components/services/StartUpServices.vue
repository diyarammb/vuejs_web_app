<template>
  <section class="services__area p-relative z-index-1 pt-110 pb-90">
    <div class="services__shape">
      <img
        class="services__shape-10"
        src="~/assets/img/services/7/services-shape-1.png"
        alt="services__shape"
      />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-10">
          <div class="section__title-wrapper-7 mb-60 text-center">
            <span class="section__title-pre-7">Join 0ur Community</span>
            <h3 class="section__title-7">
              Amazing
              <span class="section__title-7-highlight">
                services
                <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              to build busines growth
            </h3>
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
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
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
        {
          id: 4,
          delay: "190",
          icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path opacity="0.4" d="M12.5547 1.32324H9.987C3.56772 1.32324 1 3.89096 1 10.3102V18.0134C1 24.4327 3.56772 27.0004 9.987 27.0004H17.6901C24.1094 27.0004 26.6772 24.4327 26.6772 18.0134V15.4457" stroke="#04121F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.0257 2.63208L8.90885 12.7489C8.5237 13.134 8.13854 13.8915 8.06151 14.4436L7.50945 18.308C7.30403 19.7074 8.2926 20.6831 9.69201 20.4905L13.5564 19.9385C14.0956 19.8614 14.8531 19.4763 15.2511 19.0911L25.3679 8.97433C27.114 7.22829 27.9356 5.19979 25.3679 2.63208C22.8002 0.0643622 20.7717 0.886031 19.0257 2.63208Z" stroke="#04121F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M17.5752 4.08252C18.4354 7.15094 20.8362 9.55175 23.9175 10.4248" stroke="#04121F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
          title: "Manage Expenses",
          subtitle:
            "Understand the business model of your product. Know your customers, value propositions.",
        },
        {
          id: 5,
          delay: "210",
          icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M2.97748 18.651L9.3544 25.0343C11.9727 27.6552 16.224 27.6552 18.8564 25.0343L25.0362 18.8483C27.6546 16.2274 27.6546 11.9718 25.0362 9.33681L18.6453 2.96763C17.3079 1.62898 15.4638 0.910335 13.5775 1.00897L6.53898 1.34716C3.72357 1.47398 1.48532 3.71446 1.34454 6.51859L1.0067 13.5641C0.922233 15.4664 1.64016 17.3124 2.97748 18.651Z"
                      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.5"
                      d="M10.4802 14.0016C12.4238 14.0016 13.9995 12.4244 13.9995 10.4788C13.9995 8.53325 12.4238 6.95605 10.4802 6.95605C8.53657 6.95605 6.96094 8.53325 6.96094 10.4788C6.96094 12.4244 8.53657 14.0016 10.4802 14.0016Z"
                      stroke="white" stroke-width="2" stroke-linecap="round" />
                    <path opacity="0.5" d="M15.4072 21.0471L21.0381 15.4106" stroke="white" stroke-width="2"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>`,
          title: "Powerful Blog",
          subtitle:
            "Understand the business model of your product. Know your customers, value propositions.",
        },
        {
          id: 6,
          delay: "230",
          icon: `<svg width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path opacity="0.4"
                      d="M22.4104 20.2784L22.9174 24.3863C23.0474 25.4652 21.8905 26.2192 20.9675 25.6602L15.5206 22.4233C14.9227 22.4233 14.3377 22.3844 13.7657 22.3064C14.7277 21.1754 15.2997 19.7454 15.2997 18.1984C15.2997 14.5066 12.1018 11.5167 8.14987 11.5167C6.64192 11.5167 5.25097 11.9457 4.094 12.6996C4.055 12.3747 4.04199 12.0496 4.04199 11.7117C4.04199 5.79684 9.17684 1 15.5206 1C21.8644 1 26.9993 5.79684 26.9993 11.7117C26.9993 15.2216 25.1924 18.3285 22.4104 20.2784Z"
                      stroke="#04121F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M15.2996 18.1983C15.2996 19.7453 14.7276 21.1753 13.7656 22.3063C12.4787 23.8662 10.4377 24.8671 8.14978 24.8671L4.75688 26.8821C4.1849 27.233 3.45692 26.7521 3.53492 26.0891L3.85991 23.5282C2.11796 22.3193 1 20.3823 1 18.1983C1 15.9104 2.22197 13.8955 4.09391 12.6995C5.25088 11.9456 6.64183 11.5166 8.14978 11.5166C12.1017 11.5166 15.2996 14.5064 15.2996 18.1983Z"
                      stroke="#04121F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
          title: "Expert Support",
          subtitle:
            "Understand the business model of your product. Know your customers, value propositions.",
        },
      ],
    };
  },
};
</script>
