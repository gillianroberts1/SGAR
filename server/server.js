const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => { 
        const db = client.db('recipes_project');
        const recipesCollection = db.collection('recipes');
        const recipesRouter = createRouter(recipesCollection);
        app.use('/api/recipes', recipesRouter);
        const favouritesCollection = db.collection('favourites')
        const favouritesRouter = createRouter(favouritesCollection)
        app.use('/api/favourites', favouritesRouter);

    })
    .catch(console.err);

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
