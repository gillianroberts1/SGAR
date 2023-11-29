const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect(
  process.env.MONGODB_URL,

  { useUnifiedTopology: true }
)
  .then((client) => {
    const db = client.db("recipes_project");
    const recipesCollection = db.collection("recipes");
    const recipesRouter = createRouter(recipesCollection);
    app.use("/api/recipes", recipesRouter);
    const favouritesCollection = db.collection("favourites");
    const favouritesRouter = createRouter(favouritesCollection);
    app.use("/api/favourites", favouritesRouter);
  })
  .catch(console.err);

const hostname = "0.0.0.0";
const port = process.env.port || 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
