<template>
  <section :class="`subscribe__area p-relative z-index-1 ${el_style?'pt-120 pb-120' : 'pt-70 grey-bg-7'}`">
    <div v-if="!el_style" class="subscribe__overlay"></div>
    <div class="container">
      <div class="subscribe__inner p-relative z-index-1 theme-bg-6 fix">
        <div class="subscribe__shape">
          <img
            class="subscribe__shape-1"
            src="~/assets/img/cta/6/subscribe-shape-1.png"
            alt="subscribe__shape"
          />
          <img
            class="subscribe__shape-2"
            src="~/assets/img/cta/6/subscribe-shape-2.png"
            alt="subscribe__shape"
          />
        </div>
        <div class="row justify-content-center">
          <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-10 col-sm-11">
            <div class="subscribe__wrapper text-center">
              <h3 class="subscribe__title">Subscriber to Newsletter</h3>
              <p>Uncover,analyze,track,and report on SEO data.</p>

              <div class="subscribe__form text-start">
                <form>
                  <div class="subscribe__input">
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                    />
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
                <div class="subscribe__form-list text-sm-center">
                  <ul>
                    <li>
                      <span>
                        <i class="fa-regular fa-check"></i> 
                        No credit card required
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="fa-regular fa-check"></i> 
                        Cancel anytime
                      </span>
                    </li>
                  </ul>
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
export default {
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
};
</script>
