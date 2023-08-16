<template>
  <div class="team__details-about">
    <div class="container">
      <div class="team__details-about-border pt-90 pb-65">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div
              class="team__details-about-content"
              data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
            >
              <h3 class="team__details-about-title">About moira baxter</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing <br />
                praesent velit viverra sit semper lorem eu cursus vel hendrerit
                elementum morbi curabitur etiam <br />
                nibh justo, lorem aliquet donec sed sit mi dignissim at ante
                massa mattis.
              </p>

              <div class="team__details-about-list pt-10 mb-35">
                <ol>
                  <li>Neque sodales ut etiam sit amet nisl purus.</li>
                  <li>Adipiscing elit aliquam purus viverra suspendisse</li>
                  <li>Mauris commodo quis imperdiet tincidunt</li>
                  <li>Adipiscing elit ut aliquam purus</li>
                </ol>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                Mauris malesuada nisi sit amet augue accumsan tincidunt.
                Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros
                facilisis libero, vitae commodo nunc quam et ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
};
</script>
