<style>
* {
	box-sizing: border-box;
}

/* Float four columns side by side */
.column {
	float: left;
	width: 25%;
	padding: 0 5px;
}

/* Clear floats after the columns */
.row:after {
	content: "";
	display: table;
	clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
	.column {
		width: 100%;
		display: block;
		margin-bottom: 10px;
	}
}

/* Style the counter cards */
.card {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	padding: 16px;
	text-align: center;
	background-color: #673c8b;
	color: white;
}

.fa {
	font-size: 50px;
}
</style>

<template>
	<section
		:class="`counter__area counter__border-radius pb-${spacing} p-relative z-index-1`"
	>
		<div class="counter__shape">
			<img
				class="counter__shape-11"
				src="~/assets/img/counter/5/counter-shape-1.png"
				alt="shape"
			/>
			<img
				class="counter__shape-12"
				src="~/assets/img/counter/5/counter-shape-2.png"
				alt="shape"
			/>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-xxl-12">
					<div class="counter__info-5 text-center mb-30">
						<p>
							We completed <span>200+</span> projects yearly successfully &
							counting
						</p>
					</div>
				</div>
			</div>
			<div class="row gx-2">
        <div class="row">
    <div class="column">
      <div class="card">
        <p><i class="fa fa-user text-white"></i></p>
        <h3 class="text-white">
          <transition name="fade">
            {{ partners }}
          </transition>
        </h3>
        <p class="text-white">Partners</p>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <p><i class="fa fa-check text-white"></i></p>
        <h3 class="text-white">
          <transition name="fade">
            {{ projects }}
          </transition>
        </h3>
        <p class="text-white">Projects</p>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <p><i class="fa fa-user text-white"></i></p>
        <h3 class="text-white">
          <transition name="fade">
            {{ clients }}
          </transition>
        </h3>
        <p class="text-white">Happy Clients</p>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <p><i class="fa fa-coffee text-white"></i></p>
        <h3 class="text-white">
          <transition name="fade">
            {{ meetings }}
          </transition>
        </h3>
        <p class="text-white">Meetings</p>
      </div>
    </div>
  </div>
    

     
 
 
			</div>
		</div>
	</section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
	 
  data() {
    return {
      partners: 0,
      projects: 0,
      clients: 0,
      meetings: 0
    };
  },
  created() {
    this.animateValues();
  },
  methods: {
    animateValues() {
  const animationDuration = 1000; // Animation duration in milliseconds

  const startAnimation = () => {
    const startTime = performance.now();

    const animate = (timestamp) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      this.partners = Math.max(Math.floor(this.partners * progress), 0);
      this.projects = Math.max(Math.floor(this.projects * progress), 0);
      this.clients = Math.max(Math.floor(this.clients * progress), 0);
      this.meetings = Math.max(Math.floor(this.meetings * progress), 0);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Fetch the total values from an API or assign them directly
  const partnersTotal = 10;
  const projectsTotal = 200;
  const clientsTotal = 100;
  const meetingsTotal = 100;

  // this.partners = 0;
  // this.projects = 0;
  // this.clients = 0;
  // this.meetings = 0;

  setTimeout(() => {
    this.partners = partnersTotal;
  }, animationDuration * 2);

  setTimeout(() => {
    this.projects = projectsTotal;
  }, animationDuration * 2);

  setTimeout(() => {
    this.clients = clientsTotal;
  }, animationDuration * 3);

  setTimeout(() => {
    this.meetings = meetingsTotal;
  }, animationDuration * 4);

  setTimeout(startAnimation, animationDuration);
}
  }
};
</script>
