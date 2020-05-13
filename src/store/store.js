import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export const store = new Vuex.Store({
    state: {
        botname: "yaboi",
        show_time: true,
        show_talker: false,
        background_image: "",
        shortcuts: [{ link: "https://www.twitter.com", name: "twitter" }, { link: "https://www.facebook.com", name: "facebook" }, { link: "www.youtube.com", name: "youtube" }, { link: "https://www.spotify.com/in/", name: "spotify" }]
    },
    mutations: {
        set_botname(state, name) {
            state.botname = name;
        },
        set_bgimg(state, link) {
            state.background_image = link;
        },
        display_time(state, status) {
            state.show_time = status;
        },
        display_talker(state, status) {
            state.show_talker = status;
        },
        add_shortcut(state, status) {
            state.shortcuts.push(status);
            localStorage.setItem("all", state.shortcuts);
        },
        remove_shortcut(state, status) {
            state.shortcuts.splice(status, 1);
        },
        save() {
            localStorage.setItem("all", this.state);
        }
    },
    plugins: [vuexLocal.plugin]

})