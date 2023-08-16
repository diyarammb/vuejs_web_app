<template>
  <section class="fact__area fact__translate">
    <div class="container">
      <div class="row gx-2 gy-2 gy-lg-0">
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000">
            <div class="fact__icon">
              <p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.65196 0.000139197C6.21895 0.0173827 6.76794 0.116382 7.29984 0.29728H7.35294C7.38894 0.31438 7.41594 0.333279 7.43394 0.350379C7.63283 0.414279 7.82093 0.486278 8.00093 0.585277L8.34293 0.738275C8.47793 0.810274 8.63993 0.944373 8.72992 0.999272C8.81992 1.05237 8.91892 1.10727 8.99992 1.16937C9.99981 0.405279 11.2139 -0.00871701 12.4649 0.000139197C13.0328 0.000139197 13.5998 0.0803821 14.1389 0.26128C17.4607 1.34127 18.6577 4.98623 17.6578 8.1722C17.0908 9.80028 16.1638 11.2862 14.9498 12.5003C13.2119 14.1832 11.3048 15.6772 9.25192 16.9642L9.02692 17.1001L8.79292 16.9552C6.73284 15.6772 4.81496 14.1832 3.06088 12.4913C1.8549 11.2772 0.927005 9.80028 0.351011 8.1722C-0.665978 4.98623 0.53101 1.34127 3.88887 0.24238C4.14987 0.152381 4.41897 0.089382 4.68897 0.0542823H4.79696C5.04986 0.0173827 5.30096 0.000139197 5.55296 0.000139197H5.65196ZM13.6709 2.84425C13.3019 2.71735 12.8969 2.91625 12.7619 3.29425C12.6359 3.67224 12.8339 4.08624 13.2119 4.22034C13.7888 4.43634 14.1749 5.00423 14.1749 5.63332V5.66122C14.1578 5.86732 14.2199 6.06622 14.3459 6.21922C14.4719 6.37222 14.6609 6.46131 14.8589 6.48021C15.2279 6.47031 15.5429 6.17422 15.5699 5.79532V5.68822C15.5969 4.42734 14.8328 3.28525 13.6709 2.84425Z"
                    fill="#AB6C56" />
                </svg>
                <span>7628</span>
              </p>
            </div>
            <div class="fact__content">
              <h4>Trusted Clients</h4>
              <p>Number Of Clients</p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__item white-bg d-flex align-items-center" data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000">
            <div class="fact__icon">
              <p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 0L11.781 5.634L18 6.543L13.5 10.926L14.562 17.118L9 14.193L3.438 17.118L4.5 10.926L0 6.543L6.219 5.634L9 0Z"
                    fill="#AB6C56" />
                </svg>
                <span>95%</span>
              </p>
            </div>
            <div class="fact__content">
              <h4>Successful Cases</h4>
              <p>Largest Winning Value</p> 
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4 col-md-6">
          <div class="fact__banner fact__banner-overlay p-relative z-index-1" data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000">
            <div class="fact__banner-bg include-bg" :style="{ backgroundImage: `url(${fact_bg})` }"></div>
            <div class="fact__banner-content">
              <h5>17,642+</h5>
              <p>Criminal Cases and <br> Defense</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fact_bg from '~/assets/img/counter/fact/fact-banner-bg.jpg';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data(){
    return {
      fact_bg
    }
  }
}
</script>

