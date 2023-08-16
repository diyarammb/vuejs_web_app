<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="model__widget">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#model_widget_collapse"
        aria-expanded="true"
        aria-controls="model_widget_collapse"
      >
        Model
      </button>
    </h2>
    <div
      id="model_widget_collapse"
      class="accordion-collapse collapse show"
      aria-labelledby="model__widget"
      data-bs-parent="#shop_model"
    >
      <div class="accordion-body">
        <div class="shop__widget-search pt-10 pb-25">
          <form action="#">
            <div class="shop__widget-search-input">
              <input type="text" placeholder="Search model" />
              <button type="submit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.64993 14.2999C11.3226 14.2999 14.2999 11.3226 14.2999 7.64993C14.2999 3.97727 11.3226 1 7.64993 1C3.97727 1 1 3.97727 1 7.64993C1 11.3226 3.97727 14.2999 7.64993 14.2999Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.0001 15L13.6001 13.6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div class="shop__widget-list">
          <div class="shop__widget-list-item">
            <input type="checkbox" id="iphone_12" />
            <label for="iphone_12">iPhone 12</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="iphone_12_pro" />
            <label for="iphone_12_pro">iPhone 12 Pro</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="iphone_11_pro" />
            <label for="iphone_11_pro">iPhone 11 Pro</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="samsung" checked />
            <label for="samsung">Samsung Galaxy S31</label>
          </div>
          <div class="shop__widget-list-item">
            <input type="checkbox" id="samsung_s20" />
            <label for="samsung_s20">Samsung Galaxy S20</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
