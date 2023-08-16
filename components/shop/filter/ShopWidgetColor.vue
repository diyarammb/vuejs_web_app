<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="color__widget">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#color_widget_collapse"
        aria-expanded="true"
        aria-controls="color_widget_collapse"
      >
        Color
      </button>
    </h2>
    <div
      id="color_widget_collapse"
      class="accordion-collapse collapse show"
      aria-labelledby="color__widget"
      data-bs-parent="#shop_color"
    >
      <div class="accordion-body">
        <div class="shop__widget-list">
          <div class="shop__widget-list-item-2">
            <input type="checkbox" id="c-black" checked />
            <label for="c-black">Black</label>
          </div>
          <div class="shop__widget-list-item-2 has-orange">
            <input type="checkbox" id="c-orange" />
            <label for="c-orange">Orange</label>
          </div>
          <div class="shop__widget-list-item-2 has-green">
            <input type="checkbox" id="c-green" />
            <label for="c-green">Green</label>
          </div>
          <div class="shop__widget-list-item-2 has-red">
            <input type="checkbox" id="c-red" checked />
            <label for="c-red">Red</label>
          </div>
          <div class="shop__widget-list-item-2 has-yellow">
            <input type="checkbox" id="c-yellow" />
            <label for="c-yellow">Yellow</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
