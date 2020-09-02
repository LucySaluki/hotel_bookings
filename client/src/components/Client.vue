<template>
    <div class="booking">
        <h3>{{client.name}}</h3>
        <p>{{client.email}}</p>
        <p>Checked in {{client.checked_in}}</p>

        <button id="delete-button" v-on:click="deleteBooking(client._id)">Delete Booking</button>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'client',
    props: ['client'],
    methods:{
        deleteSBooking(id) {
      eventBus.$emit('booking-deleted', id);
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
</style>