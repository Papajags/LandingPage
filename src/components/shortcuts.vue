<template>
  <div class="shortcuts">
    <button v-for="sht in this.get_shortcuts" :key="sht">
      <a :href="sht.link" target="_blank">
        <img :src="crop(sht.link)" />
        {{getdomainname(sht.link)}}
      </a>
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    get_shortcuts() {
      return this.$store.state.shortcuts;
    }
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
    }
  }
};
</script>


<style  scoped>
.shortcuts {
  position: fixed;
  display: flex;
  justify-content: center;
  left: 0px;
  right: 0px;
  top: 0px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
img {
  margin: 10px;
}
button {
  background: none;
  border: none;
}
a {
  width: 60px;
  height: 60px;
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
  width: 70px;
  height: 70px;
}
</style>