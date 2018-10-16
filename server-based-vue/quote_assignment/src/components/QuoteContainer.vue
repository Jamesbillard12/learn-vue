<template lang="html">

  <section class="quote-container">
  <quote-card  v-for="quote in quotes" >
    <p @click="removeQuote(quote.id)">{{quote.text}}</p>
  </quote-card>
  </section>

</template>

<script lang="js">
import QuoteCard from './QuoteCard.vue'
import {quoteBus} from '../main.js'
  export default  {
    name: 'quote-container',
    props: [],
    components: {
      'quote-card': QuoteCard
    },
    mounted() {

    },
    data() {
      return {
        quotes: []
      }
    },
    methods: {
      removeQuote(id) {
        for(let quote of this.quotes){
          if(quote.id === id) {
            let tempArr = [...this.quotes]
            tempArr.splice(tempArr.indexOf(quote), 1)
            this.quotes = tempArr
            quoteBus.$emit('quotes', tempArr)
          }
        }
      }
    },
    computed: {

    },
    created() {
		quoteBus.$on('quotes', quotes => {
			this.quotes = quotes
		})
	},
}
</script>

<style scoped>
.quote-container {
}
</style>
