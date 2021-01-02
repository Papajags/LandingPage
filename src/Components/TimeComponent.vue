<template >
  <div
    :style="
      '--size:' +
      this.$store.state.time_size +
      '%;' +
      '--color:' +
      this.$store.state.time_color
    "
    v-if="this.$store.state.show_time"
  >
    <div
      class="middle"
      :style="
        '--posx:' +
        this.$store.state.time_pos_x +
        '%;' +
        '--posy:' +
        this.$store.state.time_pos_y +
        '%;'
      "
    >
      {{ time }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      time: "",
      timestamp: "",
      timepos: this.$store.state.time_position,
    };
  },
  created() {
    if (this.$store.state.time_position == null) {
      this.$store.state.time_position = "bottomright";
    }
    setInterval(() => {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.time =
        today.getHours() -
        (today.getHours() > 12 ? 12 : 0) +
        ":" +
        today.getMinutes() +
        (today.getHours() >= 12 ? "pm" : "am");
      this.timestamp = dateTime;
      console.log(this.get_shortcuts);
    }, 10);
  },
};
</script>
<style  scoped>
div {
  font-size: var(--size);
  color: var(--color);
  z-index: -100;
  text-shadow: 3px 5px 10px #000000;
}
.middle {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: var(--posx);
  top: var(--posy);
  width: 100%;
  height: 100%;
}
</style>