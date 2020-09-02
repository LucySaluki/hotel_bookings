const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const createRouter = require('./helpers/create_router.js')

const app = express()
app.use(cors)
app.use(parser)

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('hotel_clients')
  const collection = db.collection('bookings')
  const bookingsRouter = createRouter(collection)
  app.use('/api/bookings', bookingsRouter)
})
.catch(console.error)

app.listen(3000, () => {
  console.log(`Listening on port ${ this.address().port }`)
})