<template>
  <section class="blog__area pt-110 pb-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-10 text-center mb-45">
            <span class="section__title-pre-10">Our latest news</span>
            <h3 class="section__title-10">Latest news & articles</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
          <div class="blog__item-10 white-bg transition-3 mb-30 fix" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
            <div class="blog__thumb-10 w-img fix">
              <nuxt-link href="/blog-details">
                <img :src="first_blog.img" alt="">
              </nuxt-link>
            </div>
            <div class="blog__content-10">
              <div class="blog__content-10-top">
                <div class="blog__meta-10-wrapper d-flex align-items-center">
                  <div class="blog__tag-10 mr-10">
                    <a href="#">{{ first_blog.tag }}</a>
                  </div>
                  <div class="blog__meta-10">
                    <span>{{ first_blog.date }}</span>
                  </div>
                </div>
                <h3 class="blog__title-10">
                  <nuxt-link href="/blog-details">{{ first_blog.title }}</nuxt-link>
                </h3>

                <p>{{ first_blog.sm_desc }}</p>
              </div>
              <div class="blog__content-10-bottom d-flex align-items-center">
                <div class="blog__meta-author-10 d-flex align-items-center">
                  <div class="blog__meta-author-thumb-10">
                    <a href="#">
                      <img :src="first_blog.author_img" alt="">
                    </a>
                  </div>
                  <div class="blog__meta-author-content-10">
                    <span>By <a href="#"> {{ first_blog.author_name }}</a></span>
                  </div>
                </div>
                <div class="blog__meta-10 blog-meta-10-2">
                  <span>{{ first_blog.comments }} Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-4 col-lg-6 order-last order-lg-2">
          <div class="blog__item-10 blog__item-10-overlay white-bg transition-3 mb-30 fix order-last"
             data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
            <div class="blog__thumb-10 m-img fix transition-3" 
            :style="{ backgroundImage: `url(${big_blog.img})` }"
              data-background="~/assets/img/blog/10/blog-2.jpg"></div>
            <div class="blog__content-10">
              <div class="blog__content-10-top">
                <div class="blog__meta-10-wrapper d-flex align-items-center">
                  <div class="blog__tag-10 mr-10">
                    <a href="#">{{ big_blog.tag }}</a>
                  </div>
                  <div class="blog__meta-10">
                    <span>{{ big_blog.date }}</span>
                  </div>
                </div>
                <h3 class="blog__title-10">
                  <nuxt-link href="/blog-details">{{ big_blog.title }}</nuxt-link>
                </h3>
              </div>
              <div class="blog__content-10-bottom d-flex align-items-center">
                <div class="blog__meta-author-10 d-flex align-items-center">
                  <div class="blog__meta-author-thumb-10">
                    <a href="#">
                      <img :src="big_blog.author_img" alt="">
                    </a>
                  </div>
                  <div class="blog__meta-author-content-10">
                    <span>By<a href="#"> {{ big_blog.author_name }}</a></span>
                  </div>
                </div>
                <div class="blog__meta-10 blog-meta-10-2">
                  <span>{{ big_blog.comments }} Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xxl-3 col-xl-4 col-lg-12 col-md-6 order-lg-last">
          <div class="blog__item-10-wrapper d-lg-flex d-xl-block" data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000">
            <div v-for="(item, i) in sm_blogs" :key="i"
              class="blog__item-10 blog__item-10-sm white-bg transition-3 mb-30 fix">
              <div class="blog__content-10">
                <div class="blog__content-10-top">
                  <div class="blog__meta-10-wrapper d-flex align-items-center">
                    <div class="blog__tag-10 mr-10">
                      <a href="#">{{ item.tag }}</a>
                    </div>
                    <div class="blog__meta-10">
                      <span>{{ item.date }}</span>
                    </div>
                  </div>
                  <h3 class="blog__title-10">
                    <nuxt-link href="/blog-details">{{ item.title }}</nuxt-link>
                  </h3>
                </div>
                <div class="blog__content-10-bottom d-flex align-items-center">
                  <div class="blog__meta-author-10 d-flex align-items-center">
                    <div class="blog__meta-author-thumb-10">
                      <a href="#">
                        <img :src="item.author_img" alt="">
                      </a>
                    </div>
                    <div class="blog__meta-author-content-10">
                      <span>By <a href="#"> {{ item.author_name }}</a></span>
                    </div>
                  </div>
                  <div class="blog__meta-10 blog-meta-10-2">
                    <span>{{ item.comments }} Comments</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="blog__more-10 text-center mt-30" data-sal="slide-up" data-sal-delay="190" data-sal-duration="1000">
            <nuxt-link href="/blog-grid" class="tp-btn-border-9">View More News 
              <i class="fa-regular fa-angle-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogData from '~~/mixins/blogData';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  mixins: [blogData],
  data() {
    return {
      first_blog: {},
      big_blog: {},
      sm_blogs: []
    }
  },
  created() {
    this.first_blog = this.blogData.filter(blog => blog.home_politician).find((b) => b.p_blog_1);
    this.big_blog = this.blogData.filter(blog => blog.home_politician).find((b) => b.p_blog_big);
    this.sm_blogs = this.blogData.filter(blog => blog.home_politician).find((b) => b.sm_blogs).sm_blogs;
  }
}
</script>
