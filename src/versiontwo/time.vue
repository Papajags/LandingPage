<template>
  <div class="Time">
    <ul>
      <button>Time</button>
      <li>
        <ul>
          <li>23423423</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.timee {
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
}
ul:hover ul {
  display: flex;
}
</style>
<script>
export default {};
</script>