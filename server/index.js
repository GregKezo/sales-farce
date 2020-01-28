require('dotenv').config({path: __dirname + '/../.env' })
const express = require('express')
const app = express()
const gs = require('gradient-string')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, REACT_APP_STRIPE_KEY, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const clientCtrl = require('./controllers/clientController')
const payCtrl = require('./controllers/payController')
const authCheck = require('./middleware/authCheck')
const initSession = require('./middleware/initSession')

const aws = require('aws-sdk')




// const stripe = require('stripe')(REACT_APP_STRIPE_API_KEY)


app.use(express.json())

const port = SERVER_PORT || 4440

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

app.use(initSession)

//api endpoints

//authentication
app.post('/api/signup', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.post('/api/logout', authCtrl.logout)
app.get('/api/user', authCheck, authCtrl.getUser)


//client info
app.get('/api/client', clientCtrl.getClients) //done
app.get('/api/client/:clientid', clientCtrl.getClient)
app.post('/api/client', clientCtrl.newClient) //done
app.put('/api/client/:clientid', clientCtrl.editClient) //edit existing client
app.delete('/api/client/:clientid', clientCtrl.deleteClient) //delete client.

//charge stuff?
app.post('/api/payment', payCtrl.pay)

//aws endpoints

app.get('/api/signs3', (req, res) => {
  aws.config = {
    region: 'us-west-1',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };

const s3 = new aws.S3();
const fileName = req.query['file-name'];
const fileType = req.query['file-type'];
const s3Params = {
  Bucket: S3_BUCKET,
  Key: fileName,
  Expires: 60,
  ContentType: fileType,
  ACL: 'public-read',
};

s3.getSignedUrl('putObject', s3Params, (err, data) => {
  if (err) {
    console.log(err);
    return res.end();
  }
  const returnData = {
    signedRequest: data,
    url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
  };

  return res.send(returnData);
  });
});

app.listen(port, () => console.log(gs.pastel(`Let's do this, but only on ${port}`)))