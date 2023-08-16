<template>
  <section class="faq__area p-relative z-index-1 pt-120 pb-120">
    <div class="faq__shape">
      <img class="faq__shape-1" src="~/assets/img/faq/faq-shape-1.png" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-6">
          <div class="faq__wrapper">
            <div class="section__title-wrapper-7 mb-60">
              <span class="section__title-pre-7">Common Questions</span>
              <h3 class="section__title-7">
                Frequently <br />
                asked
                <span class="section__title-7-highlight">
                  questions
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
            </div>

            <div class="faq__tab tp-tab pr-200">
              <nav>
                <div
                  class="nav nav-tabs flex-column"
                  id="nav-tab"
                  role="tablist"
                >
                  <nav-button
                    :active="true"
                    id="general"
                    icon='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.318 1.74134L2.467 5.52653C1.657 6.1574 1 7.50024 1 8.51863V15.1968C1 17.2877 2.701 19 4.789 19H15.211C17.299 19 19 17.2877 19 15.2058V8.6448C19 7.55431 18.271 6.1574 17.38 5.53554L11.818 1.63319C10.558 0.749983 8.533 0.795045 7.318 1.74134Z"
                              stroke="#525258" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 15.3951V12.6914" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>'
                    title="General Questions"
                  />
                  <nav-button
                    id="community"
                    icon='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z"
                              stroke="#525258" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path class="icon-color-theme"
                              d="M4 17C5.65685 17 7 15.6569 7 14C7 12.3431 5.65685 11 4 11C2.34315 11 1 12.3431 1 14C1 15.6569 2.34315 17 4 17Z"
                              stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path
                              d="M14 17C15.6569 17 17 15.6569 17 14C17 12.3431 15.6569 11 14 11C12.3431 11 11 12.3431 11 14C11 15.6569 12.3431 17 14 17Z"
                              stroke="#525258" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path class="icon-color-theme"
                              d="M14 7C15.6569 7 17 5.65685 17 4C17 2.34315 15.6569 1 14 1C12.3431 1 11 2.34315 11 4C11 5.65685 12.3431 7 14 7Z"
                              stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>'
                    title="Community"
                  />
                  <nav-button
                    id="support"
                    icon='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15.822 14.3465L16.173 17.1903C16.2629 17.9373 15.462 18.4593 14.823 18.0723L11.0522 15.8314C10.6382 15.8314 10.2332 15.8044 9.83721 15.7504C10.5032 14.9675 10.8992 13.9775 10.8992 12.9065C10.8992 10.3506 8.68525 8.28073 5.94936 8.28073C4.9054 8.28073 3.94244 8.5777 3.14148 9.09968C3.11448 8.87469 3.10547 8.64969 3.10547 8.4157C3.10547 4.32086 6.66033 1 11.0522 1C15.444 1 18.9988 4.32086 18.9988 8.4157C18.9988 10.8456 17.7479 12.9965 15.822 14.3465Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path class="icon-color-theme"
                            d="M10.8996 12.907C10.8996 13.978 10.5036 14.968 9.83765 15.7509C8.94669 16.8309 7.53374 17.5238 5.9498 17.5238L3.6009 18.9188C3.20491 19.1618 2.70093 18.8288 2.75493 18.3698L2.97992 16.5969C1.77397 15.7599 1 14.419 1 12.907C1 11.3231 1.84597 9.92816 3.14192 9.10019C3.94289 8.57821 4.90584 8.28125 5.9498 8.28125C8.68569 8.28125 10.8996 10.3511 10.8996 12.907Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>'
                    title="Support"
                  />
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-6">
          <div class="faq__tab-content tp-accordion">
            <div class="tab-content" id="nav-tabContent">
              <tab-content
                :active="true"
                id="nav-general"
                :faq_items="tab_faq_1"
              />
              <tab-content id="nav-community" :faq_items="tab_faq_2" />
              <tab-content id="nav-support" :faq_items="tab_faq_3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabContent from "./TabContent.vue";
import NavButton from "./NavButton.vue";
import commonFaq from "~~/mixins/commonFaq";

export default {
  components: { NavButton, TabContent },
  mixins:[commonFaq],
};
</script>
