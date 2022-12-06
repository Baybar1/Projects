const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json(),express.urlencoded({extended:true}));
const port = 8000;
require('./config/anime.config');
require('./routes/anime.routes')(app)

app.listen(port, () => console.log('Locked and Loaded on port 8000'))