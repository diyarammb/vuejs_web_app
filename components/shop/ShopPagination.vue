<template>
  <div class="tp-pagination tp-pagination-style-2">
    <nav>
      <ul>
        <li>
          <NuxtLink href="/shop" class="tp-pagination-prev prev page-numbers">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.17749 10.105L1.62499 5.55248L6.17749 0.999981"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3767 5.55249L1.75421 5.55249"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Prev
          </NuxtLink>
        </li>
        <li>
          <NuxtLink href="/shop">1</NuxtLink>
        </li>
        <li>
          <span class="current">2</span>
        </li>
        <li>
          <NuxtLink href="/shop">3</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/shop" class="next page-numbers">
            Next
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.82422 1L14.3767 5.5525L9.82422 10.105"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.625 5.55249H14.2475"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
