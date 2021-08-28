const express = require('express');
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');



const app = express();
const port = 3000



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())
let local = true;
// use when starting application locally
let mongoUrl = "mongodb://admin-redes:123@localhost:27017";
mongoUrl = "mongodb://localhost/quotes";
// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin-redes:123@mongodb";


if(!local){
    let mongoUrl = mongoUrlDocker;
}

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "redes-db";


app.get('/quotes', function (req, res) {
    let response = {};
    // Connect to the db
    MongoClient.connect(mongoUrl, mongoClientOptions, async function (err, client) {
      if (err) throw err;
      let db = client.db(databaseName);
      const response = {
          "data" : []
      }
      await db.collection("quotes").find().forEach((doc)=> response.data.push(doc));
      res.send(response);
    });
  });

app.post('/quotes', function (req, res) {
    MongoClient.connect(mongoUrl, mongoClientOptions, function (err, client) {
      if (err) throw err;
      let db = client.db(databaseName);
      let new_object = { "author": req.body.author,
                        "phrase":req.body.phrase };
      db.collection("quotes").insertOne(new_object, function(err, _) {
        if (err) throw err;
        client.close();
        res.send({'message' : 'success'},201)
      });
    });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


