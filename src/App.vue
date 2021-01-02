<template>
  <div id="app">
    <img
      class="bg"
      v-if="this.$store.state.custom_background"
      :src="getbglink"
    />
    <div class="using_bg" v-if="this.dim"></div>
    <settings></settings>
    <talker v-if="this.$store.state.show_talker"></talker>
    <TimeComponent v-if="this.$store.state.show_time"></TimeComponent>
    <div ondrop="this.callitmagic(event)"></div>
    <settingss></settingss>
    <shortcuts></shortcuts>
  </div>
</template>

<script>
import TimeComponent from "./versiontwo/TimeComponent.vue";
import shortcuts from "./versiontwo/shortcuts.vue";
import settings from "./versiontwo/settings.vue";
export default {
  name: "App",
  components: {
    settings,
    TimeComponent,
    shortcuts,
  },
  methods: {
    callitmagic(event) {
      console.log("oh da");
      console.log(event);
    },
  },
  computed: {
    getbglink() {
      return this.$store.state.background_image;
    },
  },
  data: function () {
    return { dim: false };
  },
  mounted: function () {},
  // style="
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   min-height: 100%;
  //   background-image: url({this.$store.state.background_image});
  // "
};
</script>

<style>
.using_bg {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.524);
  position: absolute;
  z-index: -10;
  transition: 01s;
}

.bg {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1000;
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
