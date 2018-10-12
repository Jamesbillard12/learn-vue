<template lang="html">
  <div class="quote">
    <div class='title'>
      <slot name='title'></slot>
    </div>
    <hr>
    <div>
      <slot name='content'></slot>
    </div>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'quote',
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
div {
	border: 1px solid #ccc;
	box-shadow: 1px 1px 2px black;
	padding: 30px;
	margin: 30px auto;
	text-align: center;
}
h1 {
	color: green;
	font-weight: 700;
}
.title {
	font-style: italic;
}
</style>
