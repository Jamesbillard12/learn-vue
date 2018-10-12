import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
Vue.component('server-header', Header)
new Vue({
	el: '#app',
	render: h => h(App),
})
