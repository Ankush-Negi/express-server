"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const errorHandler_1 = require("./libs/routes/errorHandler");
const notFoundRoute_1 = require("./libs/routes/notFoundRoute");
const router_1 = require("./router");
const Database_1 = require("./libs/Database");
const swagger_1 = require("./libs/swagger");
const swaggerUi = require("swagger-ui-express");
class Server {
    constructor(config) {
        this.config = config;
        this.bootstrap = () => {
            this.initBodyParser();
            this.setupRoutes();
            return this;
        };
        this.run = () => {
            const { app, config: { port, mongoURL } } = this;
            Database_1.default.open(mongoURL).then(() => {
                app.listen(port, err => {
                    if (err) {
                        throw err;
                    }
                    console.log('App is running successfully at ', port);
                });
                app.use(notFoundRoute_1.default);
                app.use(errorHandler_1.default);
                return this;
            });
        };
        this.initBodyParser = () => {
            const { app } = this;
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            return this;
        };
        this.setupRoutes = () => {
            const { app } = this;
            app.use('/health-check', (req, res) => {
                res.send('I am OK.');
            });
            app.use('/api', router_1.default);
            app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger_1.default));
            return this;
        };
        this.app = express();
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map