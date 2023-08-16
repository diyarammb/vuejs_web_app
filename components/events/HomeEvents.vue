<template>
  <section class="event__area grey-bg-4 pt-110 pb-115">
    <div class="container">
      <div class="row">
        <div class="col-xxl-9 col-xl-8">
          <div class="section__title-wrapper mb-50">
            <h3 class="section__title">
              Event &
              <span class="section__title-highlight"
                >seminar
                <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                  <path
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              schedules for the year 2022/23.
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <SingleEvent
            title="UX Design Conference"
            :img_1="img_1"
            :img_2="img_2"
            date="October 16, 2022"
          />
          <SingleEvent
            title="Business Development"
            :img_1="img_3"
            :img_2="img_4"
            date="March 10, 2022"
          />
          <SingleEvent
            title="Networking and Data Science"
            :img_1="img_5"
            :img_2="img_6"
            date="July 17, 2022"
          />
          <SingleEvent
            title="Digital Marketing"
            :img_1="img_7"
            :img_2="img_8"
            date="January 14, 2022"
          />
          <SingleEvent
            title="Webinar for Developers"
            :img_1="img_9"
            :img_2="img_10"
            date="April 14, 2022"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleEvent from "./single-event/SingleEvent.vue";
// images
import img_1 from "~/assets/img/event/event-speaker-1.jpg";
import img_2 from "~/assets/img/event/event-speaker-2.jpg";
import img_3 from "~/assets/img/event/event-speaker-3.jpg";
import img_4 from "~/assets/img/event/event-speaker-4.jpg";
import img_5 from "~/assets/img/event/event-speaker-5.jpg";
import img_6 from "~/assets/img/event/event-speaker-6.jpg";
import img_7 from "~/assets/img/event/event-speaker-7.jpg";
import img_8 from "~/assets/img/event/event-speaker-8.jpg";
import img_9 from "~/assets/img/event/event-speaker-9.jpg";
import img_10 from "~/assets/img/event/event-speaker-10.jpg";

export default {
  components: {
    SingleEvent,
  },
  data() {
    return {
      img_1,
      img_2,
      img_3,
      img_4,
      img_5,
      img_6,
      img_7,
      img_8,
      img_9,
      img_10,
    };
  },
};
</script>
