
// Web Application Server
const express = require('express');
const app = express();
const port = 4500;

// Mongo DB
let db;
let collection;

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/primerodb', {useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if(err) return console.log(err);
    console.log('Connected to primerodb..');
    db = client.db('primerodb');
    collection = db.collection('empleado');
});

app.listen(4500, function(){
    console.log('api listening on ' + port);
});

app.get('/', (req, res) => {
    res.send("Hellow World");
});

app.get('/empleado', (req, res) => {
    db.collection('empleado').find().toArray()
    .then(results => {
        res.json(results);
    }).catch(error => console.log(error));
});

app.post('/empleado', (req, res) => {
    collection.insertOne(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(error => console.error(error))
});

app.put('/empleado/:id', (req, res) => {
    collection.findOneAndUpdate(
        { name: req.params.id },
        {
            $set: {
                name: req.body.name,
                price: req.body.price
            }
        },
        {
            upsert: true
        }
    ).then(result => { res.json(result) })
        .catch(error => console.error(error))
});

app.delete('/empleado/:id', (req, res) => {
    collection.deleteOne(
        { name: req.params.id }
    )
        .then(result => {
            res.json(result)
        })
        .catch(error => console.error(error))
})