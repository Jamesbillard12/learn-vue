<template lang="html">

  <section class="quote-input container">
    <div class='row'>
      <div class='col-sm-2'></div>
      <div class='col-sm-8'>
        <label for="text-area">Quotation</label>
        <textarea :value='tempQuote' @change='handleTextChange' id="text-area"></textarea>
        <div class="button-wrapper">
          <button @click='handleSubmit' class="btn btn-primary">Add Quote</button>
        </div>
      </div>
      <div class='col-sm-2'></div>
    </div>
  </section>

</template>

<script lang="js">
import {quoteBus} from '../main.js'
import uuid from 'uuid/v4'
  export default  {
    name: 'quote-input',
    props: [],
    mounted() {

    },
    data() {
      return {
        quotes: [],
        tempQuote: ''
      }
    },
    methods: {
      handleTextChange(e) {
        this.tempQuote = e.target.value
      },
      handleSubmit() {
        if(this.tempQuote != '' && this.quotes.length < 10) {
          let tempObj = {id: uuid(), text: this.tempQuote}
          let tempArr = [...this.quotes]
          tempArr.push(tempObj)
          this.quotes = tempArr
          quoteBus.$emit('quotes', tempArr)
          this.tempQuote =''
        }
      }
    },
    computed: {

    },
    created() {
		quoteBus.$on('quotes', quotes => {
			this.quotes = quotes
		})
	}
}
</script>

<style scoped>
.quote-input {
	padding-top: 30px;
}
textarea {
	width: 100% !important;
	height: 100px;
	border-radius: 5px;
}
button {
	margin-top: 15px;
}
.button-wrapper {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	align-items: center;
}
</style>
