<template lang="html">

  <ul class="nav nav-tabs">
  <router-link tag='li' to='/' active-class='active' exact><a>Home</a></router-link>
 <router-link tag='li' to='/user' active-class='active'><a>User</a></router-link>

  
</ul>

</template>

<script lang="js">
  export default  {
    name: 'header',
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
.header {
}
</style>
