new Vue({
	el: '#app',
	data: {
		title: 'hello world!',
		link: 'https://www.google.com',
		finishedLink: '<a href="https://google.com">google</a>'
	},
	methods: {
		sayHello: function() {
			this.title = 'Hello'
			return this.title
		}
	}
})
