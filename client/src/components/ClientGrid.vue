<template>
  <div id="client-grid">
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
#client-grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h2 {
	padding: 0;
	margin: 0;
}
</style>