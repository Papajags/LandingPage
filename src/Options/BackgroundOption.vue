<template>
  <div class="Contain">
    <ul class="prop1">
      <button class="Option">
        <img src="../assets/image.png" class="icon" />Background
      </button>
      <ul class="prop2">
        <li>
          <label class="switch">
            <input
              type="checkbox"
              v-model="this.$store.state.custom_background"
              v-on:input="enable_img($event)"
            />
            <span class="slider round"></span>
          </label>
        </li>
        <li v-if="this.$store.state.custom_background">
          Image URL
          <input
            type="text"
            v-model="this.$store.state.background_image"
            v-bind="this.$store.state.background_image"
            v-on:input="set_img($event)"
          />
        </li>
      </ul>
    </ul>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  computed: {
    get_timesize() {
      return this.$store.state.time_size;
    },
  },
  components: {},
  methods: {
    enable_img: function (event) {
      this.$store.state.custom_background = event.target.checked;
    },
    set_img: function (event) {
      this.$store.state.background_image = event.target.value;
      if (event.target.value == "")
        this.$store.state.background_image =
          "https://free4kwallpapers.com/uploads/originals/2020/12/19/paris-france-wallpaper.jpg";
    },
    //set_grad: function (event) {},
  },
};
</script>