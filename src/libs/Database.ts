import * as mongoose from 'mongoose';
import seedData from './seedData';

export default class Database {
    static open = (mongoURL: string) => {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(mongoURL, {
                    useNewUrlParser: true, useUnifiedTopology: true
                },
                    err => {
                        if (err) {
                            reject();
                            console.log('Error in connection with mongooseDB');
                        }
                        else {
                            resolve();
                            seedData();
                            console.log('Successful connection with mongooseDB');
                        }
                    })
                .catch(error => console.log(error));
        });
    }
    static disconnect = () => {
        mongoose.connection.close();
        console.log('Database Disconnected');
    }
}