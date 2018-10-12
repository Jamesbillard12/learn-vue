<template lang="html">
  <div class="quote">
    <p> NEW COMPONENT </p>
  </div>
</template>

<script lang="js">
export default {
    deactivated() {
        console.log('DEACTIVATE!')
    },
    activated() {
        console.log('ACTIVATE!')
    },
}
  
</script>

<style scoped>
</style>
