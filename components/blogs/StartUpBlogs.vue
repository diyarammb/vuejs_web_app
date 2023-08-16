<template>
  <section class="blog__area blog__border-7 pb-115 pt-30">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-8 col-md-7">
          <div class="blog__section-title-7">
            <div class="section__title-wrapper-7 mb-60">
              <span class="section__title-pre-7">Resources</span>
              <h3 class="section__title-7">
                Read our
                <span class="section__title-7-highlight">
                  latest blogs
                  <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                      fill="#2CAE76"
                    />
                  </svg>
                </span>
              </h3>
              <p>
                Every now and then we’ll lay down some opinion or business
                insight.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5">
          <div class="blog__btn-7 text-md-end mb-60">
            <nuxt-link
              href="/blog-grid-2"
              class="tp-btnr-border-2 tp-btn-shine-effect"
              >View More News
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row tp-gx-6">
        <div
          v-for="(item, i) in blogData.filter((blog) => blog.home_start_up)"
          :key="i"
          class="col-xxl-4 col-lg-4 col-md-6"
        >
          <div class="blog__item-7 transition-3 white-bg mb-30">
            <div class="blog__thumb-7 w-img mb-25">
              <nuxt-link href="/blog-details">
                <img :src="item.img" alt="blog img" />
              </nuxt-link>
            </div>
            <div class="blog__content-7">
              <div class="blog__content-top-7 d-flex align-items-center">
                <div class="blog__tag-7">
                  <a href="#">{{ item.tag }}</a>
                </div>
                <div class="blog__meta-7">
                  <span
                    ><i class="fa-regular fa-clock"></i>{{ item.date }}</span
                  >
                </div>
              </div>
              <h3 class="blog__title-7">
                <nuxt-link href="/blog-details">{{ item.title }}</nuxt-link>
              </h3>
              <p>{{ item.sm_text }}</p>
              <div
                class="blog__content-bottom-7 d-flex align-items-center justify-content-between"
              >
                <div class="blog__meta-author d-flex align-items-center">
                  <div class="blog__meta-author-thumb">
                    <a href="#">
                      <img :src="item.author_img" alt="author_img" />
                    </a>
                  </div>
                  <div class="blog__meta-author-content">
                    <span
                      >By<a href="#"> {{ item.author_name }}</a></span
                    >
                  </div>
                </div>
                <div class="blog__meta-7">
                  <span
                    ><i class="fa-regular fa-comment"></i
                    >{{ item.comment }}</span
                  >
                  <span><i class="fa-light fa-eye"></i>{{ item.see }}</span>
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
import blogData from "~~/mixins/blogData";

export default {
  mixins: [blogData],
};
</script>
