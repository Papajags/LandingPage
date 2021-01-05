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
                v-on:input="set_pos_x($event)"
              />
            </li>
            <li>
              Y offset
              <input
                type="number"
                v-model="this.$store.state.shortcuts_pos_y"
                v-on:input="set_pos_y($event)"
              />
            </li>
          </ul>
        </li>
        <li v-if="this.$store.state.show_shortcuts">
          Links <button class="arrow_button">></button>
          <ul class="prop3">
            <li
              v-for="(sht, indexx) in this.$store.state.shortcuts"
              :key="sht.link"
            >
              <div class="link_contain">
                {{ sht.link }}
              </div>
              <input
                type="submit"
                class="special_button"
                value="-"
                v-on:click="remove_shortcut(indexx)"
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
  align-items: center;
  justify-content: center;
}
</style>
<script>
export default {
  components: {},
  methods: {
    show_shortcut: function (event) {
      this.$store.state.show_shortcuts = event.target.checked;
      if (this.$store.state.shortcuts.length == 0)
        this.$store.state.shortcuts = [
          {
            link: "https://www.twitter.com",
            name: "twitter",
            icon: "https://img.icons8.com/fluent/100/000000/twitter.png",
          },
          {
            link: "https://www.facebook.com",
            name: "facebook",
            icon: "https://img.icons8.com/fluent/50/000000/facebook-new.png",
          },
          {
            link: "www.youtube.com",
            name: "youtube",
            icon: "https://img.icons8.com/fluent/240/000000/youtube-play.png",
          },
        ];
      this.$store.commit("save");
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
      this.$store.state.shortcuts.push(shortcut);
      this.$store.commit("save");
    },
    remove_shortcut: function (index) {
      this.$store.state.shortcuts.splice(index, 1);
      this.$store.commit("save");
    },
    set_size: function (event) {
      this.$store.state.shortcuts_size = event.target.value;
      this.$store.commit("save");
    },
    set_pos_x: function (event) {
      this.$store.state.shortcuts_pos_x = event.target.value;
      this.$store.commit("save");
    },
    set_pos_y: function (event) {
      this.$store.state.shortcuts_pos_y = event.target.value;
      this.$store.commit("save");
    },
  },
};
</script>