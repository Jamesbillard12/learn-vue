new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y: 0
	},
	methods: {
		increase: function() {
			this.counter++
		},
		updateCoordinates: function(e) {
			this.x = e.clientX
			this.y = e.clientY
		}
	}
})
