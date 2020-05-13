<template>
  <div class="settings">
    <ul>
      <li>
        <h2>Settings</h2>
        <ul>
          <li>
            <button>Home</button>
            <ul>
              <li>
                <button>
                  <a>Bot Name</a>
                  <input v-bind:value="get_botname" v-on:input="set_botname($event)" />
                </button>
                <button>
                  <a>Display time</a>
                  <input
                    type="checkbox"
                    name="time"
                    v-model="this.$store.state.show_time"
                    v-on:input="dsiplay_time($event)"
                  />
                </button>
                <!-- <button>
                  <a>Display Quotes</a>
                  <input type="checkbox" name="quote" value="2" />
                </button>-->
                <button>
                  <a>Background Image</a>
                  <input
                    v-bind:value="this.$store.state.background_image"
                    v-on:input="set_bgimg($event)"
                  />
                </button>
                <button>
                  <a>Display Talker (BETA)</a>
                  <input
                    type="checkbox"
                    name="show_talker"
                    value="2"
                    v-on:input="display_taker($event)"
                  />
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button>Shortcuts</button>
            <ul>
              <li>
                <button v-for="(sht,index) in this.get_shortcuts" :key="sht.link">
                  <div class="link_contain">{{sht.link}}</div>
                  <input
                    type="submit"
                    class="add_button"
                    value="-"
                    v-on:click="remove_shortcut(index)"
                  />
                </button>
                <button class="add_element">
                  <input id="shortcut_link" class="add_content" placeholder="Enter URL here" />
                  <input type="submit" class="add_button" value="+" v-on:click="add_shortcut()" />
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    get_botname() {
      return this.$store.state.botname;
    },
    get_shouldshowtime() {
      return this.$store.state.show_time;
    },
    get_shortcuts() {
      return this.$store.state.shortcuts;
    },
    checked: false
  },
  methods: {
    set_botname: function(event) {
      this.$store.commit("set_botname", event.target.value);
    },
    set_bgimg: function(event) {
      this.$store.commit("set_bgimg", event.target.value);
    },
    dsiplay_time: function(event) {
      console.log(event);
      this.$store.commit("display_time", event.target.checked);
    },
    display_taker: function(event) {
      this.$store.commit("display_talker", event.target.checked);
    },
    add_shortcut: function() {
      var shortcut = { name: "something", link: "" };
      shortcut.link = document.getElementById("shortcut_link").value;
      if (shortcut.link.length == 0) return;
      document.getElementById("shortcut_link").value = "";
      this.$store.commit("add_shortcut", shortcut);
    },
    remove_shortcut: function(index) {
      this.$store.commit("remove_shortcut", index);
    }
  }
};
</script>
<style scoped>
.add_element {
  display: flex;
}
.settings {
  display: flex;
  font-family: "Abel", sans-serif;
  color: white;
  display: block;
  font-size: 2vh;
  left: 10px;
  top: 10px;
  position: absolute;
  transition: 0.2s;
}
ul {
  display: flex;
  list-style: none;
  padding: 0px;
  background-color: rgba(21, 20, 20, 0.524);
  margin: 0px;
}
ul ul {
  position: absolute;
  display: none;
  width: max-content;
  flex-direction: column;
  background-color: rgba(102, 102, 102, 0.8);
  /* background-color: rgba(255, 255, 255, 0.6); */
}
ul ul ul {
  display: none;
  left: 100%;
  min-height: 100%;
  max-width: 800px;
  top: 0%;
  background: none;
  background-color: rgba(102, 102, 102, 0.6);
  /* background-color: rgba(255, 255, 255, 0.3); */
}

ul li:hover > ul {
  display: flex;
}
ul li ul li:hover {
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 1);
}
ul li ul li:hover ul li {
  box-shadow: none;
}
ul li ul li:hover ul li button:hover {
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 1);
}

button {
  width: 100%;
  font-size: 14px;
  background: none;
  font-family: "Abel", sans-serif;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border: none;
  transition: 0.4s;
}
.add_content {
  margin-right: 20px;
}

.link_contain {
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
}

.add_button {
  display: block;
  margin: 0px;
  transition: 0.4s;
  border: none;
}
.add_button:hover {
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 1);
}
li {
  transition: 0.4s;
}
h2 {
  font-weight: 100;
  background: none;
  border: white 1px solid;
  font-family: "Abel", sans-serif;
  color: white;
  font-size: 22px;
  padding: 18px;
  transition: 0.4s;
  display: flex;
  align-items: center;
  margin: 0px;
}
ul li:hover h2 {
  background: white;
  color: black;
}
a {
  width: max-content;
  margin-right: 20px;
}
input[type="checkbox"] {
  cursor: pointer;
}
input {
  background: none;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 2px solid white;
  outline: none;
  color: white;
}
::placeholder {
  color: white;
}
</style>