<template lang="html">

  <section class="switched">
   <div 
      id="on"
      @click="switched(true)" 
      :class="{active: value}">On</div>

    <div 
      id="off" 
      @click="switched(false)" 
      :class="{active: !value}">Off</div>
  </section>


</template>

<script lang="js">
  export default  {
    name: 'switch',
    props: ['value'],
    mounted() {

    },
    data() {
      return {
      }
    },
    methods: {
      switched(boolean) {
        this.$emit('input', boolean)
      }

    },
    computed: {

    }
}
</script>

<style scoped>
.switched {
}
#on,
#off {
	width: 40px;
	height: 20px;
	background-color: lightgrey;
	display: inline-block;
	margin: 10px -2px;
	box-sizing: border-box;
	cursor: pointer;
	text-align: center;
}
#on:hover,
#on.active {
	background-color: lightgreen;
}
#off:hover,
#off.active {
	background-color: lightcoral;
}
</style>
