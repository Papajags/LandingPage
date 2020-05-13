<template >
  <div class="time">{{time}}</div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      time: "",
      timestamp: ""
    };
  },
  created() {
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
    }, 1000);
  }
};
</script>
<style  scoped>
.time {
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 80px;
}
</style>