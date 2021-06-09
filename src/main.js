import Vue from 'vue'
import App from './App.vue'

// import  password  from "../lib/passwordComponent.umd.min";
// import '../lib/passwordComponent.css'

import('./packages/index').then(model=>{
  console.log(model);
})



// Vue.use(password)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
