<template lang="html">

  <section class="server-status">
       <h1>Server Status: {{status}}</h1>
    <button @click='changeStatus'>Change Status</button>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'server-status',
    props: [],
    mounted() {

    },
    data() {
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'normal'
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.server-status {
}
</style>
