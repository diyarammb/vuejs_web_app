<template>
  <div :class="`shop__sidebar on-${right_side?'right':'left'}`">
    <div class="shop__widget tp-accordion">
      <div class="accordion" id="shop_category">
        <shop-widget-category />
      </div>
    </div>
    <div class="shop__widget tp-accordion">
      <div class="accordion" id="shop_model">
        <shop-widget-model />
      </div>
    </div>
    <div class="shop__widget tp-accordion">
      <div class="accordion" id="shop_color">
        <shop-widget-color />
      </div>
    </div>
    <div class="shop__widget tp-accordion">
      <div class="accordion" id="shop_price">
        <shop-widget-price />
      </div>
    </div>
  </div>
</template>

<script>
import ShopWidgetCategory from "./filter/ShopWidgetCategory.vue";
import ShopWidgetColor from "./filter/ShopWidgetColor.vue";
import ShopWidgetModel from "./filter/ShopWidgetModel.vue";
import ShopWidgetPrice from "./filter/ShopWidgetPrice.vue";

export default {
  props:{
    right_side:{
      type:Boolean,
      default:false,
    }
  },
  components: {
    ShopWidgetModel,
    ShopWidgetPrice,
    ShopWidgetCategory,
    ShopWidgetColor,
  },
};
</script>
