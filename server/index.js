require('dotenv').config()
const express = require('express')
const app = express()
const gs = require('gradient-string')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, REACT_APP_STRIPE_API_KEY} = process.env
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const clientCtrl = require('./controllers/clientController')

const stripe = require('stripe')(REACT_APP_STRIPE_API_KEY)


app.use(express.json())

const port = SERVER_PORT || 4040

app.use(session({
  resave: false
  ,saveUninitialized: true
  ,cookie: {maxAge: 1000 * 60 * 60}
  ,secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log(gs.mind(`It's alive! The database is alive!`))
}).catch( err => console.log(err))

//api endpoints

//authentication
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)


//client info
app.get('/api/client', clientCtrl.getClients) //done
app.post('/api/client', clientCtrl.newClient) //done
app.put('/api/client/:id', clientCtrl.editClient) //edit existing client
app.delete('/api/client/:id', clientCtrl.deleteClient) //delete client.

//charge stuff?
app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
})

app.listen(port, () => console.log(gs.pastel(`Let's do this, but only on ${port}`)))