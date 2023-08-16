<template>
  <section id="tpabout" class="about__area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="about__thumb-wrapper ml-70 pr-100">
            <div
              class="about__thumb w-img"
              data-sal="slide-right"
              data-sal-delay="130"
              data-sal-duration="1000"
            >
              <div class="tp-thumb-overlay wow"></div>
              <img src="~/assets/img/about/about-img-1.jpg" alt="" />
            </div>
            <div class="about__thumb-text">
              <h3 data-text="Expert">Expert</h3>
            </div>
            <div class="about__experience">
              <h4><span class="counter">12</span></h4>
              <p>
                Years <br />
                Experience
              </p>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div
            class="about__wrapper pr-95"
            data-sal="slide-up"
            data-sal-delay="170"
            data-sal-duration="1000"
          >
            <div class="section__title-wrapper mb-25">
              <span class="section__title-pre">Expert Guidance</span>
              <h3 class="section__title">
                What they think
                <span class="section__title-highlight">
                  about us
                  <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                    <path
                      d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </h3>
            </div>

            <p>
              The city and town name generator uses a database of over five
              million names across more than 150 countries. If you are looking
              for a random city or town name to spark a location for a book,
              game, or a script, millions of possibilities are at your finger
              tips. How you use the city or town name is up to you.
            </p>

            <div class="about__author d-sm-flex align-items-center mb-40">
              <div class="about__author-inner d-flex align-items-center">
                <div class="about__author-thumb mr-10">
                  <img src="~/assets/img/about/about-author-thumb.jpg" alt="" />
                </div>
                <div class="about__author-content d-sm-flex align-items-center">
                  <h3 class="about__author-title">
                    Hi, I'm <span>Robert Fox.</span>
                  </h3>
                </div>
              </div>
              <div class="about__author-btn">
                <span class="about-author-link">let’s talk about ideas</span>
              </div>
            </div>
            <div class="about__btn">
              <nuxt-link href="/about" class="tp-btn">Discover Now</nuxt-link>
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
