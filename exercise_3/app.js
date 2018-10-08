new Vue({
	el: '#exercise',
	data: {
		value: 0
	},
	watch: {
		value: function() {
			let vi = this
			setTimeout(() => {
				vi.value = 0
			}, 5000)
		}
	}
})
