<!-- <template>
  <section class="pricing__area pt-110 pb-140 p-relative z-index-1">
    <div class="pricing__shape">
      <img
        class="pricing__shape-2"
        src="~/assets/img/price/5/shape/price-shape-1.png"
        alt="shape"
      />
      <img
        class="pricing__shape-3"
        src="~/assets/img/price/5/shape/price-shape-2.png"
        alt="shape"
      />
      <img
        class="pricing__shape-4"
        src="~/assets/img/price/5/shape/price-shape-3.png"
        alt="shape"
      />
      <img
        class="pricing__shape-5"
        src="~/assets/img/price/5/shape/price-shape-4.png"
        alt="shape"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-5 mb-50 text-center">
            <span class="section__title-pre-5">Pricing Plan</span>
            <h3 class="section__title-5">Plans for Everyone</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
          <div class="pricing__tab-nav tp-tab mb-50 mx-auto">
            <nav>
              <div
                class="nav nav-tabs price-tab-slide justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <label for="price-tab-check" class="nav justify-content-center">
                  <span
                    class="nav-link"
                    id="nav-monthly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-monthly"
                    role="tab"
                    aria-controls="nav-monthly"
                    aria-selected="true"
                    >Billed monthly</span
                  >
                  <input type="checkbox" id="price-tab-check" />
                  <i></i>
                  <span
                    class="nav-link active"
                    id="nav-yearly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-yearly"
                    role="tab"
                    aria-controls="nav-yearly"
                    aria-selected="false"
                    >Billed yearly <span>-35%</span></span
                  >
                </label>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div
            class="tab-content"
            id="nav-tabContent"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <div
              v-for="(item, i) in pricing_data"
              :key="i"
              :class="`tab-pane fade ${item.active ? 'show active' : ''}`"
              :id="`${item.id}`"
              role="tabpanel"
              :aria-labelledby="`${item.id}-tab`"
              tabIndex="0"
            >
              <div class="row">
                <div
                  v-for="(item_box, i) in item.pricing_items"
                  :key="i"
                  class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                >
                  <div
                    :class="`pricing__item-5 d-flex flex-column ${
                      item_box.has_popular ? 'has-popular' : ''
                    } mb-40`"
                  >
                    <div
                      v-if="item_box.has_popular"
                      class="pricing__popular"
                    >
                      <p>MOST POPULAR</p>
                    </div>

                    <div class="pricing__top-5 grey-bg-10 p-relative">
                      <div class="pricing__icon-5">
                        <img :src="item_box.icon" alt="icon" />
                      </div>
                      <div class="pricing__title-wrapper">
                        <h3 class="pricing__title-5">
                          ${{item_box.price}}
                          <span>/{{item_box.price_text}}</span>
                        </h3>
                        <p>{{ item_box.text }}</p>
                      </div>
                      <div class="pricing__tag-5">
                        <span>{{ item_box.tag }}</span>
                      </div>
                    </div>
                    <div class="pricing__content-5">
                      <div
                        class="pricing__content-5-inner d-flex flex-column justify-content-between"
                      >
                        <div class="pricing__feature-5">
                          <p>{{ item_box.feature_text }}</p>
                          <ul>
                            <li v-for="(l, i) in item_box.lists" :key="i">
                              {{ l }}
                            </li>
                          </ul>
                        </div>
                        <div class="pricing__btn-5">
                          <nuxt-link href="/contact" class="tp-btn-grey w-100">
                            Choose Plan
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> -->

<script>
// price icon
import price_icon_1 from "~/assets/img/price/5/price-icon-1.png";
import price_icon_2 from "~/assets/img/price/5/price-icon-2.png";
import price_icon_3 from "~/assets/img/price/5/price-icon-3.png";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      pricing_data: [
        {
          id: "nav-monthly",
          pricing_items: [
            {
              icon: price_icon_1,
              price: 0,
              price_text: "free",
              text: "Perfect Plan for Starters.",
              tag: "Starter",
              feature_text: "Includes:",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
              ],
            },
            {
              has_popular: true,
              icon: price_icon_2,
              price: 150,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
                "Customer Managemet",
              ],
            },
            {
              icon: price_icon_3,
              price: 220,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "User provisioning (SCIM)",
                "Databases with rich property types",
                "Custom guest editors",
                "24 hour support",
                "Customer Managemet",
              ],
            },
          ],
        },
        {
          id: "nav-yearly",
          active: true,
          pricing_items: [
            {
              icon: price_icon_1,
              price: 0,
              price_text: "free",
              text: "Perfect Plan for Starters.",
              tag: "Starter",
              feature_text: "Includes:",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
              ],
            },
            {
              has_popular: true,
              icon: price_icon_2,
              price: 198,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
                "Customer Managemet",
              ],
            },
            {
              icon: price_icon_3,
              price: 298,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "User provisioning (SCIM)",
                "Databases with rich property types",
                "Custom guest editors",
                "24 hour support",
                "Customer Managemet",
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
