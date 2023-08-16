<template>
  <section
    class="counter__area p-relative z-index-1 green-light-bg-4 pt-145 pb-110 fix"
  >
    <div class="counter__border-animation"></div>
    <div v-if="!el_style" class="counter__shape">
      <img
        class="counter__shape-13"
        src="~/assets/img/counter/7/counter-shape-1.png"
        alt="counter__shape"
      />
      <img
        class="counter__shape-14"
        src="~/assets/img/counter/7/counter-shape-2.png"
        alt="counter__shape"
      />
      <img
        class="counter__shape-15"
        src="~/assets/img/counter/7/counter-shape-3.png"
        alt="counter__shape"
      />
    </div>
    <div class="container">
      <div v-if="!el_style" class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-9">
          <div class="section__title-wrapper-7 mb-60 text-center">
            <span class="section__title-pre-7">Join 0ur Community</span>
            <h3 class="section__title-7">
              Qu'est-ce qui est inclus dans
              <span class="section__title-7-highlight">
                Startup Harry
                <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              ?
            </h3>
          </div>
        </div>
      </div>
      <div v-if="el_style" class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">
              Minimal &amp; Clean Design
            </span>
            <h3 class="tp-section-title-3">Icon Box with counter</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item,i) in counter_data" :key="i" class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="counter__item-7 white-bg mb-30 text-center">
            <div class="counter__icon-7">
              <span>
                <img
                  class="counter__icon-7-shape"
                  src="~/assets/img/counter/7/counter-icon-shape-1.png"
                  alt="counter__icon"
                />
                <span v-html="item.icon"></span>
              </span>
            </div>
            <div class="counter__content-7">
              <h4><span class="counter">{{item.num}}</span>{{item.text}}</h4>
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      counter_data: [
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M31.4834 57.9998H7.90788C4.65995 57.9998 2 55.3959 2 52.2039V10.6528C2 3.31695 7.45989 -0.0149813 14.1518 3.26095L26.5835 9.36483C29.2714 10.6808 31.4834 14.1807 31.4834 17.1487V57.9998Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M57.9989 38.5684V49.1522C57.9989 55.2001 55.1989 58 49.151 58H31.4834V25.5767L32.7994 25.8567L45.3991 28.6846L51.083 29.9446C54.7789 30.7566 57.8029 32.6605 57.9709 38.0364C57.9989 38.2044 57.9989 38.3724 57.9989 38.5684Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4" d="M11.8838 21.6003H21.5996" stroke="#2CAE76" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4" d="M11.8838 32.8H21.5996" stroke="#2CAE76" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M45.3995 28.6841V37.7C45.3995 41.1719 42.5716 43.9998 39.0997 43.9998C35.6277 43.9998 32.7998 41.1719 32.7998 37.7V25.8562L45.3995 28.6841Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M57.9712 38.0361C57.8032 41.3401 55.0592 44 51.6993 44C48.2274 44 45.3994 41.1721 45.3994 37.7001V28.6843L51.0833 29.9443C54.7792 30.7563 57.8032 32.6602 57.9712 38.0361Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>`,
          num: 98,
          text: "%",
          title: "Private Office",
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4"
                    d="M32.6488 2.65255L50.9203 12.504C53.0534 13.6547 53.0534 16.9385 50.9203 18.0893L32.6488 27.9407C31.021 28.8108 29.1124 28.8108 27.4846 27.9407L9.21309 18.0893C7.08001 16.9385 7.08001 13.6547 9.21309 12.504L27.4846 2.65255C29.1124 1.78248 31.021 1.78248 32.6488 2.65255Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M6.51875 24.7414L23.4991 33.2456C25.6042 34.3121 26.9514 36.4733 26.9514 38.8309V54.8851C26.9514 57.2146 24.5095 58.7022 22.4326 57.6637L5.45221 49.1594C3.34721 48.0929 2 45.9318 2 43.5742V27.52C2 25.1904 4.44181 23.7029 6.51875 24.7414Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M53.6142 24.7414L36.6339 33.2456C34.5288 34.3121 33.1816 36.4733 33.1816 38.8309V54.8851C33.1816 57.2146 35.6235 58.7022 37.7004 57.6637L54.6808 49.1594C56.7858 48.0929 58.133 45.9318 58.133 43.5742V27.52C58.133 25.1904 55.6912 23.7029 53.6142 24.7414Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`,
          num: 10,
          text: "M+",
          title: "Coworking Desks",
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.7886 16.4463C46.6206 16.4183 46.4246 16.4183 46.2567 16.4463C42.3931 16.3063 39.3135 13.1427 39.3135 9.22315C39.3135 5.21963 42.5331 2 46.5366 2C50.5401 2 53.7598 5.24762 53.7598 9.22315C53.7318 13.1427 50.6521 16.3063 46.7886 16.4463Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M43.9033 36.8276C47.7389 37.4716 51.9664 36.7996 54.934 34.8119C58.8816 32.1802 58.8816 27.8687 54.934 25.237C51.9384 23.2493 47.6549 22.5773 43.8193 23.2492"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M13.1079 16.4463C13.2759 16.4183 13.4719 16.4183 13.6398 16.4463C17.5034 16.3063 20.583 13.1427 20.583 9.22315C20.583 5.21963 17.3634 2 13.3599 2C9.35634 2 6.13672 5.24762 6.13672 9.22315C6.16472 13.1427 9.24436 16.3063 13.1079 16.4463Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M15.9913 36.8276C12.1558 37.4716 7.9283 36.7996 4.96065 34.8119C1.01312 32.1802 1.01312 27.8687 4.96065 25.237C7.9563 23.2493 12.2398 22.5773 16.0753 23.2492"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4"
                    d="M29.9966 37.3599C29.8286 37.3319 29.6326 37.3319 29.4647 37.3599C25.6011 37.2199 22.5215 34.0563 22.5215 30.1367C22.5215 26.1332 25.7411 22.9136 29.7446 22.9136C33.7482 22.9136 36.9678 26.1612 36.9678 30.1367C36.9398 34.0563 33.8601 37.2479 29.9966 37.3599Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4"
                    d="M21.8503 46.1784C17.9028 48.8101 17.9028 53.1215 21.8503 55.7532C26.3298 58.7489 33.6649 58.7489 38.1444 55.7532C42.0919 53.1215 42.0919 48.8101 38.1444 46.1784C33.6929 43.2107 26.3298 43.2107 21.8503 46.1784Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>`,
          num: 16,
          text: "K+",
          title: "Growth in revenue",
        },
        {
          icon: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.7716 25.3073V46.0628C46.7716 52.6694 41.4127 58 34.8344 58H13.9372C7.35899 58 2 52.641 2 46.0628V25.3073C2 18.7008 7.35899 13.3701 13.9372 13.3701H34.8344C41.4127 13.3701 46.7716 18.7291 46.7716 25.3073Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.34" d="M11.9238 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path opacity="0.34" d="M23.2656 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path opacity="0.34" d="M34.6074 6.96203V2" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M58.7087 32.9345C58.7087 39.5128 53.3497 44.8717 46.7715 44.8717V20.9973C53.3497 20.9973 58.7087 26.3279 58.7087 32.9345Z"
                    stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.34" d="M2 29.6455H45.9777" stroke="#2CAE76" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>`,
          num: 84,
          text: "%",
          title: "Cups of coffee",
        },
      ],
    };
  },
};
</script>
