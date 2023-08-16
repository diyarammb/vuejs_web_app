<template>
  <tr>
    <td class="product-thumbnail">
      <nuxt-link href="/product-details">
        <img :src="img" alt="cart img"/>
      </nuxt-link>
    </td>
    <td class="product-name">
      <nuxt-link href="/product-details">{{title}}</nuxt-link>
    </td>
    <td class="product-price"><span class="amount">${{price}}</span></td>
    <td class="product-quantity">
      <div class="tp-product-quantity mt-10 mb-10">
        <span class="tp-cart-minus" @click="handleDecrement">
          <svg
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <input class="tp-cart-input" type="text" :value="count" />
        <span class="tp-cart-plus" @click="handleIncrement">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.21924 7H13.3836"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.30176 13V1"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </td>
    <td class="product-subtotal"><span class="amount">${{price}}</span></td>
    <td class="product-remove">
      <button type="submit"><i class="fa fa-times"></i></button>
    </td>
  </tr>
</template>

<script>
export default {
  props:{
    img:String,
    title:String,
    price:String,
  },
  data () {
    return {
      count:1,
    }
  },
  methods:{
    handleIncrement (){
      this.count = this.count + 1
    },
    handleDecrement (){
      if(this.count > 1){
        this.count = this.count - 1
      }
    }
  }
};
</script>
