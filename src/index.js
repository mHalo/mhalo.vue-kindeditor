import VKindEditor from "./components/VKindEditor.vue"

export default {
    install(Vue, options) {
        Vue.component('KindEditor', VKindEditor)
    }
}