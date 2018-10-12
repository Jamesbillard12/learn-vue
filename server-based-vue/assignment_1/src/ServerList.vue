<template lang="html">
  <li class="list-group-item">
    Server #{{ index }}
  </li>
</template>

<script lang="js">
  export default  {
    name: 'server-list',
    props: ['index'],
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
.server-list {
}
</style>
