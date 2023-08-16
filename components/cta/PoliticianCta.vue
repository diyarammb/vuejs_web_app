<template>
  <section class="cta__area cta__translate pb-140">
    <div class="container">
      <div class="cta__inner-10 include-bg" :style="{ backgroundImage: `url(${bg})` }">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6">
            <div class="cta__form-10">
              <h3 class="cta-form-title">Join our Movement!</h3>
              <p>Our promise to make america great again!</p>
              <form>
                <div class="cta__input-wrapper-10 d-sm-flex align-items-center">
                  <div class="cta__input-10">
                    <input type="email" placeholder="E-mail*">
                  </div>
                  <div class="cta__input-10 sm-input">
                    <input type="text" placeholder="Zip code*">
                  </div>
                </div>
                <div class="cta__btn-10">
                  <button type="submit" class="tp-btn-8">Request</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6">
            <div class="cta__features-wrapper d-sm-flex">
              <div class="cta__features-item p-relative">
                <div class="cta__features-overlay">
                  <img src="~/assets/img/cta/10/cta-features-bg.jpg" alt="">
                </div>
                <div class="cta__features-video">
                  <a @click.prevent="handleVideoPopup" href="#" class="popup-video">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 9.00223V5.31839C0 0.564251 3.36026 -1.35234 7.46724 1.01228L10.6533 2.8542L13.8393 4.69612C17.9463 7.06075 17.9463 10.9437 13.8393 13.3083L10.6533 15.1503L7.46724 16.9922C3.36026 19.3568 0 17.4153 0 12.6861V9.00223Z"
                        fill="currentColor" />
                    </svg>
                  </a>
                  <span>Watch Video</span>
                </div>
                <div class="cta__features-content">
                  <h3 class="cta__features-title">Special Message</h3>
                  <p>Democracy arises out of the notion that those.</p>
                </div>
              </div>
              <div class="cta__counter">
                <div class="cta__counter-icon">
                  <span>
                    <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.4531 44.5001V50.8001" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M16.3906 61H46.5109V58C46.5109 54.7 43.8001 52 40.4868 52H22.4147C19.1014 52 16.3906 54.7 16.3906 58V61V61Z"
                        stroke="currentColor" stroke-width="2" stroke-miterlimit="10" />
                      <path d="M13.3828 61H49.5271" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M31.0002 43C19.3437 43 9.91602 33.61 9.91602 22V13C9.91602 6.37 15.3075 1 21.9641 1H40.0363C46.6928 1 52.0844 6.37 52.0844 13V22C52.0844 33.61 42.6567 43 31.0002 43Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M11.3312 29.9499C9.07223 29.2299 7.08429 27.9099 5.51804 26.3499C2.80722 23.3499 1 19.7499 1 15.5499C1 11.3499 4.31323 8.04987 8.53006 8.04987H10.4879C9.88547 9.42987 9.58427 10.9599 9.58427 12.5499V21.5499C9.58427 24.5499 10.2168 27.3699 11.3312 29.9499Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M50.6699 29.9499C52.9289 29.2299 54.9169 27.9099 56.4831 26.3499C59.1939 23.3499 61.0012 19.7499 61.0012 15.5499C61.0012 11.3499 57.6879 8.04987 53.4711 8.04987H51.5133C52.1157 9.42987 52.4169 10.9599 52.4169 12.5499V21.5499C52.4169 24.5499 51.7844 27.3699 50.6699 29.9499Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <div class="cta__counter-content">
                  <h4>+<span>223</span>K</h4>
                  <p>2021 Win Vote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- video modal start -->
  <video-modal ref="video_modal" video-url="https://www.youtube.com/embed/NmPm9bS7bak" />
  <!-- video modal end -->
</template>

<script>
import bg from "~/assets/img/cta/10/cta-shape.png";
import VideoModal from '../common/modals/VideoModal.vue';

export default {
  components: { VideoModal },
  data() {
    return {
      bg,
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
