<template>
  <section class="donate__area">
    <div class="container">
      <div class="donate__inner grey-bg-4">
        <div class="row">
          <div class="col-xxl-12">
            <div class="donate__wrapper">
              <div class="donate__content mb-45 text-center">
                <h3 class="donate__title">
                  Get involved with contribution, make yourself proud!
                </h3>
                <p>Donate today to support lower taxes for middle class</p>
              </div>
              <div class="donate__form">
                <form>
                  <div
                    class="donate__form-inner d-lg-flex align-items-center justify-content-center"
                  >
                    <div
                      class="donate__ammount-wrapper d-flex flex-wrap align-items-center mr-20"
                    >
                      <div class="donate__ammount">
                        <button type="submit">$10</button>
                      </div>
                      <div class="donate__ammount">
                        <button type="submit">$15</button>
                      </div>
                      <div class="donate__ammount">
                        <button type="submit">$20</button>
                      </div>
                      <div class="donate__ammount">
                        <button type="submit">$25</button>
                      </div>
                      <div class="donate__ammount">
                        <button type="submit">$30</button>
                      </div>
                      <div class="donate__ammount donate__ammount-more">
                        <button type="button" id="donate_more">More</button>
                      </div>
                    </div>
                    <div class="donate__more mb-10">
                      <nuxt-link href="/contact" class="tp-btn-7">Donate Now</nuxt-link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
