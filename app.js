const express = require('express');
//const cors = require('cors');
const postsRouter = require('./routes/posts');

const app = express();

app.use(express.json());
//app.use(cors());
app.use('/posts', postsRouter);

module.exports = app;