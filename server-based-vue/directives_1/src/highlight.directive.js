import Vue from 'vue'

Vue.directive('highlight', {
	bind(el, binding, vnode) {
		// el.style.backgroundColor = 'green'
		// el.style.backgroundColor = binding.value
		var delay = 0
		if (binding.modifiers['delayed']) {
			delay = 3000
		}
		if (binding.modifiers['blink']) {
			let mainColor = binding.value.mainColor
			let secondColor = binding.value.secondColor
			let currentColor = mainColor
			setTimeout(() => {
				setInterval(() => {
					currentColor == secondColor
						? (currentColor = mainColor)
						: (currentColor = secondColor)
					if (binding.arg == 'background') {
						el.style.backgroundColor = currentColor
					} else {
						el.style.color = currentColor
					}
				}, binding.value.delay)
			}, delay)
		} else {
			setTimeout(() => {
				if (binding.arg == 'background') {
					el.style.backgroundColor = binding.value.mainColor
				} else {
					el.style.color = binding.value.mainColor
				}
			}, delay)
		}
	},
	// When the bound element is inserted into the DOM...
	inserted(el) {
		// el.focus();
	},
	update() {},
	unbind() {},
})
