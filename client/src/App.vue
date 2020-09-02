<template>
  <div>
    <hotel-header/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name:'app',
  data() {
    return {
      clients:[]
    }
  },
  components: {
    'hotel-header':Header
  }

}
</script>

<style>

</style>