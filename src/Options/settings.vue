<template>
  <div
    class="settings"
    @mouseover="updateValue(true)"
    @mouseout="updateValue(false)"
  >
    <div class="main">
      <button class="settings_button">
        <img src="../assets/settings.png" height="32px" width="32px" />
      </button>
      <div class="choice">
        <TimeOption></TimeOption>
        <BackgroundOption></BackgroundOption>
        <ShortcutOption></ShortcutOption>
        <DialogueOption> </DialogueOption>
      </div>
    </div>
  </div>
</template>
<style >
.settings {
  display: flex;
  color: white;
  left: 10px;
  top: 10px;
  text-align: center;
  position: absolute;
  transition: 0.2s;
  justify-content: center;
}
.main {
  display: flex;
  flex-direction: column;
  padding: 0px;
  /* background-color: rgba(21, 20, 20, 0.524); */
  margin: 0px;
  height: 100%;
  width: 100%;
  text-shadow: 3px 5px 10px #000000;
}
.settings_button {
  height: 70px;
  background-color: rgba(21, 20, 20, 0.524);
  color: white;
  outline: 0;
  border: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: -10px;
  text-shadow: 3px 5px 10px #000000;
  width: 60px;
  transition: 0.1s;
}
.settings:hover .settings_button {
  height: 70px;
  width: 160px;
  background-color: rgba(36, 76, 255, 0.863);
  transition: 0.2s;
}
.choice {
  display: none;
  flex-direction: column;
}
.icon {
  height: 24px;
  widows: 24px;
}
.main:hover .choice {
  display: flex;
}

.prop1 {
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  height: 50px;
  text-shadow: 3px 5px 10px #000000;
}
.prop1:hover .Option {
  background-color: rgba(36, 76, 255, 0.863);
  margin: 6px;
  transition: 0.1s;
}
.prop1 .Option {
  width: 100%;
  background-color: rgba(21, 20, 20, 0.824);
  color: white;
  outline: 0;
  border: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: -10px;
}
.prop1 .prop2 {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: rgba(21, 20, 20, 0.524);
  left: 100%;
  width: 200%;
  top: 33%;
  transition: 0.4s;
  text-shadow: 3px 5px 10px #000000;
  padding: 0px;
}
.prop3 {
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: rgba(21, 20, 20, 0.324);
  left: 100%;
  top: 0%;
  transition: 0.4s;
  text-shadow: 3px 5px 10px #000000;
  min-height: 100%;
  min-width: 100%;
  padding: 0px;
}
.prop2 li:hover .prop3 {
  display: flex;
}
.prop2 li {
  padding: 10px;
  transition: 0.2s;
}
.prop1:hover .prop2 {
  min-height: 67%;
}
.prop1 li {
  display: none;
}
.Contain:hover li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 2px;
}

.Contain .prop2 li:hover {
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 1);
  background-color: rgba(36, 76, 255, 0.863);
  margin: -3px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.detail_button {
  border: solid;
  border-width: 2px;
  background-color: transparent;
  color: white;
}
.detail_button:hover {
  border: solid;
  border-width: 2px;
  background-color: rgba(224, 224, 224, 0.76);
  transition: 0.2s;
}
input {
  background: transparent;
  outline: 0px;
  border: 0px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.959);
  border-radius: 0px;
  text-align: center;
  color: white;
}
input[type="text"] {
  background-color: rgba(146, 146, 146, 0.842);
  padding: 12px;
  border: 0px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 1);
}
input[type="number"] {
  background-color: rgba(146, 146, 146, 0.842);
  padding: 12px;
  border: 0px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 1);
}

#shortcut_link {
  background-color: rgba(146, 146, 146, 0.842);
  padding: 12px;
  border: 0px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 1);
}
.special_button {
  background-color: #f7f7f7;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f7f7f7),
    to(#e7e7e7)
  );
  background-image: -webkit-linear-gradient(top, #f7f7f7, #e7e7e7);
  background-image: -moz-linear-gradient(top, #f7f7f7, #e7e7e7);
  background-image: -ms-linear-gradient(top, #f7f7f7, #e7e7e7);
  background-image: -o-linear-gradient(top, #f7f7f7, #e7e7e7);
  text-align: center;
  border-radius: 50%;
  box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
  color: black;
  width: 30px;
  height: 30px;
  font-size: 24px;
  transition: 0.12s;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: whitesmoke;
  opacity: 1; /* Firefox */
}
.special_button:hover {
  box-shadow: 0px 3px 20px #aaa, inset 0px 2px 3px #fff;
}
.arrow_button {
  background-color: transparent;
  background-image: none;
  text-align: center;
  border-radius: 50%;
  content: ">";
  /* box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff; */
  outline: 0px;
  border: 0px;
  color: white;
  width: 30px;
  height: 30px;
  font-size: 24px;
  transition: 0.12s;
}
</style>
<script>
import TimeOption from "./TimeOption.vue";
import BackgroundOption from "./BackgroundOption.vue";
import ShortcutOption from "./ShortcutOption.vue";
import DialogueOption from "./DialogueOption.vue";

export default {
  components: {
    TimeOption,
    BackgroundOption,
    ShortcutOption,
    DialogueOption,
  },

  methods: {
    DialogueOptionmbg: function () {
      this.$store.state.dim_bg = true;
    },
    dontdim: function () {
      this.$store.state.dim_bg = false;
    },
    updateValue: function (value) {
      this.$emit("dim", value);
    },
  },
};
</script>