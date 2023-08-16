<template>
  <section class="portfolio__area pt-150 pb-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-2 text-center mb-40">
            <span class="section__title-pre-2">All Creative Works</span>
            <h3 class="section__title-2">Creative Works</h3>
            <p>Featured projects, which my best projects be choice to show</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div
            v-for="item in portfolio_data"
            :key="item.id"
            :class="`portfolio__item-2 has-${item.bg_color} fix`"
          >
            <div class="portfolio__shape">
              <img
                v-for="(s, i) in item.shapes"
                :key="i"
                :class="`portfolio__shape-${s.id} wow fadeInDown`"
                data-sal="slide-down" data-sal-delay="150" data-sal-duration="1000"
                :src="s.shape"
                alt="shape"
              />
            </div>
            <div v-if="!item.diff" class="row">
              <div class="col-xxl-5 col-xl-5 col-lg-6">
                <div class="portfolio__content-2">
                  <div class="portfolio__icon-2">
                    <span v-html="item.icon"> </span>
                  </div>
                  <div class="portfolio__tag-2">
                    <a v-for="(t, i) in item.tags" :key="i" href="#">{{ t }}</a>
                  </div>
                  <h3 class="portfolio__title-2" v-html="item.title"></h3>
                  <div class="portfolio__btn-2">
                    <a href="portfolio-masonry" class="tp-btn-white">
                      See Projects
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-7 col-lg-6">
                <div class="portfolio__thumb-wrapper-2 p-relative">
                  <div class="portfolio__thumb-2">
                    <img
                      v-for="(img, i) in item.image"
                      :key="i"
                      :class="`portfolio-2-${img.id} wow fadeInRightPortfolio${img.id}`"
                      data-sal="slide-down" data-sal-delay="160" data-sal-duration="1000"
                      :src="img.img"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div v-if="item.diff" class="row">
              <div class="col-xxl-7 col-xl-7 col-lg-6">
                <div class="portfolio__thumb-wrapper-2 p-relative">
                  <div class="portfolio__thumb-2 portfolio-thumb-2">
                    <div class="row">
                      <div class="col-md-5">
                        <img
                          :class="`portfolio-2-${item.image[0].id} 
                           wow fadeInRightPortfolio${item.image[0].id}`"
                          :src="item.image[0].img"
                          data-sal="slide-down" data-sal-delay="170" data-sal-duration="1000"
                          alt="image"
                        />
                      </div>
                      <div class="col-md-5">
                        <img
                          v-for="(img, i) in item.image.slice(1, 3)"
                          :key="i"
                          :class="`portfolio-2-${img.id} wow fadeInRightPortfolio${img.id}`"
                          data-sal="slide-down" data-sal-delay="180" data-sal-duration="1000"
                          :src="img.img"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-5 col-xl-5 col-lg-6">
                <div class="portfolio__content-2">
                  <div class="portfolio__icon-2">
                    <span v-html="item.icon"></span>
                  </div>
                  <div class="portfolio__tag-2">
                    <a v-for="(t, i) in item.tags" :key="i" href="#">{{ t }}</a>
                  </div>
                  <h3 class="portfolio__title-2" v-html="item.title"></h3>
                  <div class="portfolio__btn-2">
                    <Link href="portfolio-masonry" class="tp-btn-white">
                      See Projects
                    </Link>
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
import { ref, onMounted } from "vue";
// shapes
import shape_1 from "~/assets/img/portfolio/2/shape/portfolio-shape-1.png";
import shape_2 from "~/assets/img/portfolio/2/shape/portfolio-shape-2.png";
import shape_3 from "~/assets/img/portfolio/2/shape/portfolio-shape-3.png";
import shape_4 from "~/assets/img/portfolio/2/shape/portfolio-shape-4.png";
// portfolio images
import portfolio_1 from "~/assets/img/portfolio/2/portfolio-1.jpg";
import portfolio_2 from "~/assets/img/portfolio/2/portfolio-2.jpg";
import portfolio_3 from "~/assets/img/portfolio/2/portfolio-3.jpg";
import portfolio_4 from "~/assets/img/portfolio/2/portfolio-4.jpg";
import portfolio_5 from "~/assets/img/portfolio/2/portfolio-5.jpg";
import portfolio_6 from "~/assets/img/portfolio/2/portfolio-6.png";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      portfolio_data: [
        {
          id: 1,
          shapes: [{ id: 1, shape: shape_1 }],
          icon: `<svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.857 15.4446V22.1113H3.14274V4.33354H10.6427V2.11133H3.14274C2.57441 2.11133 2.02937 2.34545 1.62751 2.7622C1.22564 3.17895 0.999878 3.74418 0.999878 4.33354V22.1113C0.999878 22.7006 1.22564 23.2659 1.62751 23.6826C2.02937 24.0994 2.57441 24.3335 3.14274 24.3335H11.7142V28.7779H7.42845V31.0001H24.5713V28.7779H20.2856V24.3335H28.857C29.4253 24.3335 29.9704 24.0994 30.3722 23.6826C30.7741 23.2659 30.9999 22.7006 30.9999 22.1113V15.4446H28.857ZM18.1427 28.7779H13.857V24.3335H18.1427V28.7779Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.5"
                  />
                  <path
                    d="M18.1427 17.6667H18.132C17.9011 17.6642 17.6771 17.5844 17.4935 17.4392C17.3099 17.294 17.1764 17.0911 17.113 16.8609L15.1916 9.88899H10.6427V7.66677H15.9999C16.2327 7.66677 16.4592 7.74541 16.645 7.8908C16.8309 8.03618 16.9661 8.2404 17.0301 8.47254L18.181 12.6491L21.4047 1.78434C21.4742 1.5586 21.6105 1.36132 21.7943 1.22053C21.9781 1.07974 22.2 1.00262 22.4284 1.00012C22.6541 0.996656 22.8748 1.06869 23.0579 1.20554C23.241 1.3424 23.3767 1.53678 23.4449 1.7599L25.3435 7.66677H30.9999V9.88899H24.5713C24.3464 9.88899 24.1272 9.81561 23.9448 9.67925C23.7624 9.54289 23.6259 9.35045 23.5548 9.12921L22.4693 5.75144L19.1666 16.8825C19.0992 17.1096 18.9634 17.3083 18.7791 17.4494C18.5949 17.5905 18.3718 17.6667 18.1427 17.6667Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.5"
                  />
                </svg>`,
          tags: ["User Research", "UX Design"],
          title: "Harry website for <br /> Unique start-up brands.",
          image: [
            { id: 1, img: portfolio_1 },
            { id: 2, img: portfolio_2 },
          ],
          bg_color: "green",
        },
        {
          id: 2,
          shapes: [
            { id: 2, shape: shape_2 },
            { id: 3, shape: shape_3 },
          ],
          icon: `<svg
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                >
                  <path
                    d="M27.1873 13.4312V24.8333C27.1873 26.028 26.0657 27 24.6873 27H12.9372C11.5588 27 10.4372 26.028 10.4372 24.8333V3.16666C10.4372 1.97197 11.5588 1 12.9372 1H24.6873C26.0657 1 27.1873 1.97197 27.1873 3.16666V4.08749C27.1873 4.3268 26.9633 4.52082 26.6872 4.52082C26.4111 4.52082 26.1872 4.3268 26.1872 4.08749V3.16666C26.1872 2.44988 25.5143 1.86667 24.6873 1.86667H15.162L15.6421 2.61568C15.7743 2.82189 16.0255 2.95 16.2978 2.95H21.3266C21.6028 2.95 21.8267 3.14402 21.8267 3.38333C21.8267 3.62264 21.6028 3.81666 21.3266 3.81666H16.2978C15.6626 3.81666 15.0765 3.51772 14.7679 3.03656L14.018 1.86667H12.9372C12.1102 1.86667 11.4372 2.44988 11.4372 3.16666V24.8333C11.4372 25.5501 12.1102 26.1333 12.9372 26.1333H24.6873C25.5143 26.1333 26.1872 25.5501 26.1872 24.8333V13.4312C26.1872 13.1919 26.4111 12.9979 26.6872 12.9979C26.9633 12.9979 27.1873 13.1919 27.1873 13.4312ZM8.99974 1.43333C8.99974 1.19402 8.77587 1 8.49974 1H3.49975C2.12126 1 0.999756 1.97197 0.999756 3.16666V24.8333C0.999756 26.028 2.12126 27 3.49975 27H8.49974C8.77587 27 8.99974 26.8059 8.99974 26.5666C8.99974 26.3274 8.77587 26.1333 8.49974 26.1333H3.49975C2.67269 26.1333 1.99975 25.5501 1.99975 24.8333V3.16666C1.99975 2.44988 2.67269 1.86667 3.49975 1.86667H8.49974C8.77587 1.86667 8.99974 1.67264 8.99974 1.43333ZM5.56225 7.60832C5.56225 7.99659 5.19775 8.31249 4.74975 8.31249C4.30175 8.31249 3.93726 7.99659 3.93726 7.60832C3.93726 7.22006 4.30175 6.90415 4.74975 6.90415C5.19775 6.90415 5.56225 7.22 5.56225 7.60832ZM5.56225 4.35833C5.56225 4.74659 5.19775 5.06249 4.74975 5.06249C4.30175 5.06249 3.93726 4.74659 3.93726 4.35833C3.93726 3.97006 4.30175 3.65416 4.74975 3.65416C5.19775 3.65416 5.56225 3.97001 5.56225 4.35833ZM7.24975 5.27916C7.69774 5.27916 8.06225 5.59506 8.06225 5.98333C8.06225 6.37159 7.69774 6.68749 7.24975 6.68749C6.80175 6.68749 6.43725 6.37159 6.43725 5.98333C6.43725 5.59506 6.80175 5.27916 7.24975 5.27916ZM27.3716 10.4082C27.9622 10.92 27.5382 11.7952 26.7087 11.7952C25.8799 11.7952 25.4548 10.9204 26.0459 10.4082C26.4122 10.0906 27.0052 10.0905 27.3716 10.4082ZM24.4106 8.99098C24.2154 9.16018 24.2154 9.43457 24.4106 9.60379C24.606 9.773 24.9225 9.773 25.1177 9.60379C25.997 8.8417 27.4204 8.84164 28.2997 9.60379C28.3974 9.6884 28.5252 9.73066 28.6532 9.73066C29.0947 9.73066 29.3227 9.2647 29.0068 8.99092C27.7368 7.89021 25.681 7.89004 24.4106 8.99098ZM30.8631 7.38229C28.567 5.39237 24.8508 5.3922 22.5545 7.38229C22.3593 7.5515 22.3593 7.82586 22.5545 7.99507C22.7498 8.16429 23.0663 8.16429 23.2616 7.99507C25.1624 6.3477 28.2551 6.34781 30.1559 7.99507C30.3512 8.16434 30.6676 8.16429 30.863 7.99507C31.0583 7.82586 31.0583 7.5515 30.8631 7.38229Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.7"
                  />
                </svg>`,
          tags: ["User Research", "UX Design"],
          title: "Re-design for the app <br /> Made easy.",
          image: [
            { id: 3, img: portfolio_3 },
            { id: 4, img: portfolio_4 },
            { id: 5, img: portfolio_5 },
          ],
          bg_color: "purple",
          diff: true,
        },
        {
          id: 3,
          shapes: [{ id: 4, shape: shape_4 }],
          icon: `<svg
                    width="32"
                    height="28"
                    viewBox="0 0 32 28"
                    fill="none"
                  >
                    <path
                      d="M27.1873 13.4312V24.8333C27.1873 26.028 26.0657 27 24.6873 27H12.9372C11.5588 27 10.4372 26.028 10.4372 24.8333V3.16666C10.4372 1.97197 11.5588 1 12.9372 1H24.6873C26.0657 1 27.1873 1.97197 27.1873 3.16666V4.08749C27.1873 4.3268 26.9633 4.52082 26.6872 4.52082C26.4111 4.52082 26.1872 4.3268 26.1872 4.08749V3.16666C26.1872 2.44988 25.5143 1.86667 24.6873 1.86667H15.162L15.6421 2.61568C15.7743 2.82189 16.0255 2.95 16.2978 2.95H21.3266C21.6028 2.95 21.8267 3.14402 21.8267 3.38333C21.8267 3.62264 21.6028 3.81666 21.3266 3.81666H16.2978C15.6626 3.81666 15.0765 3.51772 14.7679 3.03656L14.018 1.86667H12.9372C12.1102 1.86667 11.4372 2.44988 11.4372 3.16666V24.8333C11.4372 25.5501 12.1102 26.1333 12.9372 26.1333H24.6873C25.5143 26.1333 26.1872 25.5501 26.1872 24.8333V13.4312C26.1872 13.1919 26.4111 12.9979 26.6872 12.9979C26.9633 12.9979 27.1873 13.1919 27.1873 13.4312ZM8.99974 1.43333C8.99974 1.19402 8.77587 1 8.49974 1H3.49975C2.12126 1 0.999756 1.97197 0.999756 3.16666V24.8333C0.999756 26.028 2.12126 27 3.49975 27H8.49974C8.77587 27 8.99974 26.8059 8.99974 26.5666C8.99974 26.3274 8.77587 26.1333 8.49974 26.1333H3.49975C2.67269 26.1333 1.99975 25.5501 1.99975 24.8333V3.16666C1.99975 2.44988 2.67269 1.86667 3.49975 1.86667H8.49974C8.77587 1.86667 8.99974 1.67264 8.99974 1.43333ZM5.56225 7.60832C5.56225 7.99659 5.19775 8.31249 4.74975 8.31249C4.30175 8.31249 3.93726 7.99659 3.93726 7.60832C3.93726 7.22006 4.30175 6.90415 4.74975 6.90415C5.19775 6.90415 5.56225 7.22 5.56225 7.60832ZM5.56225 4.35833C5.56225 4.74659 5.19775 5.06249 4.74975 5.06249C4.30175 5.06249 3.93726 4.74659 3.93726 4.35833C3.93726 3.97006 4.30175 3.65416 4.74975 3.65416C5.19775 3.65416 5.56225 3.97001 5.56225 4.35833ZM7.24975 5.27916C7.69774 5.27916 8.06225 5.59506 8.06225 5.98333C8.06225 6.37159 7.69774 6.68749 7.24975 6.68749C6.80175 6.68749 6.43725 6.37159 6.43725 5.98333C6.43725 5.59506 6.80175 5.27916 7.24975 5.27916ZM27.3716 10.4082C27.9622 10.92 27.5382 11.7952 26.7087 11.7952C25.8799 11.7952 25.4548 10.9204 26.0459 10.4082C26.4122 10.0906 27.0052 10.0905 27.3716 10.4082ZM24.4106 8.99098C24.2154 9.16018 24.2154 9.43457 24.4106 9.60379C24.606 9.773 24.9225 9.773 25.1177 9.60379C25.997 8.8417 27.4204 8.84164 28.2997 9.60379C28.3974 9.6884 28.5252 9.73066 28.6532 9.73066C29.0947 9.73066 29.3227 9.2647 29.0068 8.99092C27.7368 7.89021 25.681 7.89004 24.4106 8.99098ZM30.8631 7.38229C28.567 5.39237 24.8508 5.3922 22.5545 7.38229C22.3593 7.5515 22.3593 7.82586 22.5545 7.99507C22.7498 8.16429 23.0663 8.16429 23.2616 7.99507C25.1624 6.3477 28.2551 6.34781 30.1559 7.99507C30.3512 8.16434 30.6676 8.16429 30.863 7.99507C31.0583 7.82586 31.0583 7.5515 30.8631 7.38229Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.7"
                    />
                  </svg>`,
          tags: ["User Research", "UX Design"],
          title: "A collaboration tool for brainstorming ideas",
          image: [{ id: 6, img: portfolio_6 }],
          bg_color: "pink",
        },
      ],
    };
  },
  
};
</script>
