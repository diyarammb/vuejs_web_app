<template>
  <div class="tp-button-wrapper pb-110">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-3 mb-50 text-center">
            <span class="tp-section-subtitle-3">Minimal Button Styles</span>
            <h3 class="tp-section-title-3">Link Button Style</h3>
          </div>
        </div>
      </div>
      <div class="row row-cols-auto align-items-center justify-content-center">
        <div class="col">
          <div class="tp-button-demo">
            <nuxt-link href="/services" class="tp-link-btn-2 mr-15">
              My button text
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 1L13 7L7 13"
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
        <div class="col">
          <div class="tp-button-demo">
            <nuxt-link
              href="/service-details"
              class="tp-link-btn-circle justify-content-center mr-15"
            >
              See More
              <span>
                <i class="fa-regular fa-arrow-right"></i>
                <i class="fa-regular fa-arrow-right"></i>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
