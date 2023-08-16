<template>
  <section class="event__area pt-110 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-10 mb-60 text-center">
            <span class="section__title-pre-10">Campaign events</span>
            <h3 class="section__title-10">Upcoming city events</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="event__item-wrapper-10">
            <div v-for="(item,i) in event_data" :key="i" class="event__item-10 transition-3 d-md-flex align-items-center">
              <div class="event__thumb-10 w-img mr-25">
                <nuxt-link href="/event-details">
                  <img :src="item.img" alt="">
                </nuxt-link>
                <div class="event__thumb-10-overlay">
                  <img class="event-thumb-shape" src="~/assets/img/event/10/event-shape-1.png" alt="shape">
                  <h3>{{item.event_thumb_title}}</h3>
                  <span>{{item.event_thumb_subtitle}}</span>
                </div>
              </div>
              <div class="event__item-10-inner d-lg-flex justify-content-between align-items-center">
                <div class="event__content-10">
                  <div class="event__meta-10">
                    <span class="event-tag">
                      <a href="#">{{item.tag}}</a>
                    </span>
                    <span><i class="fa-light fa-clock"></i>{{item.date}}</span>
                  </div>
                  <h3 class="event__title-10">
                    <nuxt-link href="/event-details">{{item.title}}</nuxt-link>
                  </h3>
                  <p>{{item.location}}</p>
                </div>
                <div class="event__more-10 text-lg-end">
                  <nuxt-link href="/contact" class="tp-btn-border-9">Book a Seat <i
                      class="fa-regular fa-chevron-right"></i>
                    </nuxt-link>
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
import polity_event_1 from '~/assets/img/event/10/event-1.jpg';
import polity_event_2 from '~/assets/img/event/10/event-2.jpg';
import polity_event_3 from '~/assets/img/event/10/event-3.jpg';

export default {
  data() {
    return {
      event_data: [
        {
          id: 1,
          img: polity_event_1,
          event_thumb_title: 'Neal	Houston',
          event_thumb_subtitle: 'City mayor',
          tag: 'Conference',
          date: 'July 17, 2022',
          title: 'Cultural Festival & Concert',
          location: '42 nostrand ave, brooklyn. NY',
        },
        {
          id: 2,
          img: polity_event_2,
          event_thumb_title: 'Neal	Houston',
          event_thumb_subtitle: 'City mayor',
          tag: 'Tourist Guide',
          date: 'July 18, 2022',
          title: 'Rising stars obscure heirs reality',
          location: '45 nostrand ave, brooklyn. NY',
        },
        {
          id: 3,
          img: polity_event_3,
          event_thumb_title: 'Neal	Houston',
          event_thumb_subtitle: 'City mayor',
          tag: 'Celebration',
          date: 'July 20, 2022',
          title: 'BUILD architecture Awards',
          location: '48 nostrand ave, brooklyn. NY',
        },
      ]
    }
  }
}
</script>

