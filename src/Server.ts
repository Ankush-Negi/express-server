import IConfig from './config/IConfig';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import errHandler from './libs/routes/errorHandler';
import notFoundRoute from './libs/routes/notFoundRoute';
import router from './router';

export default class Server {

    app: express.Express;
    constructor( private config: IConfig) {
        this.app = express();
    }

    bootstrap = () => {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    run = () => {
        const{app, config: { port , env } } = this;
        app.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log('App is running successfully at ', port, env);
        });
        app.use(notFoundRoute);
        app.use(errHandler);
        return this;
    }

    initBodyParser = () => {
        const {app} = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        return this;
    }

    setupRoutes = () => {
        const {app} = this;
        app.use('/health-check', ( req, res) => {
            res.send('I am OK.');
        });
        app.use('/api', router);
        return this;

    }
}