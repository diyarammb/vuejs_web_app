<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="category__widget">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#cagetory_widget_collapse"
        aria-expanded="true"
        aria-controls="cagetory_widget_collapse"
      >
        Categories
      </button>
    </h2>
    <div
      id="cagetory_widget_collapse"
      class="accordion-collapse collapse show"
      aria-labelledby="category__widget"
      data-bs-parent="#shop_category"
    >
      <div class="accordion-body">
        <div class="shop__widget-list">
          <div class="shop__widget-list-item">
            <input type="checkbox" id="iphone" checked />
            <label for="iphone">iPhone Cases (08)</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="android" checked />
            <label for="android">Android Cases (04)</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="accessories" />
            <label for="accessories">Accessories (02)</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
