import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'

// 公用组件
import MyCenter from "./components/mycenter.vue"
import HelpCom from "./components/HelpCom.vue"
Vue.component("my-center",MyCenter);
Vue.component("help-com",HelpCom);

Vue.config.productionTip = false
axios.defaults.baseURL="http://luoyi:8801"
Vue.prototype.axios=axios;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
