import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue({
	data: {
		servers: [
			{ id: 1, status: 'Critical' },
			{ id: 2, status: 'Critical' },
			{ id: 3, status: 'Unknown' },
			{ id: 4, status: 'Normal' },
			{ id: 5, status: 'Just Shit' },
		],
	},
})

new Vue({
	el: '#app',
	render: h => h(App),
})
