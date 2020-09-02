<template>
  <div>
      <client v-for="(client, index) in clients" :key="index" :client="client"/>
  </div>
</template>

<script>
import Client from './Client';

export default {
    name:'client-grid',
    components:{
        'client': Client
    },
    props: ['clients']

}
</script>

<style>

</style>