new Vue({
	el: '#exercise',
	data: {
		value: ''
	},
	methods: {
		alertFn: function() {
			alert('THIS IS AN ALERT')
		},
		storeValue: function(e) {
			this.value = e.target.value
		},
		storeValueOnEnter: function(e) {
			this.value = e.target.value
		}
	}
})
