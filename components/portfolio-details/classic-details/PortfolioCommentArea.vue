<template>
  <section class="portfolio__comment grey-bg-7 pt-90 pb-105">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="portfolio__comment-top">
            <h3 class="portfolio__comment-title">Post a Comment</h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="portfolio__comment-form">
            <post-comment-form />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostCommentForm from "~~/components/forms/PostCommentForm.vue";
export default {
  components: { PostCommentForm },
};
</script>
