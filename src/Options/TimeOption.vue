<template>
  <div class="Contain">
    <ul class="prop1">
      <button class="Option">
        <img src="../assets/time.png" class="icon" />Time
      </button>
      <ul class="prop2">
        <li>
          <label class="switch">
            <input
              type="checkbox"
              v-model="this.$store.state.show_time"
              v-on:input="Enable($event)"
            />
            <span class="slider round"></span>
          </label>
        </li>
        <li v-if="this.$store.state.show_time">
          Font
          <button class="arrow_button">></button>
          <ul class="prop3">
            <li>
              Font Size
              <input
                type="number"
                v-model="this.$store.state.time_size"
                v-on:input="set_size($event)"
              />
            </li>
            <li>
              Font Color
              <input
                type="color"
                id="colorpicker"
                value="#0000ff"
                v-on:input="set_color($event)"
                v-model="this.$store.state.time_color"
              />
            </li>
          </ul>
        </li>
        <li v-if="this.$store.state.show_time">
          Position <button class="arrow_button">></button>
          <ul class="prop3">
            <li>
              X offset
              <input
                type="number"
                v-model="this.$store.state.time_pos_x"
                v-bind="this.$store.state.time_pos_x"
                v-on:input="set_pos_x($event)"
              />
            </li>
            <li>
              Y offset
              <input
                type="number"
                v-model="this.$store.state.time_pos_y"
                v-bind="this.$store.state.time_pos_y"
                v-on:input="set_pos_y($event)"
              />
            </li>
          </ul>
        </li>
      </ul>
    </ul>
  </div>
</template>
<style scoped>
button {
  display: flex;
  /* align-content: center; */
  align-items: center;
  justify-content: center;
}
</style>
<script>
export default {
  methods: {
    Enable: function (event) {
      this.$store.state.show_time = event.target.checked;
      this.$store.commit("save");
    },
    change_pos: function (to) {
      this.$store.state.time_position = to;
      this.$store.commit("save");
    },
    set_size: function (event) {
      this.$store.state.time_size = event.target.value;
      this.$store.commit("save");
    },
    set_color: function (event) {
      this.$store.state.time_color = event.target.value;
      this.$store.commit("save");
    },
    set_pos_x: function (event) {
      this.$store.state.time_pos_x = event.target.value;
      this.$store.commit("save");
    },
    set_pos_y: function (event) {
      this.$store.state.time_pos_y = event.target.value;
      this.$store.commit("save");
    },
  },
};
</script>