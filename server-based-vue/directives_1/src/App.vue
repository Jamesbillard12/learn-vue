<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built in Directives</h1>
        <p v-text="'some text'"></p>
        <p v-html="'<strong>BOLD</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition-group
          appear
          enter-class
          enter-active-class="animated bounce"
        >
          <h1 key="1" v-myon:click="changeText">{{text}}</h1>
          <p
            key="2"
            v-highlight:background.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
          >Color This</p>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import highlight from './highlight.directive.js'
import myon from './myon.directive.js'
export default {
	data() {
		return {
			text: 'Custom Directives',
		}
	},
	methods: {
		changeText() {
			this.text = 'Click Directive'
		},
	},
}
</script>

<style>
</style>
