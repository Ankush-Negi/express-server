import IConfig   from './IConfig';
import { config } from 'dotenv';

config();

const { PORT, NODE_ENV } = process.env;
const configuration: IConfig = Object.freeze ({
    port : PORT,
    env: NODE_ENV
});

export default configuration;