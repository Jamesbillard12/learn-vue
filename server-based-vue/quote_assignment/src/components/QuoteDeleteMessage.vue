<template lang="html">

  <section class="quote-delete-message container alert alert-info">
    <div class='row text-row'>
      <div class='col-sm-12 text-wrapper'>
        <p>Info: Click a Quote to delete it</p>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'quote-delete-message',
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
.quote-delete-message {
	margin-top: 20px;
	border-radius: 5px;
}
.text-row {
	position: relative;
	height: 50px;
}
.text-wrapper {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
p {
	height: 10px;
	text-align: center;
}
</style>
