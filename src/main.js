import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  mounted() {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  },
  render: h => h(App)
}).$mount('#app')
