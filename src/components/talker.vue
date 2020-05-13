<template>
  <div class="content">
    <div class="Statement">Hello. Its me, {{this.$store.state.botname}}</div>
    <div class="input_taker">
      <span v-html="'<'"></span>
      {{statement}}
      <!-- <input value="enter something" v-on:input="sayit()" /> -->
      <input value="enter something" v-on:input="startListening()" />
      <span v-html="'>'"></span>
    </div>
    <div class="square"></div>
  </div>
</template>

<script>
import Artyom from "artyom.js";
export default {
  data() {
    var UserDictation, statement;
    return { UserDictation, statement };
    // return { UserDictation };
  },
  mounted() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.start();
    recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
    function startSpeechRecognition() {
      console.log("Voice activated, SPEAK");
    }
    recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
    function resultOfSpeechRecognition(event) {
      this.statement = event.results[event.resultIndex][0].transcript;
      console.log(this.statement);
      console.log(event.results[event.resultIndex][0].transcript);
    }
  },
  computed: {
    current_statement() {
      return this.statement;
    }
  },
  methods: {
    startListening() {
      const artyom = new Artyom();
      setTimeout(function() {
        artyom
          .initialize({
            lang: "en-IN", // A lot of languages are supported. Read the docs !
            continuous: true, // Artyom will listen forever
            listen: true, // Start recognizing
            debug: false, // Show everything in the console
            speed: 1.4 // talk normally
          })
          .then(function() {
            // artyom.say("Hi jags! its your boi");
          });
      }, 250);
      var settings = {
        continuous: true, // Don't stop never because i have https connection
        onResult: function(text) {
          // this.statement = text;
          // alert(this.statement);
          console.log("Recognized text: ", text);
        },
        onStart: function() {
          console.log("Dictation started by the user");
        },
        onEnd: function() {
          alert("Dictation stopped by the user");
        }
      };
      this.UserDictation = artyom.newDictation(settings);
      this.UserDictation.start();
    },
    setCommands() {
      // this.startListening();
    },
    sayit() {
      this.UserDictation.start();
    }
  }
};
</script>

<style scoped>
.Statement {
  font-size: 10vh;
  margin: 20px;
  z-index: 20;
}
.bg {
  width: 100%;
  height: 100vh;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.square {
  border: white;
  height: 50vh;
  width: 50vh;
  border: solid 5px;
  position: absolute;
  animation: rotate 8s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.input_taker {
  font-family: "Bebas Neue", cursive;
  font-size: 3vh;
  z-index: 20;
}

input {
  font-family: "Bebas Neue", cursive;
  color: white;
  background: none;
  border: none;
  font-size: inherit;
  text-align: center;
}
</style>