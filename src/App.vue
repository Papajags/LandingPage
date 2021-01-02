<template>
  <div id="app">
    <img
      class="bg"
      v-if="this.$store.state.custom_background"
      :src="this.$store.state.background_image"
    />
    <div class="using_bg" v-if="this.dim"></div>
    <settings></settings>
    <talker v-if="this.$store.state.show_talker"></talker>
    <div ondrop="this.callitmagic(event)"></div>
    <settingss></settingss>
    <TimeComponent></TimeComponent>
    <ShortcutComponent></ShortcutComponent>
  </div>
</template>

<script>
import TimeComponent from "./Components/TimeComponent.vue";
import ShortcutComponent from "./Components/ShortcutComponent.vue";
import settings from "./Options/settings.vue";
export default {
  name: "App",
  components: {
    settings,
    TimeComponent,
    ShortcutComponent,
  },
  methods: {
    callitmagic(event) {
      console.log("oh da");
      console.log(event);
    },
  },
  computed: {},
  data: function () {
    return { dim: false };
  },
  mounted: function () {},
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
