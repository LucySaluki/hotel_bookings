<template>
  <div>
    <hotel-header/>
    <client-form/>
    <client-grid :clients="clients"/>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import Header from '@/components/Header';
import ClientForm from '@/components/ClientForm';
import ClientGrid from '@/components/ClientGrid';
import ClientService from '@/services/ClientService.js'

export default {
  name:'app',
  data() {
    return {
      clients:[],

    }
  },
  components: {
    'hotel-header':Header,
    'client-form': ClientForm,
    'client-grid': ClientGrid
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('booking-added',(payload) => {
      ClientService.postBooking(payload)
      .then(client => this.clients.push(client));
    }),
    eventBus.$on('booking-deleted',(id) => {
      ClientService.deleteBooking(id)
      .then(() => {
        const index = this.clients.findIndex(client => client._id === id)
        this.clients.splice(index,1);
      })
    }),
    eventBus.$on('client-selected', (client) =>{
      this.toggleCheckIn(client)
    })
    
  },
  methods:{
    fetchBookings() {
      ClientService.getBookings()
      .then(clients => this.clients = clients);
    },
    toggleCheckIn(client) {
      const newClient = {}
       newClient.checked_in = client.checked_in ? false:true
       ClientService.updateBooking(client._id, newClient)
       .then((updateBooking) => {
         const index = this.clients.findIndex(client => client._id === updateBooking._id);
         this.clients.splice(index,1, updateBooking);
       });
    }
  }

}
</script>

<style>
body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color:cadetblue;
}
</style>