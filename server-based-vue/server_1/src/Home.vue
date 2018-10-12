<template lang="html">

  <section class="home">
    <app-server-status v-for='server in 5'></app-server-status>    
  </section>

</template>

<script lang="js">
import ServerStatus from './ServerStatus.vue'
  export default  {
    name: 'Home',
    props: [],
    components: {
      'app-server-status': ServerStatus
    },
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

<style scoped lang="scss">
.home {
}
</style>
