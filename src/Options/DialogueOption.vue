<template>
  <div class="Contain">
    <ul class="prop1">
      <button class="Option">
        <img src="../assets/speech.png" class="icon" />Dialogue
      </button>
      <ul class="prop2">
        <li>
          <label class="switch">
            <input
              type="checkbox"
              v-model="this.$store.state.show_time"
              v-on:input="display_dialogue($event)"
            />
            <span class="slider round"></span>
          </label>
        </li>
        <li v-if="this.$store.state.show_dialogue">
          Statement
          <input
            type="text"
            v-model="this.$store.state.statement"
            v-on:input="edit_statement($event)"
          />
        </li>
        <li v-if="this.$store.state.show_dialogue">
          Font
          <button class="arrow_button">></button>
          <ul class="prop3">
            <li>
              Font Size
              <input
                type="number"
                v-model="this.$store.state.dialogue_size"
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
                v-model="this.$store.state.dialogue_color"
              />
            </li>
          </ul>
        </li>
        <li v-if="this.$store.state.show_dialogue">
          Position <button class="arrow_button">></button>
          <ul class="prop3">
            <li>
              X offset
              <input
                type="number"
                v-model="this.$store.state.dialogue_pos_x"
                v-bind="this.$store.state.dialogue_pos_x"
                v-on:input="set_pos_x($event)"
              />
            </li>
            <li>
              Y offset
              <input
                type="number"
                v-model="this.$store.state.dialogue_pos_y"
                v-bind="this.$store.state.dialogue_pos_y"
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
  align-items: center;
  justify-content: center;
}
</style>
<script>
export default {
  methods: {
    display_dialogue: function (event) {
      this.$store.state.show_dialogue = event.target.checked;
      this.$store.commit("save");
    },
    edit_statement: function (event) {
      this.$store.state.statement = event.target.value;
      this.$store.commit("save");
    },
    set_size: function (event) {
      this.$store.state.dialogue_size = event.target.value;
      this.$store.commit("save");
    },
    set_color: function (event) {
      this.$store.state.dialogue_color = event.target.value;
      this.$store.commit("save");
    },
    set_pos_x: function (event) {
      this.$store.state.dialogue_pos_x = event.target.value;
      this.$store.commit("save");
    },
    set_pos_y: function (event) {
      this.$store.state.dialogue_pos_y = event.target.value;
      this.$store.commit("save");
    },
  },
};
</script>