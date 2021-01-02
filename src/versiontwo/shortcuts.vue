<template>
  <div
    class="shortcuts_top"
    v-if="this.$store.state.show_shortcuts"
    :style="
      '--posx:' +
      this.$store.state.shortcuts_pos_x +
      '%;' +
      '--posy:' +
      this.$store.state.shortcuts_pos_y +
      '%;'
    "
  >
    <button v-for="sht in this.get_shortcuts" :key="sht">
      <a :href="sht.link" :style="link_size" target="_blank">
        <img :src="sht.icon" />
        {{ sht.name }}
      </a>
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    get_shortcuts() {
      return this.$store.state.shortcuts;
    },
    link_size() {
      return {
        "--size": this.$store.state.shortcuts_size + "px",
        "--hoversize": this.$store.state.shortcuts_size * 2 + "px",
      };
    },
  },
  methods: {
    crop(link) {
      return (
        "https://www.google.com/s2/favicons?domain=" +
        this.getdomainname(link) +
        ".com"
      );
    },
    getdomainname(link) {
      var dom = link.substring(link.indexOf(".") + 1, link.lastIndexOf("."));
      return dom;
    },
  },
};
</script>


<style  scoped>
.shortcuts_top {
  position: fixed;
  display: flex;
  justify-content: center;
  left: var(--posx);
  top: var(--posy);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: -100;
}
img {
  margin: 10px;
  height: 33%;
  width: auto;
}
button {
  background: none;
  border: none;
}
a {
  width: var(--size);
  height: var(--size);
  margin: 10px;
  background-color: rgba(102, 102, 102, 0.219);
  border: none;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  color: white;
  text-decoration: none;
  font-family: "Abel", sans-serif;
  white-space: nowrap;
  overflow: hidden;
}
a:hover {
  width: var(--hoversize);
  height: var(--hoversize);
}
</style>