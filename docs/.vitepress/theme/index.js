// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './vars.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    // app.component('MyGlobalComponent', /* ... */)
  }
}
