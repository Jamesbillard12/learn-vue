<template lang="html">

  <section class="quote-card">
    <slot></slot>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'quote-card',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
.quote-card {
	width: 300px;
	display: inline-block;
	border: 1px solid gray;
	margin: 10px;
	cursor: pointer;
}

p {
	font-size: 20px;
	padding: 10px;
	font-family: cursive;
}
</style>
