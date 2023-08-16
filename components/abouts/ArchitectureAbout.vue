<template>
  <section id="tpabout" class="about__area black-bg-12 pt-140">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-lg-6">
          <div class="about__thumb-wrapper-8 pr-100 pb-100 p-relative">
            <div class="about__thumb-8 w-img" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
              <img src="~/assets/img/about/8/about-img-1.jpg" alt="">
            </div>
            <div class="about__thumb-8-right" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000">
              <div class="about__thumb-bg include-bg" :style="{ backgroundImage: `url(${bg})` }">
                25
              </div>
              <div class="about__thumb-8-right-content">
                <p>Years <br>Experience</p>
              </div>
              <div class="about__thumb-8-right-year">
                <p>Start in <br>1982</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-lg-6">
          <div class="about__wrapper-8 pt-30 pl-70" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
            <div class="section__title-wrapper-8 mb-15">
              <span class="section__title-pre-8">Harry Stido.</span>
              <h3 class="section__title-8">Influential <br> and
                <span class="section__title-highlight-8">Impactful.
                  <svg width="206" height="24" viewBox="0 0 206 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="wow" d="M3 20.7505C47.375 13.8755 135.812 -15.4995 203 20.7505" stroke="#FF5A1B"
                      stroke-width="6" stroke-linecap="round" />
                  </svg>
                </span>
              </h3>
            </div>
            <p class="about-wrapper-8-paragraph">I would like to express my thanks for the work you done for me
              over the past years!</p>
            <p>Through a unique combination of engineering, construction and design disciplines and expertise,
              Concor delivers world class infrastructure solutions.</p>

            <div class="about__call-8 d-flex align-items-center mb-50">
              <div class="about__call-icon-8 mr-20">
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.973 15.697C18.973 16.021 18.901 16.354 18.748 16.678C18.595 17.002 18.397 17.308 18.136 17.596C17.695 18.082 17.209 18.433 16.66 18.658C16.12 18.883 15.535 19 14.905 19C13.987 19 13.006 18.784 11.971 18.343C10.936 17.902 9.901 17.308 8.875 16.561C7.84 15.805 6.859 14.968 5.923 14.041C4.996 13.105 4.159 12.124 3.412 11.098C2.674 10.072 2.08 9.046 1.648 8.029C1.216 7.003 1 6.022 1 5.086C1 4.474 1.108 3.889 1.324 3.349C1.54 2.8 1.882 2.296 2.359 1.846C2.935 1.279 3.565 1 4.231 1C4.483 1 4.735 1.054 4.96 1.162C5.194 1.27 5.401 1.432 5.563 1.666L7.651 4.609C7.813 4.834 7.93 5.041 8.011 5.239C8.092 5.428 8.137 5.617 8.137 5.788C8.137 6.004 8.074 6.22 7.948 6.427C7.831 6.634 7.66 6.85 7.444 7.066L6.76 7.777C6.661 7.876 6.616 7.993 6.616 8.137C6.616 8.209 6.625 8.272 6.643 8.344C6.67 8.416 6.697 8.47 6.715 8.524C6.877 8.821 7.156 9.208 7.552 9.676C7.957 10.144 8.389 10.621 8.857 11.098C9.343 11.575 9.811 12.016 10.288 12.421C10.756 12.817 11.143 13.087 11.449 13.249C11.494 13.267 11.548 13.294 11.611 13.321C11.683 13.348 11.755 13.357 11.836 13.357C11.989 13.357 12.106 13.303 12.205 13.204L12.889 12.529C13.114 12.304 13.33 12.133 13.537 12.025C13.744 11.899 13.951 11.836 14.176 11.836C14.347 11.836 14.527 11.872 14.725 11.953C14.923 12.034 15.13 12.151 15.355 12.304L18.334 14.419C18.568 14.581 18.73 14.77 18.829 14.995C18.919 15.22 18.973 15.445 18.973 15.697Z"
                      stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
                    <path opacity="0.4"
                      d="M15.8492 7.30039C15.8492 6.76039 15.4262 5.93239 14.7962 5.25739C14.2202 4.63639 13.4552 4.15039 12.6992 4.15039"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.4" d="M18.9992 7.3C18.9992 3.817 16.1822 1 12.6992 1" stroke="currentColor"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </div>
              <div class="about__call-content-8">
                <h4>Hotline 24/7</h4>
                <p><a href="tel:964-742-44-763">+964 742 44 763</a></p>
              </div>
            </div>
            <div class="about__btn-8 d-block d-sm-flex align-items-center">
              <nuxt-link href="/about" class="tp-btn-border-8 mb-20 mr-30">More About Us</nuxt-link>
              <a @click.prevent="handleVideoPopup" href="#" class="about-play-btn-2 mb-20 popup-video">
                <span>
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7.56533L0.146194 14.9831L0.146194 0.147537L13 7.56533Z" fill="currentColor" />
                  </svg>
                </span>
                View our <br>Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- video modal start -->
    <video-modal
    ref="video_modal"
    video-url="https://www.youtube.com/embed/K0D4uPmKkqY"
  />
  <!-- video modal end -->
</template>

<script>
// internal
import bg from "~/assets/img/about/8/about-img-2.jpg";
import VideoModal from '../common/modals/VideoModal.vue';
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  components: { VideoModal },
  data () {
    return {
      bg,
    }
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
}
</script>
