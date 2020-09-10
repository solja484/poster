let express = require('express');
let server = express();
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/poster";
let bodyParser = require('body-parser');
server.set("view engine", "pug");
server.set('views', './views');

server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({extended: true}));

let db;

mongoClient.connect(url, {useUnifiedTopology: true},(err, client) => {
    if (err) return console.log(err);
    db = client.db('poster');
    server.listen(3000, () => {
        console.log('listening on 3000')
    })
});

server.get('/', (req, res) => {
    res.render('/client.pug');
});


server.get('/admin', (req, res) => {
    db.collection('posts').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.render('/admin.pug', {data: result})
    })
});
server.get('/posts', (req,res) => {
    db.collection('posts').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.json({blogs: result});
    })
});

server.post('/posts', (req, res) => {
    db.collection('posts').insertOne(req.body).then(
        (result, err) => {
            if (err) return console.log(err);
            console.log('saved to database');
            res.redirect('/admin');
        })
});
