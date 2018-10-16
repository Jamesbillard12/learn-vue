<template lang="html">
  <section class="status-bar container">
    <div class="row">
      <div class='col-12'>
        <h3>Quotes Added</h3>
        <div class="quote-bar">
          <div class="quote-bar text-center" :style='barStyle'>
            <p>{{quoteNumber}}/10</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import {quoteBus} from '../main.js'
  export default  {
    name: 'status-bar',
    props: [],
    mounted() {

    },
    data() {
      return {
        quoteNumber: 0,
        quotes: []
      }
    },
    methods: {

    },
    computed: {
      barStyle: function() {
        return {
          backgroundColor: '#337ab7',
          width: (this.quoteNumber * 10) + '%',
          margin: 0,
          color: 'white'
        }
      }
    },
    watch: {
      quotes: function() {
        this.quoteNumber = this.quotes.length
      }
    },
    created() {
		quoteBus.$on('quotes', quotes => {
			this.quotes = quotes
		})
	},
}
</script>

<style scoped>
.status-bar {
}
h3 {
	font-weight: 700;
}
.quote-bar {
	width: 100%;
	height: 20px;
	border-radius: 10px;
	background-color: #eee;
	margin: auto;
	transition: width 500ms;
}
</style>
