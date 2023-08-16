<template>
  <li class="nav-item" role="presentation">
    <div
      :class="`features__list-item white-bg transition-3 nav-link ${
        active ? 'active' : ''
      }`"
      :id="`${id}-tab`"
      data-bs-toggle="tab"
      :data-bs-target="`#${id}`"
      role="tab"
      :aria-controls="`${id}`"
      :aria-selected="active ? 'true' : 'false'"
      tabIndex="-1"
    >
      <div
        class="features__list-item-wrapper d-sm-flex align-items-center justify-content-between white-bg transition-3"
      >
        <div class="features__list-item-inner d-sm-flex align-items-center">
          <div class="features__list-icon mr-20">
            <span v-html="icon"></span>
          </div>
          <div class="features__list-content">
            <h3 class="features__list-title">{{ title }}</h3>
            <p>{{ subtitle }}</p>
          </div>
        </div>
        <div class="features__list-btn">
          <Link href="service-details" class="tp-link-btn-4">
            <span>
              <i class="fa-regular fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    active: Boolean,
    id: String,
    icon: String,
    title: String,
    subtitle: String,
  },
};
</script>
