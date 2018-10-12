<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <keep-alive>
                    <component :is='selectedComponent'>
                        <h1 slot='title'> cheese </h1>
                        <p slot='content'>A wonderful quote</p>
                    </component>
                </keep-alive>
            
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'
export default {
	data: function() {
		return {
			selectedComponent: 'appQuote',
		}
	},
	components: {
		appQuote: Quote,
		appAuthor: Author,
		AppNew: New,
	},
}
</script>

<style scoped>
</style>
