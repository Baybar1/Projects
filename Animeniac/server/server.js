const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json(),express.urlencoded({extended:true}));
require('./config/anime.config');
require('./routes/user.routes')(app)
require('./routes/anime.routes')(app)
require('./routes/comments.routes')(app)
require('dotenv').config();
const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.listen(process.env.MY_PORT, () => console.log('Locked and Loaded on port 8000'))