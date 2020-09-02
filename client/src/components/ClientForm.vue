<template>
  <form id="clients-form">
    <h2>Add a Booking</h2>
    <div>
        <label for="client-name">Client Name:</label>
        <input type="text" id="client-name" required>
    </div>
    <div>
        <label for="client-email">Client Name:</label>
        <input type="text" id="client-email" required>
    </div>
    <div>
        <label for="checked-in">Client Name:</label>
        <input type="checkbox" id="checked-in" required>
    </div>
    <input type="submit" value="Book" id="book"/>
</form>
</template>

<script>
export default {

}
</script>

<style>

</style>