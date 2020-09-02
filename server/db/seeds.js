const { Db } = require("mongodb");

use hotel_clients;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Rasputin",
        email: "rasputinthecat@gmail.com",
        checked_in: false
    },
    {
        name: "Sputnik",
        email: "notthatsputnik@yahoo.co.uk",
        checked_in: false
    },
    {
        name: "Sonny",
        email: "ilikemyeggsmesideup@gmail.com",
        checked_in: false
    }
])