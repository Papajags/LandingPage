<template >
  <div
    :style="
      '--size:' +
      this.$store.state.dialogue_size +
      '%;' +
      '--color:' +
      this.$store.state.dialogue_color
    "
    v-if="this.$store.state.show_dialogue"
  >
    <div
      class="middle"
      :style="
        '--posx:' +
        this.$store.state.dialogue_pos_x +
        '%;' +
        '--posy:' +
        this.$store.state.dialogue_pos_y +
        '%;'
      "
    >
      {{ this.$store.state.statement }}
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
div {
  font-size: var(--size);
  color: var(--color);
  z-index: -1000;
  text-shadow: 3px 5px 10px #000000;
}
.middle {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: var(--posx);
  top: var(--posy);
  width: 100%;
  height: 100%;
}
</style>