<template>
  <div
    :class="`tab-pane fade ${active?'show active':''}`"
    :id="id"
    role="tabpanel"
    :aria-labelledby="`${id}-tab`"
  >
    <div class="vision__item">
      <div class="vision__thumb m-img mb-30">
        <img :src="img" alt="" />
      </div>
      <div class="vision__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur
          numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur
          error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis
          viverra ornare, eros dolor interdum nulla, commodo diam libero.
        </p>

        <div class="vision__list">
          <ul>
            <li>
              <span>
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              1x Lorem ipsum dolor sit
            </li>
            <li>
              <span>
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5451 1.27344L3.9201 7.04884L1.36328 4.42366"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Eiusmod incididunt ut labore et
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    img:String,
    id:String,
    active:Boolean,
  }
};
</script>
