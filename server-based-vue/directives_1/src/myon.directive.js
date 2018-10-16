import Vue from 'vue'

Vue.directive('myon', {
	bind(el, binding, vnode) {
		const type = binding.arg
		const fn = binding.value
		el.addEventListener(type, fn)
	},
	// When the bound element is inserted into the DOM...
	inserted(el) {
		// el.focus();
	},
	update() {},
	unbind() {},
})
