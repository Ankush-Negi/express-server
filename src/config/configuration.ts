import IConfig from './IConfig';
import {config} from 'dotenv';

config();

const configuration: IConfig = {
    port : process.env.PORT,
    env: process.env.NODE_ENV
}
Object.freeze(config);

export default configuration;