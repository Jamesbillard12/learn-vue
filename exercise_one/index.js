new Vue({
	el: '#exercise',
	data: {
		name: 'James',
		age: 32,
		randomImg: 'https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg'
	},
	methods: {
		randomFloat: function() {
			return Math.random()
		}
	}
})
