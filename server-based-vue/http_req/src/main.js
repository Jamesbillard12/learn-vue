import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource'

Vue.use(VueResouce)
Vue.http.options.root = 'https://vuejs-http-c8c43.firebaseio.com/data.json'
Vue.http.interceptors.push((req, next) => {
	console.log(req)
	if (req.method == 'POST') req.method = 'PUT'
	next()
})

new Vue({
	el: '#app',
	render: h => h(App),
})
