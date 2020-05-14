import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.css'
import './plugins/element.js'
import store from './store'
import '@/storage'
import moment from 'moment'//导入文件 

Vue.prototype.$moment = moment;//赋值使用

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')