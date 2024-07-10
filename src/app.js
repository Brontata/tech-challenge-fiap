const express = require('express');
const postRoutes = require('./routes/posts');
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/posts', postRoutes);
    }
}

module.exports = new App().app;