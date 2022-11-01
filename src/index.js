import VKindEditor from "./components/VKindEditor.vue"
import 'mhalo.kindeditor/themes/default/default.css'

export default {
    install(Vue, _options) {
        const options =  (_options || { name: 'VKindEditor' });
        Vue.component(options.name, VKindEditor)
    }
}