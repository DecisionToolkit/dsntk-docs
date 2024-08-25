import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import DsntkName from "./components/DsntkName.vue";
import DsntkVersion from "./components/DsntkVersion.vue";
import Dmn from "./components/Dmn.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('DsntkName', DsntkName)
        app.component('DsntkVersion', DsntkVersion)
        app.component('Dmn', Dmn)
    }
} satisfies Theme
