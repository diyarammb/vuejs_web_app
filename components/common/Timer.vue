<template>
  <ul>
    <li><span data-days>{{ days }}</span> Days</li>
    <li><span data-hours>{{ minutes }}</span> Hours</li>
    <li><span data-minutes>{{ hours }}</span> Minutes</li>
    <li><span data-seconds>{{ seconds }}</span> Seconds</li>
  </ul>
</template>

<script>
const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

const getPartsofTimeDuration = (duration) => {
  const days = Math.floor(duration / msInADay);
  const hours = Math.floor((duration % msInADay) / msInAHour);
  const minutes = Math.floor((duration % msInAHour) / msInMinute);
  const seconds = Math.floor((duration % msInMinute) / msInSecond);

  return { days, hours, minutes, seconds };
};

export default {
  name: "Time",
  props: {
    endDateTime: String,
  },
  data() {
    return {
      timeParts: {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      const now = Date.now();
      const future = new Date(this.endDateTime);
      const timeDif = future.getTime() - now;
      const timeParts = getPartsofTimeDuration(timeDif);
      timeParts.days =
        timeParts.days <= 9 ? `0${timeParts.days}` : timeParts.days;
      timeParts.minutes =
        timeParts.minutes <= 9 ? `0${timeParts.minutes}` : timeParts.minutes;
      timeParts.hours =
        timeParts.hours <= 9 ? `0${timeParts.hours}` : timeParts.hours;
      timeParts.seconds =
        timeParts.seconds <= 9 ? `0${timeParts.seconds}` : timeParts.seconds;
      this.timeParts = timeParts;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    days() {
      return this.timeParts.days;
    },
    hours() {
      return this.timeParts.hours;
    },
    minutes() {
      return this.timeParts.minutes;
    },
    seconds() {
      return this.timeParts.seconds;
    },
  },
};
</script>
