<template>
  <form id="clients-form" v-on:submit.prevent="handleBooking">
    <h2>Add a Booking</h2>
    <div>
        <label for="name">Client Name:</label>
        <input type="text" id="name" v-model="name" required>
    </div>
    <div>
        <label for="email">Client Name:</label>
        <input type="text" id="email" v-model="email" required>
    </div>
    <div>
        <label for="checked_in">Client Name:</label>
        <input type="checkbox" id="checked_in" v-model="checked_in" required>
    </div>
    <input type="submit" value="Book" id="book"/>
</form>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
    name:'client-form',
    data() {
        return {
            name: "",
            email:"",
            checked_in: false
        }
    },
    methods: {
        handleBooking() {
            const payload ={
                name: this.name,
                email: this.email,
                checked_in: this.checked_in
            }
            eventBus.$emit('booking-added',payload);
            this.name = "",
            this.email = "",
            this.checked_in = false

        }
    }

}
</script>

<style>

</style>