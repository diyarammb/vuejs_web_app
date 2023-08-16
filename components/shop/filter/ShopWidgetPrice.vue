<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="price__widget">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#price_widget_collapse"
        aria-expanded="true"
        aria-controls="price_widget_collapse"
      >
        Price
      </button>
    </h2>
    <div
      id="price_widget_collapse"
      class="accordion-collapse collapse show"
      aria-labelledby="price__widget"
      data-bs-parent="#shop_price"
    >
      <div class="accordion-body">
        <div class="shop__widget-list">
          <div class="shop__widget-list-item">
            <input type="checkbox" id="higher" />
            <label for="higher">$10.00 - $49.00</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="high" checked />
            <label for="high">$50.00 - $99.00</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="medium" />
            <label for="medium">$100.00 - $199.00</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="low" />
            <label for="low">$200.00 +</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
