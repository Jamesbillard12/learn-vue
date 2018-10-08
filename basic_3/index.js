new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y: 0
	},
	methods: {
		increase: function(num, e) {
			this.counter += num
		},
		updateCoordinates: function(e) {
			this.x = e.clientX
			this.y = e.clientY
		},
		dummy: function() {
			event.stopPropagation()
		},
		alertMe: function() {
			alert('CHEESE')
		}
	}
})
