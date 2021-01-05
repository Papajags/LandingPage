import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);
const vuexPersist = new VuexPersistence({
    key: 'my-es',
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
        shortcuts: [],


        show_dialogue: true,
        statement: "Hello There.",
        dialogue_color: "#ffffff",
        dialogue_size: 200,
        dialogue_pos_x: 0,
        dialogue_pos_y: 20,



    },
    mutations: {
        add_shortcut(state, status) {
            state.shortcuts.push(status);
        },
        remove_shortcut(state, status) {
            state.shortcuts.splice(status, 1);
        },
        save() {
            console.log(this.state);
        }
    },
    plugins: [vuexPersist.plugin]

})