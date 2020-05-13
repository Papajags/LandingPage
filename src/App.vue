<template>
  <div
    id="app"
    style="background-repeat: no-repeat;
  background-size: cover;min-height: 100%; background-image: url({this.$store.state.background_image});"
  >
    <img class="bg" v-if="this.$store.state.background_image.length > 0" :src="getbglink" />
    <settings></settings>
    <talker v-if="this.$store.state.show_talker"></talker>
    <time_display v-if="this.$store.state.show_time"></time_display>
    <div ondrop="this.callitmagic(event)"></div>
    <shortcuts></shortcuts>
  </div>
</template>

<script>
import settings from "./components/settings.vue";
import talker from "./components/talker.vue";
import time_display from "./components/time_display.vue";
import shortcuts from "./components/shortcuts.vue";
export default {
  name: "App",
  components: {
    settings,
    talker,
    time_display,
    shortcuts
  },
  methods: {
    callitmagic(event) {
      console.log("oh da");
      console.log(event);
    }
  },
  computed: {
    getbglink() {
      return this.$store.state.background_image;
    }
  },
  mounted: function() {}
};
</script>

<style>
.bg {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
body {
  margin: 0px;
  width: 100%;
  height: 100%;
  color: white;
  height: 100%;
  font-family: "Abel", sans-serif;
  background: #2b5876;
  background: -webkit-linear-gradient(to bottom, #4e4376, #2b5876);
  background: linear-gradient(to bottom, #4e4376, #2b5876);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
