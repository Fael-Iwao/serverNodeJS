const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());




app.use("/", require("./src/routes"));

app.listen(3001);
console.log('server listening on port 3001');

