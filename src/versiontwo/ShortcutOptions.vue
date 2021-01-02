<template>
  <div class="Contain">
    <ul class="prop1">
      <button class="Option">
        <img src="../assets/shortcut.png" class="icon" />Shortcuts
      </button>
      <ul class="prop2">
        <li>
          <label class="switch">
            <input
              type="checkbox"
              v-model="this.$store.state.show_shortcuts"
              v-on:input="show_shortcut($event)"
            />
            <span class="slider round"></span>
          </label>
        </li>
        <li v-if="this.$store.state.show_shortcuts">
          Size
          <input
            type="number"
            v-model="this.$store.state.shortcuts_size"
            v-bind="this.$store.state.shortcuts_size"
            v-on:input="set_size($event)"
          />
        </li>
        <li v-if="this.$store.state.show_shortcuts">
          Position <button class="arrow_button">></button>
          <ul class="prop3">
            <li>
              X offset
              <input
                type="number"
                v-model="this.$store.state.shortcuts_pos_x"
                v-bind="this.$store.state.shortcuts_pos_x"
                v-on:input="set_pos_x($event)"
              />
            </li>
            <li>
              Y offset
              <input
                type="number"
                v-model="this.$store.state.shortcuts_pos_y"
                v-bind="this.$store.state.shortcuts_pos_y"
                v-on:input="set_pos_y($event)"
              />
            </li>
          </ul>
        </li>
        <li v-if="this.$store.state.show_shortcuts">
          Links <button class="arrow_button">></button>
          <ul class="prop3">
            <li
              v-for="(sht, index) in this.$store.state.shortcuts"
              :key="sht.link"
            >
              <div class="link_contain">
                {{ sht.link }}
              </div>
              <input
                type="submit"
                class="special_button"
                value="-"
                v-on:click="remove_shortcut(index)"
              />
            </li>
          </ul>
        </li>

        <li v-if="this.$store.state.show_shortcuts">
          Add a shortcut <button class="arrow_button">></button>
          <ul class="prop3">
            <li>
              Name
              <input
                type="text"
                placeholder="Enter Name Here"
                id="shortcut_name"
              />
            </li>
            <li>
              Icon
              <input
                type="text"
                placeholder="Enter Icon URL Here"
                id="shortcut_icon"
              />
            </li>
            <li>
              Link
              <input
                type="text"
                placeholder="Enter URL Here"
                id="shortcut_link"
              />
            </li>
            <li>
              <input
                type="submit"
                class="special_button"
                value="+"
                v-on:click="add_shortcut()"
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
  computed: {
    get_timesize() {
      return this.$store.state.time_size;
    },
  },
  components: {},
  methods: {
    show_shortcut: function (event) {
      this.$store.state.show_shortcuts = event.target.checked;
    },
    add_shortcut: function () {
      var shortcut = { name: "something", link: "" };
      shortcut.name = document.getElementById("shortcut_name").value;
      shortcut.icon =
        document.getElementById("shortcut_icon").value > 0
          ? document.getElementById("shortcut_icon").value
          : "https://img.icons8.com/dusk/64/000000/globe-earth.png";
      shortcut.link = document.getElementById("shortcut_link").value.length;
      if (shortcut.link.length == 0) return;
      document.getElementById("shortcut_link").value = "";
      this.$store.commit("add_shortcut", shortcut);
    },
    remove_shortcut: function (index) {
      this.$store.commit("remove_shortcut", index);
    },
    change_pos: function (to) {
      console.log(to);
      this.$store.state.shortcuts_position = to;
    },
    set_size: function (event) {
      this.$store.state.shortcuts_size = event.target.value;
    },
    set_pos_x: function (event) {
      this.$store.state.shortcuts_pos_x = event.target.value;
    },
    set_pos_y: function (event) {
      this.$store.state.shortcuts_pos_y = event.target.value;
    },
  },
};
</script>