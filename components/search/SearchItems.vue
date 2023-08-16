<template>
  <section class="search__result-item-area pt-100 pb-120">
    <div class="container">
      <div class="row">
        <div v-for="(item, i) in search_items" :key="i" class="col-md-6">
          <div class="search__blog-item mb-30">
            <div class="search__blog-content">
              <div class="search__blog-meta-wrapper d-flex flex-wrap align-items-center">
                <div class="search__blog-tag mr-15">
                  <a href="#">{{item.tag}}</a>
                </div>
                <div class="search__blog-meta">
                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    {{item.date}}
                  </span>
                </div>
              </div>
              <h3 class="search__blog-title">
                <nuxt-link to="/blog-details">
                  <a v-html="item.title"></a>
                </nuxt-link>
              </h3>
              <p>Everybody needs to write content for personal or professional purposes. It can be anything.!</p>

              <div class="search__blog-bottom d-flex flex-wrap align-items-center mb-20">
                <div class="search__blog-meta-author d-flex align-items-center mr-45">
                  <div class="search__blog-meta-author-thumb">
                    <a href="#">
                      <img :src="item.author_img" alt="">
                    </a>
                  </div>
                  <div class="search__blog-meta-author-content">
                    <span>By <a href="#">{{item.author_name}}</a></span>
                  </div>
                </div>
                <div class="search__blog-meta">
                  <span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.9718 6.66668C12.9741 7.54659 12.769 8.4146 12.3732 9.20001C11.9039 10.1412 11.1825 10.9328 10.2897 11.4862C9.39697 12.0396 8.36813 12.3329 7.31844 12.3333C6.4406 12.3356 5.57463 12.13 4.79106 11.7333L1 13L2.26369 9.20001C1.86791 8.4146 1.66281 7.54659 1.6651 6.66668C1.66551 5.61452 1.95815 4.58325 2.51025 3.68838C3.06236 2.79352 3.85211 2.0704 4.79106 1.60002C5.57463 1.20331 6.4406 0.997725 7.31844 1.00002H7.65099C9.03729 1.07668 10.3467 1.66319 11.3284 2.64726C12.3102 3.63132 12.8953 4.94378 12.9718 6.33334V6.66668Z"
                        stroke="#7A7E83" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    {{item.comments}}
                  </span>
                  <span>
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.0443 7.00397C11.0443 8.43962 9.88694 9.59974 8.45466 9.59974C7.02238 9.59974 5.86499 8.43962 5.86499 7.00397C5.86499 5.56832 7.02238 4.4082 8.45466 4.4082C9.88694 4.4082 11.0443 5.56832 11.0443 7.00397Z"
                        stroke="#7A7E83" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path
                        d="M8.45466 13C11.0082 13 13.3881 11.4918 15.0446 8.88157C15.6956 7.85921 15.6956 6.14078 15.0446 5.11843C13.3881 2.50816 11.0082 1 8.45466 1C5.90115 1 3.52126 2.50816 1.86474 5.11843C1.21371 6.14078 1.21371 7.85921 1.86474 8.88157C3.52126 11.4918 5.90115 13 8.45466 13Z"
                        stroke="#7A7E83" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    {{item.watch}}
                  </span>
                </div>
              </div>
              <div class="search__blog-btn">
                <nuxt-link href="/blog-details" class="tp-btn-border">
                  Read More
                  <span>
                    <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.6934 1L25 4.20003L21.6934 7.4" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M0.999999 4.1991H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-pagination tp-pagination-style-2 mt-20">
            <blog-pagination />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogData from "~~/mixins/blogData";
import BlogPagination from "../common/pagination/BlogPagination.vue";

export default {
  components: { BlogPagination },
  mixins: [blogData],
  data() {
    return {
      search_items: [],
    };
  },
  created() {
    this.search_items = blogData
      .data()
      .blogData.filter((b) => b.blog_grid)
      .filter((b) => !b.blog_quote)
      .slice(0, 6);
  },
};
</script>
