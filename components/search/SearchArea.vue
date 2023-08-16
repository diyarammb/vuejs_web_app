<template>
  <section class="search__result-area grey-bg-4 pt-120 pb-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="search__result-wrapper">
            <div class="search__result-content text-center mb-40">
              <h3 class="search__result-title">
                Search results for: <span> “hello”</span>
              </h3>
              <p>Harry found 46 results for your search query.</p>
            </div>
            <div class="search__result-form">
              <form @submit.prevent="handleSubmit">
                <div class="search__result-input-box">
                  <div class="search__result-input">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.0031 19.0002L17.2031 17.2002"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <input v-model="searchVal" type="text" placeholder="Search for articles..." />
                  </div>
                  <button type="submit" class="tp-btn">Search</button>
                </div>
                <div class="search__result-tags">
                  <a href="#">Techology</a>
                  <a href="#">Business</a>
                  <a href="#">Travel</a>
                  <a href="#">Personality</a>
                  <a href="#">Nature</a>
                  <a href="#">Photographer</a>
                  <a href="#">Agency</a>
                  <a href="#">Life Style</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      searchVal:''
    }
  },
  methods:{
    handleSubmit () {
      console.log(this.searchVal)
      this.searchVal = ''
    }
  }
};
</script>
