import IConfig   from './IConfig';
import { config } from 'dotenv';

config();

const { PORT, NODE_ENV, SECRET_KEY } = process.env;
const configuration: IConfig = Object.freeze ({
    port : PORT,
    env: NODE_ENV,
    secretKey: SECRET_KEY
});

export default configuration;