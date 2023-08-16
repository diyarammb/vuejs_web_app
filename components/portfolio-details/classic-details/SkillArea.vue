<template>
  <section class="skill__area pt-100 pb-75">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="skill__wrapper-14 mb-40">
            <h3 class="skill-section-title">
              Manage your <br />
              Project smart and easy
            </h3>
            <p>
              Perfectly designed elements and endless customization options.
            </p>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="skill__bar">
            <div class="skill__bar-item">
              <h4 class="skill__bar-title">
                <span>
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4.75V12.25C13 15.25 12.25 16 9.25 16H4.75C1.75 16 1 15.25 1 12.25V4.75C1 1.75 1.75 1 4.75 1H9.25C12.25 1 13 1.75 13 4.75Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 4.48218H5.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.99844 12.9678C7.64047 12.9678 8.16094 12.4474 8.16094 11.8053C8.16094 11.1633 7.64047 10.6428 6.99844 10.6428C6.35641 10.6428 5.83594 11.1633 5.83594 11.8053C5.83594 12.4474 6.35641 12.9678 6.99844 12.9678Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Mobile App Design
              </h4>
              <div class="skill__bar-progress">
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-sal="slide-right" data-sal-delay="0" data-sal-duration="800"
                    role="progressbar"
                    style="width: 65%;"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>65</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="skill__bar-item is-blue">
              <h4 class="skill__bar-title">
                <span>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.108 1H11.885C14.377 1 15 1.712 15 4.552V9.616C15 12.464 14.377 13.168 11.892 13.168H4.108C1.623 13.176 1 12.464 1 9.624V4.552C1 1.712 1.623 1 4.108 1Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 13.1759V16.9999"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 9.79993H15"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.84961 17H11.1496"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Website Design
              </h4>
              <div class="skill__bar-progress">
                <div class="progress">
                  <div
                    class="progress-bar"
                    data-sal="slide-right" data-sal-delay="0" data-sal-duration="800"
                    role="progressbar"
                    style="width: 90%;"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>90</span>
                  </div>
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

};
</script>
