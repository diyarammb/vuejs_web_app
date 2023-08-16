<template>
  <div :class="`sidebar__wrapper ${style_2?'sidebar__widget-style-2':''} pl-40`">
    <div class="sidebar__widget mb-20">
      <div class="sidebar__widget-content">
        <div class="sidebar__search">
          <form action="#">
            <div class="sidebar__search-input">
              <input type="text" placeholder="Enter your keywords...">
              <button type="submit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="sidebar__widget mb-45">
      <div class="sidebar__widget-content">
        <div class="sidebar__author">
          <div class="sidebar__author-thumb">
            <img src="~/assets/img/blog/sidebar/sidebar-author.jpg" alt="">
          </div>
          <div class="sidebar__author-content">
            <h3 class="sidebar__author-title">eTechFlow</h3>
            <p>Software Development Agency</p>

            <div class="sidebar__author-social d-flex align-items-center justify-content-center">
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar__widget mb-45">
      <h3 class="sidebar__widget-title">Category</h3>
      <div class="sidebar__widget-content">
        <ul>
          <li><nuxt-link href="/blog">Branding <span>10</span></nuxt-link></li>
          <li><nuxt-link href="/blog">Mobile app <span>08</span></nuxt-link></li>
          <li><nuxt-link href="/blog">Web Development <span>24</span></nuxt-link></li>
          <li><nuxt-link href="/blog">Digital Marketing <span>37</span></nuxt-link></li>
          <li><nuxt-link href="/blog">Technology <span>103</span></nuxt-link></li>
        </ul>
      </div>
    </div>
    <div class="sidebar__widget mb-45">
      <h3 class="sidebar__widget-title">Recent Post</h3>
      <div class="sidebar__widget-content">
        <div class="sidebar__post">
          <div class="rc__post d-flex align-items-center">
            <div class="rc__post-thumb">
              <nuxt-link href="/blog-details">
                <img src="~/assets/img/blog/sidebar/blog-sm-1.jpg" alt="">
              </nuxt-link>
            </div>
            <div class="rc__post-content">
              <h3 class="rc__post-title">
                <nuxt-link href="/blog-details">Business meeting 2021 in San Francisco</nuxt-link>
              </h3>
              <div class="rc__meta">
                <span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>July 21, 2022
                </span>
              </div>
            </div>
          </div>
          <div class="rc__post d-flex align-items-center">
            <div class="rc__post-thumb">
              <nuxt-link href="/blog-details">
                <img src="~/assets/img/blog/sidebar/blog-sm-2.jpg" alt="">
              </nuxt-link>
            </div>
            <div class="rc__post-content">
              <h3 class="rc__post-title">
                <nuxt-link href="/blog-details">Developing privacy user-centric apps</nuxt-link>
              </h3>
              <div class="rc__meta">
                <span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>July 21, 2022
                </span>
              </div>
            </div>
          </div>
          <div class="rc__post d-flex align-items-center">
            <div class="rc__post-thumb">
              <nuxt-link href="/blog-details">
                <img src="~/assets/img/blog/sidebar/blog-sm-3.jpg" alt="">
              </nuxt-link>
            </div>
            <div class="rc__post-content">
              <h3 class="rc__post-title">
                <nuxt-link href="/blog-details">Starting and Growing Web Design in 2022</nuxt-link>
              </h3>
              <div class="rc__meta">
                <span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>July 21, 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar__widget mb-40">
      <h3 class="sidebar__widget-title">Tags</h3>
      <div class="sidebar__widget-content">
        <div class="tagcloud">
          <a href="#">Techology</a>
          <a href="#">Food</a>
          <a href="#">Personality</a>
          <a href="#">Life Style</a>
          <a href="#">Travel</a>
          <a href="#">Nature</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    style_2:{
      type:Boolean,
      default:false
    }
  }
}
</script>