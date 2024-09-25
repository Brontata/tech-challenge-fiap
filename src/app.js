const express = require('express');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const cors = require('cors');
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/posts', postRoutes);
        this.app.use('/users', userRoutes);
    }
}

module.exports = new App().app;