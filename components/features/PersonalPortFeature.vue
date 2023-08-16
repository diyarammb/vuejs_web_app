<template>
  <section class="features__area pt-140 pb-140">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6">
          <div class="features__wrapper-9 mr-30">
            <div
              v-for="list in feature_contents"
              :key="list.id"
              @click="handleServiceActive(list.id)"
              :class="`features__content-9 features-item-content ${
                serviceActive === `features-img-${list.id}` ? 'active' : ''
              }`"
              :rel="serviceActive"
            >
              <span>{{ list.subtitle }}</span>
              <h3 class="features__title-9">{{ list.title }}</h3>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-6 d-none d-md-block">
          <div class="features__thumb-wrapper-9 pl-20">
            <div id="features-item-thumb" :class="serviceActive">
              <div
                v-for="(item, i) in feature_thumbs"
                :key="i"
                :class="`features__thumb-9 transition-3 ${item.ref} ${
                  serviceActive === item.ref ? 'active' : ''
                }`"
              >
                <img :src="item.img" alt="image" />
                <div class="features__thumb-9-content">
                  <p>
                    “I design beautifully simple things,and i love what i do.”
                  </p>

                  <div class="features-users">
                    <img src="~/assets/img/users/user-1.jpg" alt="user" />
                    <img src="~/assets/img/users/user-2.jpg" alt="user" />
                    <img src="~/assets/img/users/user-3.jpg" alt="user" />
                  </div>
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
import feature_thumb_1 from "~/assets/img/features/9/features-1.jpg";
import feature_thumb_2 from "~/assets/img/features/9/features-2.jpg";
import feature_thumb_3 from "~/assets/img/features/9/features-3.jpg";
import feature_thumb_4 from "~/assets/img/features/9/features-4.jpg";

export default {
  data() {
    return {
      serviceActive: "features-img-2",
      feature_contents: [
        { id: 1, subtitle: "Strategy", title: "Concept" },
        { id: 2, subtitle: "Analysis", title: "Research" },
        { id: 3, subtitle: "Development", title: "Design" },
        { id: 4, subtitle: "Prototyping", title: "Animation" },
      ],
      feature_thumbs: [
        { ref: "features-img-1", img: feature_thumb_1 },
        { ref: "features-img-2", img: feature_thumb_2 },
        { ref: "features-img-3", img: feature_thumb_3 },
        { ref: "features-img-4", img: feature_thumb_4 },
      ],
    };
  },
  methods: {
    handleServiceActive(id) {
      this.serviceActive = `features-img-${id}`;
    },
  },
};
</script>
