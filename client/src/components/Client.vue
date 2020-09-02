<template>
    <div class="booking">
        <h3>{{client.name}}</h3>
        <p>{{client.email}}</p>
        <p v-if="client.checked_in">Checked in: &#10004</p>
        <p v-else>Checked in: &#10008</p>

        <button id="delete-button" v-on:click="deleteBooking(client._id)">Delete Booking</button>
        <button id="toggle-button" v-on:click="toggleCheckedin(client._id)">Toggle Check In</button>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'client',
    props: ['client'],
    methods:{
        deleteBooking(id) {
      eventBus.$emit('booking-deleted', id);
        },
      
    toggleCheckedin(id) {
      eventBus.$emit('client-selected', this.client)
    }
    }
}
</script>

<style>
.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}
button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
  margin-right:20px;
}
#delete-button{
	background: #F55536;
}

#toggle-button{
	background:cornflowerblue;
}
</style>