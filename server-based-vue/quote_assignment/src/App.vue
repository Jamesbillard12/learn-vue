<template>
    <div class="container">
        <status-bar></status-bar>
        <quote-input></quote-input>
        <quote-container></quote-container>
        <quote-delete-message></quote-delete-message>
    </div>
</template>

<script>
import StatusBar from './components/StatusBar.vue'
import QuoteInput from './components/QuoteInput.vue'
import QuoteContainer from './components/QuoteContainer.vue'
import QuoteDeleteMessage from './components/QuoteDeleteMessage.vue'

export default {
	components: {
		'status-bar': StatusBar,
		'quote-input': QuoteInput,
		'quote-container': QuoteContainer,
		'quote-delete-message': QuoteDeleteMessage,
	},
}
</script>

<style>
</style>
