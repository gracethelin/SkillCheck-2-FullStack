require("dotenv").config();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const massive = require("massive");
const express = require("express");
const app = express();
const ctrlInventory = require('./controller')
app.use(express.json());


app.get('/api/inventory', ctrlInventory.showProducts)
app.post('/api/inventory', ctrlInventory.createProduct)
app.delete('/api/inventory/:id', ctrlInventory.deleteProduct)
app.put('/api/inventory/:id', ctrlInventory.updateProduct)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  }).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("--connected--");
    app.listen(SERVER_PORT, () =>
      console.log(`---SERVER ON ${SERVER_PORT} IS WORKING---`)
    );
  });