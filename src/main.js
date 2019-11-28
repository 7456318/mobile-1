import Vue from 'vue'
import App from '@/App'

new Vue({

  render: creatElement => creatElement(App)

}).$mount('#app')
