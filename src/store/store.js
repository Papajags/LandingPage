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
        show_talker: false,
        dim_bg: false,

        show_time: true,
        time_color: "#ffffff",
        time_size: 400,
        time_pos_x: 0,
        time_pos_y: 0,

        custom_background: false,
        background_image: "https://images.unsplash.com/photo-1596779845727-d88eb78a1b08?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2091&q=80",
        show_shortcuts: true,
        shortcuts_position: 'middle',
        shortcuts_pos_x: 0,
        shortcuts_pos_y: 0,
        shortcuts_size: 100,
        shortcuts: [{ link: "https://www.twitter.com", name: "twitter", icon: "https://img.icons8.com/fluent/100/000000/twitter.png", }, { link: "https://www.facebook.com", name: "facebook", icon: "https://img.icons8.com/cute-clipart/512/000000/facebook-new.png" }, { link: "www.youtube.com", name: "youtube", icon: "https://img.icons8.com/fluent/240/000000/youtube-play.png" },],
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