const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors')
const stripe = require('stripe')('sk_test_51I8A2cLW6jardt62gcSLEdtAXQrnXjrW5BedtIQwfSBL9uz6aZ1tRRc9opp5ZEJJjD49PVt6GlXCzkZQds4GjSwh00uQpnhThU')

//API

//App config
const app = express();


//Middleware
app.use(cors({
  origin: true
}));
app.use(express.json());

//Api routes
app.get('/', (request, response) => response.status(200).send('Hello World!'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log('PAYMENT REQUEST RECIEVED FOR THIS AMOUNT>>>>>', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency e.g cents for usd
    currency: "usd"
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

//Listen command
exports.api = functions.https.onRequest(app) //To run live

//To run the backend locally bdefore deploying run 'firebase emulators:start' and DO NOT CLOSE!!!
//EXAMPLE ENDPOINT = http://localhost:5001/clone-bbef4/us-central1/api gotten from running firebase emulators:start