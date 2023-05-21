import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    Layout: Layout,
}
