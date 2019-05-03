import Vue from 'vue'
import App from './App'
import '../static/colorui/icon.css'
import '../static/colorui/main.css'
import '../static/colorui/animation.css'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
